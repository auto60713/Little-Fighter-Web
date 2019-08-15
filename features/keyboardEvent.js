
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

  if (lf2.state == 'entrance') {

  }

  // 給UI的溫馨案件觸發
  if (pressing && keymap[event.keyCode] == 'C' && (lf2.state == 'entrance' || lf2.state == 'roleSelection')) {
    var ertet = '';
    // 每個模式要跑的畫面
    switch (lf2.state) {
      // 入口畫面
      case 'entrance': ertet = 'roleSelection'; break;
      // 選擇模式
      case 'modeSelection': ertet = ''; break;
      // 選擇角色
      case 'roleSelection': ertet = 'battleMode'; break;
    }
    lf2.sceneSwitching(ertet);
  }

}

