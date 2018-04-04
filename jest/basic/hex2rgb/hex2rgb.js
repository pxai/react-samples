function hexStringToRGB(hexString) {
  const r = parseInt(hexString.substr(1,2), 16);
  const g = parseInt(hexString.substr(3,2), 16);
  const b = parseInt(hexString.substr(5,2), 16);
  return {r,g,b};
}



module.exports = hexStringToRGB;
