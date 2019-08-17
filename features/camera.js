
// 攝影機
lf2.camera = () => {
  if (lf2.mainCharacter) {

    // 右邊拖動攝影機
    var rightDistance = 550;
    // 左邊拖動攝影機
    var leftDistance = 170;

    var mx = lf2.mainCharacter.x;
    var cx = lf2.cameraPos[0];

    // 攝影機往右跑
    // 角色跑到距離左邊XXX距離 && 離右邊界很遠
    if (mx - cx >= rightDistance && mx < lf2.mainMap.limit.x - (800 - rightDistance)) {
      lf2.cameraPos[0] = mx - rightDistance;
    }
     // 攝影機往左跑
    if (mx - cx < leftDistance && mx > leftDistance) {
      lf2.cameraPos[0] = mx - leftDistance;
    }

  }

}
