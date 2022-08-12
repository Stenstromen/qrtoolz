const qrGen = require("../qrcode/gen.qrcode");

function sendIndex(req, res) {
  res.render("index.ejs");
}

function sendQr(req, res) {
  /*
  genUrl (one field),
  genEmail (two fields),
  genTelnumber (one field),
  genvCard (to many fields),
  genSms (two fields),
  genFacetime (one field),
  genFacetimeAudio (one field),
  genGeographic (three fields),
  genCalEvent (three fields),
  genWifi (two fields),
  */

  let opt = req.body.opt;
  let msg = req.body.msg;

  console.log(opt);
  console.log(msg);
  
  if (opt === "url"||"tel"||"facetime"||"facetimeaudio") {
    console.log("First field");
  } else if (opt === "email"||"sms"||"wifi") {
    console.log("Second field");
  } else if (opt === "geo"||"event") {
    console.log("Third field");
  }
  
  res.end();
}

module.exports = {
  sendIndex,
  sendQr,
};
