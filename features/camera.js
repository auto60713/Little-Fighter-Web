
// 攝影機
lf2.camera = () => {
  if (lf2.mainCharacter) {

    // 距離畫面邊界多少 將拖動攝影機
    var distance = 170;

    var mx = lf2.mainCharacter.x;
    var cx = lf2.cameraPos[0];

    // 攝影機往右跑
    if (mx - cx >= 800 - distance && mx < lf2.mainMap.limit.x - distance) {
      lf2.cameraPos[0] = mx - (800 - distance);
    }
    // 攝影機往左跑
    if (mx - cx < distance && mx > distance) {
      lf2.cameraPos[0] = mx - distance;
    }

  } else lf2.cameraPos[0] = 0;
}
