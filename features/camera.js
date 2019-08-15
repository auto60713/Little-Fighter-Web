
// 攝影機
function camera() {

  // 右邊拖動攝影機
  var rightDistance = 550;
  // 左邊拖動攝影機
  var leftDistance = 170;
  var mx = mainCharacter.x;
  var cx = window.cameraPos[0];

  if (mx - cx >= rightDistance && mx < mainMap.limit.x - (730 - rightDistance)) {
    window.cameraPos[0] = mx - rightDistance;
  }
  if (mx - cx < leftDistance && mx > leftDistance) {
    window.cameraPos[0] = mx - leftDistance;
  }

}