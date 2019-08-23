lf2.keymap = {
  'ArrowUp': 'U',
  'ArrowDown': 'D',
  'ArrowRight': 'R',
  'ArrowLeft': 'L',

  'KeyA': 'B6', 'KeyS': 'B5', 'KeyD': 'B4',
  'KeyZ': 'B3', 'KeyX': 'B2', 'KeyC': 'B1',

  'esc': 'Escape',
};

// 鍵盤控制
lf2.logKey = (e) => {

  const event = window.event || e;
  const pressing = event.type === 'keydown';

  if (lf2.mainCharacter) {

    lf2.ContinuousKey(pressing, lf2.keymap[e.code]);
    lf2.mainCharacter.keypress[lf2.keymap[e.code]] = pressing;
  }


  if (pressing && !lf2.qweqwe) {
    lf2.sceneKeyEvent(lf2.keymap[e.code]);
    lf2.qweqwe = true;
  }

  if (!pressing) lf2.qweqwe = false;

}

// 連按技能
lf2.ContinuousKey = (pressing, keyname) => {
  if (!lf2.mainCharacter.keypress[keyname] && pressing) {
    lf2.mainCharacter.keyReaction.push([keyname, 20]);
  }
}

// 每個場景的按鍵控制
lf2.sceneKeyEvent = (keyname) => {

  const n = [];
  var m = (a, b) => {
    n.push([a, b]);
  }
  var x = (a, b) => {
    a.forEach(ttt => {
      if (keyname == ttt) lf2.sceneSwitching(b);
    });
  }

  switch (lf2.state) {
    // 入口畫面
    case 'entrance':
      x(['B1'], 'modeSelection')
      break;
    // 選擇模式
    case 'modeSelection':
      x(['B1'], 'roleSelection')
      x(['B2', 'esc'], 'entrance')
      break;
    // 選擇角色
    case 'roleSelection':
      x(['B1'], 'mapSelection')
      x(['B2', 'esc'], 'modeSelection')
      m(['R'], () => {
        if (lf2.characterListIndex < lf2.characterList.length - 1) lf2.characterListIndex++;
        else if (lf2.characterListIndex == lf2.characterList.length - 1) lf2.characterListIndex = 0;
        lf2.mainPoint.x = lf2.scenes.UI[lf2.characterListIndex].setting.x + 15;
      });
      m(['L'], () => {
        if (lf2.characterListIndex > 0) lf2.characterListIndex--;
        else if (lf2.characterListIndex == 0) lf2.characterListIndex = lf2.characterList.length - 1;
        lf2.mainPoint.x = lf2.scenes.UI[lf2.characterListIndex].setting.x + 15;
      });
      break;
    // 選擇地圖
    case 'mapSelection':
      x(['B1'], 'battleMode')
      x(['B2', 'esc'], 'roleSelection')
      m(['R'], () => {
        if (lf2.mapListIndex < lf2.mapList.length - 1) {
          lf2.mapListIndex++;
          for (let i = 0; i < lf2.scenes.UI.length - 1; i++)
            lf2.scenes.UI[i].setting.x -= 150;
        }
      });
      m(['L'], () => {
        if (lf2.mapListIndex > 0) {
          lf2.mapListIndex--;
          for (let i = 0; i < lf2.scenes.UI.length - 1; i++)
            lf2.scenes.UI[i].setting.x += 150;
        }
      });
      break;
    // 格鬥模式
    case 'battleMode':
      x(['esc'], 'roleSelection')
      m(['B1'], () => {
        if (lf2.gameOver < 0) {
          lf2.sceneSwitching('roleSelection');
          lf2.gameOver = null;
        }
      });
      break;
    // 闖關模式
    case 'shaoguanMode':
      break;
  }



  n.forEach(ttt => {
    if (keyname == ttt[0]) ttt[1]();
  });


}


