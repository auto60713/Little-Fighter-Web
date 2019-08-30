
// 音效
lf2.sound = (fileName) => {
  if (fileName) {
    var horn = new Audio('sound/' + fileName);
    horn.volume = 0.4;
    horn.play();
  }
}

