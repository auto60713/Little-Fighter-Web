
// 每一幀要的事
function eachFrame() {
  // 清空畫布
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // 每個模式要跑的畫面
  switch (window.state) {
    // 入口畫面
    case 'Entrance': Entrance(); break;
    // 選擇模式
    case 'SelectionMode': break;
    // 選擇角色
    case 'SelectedRole': SelectedRole(); break;
    // 格鬥模式
    case 'battle': battle(); break;
    // 闖關模式
    case 'Shaoguan': break;
  }

  // FPS60
  setTimeout(eachFrame, 1000 / 60);
};

// 物件換影格
function nextframe(thing, Setting, type, next) {
  if (type !== 'map') {
    if (next == 999) {
      if (Setting.inSky) next = 8;
      else next = 0;
    }
    Setting.nowframe = next;
    Setting.nowwait = thing.frame[Setting.nowframe].wait * window.waitMagnification;
    Setting.alreadyProduced = false;
  }
}

// 每一幀要的事 / 計時器
function counter(Setting, frame, type) {

  // 幀等待
  Setting.nowwait--;

  // 被打等待
  if (Setting.hitCD) Object.keys(Setting.hitCD).forEach(k => {
    Setting.hitCD[k]--;
  });

  // 翻轉允許
  if (frame.flip) {
    if (Setting.keypress.right) {
      Setting.mirror = false;
    }
    else if (Setting.keypress.left) {
      Setting.mirror = true;
    }
  }

  // 銷毀偵測
  if (type == 'derivative' && (Setting.x < -200 || Setting.x > mainMap.limit.x + 200)) Setting.destroy = true;
}
