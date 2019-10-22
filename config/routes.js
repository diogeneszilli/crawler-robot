const express = require("express");
const routes = express.Router();

const ReservationController = require("../controllers/reservation-controller");

routes.post("/buscar", ReservationController.findBetweenDate);

module.exports = routes;
