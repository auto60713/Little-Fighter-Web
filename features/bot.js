
// 打電腦
lf2.bot = (Setting, frame, type, thing) => {
  // 第一個是玩家 其他必為電腦
  if (type == 'character' && Setting.scenesIndex > 1) {



    // 朝玩家的方向走
    if (lf2.doIt(20)) {
      if (Setting.x > lf2.mainCharacter.x + 100) {
        Setting.keypress['right'] = false;
        Setting.keypress['left'] = true;
      }
      else if (Setting.x < lf2.mainCharacter.x - 100) {
        Setting.keypress['left'] = false;
        Setting.keypress['right'] = true;
      }
    }

    // 停下來(隨機) 或是靠近
    if (lf2.doIt(20) || (Setting.x - lf2.mainCharacter.x > -100 && Setting.x - lf2.mainCharacter.x < 100)) {
      Setting.keypress['left'] = false;
      Setting.keypress['right'] = false;
    }



    // 丟冰球
    if (Setting.keypress['A']) {
      Setting.keypress['A'] = false;
    }
    if (lf2.doIt(10)) {
      Setting.keypress['A'] = true;
    }



  }
}

// 1 ~ 1000
//  避免模式太過單調 設定出招機率
lf2.doIt = (SuccessRate) => {
  return (Math.floor(Math.random() * 1000) + 1) <= SuccessRate;
}