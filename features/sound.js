
// 音效
lf2.sound = (setting, frame) => {
  if (frame.sound && !setting.alreadySound) {
    var horn = new Audio('sound/' + frame.sound);
    horn.volume = 0.3;
    horn.play();

    setting.alreadySound = true;
  }
}

