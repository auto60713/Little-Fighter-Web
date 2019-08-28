
// 音效
lf2.sound = (setting, frame, type) => {
  if (frame.sound) {
    var horn = new Audio('sound/'+frame.sound);
    horn.volume = 0.3; 
    horn.play();
  }
}

