
// 鍵盤控制
lf2.logKey = (e) => {
  const event = window.event || e;
  const pressing = event.type === 'keydown';
  const keymap = {
    39: 'right',
    37: 'left',
    38: 'up',
    40: 'down',

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


  // 給UI的溫馨案件觸發
  if (pressing && keymap[event.keyCode] == 'C') {
    lf2.sceneGOTO();
  }

}

