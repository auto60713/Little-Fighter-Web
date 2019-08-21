
// 打電腦
lf2.bot = (setting, frame, type, thing) => {
  // 第一個是玩家 其他必為電腦
  if (type == 'character' && setting.scenesIndex > 1) {

    // 朝玩家的方向走
    if (lf2.doIt(20)) {
      if (setting.x > lf2.mainCharacter.x + 100) {
        setting.keypress['right'] = false;
        setting.keypress['left'] = true;
      }
      else if (setting.x < lf2.mainCharacter.x - 100) {
        setting.keypress['left'] = false;
        setting.keypress['right'] = true;
      }
    }

    // 停下來(隨機) 或是靠近
    if (lf2.doIt(20) || (setting.x - lf2.mainCharacter.x > -100 && setting.x - lf2.mainCharacter.x < 100)) {
      setting.keypress['left'] = false;
      setting.keypress['right'] = false;
    }



    // 丟冰球
    if (setting.keypress['D']) {
      setting.keypress['D'] = false;
    }
    if (lf2.doIt(10)) {
      setting.keypress['D'] = true;
    }



  }
}

// 1 ~ 1000
//  避免模式太過單調 設定出招機率
lf2.doIt = (SuccessRate) => {
  return (Math.floor(Math.random() * 1000) + 1) <= SuccessRate;
}