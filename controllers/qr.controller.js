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
  let msgb = req.body.msgb;
  let msgc = req.body.msgc;

  console.log(req.body);

  switch (opt) {
    case "url": // URL QR Generator
      res.send(await qrGen.genUrl(msg));
      break;
    case "tel":
      res.send(await qrGen.genTelnumber(msg)); // Telephone number QR Generator
      break;
    case "facetime":
      res.send(await qrGen.genFacetime(msg)); // Facetime call QR Generator
      break;
    case "facetimeaudio":
      res.send(await qrGen.genFacetimeAudio(msg)); //Facetime Audio call QR Generator
      break;
    case "sms":
      res.send(await qrGen.genSms(msg, msgb)); //SMS Message QR Generator
      break;
    case "email":
      res.send(await qrGen.genEmail(msg, msgb, msgc)); //Email Message QR Generator
      break;
    default:
      res.send("Error 503");
  }

  /*
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
  */
  res.end();
}

module.exports = {
  sendIndex,
  sendQr,
};
