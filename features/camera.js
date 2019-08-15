
// 攝影機
lf2.camera = () => {

  // 右邊拖動攝影機
  var rightDistance = 550;
  // 左邊拖動攝影機
  var leftDistance = 170;
  var mx = lf2.mainCharacter.x;
  var cx = lf2.cameraPos[0];

  if (mx - cx >= rightDistance && mx < lf2.mainMap.limit.x - (730 - rightDistance)) {
    lf2.cameraPos[0] = mx - rightDistance;
  }
  if (mx - cx < leftDistance && mx > leftDistance) {
    lf2.cameraPos[0] = mx - leftDistance;
  }

}