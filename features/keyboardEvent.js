// 1P控制器
lf2.keymap = {
  'ArrowUp': 'U',
  'ArrowDown': 'D',
  'ArrowRight': 'R',
  'ArrowLeft': 'L',

  'KeyA': 'B6', 'KeyS': 'B5', 'KeyD': 'B4',
  'KeyZ': 'B3', 'KeyX': 'B2', 'KeyC': 'B1',

  'Escape': 'esc',
  'KeyQ': 'pause',
};
// 2P控制器
lf2.keymap2 = {
  'Numpad5': 'U',
  'Numpad2': 'D',
  'Numpad3': 'R',
  'Numpad1': 'L',

  'KeyJ': 'B6', 'KeyK': 'B5', 'KeyL': 'B4',
  'KeyM': 'B3', 'Comma': 'B2', 'Period': 'B1',
};

// 鍵盤事件
lf2.logKey = (e) => {

  const pressing = (window.event || e).type === 'keydown';

  if (lf2.state == 'battleMode') {
    // P1
    if (lf2.keymap[e.code]) lf2.operatingCharacter(lf2.scenes.character[0].setting, pressing, lf2.keymap[e.code]);
    // P2
    else lf2.operatingCharacter(lf2.scenes.character[1].setting, pressing, lf2.keymap2[e.code]);
  }

  // 場景按鍵事件
  if (pressing && !lf2.keydownLock) lf2.sceneKeyEvent(lf2.keymap[e.code]);

  // 第一次keydown鎖
  lf2.keydownLock = pressing;
}

// 操作指定角色
lf2.operatingCharacter = (setting, pressing, keyname) => {
  // 正在按序
  setting.keypress[keyname] = pressing;
  // 按鍵反應序
  if (pressing && !lf2.keydownLock) setting.keyReaction.push([keyname, 20]);
}

// 每個場景的按鍵控制\
// FIXME: 會跟著UI大改 先不用整理
lf2.sceneKeyEvent = (keyname) => {

  switch (lf2.state) {
    // 入口畫面
    case 'entrance':
      lf2.xxxxx(keyname, null, 'modeSelection');
      break;
    // 選擇模式
    case 'modeSelection':
      lf2.xxxxx(keyname, 'entrance', 'roleSelection');

      var ddd = (nn) => {
        lf2.modeIndex += nn;
        if (lf2.modeIndex === Object.keys(lf2.mode).length) lf2.modeIndex = 0;
        else if (lf2.modeIndex === -1) lf2.modeIndex = Object.keys(lf2.mode).length - 1;
        lf2.scenes.UI[lf2.scenes.UI.length - 1].setting.x = lf2.scenes.UI[lf2.modeIndex].setting.x + 15;
      };

      if (keyname == 'R') {
        ddd(1);
      }
      else if (keyname == 'L') {
        ddd(-1);
      }
      break;



    // 選擇角色
    case 'roleSelection':
      lf2.xxxxx(keyname, 'modeSelection', Object.keys(lf2.mode)[lf2.modeIndex]);

      var ddd = (nn) => {
        lf2.characterIndex += nn;
        if (lf2.characterIndex === Object.keys(lf2.character).length) lf2.characterIndex = 0;
        else if (lf2.characterIndex === -1) lf2.characterIndex = Object.keys(lf2.character).length - 1;
        lf2.scenes.UI[lf2.scenes.UI.length - 1].setting.x = lf2.scenes.UI[lf2.characterIndex].setting.x + 15;
      };

      if (keyname == 'R') {
        ddd(1);
      }
      else if (keyname == 'L') {
        ddd(-1);
      }
      break;


    // 選擇地圖
    case 'mapSelection':
      lf2.xxxxx(keyname, 'roleSelection', 'battleMode');

      if (keyname == 'R') {
        if (lf2.mapIndex < Object.keys(lf2.map).length - 1) {
          lf2.mapIndex++;
          for (let i = 0; i < lf2.scenes.UI.length - 1; i++)
            lf2.scenes.UI[i].setting.x -= 150;
        }
      } else if (keyname == 'L') {
        if (lf2.mapIndex > 0) {
          lf2.mapIndex--;
          for (let i = 0; i < lf2.scenes.UI.length - 1; i++)
            lf2.scenes.UI[i].setting.x += 150;
        }
      }
      break;
    // 格鬥模式
    case 'battleMode':
      lf2.xxxxx(keyname, 'roleSelection', null)

      if (keyname == 'B1') {
        if (lf2.gameOver < 0) {
          lf2.sceneSwitching('roleSelection');
          lf2.gameOver = null;
        }
      }
      else if (keyname == 'pause') {
        lf2.pause = !lf2.pause;
      }
      break;



    // 選擇副本
    case 'shaoguanSelection':
      lf2.xxxxx(keyname, 'entrance', 'roleSelection');

      var ddd = (nn) => {
        lf2.shaoguanIndex += nn;
        if (lf2.shaoguanIndex === Object.keys(lf2.shaoguan).length) lf2.shaoguanIndex = 0;
        else if (lf2.shaoguanIndex === -1) lf2.shaoguanIndex = Object.keys(lf2.shaoguan).length - 1;
        lf2.scenes.UI[lf2.scenes.UI.length - 1].setting.y = lf2.scenes.UI[lf2.shaoguanIndex].setting.y + 15;
      };

      if (keyname == 'U') {
        ddd(1);
      }
      else if (keyname == 'D') {
        ddd(-1);
      }
      break;
    // 闖關模式
    case 'shaoguanMode':
      break;
  }

}

// 按鍵對應場景切換
lf2.xxxxx = (keyname, b, f) => {
  // 下一頁
  if (f && keyname == 'B1') {
    lf2.sound('m_ok.wav');
    lf2.sceneSwitching(f);
  }
  // 上一頁
  else if (b && ((f && keyname == 'B2') || keyname == 'esc')) {
    lf2.sound('m_cancel.wav');
    lf2.sceneSwitching(b);
  }
}