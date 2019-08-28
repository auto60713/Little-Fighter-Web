
// 音效
lf2.sound = (frame) => {
  if (frame.sound) {
    var horn = new Audio('sound/'+frame.sound);
    horn.volume = 0.3; 
    horn.play();
  }
}

