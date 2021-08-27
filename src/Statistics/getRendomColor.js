function getRendomColor() {
  var r = function () {
    return Math.floor(Math.random() * 256);
  };
  return "rgb(" + r() + "," + r() + "," + r() + ")";
}

export default getRendomColor;
