
// 鍵盤控制
lf2.logKey = (e) => {
  const event = window.event || e;
  const pressing = event.type === 'keydown';
  const keymap = {
    39: 'right',
    37: 'left',
    38: 'up',
    81: 'Q',
    87: 'W',
    69: 'E',
    82: 'R',
  }

  if (lf2.mainCharacter) lf2.mainCharacter.keypress[keymap[event.keyCode]] = pressing;

  if (lf2.state == 'Entrance') {

  }

  // 給UI的溫馨案件觸發
  if (pressing && keymap[event.keyCode] == 'Q' && (lf2.state == 'Entrance' || lf2.state == 'SelectedRole')) {
    var ertet = '';
    // 每個模式要跑的畫面
    switch (lf2.state) {
      // 入口畫面
      case 'Entrance': ertet = 'SelectedRole'; break;
      // 選擇模式
      case 'SelectionMode': ertet = ''; break;
      // 選擇角色
      case 'SelectedRole': ertet = 'battle'; break;
    }
    lf2.sceneSwitching(ertet);


  }


}

