# Crawler Robot

Crawler Robot application using [Node.js](https://github.com/nodejs/node) and [Puppeteer](https://github.com/GoogleChrome/puppeteer) library.

# Description

Crawler Robot that returns a list of available rooms at the Hotel Village Le Canton, by passing a checkin and checkout date in the body of the HTTP POST request.

## Setup project and run

Run in your terminal, on the repository directory.

To install the dependencies:

```
npm install
```

To run the server:

```
npm start
```

## Setup required

- Node.js v8.1.3
- npm v5.3.0

# Test Case Example

Example using Insomnia (Could be Postman or another REST Client).

![](https://i.imgur.com/IfzFheG.png)

Put the body of the requisition as JSON. Pass an object with a string date format (dd/MM/yyyy) in the field checkin and checkout. Select the HTTP Method as POST. The server runs at the local port 3000, so the API to check the available rooms between the two dates is http://localhost:3000/buscar. Send the request and wait for the response.

## Author

Diógenes Zilli - [dogezilli (GitHub)](https://github.com/dogezilli)

## License

[MIT](https://choosealicense.com/licenses/mit/)
