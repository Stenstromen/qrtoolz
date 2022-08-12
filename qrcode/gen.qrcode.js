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

async function genTelnumber(num) {
  // tel:+466666666666
}

async function genvCard(firstn, lastn, fulln, title, email, emailtype, tel, teltype, url, urltype) {
/*
BEGIN:VCARD
VERSION:3.0
N:Owen;Sean;;;
FN:Sean Owen
TITLE:Software Engineer
TEL;TYPE=cell:(123) 555-5832
EMAIL;TYPE=INTERNET;TYPE=WORK;TYPE=PREF:srowen@google.com
URL;TYPE=Homepage:https://example.com
END:VCARD
*/
}



module.exports = qrcodeGen;