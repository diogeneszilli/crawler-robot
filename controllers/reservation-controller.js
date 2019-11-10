const puppeteer = require("puppeteer");

const regex = /\//g;

class ReservationController {
  async findBetweenDate(req, res) {
    try {
      const checkin = req.body.checkin.replace(regex, "");
      const checkout = req.body.checkout.replace(regex, "");

      let url = `https://myreservations.omnibees.com/default.aspx?q=5462&version=MyReservation&sid=2f8a7b33-473b-4f45-b16e-d4b90c8600e2#/&diff=false&CheckIn=${checkin}&CheckOut=${checkout}&Code=&group_code=&loyality_card=&NRooms=1&ad=1&ch=0&ag=-`;

      const browser = await puppeteer.launch({ headless: true });
      const page = await browser.newPage();
      await page.setViewport({ width: 1920, height: 926 });
      await page.goto(url, {waitUntil: 'networkidle0'});

      let result = await page.evaluate(() => {
        const rooms = [];
        document.querySelectorAll("td > .roomExcerpt").forEach(room => {
          let item = {};
          let imagens = [];
          item.nome = room.querySelector("h5 > a").textContent;
          item.descricao = room.querySelector("p > a").textContent;
          item.preco = room.querySelector("h6").textContent;

          room.querySelectorAll(".slide").forEach(imagem => {
            let img = {};
            img.url = imagem.getElementsByTagName("img")[0].src;
            imagens.push(img);
          });

          item.imagens = imagens;
          rooms.push(item);
        });
        return rooms;
      });

      const json = {};
      json.data = result;
      json.total = result.length;

      return res.status(200).json(json);
    } catch (err) {
      console.log("Erro na requisição. ", err);
      return res.status(422).json(err);
    }
  }
}

module.exports = new ReservationController();
