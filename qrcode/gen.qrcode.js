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
  const qrImage = await QRCode.toDataURL(link, opts);
  return qrImage;
}

async function genUrl(link) {
  //URLTO: google.com
  const urlTo = `URLTO:${link}`;
  const genUrl = await QRCode.toDataURL(link, opts);
  return genUrl;
}

async function genEmail(address, subject, body) {
  // mailto:ADDRESS?subject=SUBJECT&body=BODY
  // Subject and body in urlencode
  const email = `mailto:${address}?subject=${subject}&body=${body}`;
  const genEmail = await QRCode.toDataURL(email, opts);
  return genEmail;
}

async function genTelnumber(num) {
  // tel:+466666666666
  const tel = `tel:${num}`;
  const genTelnumber = await QRCode.toDataURL(tel, opts);
  return genTelnumber;
}

async function genvCard(
  firstn,
  lastn,
  fulln,
  title,
  email,
  emailtype,
  tel,
  teltype,
  url,
  urltype
) {
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

async function genSms(num, msg) {
  /*
    Message in urlencode format
    sms:6666666666:message
  */
  const sms = `sms:${num}:${msg}`;
  const genSms = await QRCode.toDataURL(sms, opts);
  return genSms;
}

async function genFacetime(numoremail) {
  /*
    facetime:6666666666 || email@example.com
  */
  const facetime = `facetime:${numoremail}`;
  const genFacetime = await QRCode.toDataURL(facetime, opts);
  return genFacetime;
}

async function genFacetimeAudio(numoremail) {
  /*
    facetime-audio:6666666666 || email@example.com
  */
  const facetime = `facetime-audio:${numoremail}`;
  const genFacetime = await QRCode.toDataURL(facetime, opts);
  return genFacetime;
}

async function genGeographic(latitude, longitude, altitude) {
  /*
    geo:latitude,longitude,altitude
  */
  const geo = `geo:${latitude},${longitude},${altitude}`;
  const genGeographic = await QRCode.toDataURL(geo, opts);
  return genGeographic;
}

async function genCalEvent(summary, startdate, enddate) {
  /*

    Summary in URLEncode
    Date in ?

    BEGIN:VEVENT
    SUMMARY:Summer+Vacation!
    DTSTART:20180601T070000Z
    DTEND:20180831T070000Z
    END:VEVENT
  */
  const event = `
  BEGIN:VEVENT
  SUMMARY:${summary}
  DTSTART:${startdate}
  DTEND:${enddate}
  END:VEVENT
 `;
  const genCalEvent = await QRCode.toDataURL(event, opts);
  return genCalEvent;
}

async function genWifi(ssid, password) {
  /*
    With password:
    WIFI:T:WPA;S:MyNetworkSSID;P:MyPassword

    Without password:
    WIFI:T:nopass;S:MyNetworkSSID
  */

  if (!password) {
    const nopasswd = `WIFI:T:nopass;S:${ssid}`;
    const genWifiNoPasswd = await QRCode.toDataURL(nopasswd, opts);
    return genWifiNoPasswd;
  } else {
    const passwd = `WIFI:T:WPA;S:${ssid};P:${password}`;
    const genWifiPasswd = await QRCode.toDataURL(passwd, opts);
    return genWifiPasswd;
  }
}

module.exports = {
  genUrl,
  genEmail,
  genTelnumber,
  genvCard,
  genSms,
  genFacetime,
  genFacetimeAudio,
  genGeographic,
  genCalEvent,
  genWifi,
};
