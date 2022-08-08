const qrGen = require("../qrcode/gen.qrcode");

function sendIndex(req, res) {
    res.render("index.ejs");
}

function sendQr(req, res) {
    res.end();
}

module.exports = {
    sendIndex,
    sendQr,
}