const QRCode = require("qrcode");

const opts = {
  errorCorrectionLevel: "H",
  type: "terminal",
  quality: 0.95,
  margin: 1,
  color: {
    dark: "#008000",
    light: "#d3d3d3",
  },
};

async function qrcodeGen(link) {
    const qrImage = await QRCode.toDataURL(link, opts)
    return qrImage;
};

async function genUrl(link) {
  //URLTO: google.com
  const genUrl = await QRCode.toDataURL(link, opts);
  return genUrl;
}

async function genEmail(address, subject, body) {
  // mailto:ADDRESS?subject=SUBJECT&body=BODY
}

module.exports = qrcodeGen;