
// 鍵盤控制
lf2.logKey = (e) => {
  const event = window.event || e;
  const pressing = event.type === 'keydown';
  const keymap = {
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
  }

  if (lf2.mainCharacter) lf2.mainCharacter.keypress[keymap[event.keyCode]] = pressing;


  if (pressing && !lf2.qweqwe) {
    lf2.sceneKeyEvent(keymap[event.keyCode]);
    lf2.qweqwe = true;
  }

  if (!pressing) lf2.qweqwe = false;

}


// 每個場景的按鍵控制
lf2.sceneKeyEvent = (keyname) => {

  switch (lf2.state) {
    // 入口畫面
    case 'entrance':
      if (keyname == 'C') lf2.sceneSwitching('modeSelection');
      break;
    // 選擇模式
    case 'modeSelection':
      if (keyname == 'C') lf2.sceneSwitching('roleSelection');
      if (keyname == 'X' || keyname == 'esc') lf2.sceneSwitching('entrance');
      break;
    // 選擇角色
    case 'roleSelection':
      if (keyname == 'C') lf2.sceneSwitching('battleMode');
      if (keyname == 'X' || keyname == 'esc') lf2.sceneSwitching('modeSelection');
      if (keyname == 'right' && lf2.characterListIndex < lf2.characterList.length - 1) {

        lf2.characterListIndex++;
      }
      if (keyname == 'left' && lf2.characterListIndex > 0) {
        lf2.characterListIndex--;
      }

      lf2.mainPoint.x = lf2.scenes.UI[lf2.characterListIndex].setting.x + 15;
      break;
    // 格鬥模式
    case 'battleMode':
      if (keyname == 'C' && lf2.gameOver < 0) {
        lf2.sceneSwitching('roleSelection');
        lf2.gameOver = null;
      }
      if (keyname == 'esc') lf2.sceneSwitching('roleSelection');
      break;
    // 闖關模式
    case 'shaoguanMode':
      break;
  }

}