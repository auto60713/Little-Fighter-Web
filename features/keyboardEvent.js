
// 鍵盤控制
function logKey(e) {
  const event = window.event ? window.event : e;
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

  if (mainCharacter) mainCharacter.keypress[keymap[event.keyCode]] = pressing;

  if (window.state == 'Entrance') {

  }

  // 給UI的溫馨案件觸發
  if (pressing && keymap[event.keyCode] == 'Q' && (window.state == 'Entrance' || window.state == 'SelectedRole')) {
    var ertet = '';
    // 每個模式要跑的畫面
    switch (window.state) {
      // 入口畫面
      case 'Entrance': ertet = 'SelectedRole'; break;
      // 選擇模式
      case 'SelectionMode': ertet = ''; break;
      // 選擇角色
      case 'SelectedRole': ertet = 'battle'; break;
    }
    sceneSwitching(ertet);


  }


}

// 技能
function skillll(Setting, frame, type, hhhh, thing) {

  // 跳出換幀(技能)
  var breakFlag2 = false;

  if (frame[hhhh]) {
    var hit = Object.keys(frame[hhhh]);
    if (hit.length > 0) {
      hit.forEach(key => {

        if (Setting.keypress[key] && !breakFlag2) {
          nextframe(thing, Setting, type, frame[hhhh][key]);
          breakFlag2 = true;
        }

      });
    }
  }

}

document.addEventListener('keyup', logKey);
document.addEventListener('keydown', logKey);