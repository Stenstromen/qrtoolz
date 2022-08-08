const express = require("express");

const qrController = require("../controllers/qr.controller");
const qrRouter = express.Router();

qrRouter.get("/", qrController.sendIndex);
qrRouter.post("/", qrController.sendQr);

module.exports = qrRouter;