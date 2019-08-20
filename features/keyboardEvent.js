lf2.keymap = {
  39: 'right',
  37: 'left',
  38: 'up',
  40: 'down',

  27: 'esc',

  81: 'Q',
  87: 'W',
  69: 'E',
  82: 'R',

  65: 'A',
  83: 'S',
  68: 'D',
  70: 'F',

  90: 'Z',
  88: 'X',
  67: 'C',
  86: 'V',
};

// 鍵盤控制
lf2.logKey = (e) => {
  const event = window.event || e;
  const pressing = event.type === 'keydown';

  if (lf2.mainCharacter) {

    lf2.ContinuousKey(pressing, lf2.keymap[event.keyCode]);
    lf2.mainCharacter.keypress[lf2.keymap[event.keyCode]] = pressing;
  }


  if (pressing && !lf2.qweqwe) {
    lf2.sceneKeyEvent(lf2.keymap[event.keyCode]);
    lf2.qweqwe = true;
  }

  if (!pressing) lf2.qweqwe = false;

}

// 連按技能
lf2.ContinuousKey = (pressing, keyname) => {
  if ((!lf2.mainCharacter.keypress[keyname] && pressing)) {
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
      x(['C'], 'modeSelection')
      break;
    // 選擇模式
    case 'modeSelection':
      x(['C'], 'roleSelection')
      x(['X', 'esc'], 'entrance')
      break;
    // 選擇角色
    case 'roleSelection':
      x(['C'], 'battleMode')
      x(['X', 'esc'], 'modeSelection')
      m(['right'], () => {
        if (lf2.characterListIndex < lf2.characterList.length - 1) lf2.characterListIndex++;
        lf2.mainPoint.x = lf2.scenes.UI[lf2.characterListIndex].setting.x + 15;
      });
      m(['left'], () => {
        if (lf2.characterListIndex > 0) lf2.characterListIndex--;
        lf2.mainPoint.x = lf2.scenes.UI[lf2.characterListIndex].setting.x + 15;
      });
      break;
    // 格鬥模式
    case 'battleMode':
      x(['esc'], 'roleSelection')
      m(['C'], () => {
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


