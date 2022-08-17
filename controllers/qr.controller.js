const qrGen = require("../qrcode/gen.qrcode");

function sendIndex(req, res) {
  res.render("index.ejs");
}

async function sendQr(req, res) {
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
  console.log(req.body)

  if (
    opt === "url" ||
    opt === "tel" ||
    opt === "facetime" ||
    opt === "facetimeaudio"
  ) {
    console.log("First field");
    if (opt === "url") {
        res.send(await qrGen.genUrl(msg));
    } else if (opt === "tel") {
        res.send(await qrGen.genTelnumber(msg));
    }
  } else if (opt === "email" || opt === "sms" || opt === "wifi") {
    console.log("Second field");
  } else if (opt === "geo" || opt === "event") {
    console.log("Third field");
  }

  res.end();
}

module.exports = {
  sendIndex,
  sendQr,
};
