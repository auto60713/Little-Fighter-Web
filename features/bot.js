
// 打電腦
lf2.bot = (setting, frame, type, thing) => {
  if (!lf2.passOnly(['battleMode', 'shaoguanMode'], ['character'], type)) return;

  // 第一個是玩家 其他必為電腦
  if (type == 'character' && setting.scenesIndex > 1) {

    // 朝玩家的方向走
    if (lf2.doIt(20)) {
      if (setting.x > lf2.mainCharacter.x + 100) {
        setting.keypress['R'] = false;
        setting.keypress['L'] = true;
      }
      else if (setting.x < lf2.mainCharacter.x - 100) {
        setting.keypress['L'] = false;
        setting.keypress['R'] = true;
      }
    }

    // 停下來(隨機) 或是靠近
    if (lf2.doIt(20) || (setting.x - lf2.mainCharacter.x > -100 && setting.x - lf2.mainCharacter.x < 100)) {
      setting.keypress['L'] = false;
      setting.keypress['R'] = false;
    }



    // 丟冰球
    if (setting.keypress['B4']) {
      setting.keypress['B4'] = false;
    }
    if (lf2.doIt(10)) {
      setting.keypress['B4'] = true;
    }



  }
}

// 1 ~ 1000
//  避免模式太過單調 設定出招機率
lf2.doIt = (SuccessRate) => {
  return (Math.floor(Math.random() * 1000) + 1) <= SuccessRate;
}