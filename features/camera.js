
// 攝影機
lf2.camera = () => {
  if (!lf2.passOnly(['battleMode', 'shaoguanMode'], ['all'], null)) return;

  if (lf2.scenes.character[0]) {

    // 距離畫面邊界多少 將拖動攝影機
    var distance = 170;

    var mx = lf2.scenes.character[0].x;
    var cx = lf2.cameraPos[0];

    // 攝影機往右跑
    if (mx - cx >= 800 - distance && mx < lf2.mapLimit.x - distance) {
      lf2.cameraPos[0] = mx - (800 - distance);
    }
    // 攝影機往左跑
    if (mx - cx < distance && mx > distance) {
      lf2.cameraPos[0] = mx - distance;
    }

  } else lf2.cameraPos[0] = 0;
}
