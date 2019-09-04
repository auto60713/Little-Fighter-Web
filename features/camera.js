
// 攝影機
lf2.camera = () => {
  if (!lf2.passOnly(['battleMode', 'shaoguanMode'], ['all'])) return;

  if (lf2.scenes.character[0]) {

    // 距離畫面邊界多少 將拖動攝影機
    var distance = 250;

    var mx = lf2.scenes.character[0].setting.x;
    var cx = lf2.cameraPos[0];

    // 攝影機往右跑
    if (mx - cx >= 800 - distance && mx < lf2.mapLimit.x - distance) {
      if (lf2.cameraPos[0] < mx - (800 - distance))
        lf2.cameraPos[0] += (mx - (800 - distance) - lf2.cameraPos[0]) * 0.3;
    }
    // 攝影機往左跑
    if (mx - cx < distance && mx > distance) {
      if (lf2.cameraPos[0] > mx - distance)
        lf2.cameraPos[0] -= (lf2.cameraPos[0] - (mx - distance)) * 0.3;
    }

  } else lf2.cameraPos[0] = 0;
}
