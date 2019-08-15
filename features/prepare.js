
// 準備入口畫面的東西
function appppEntrance() {

  adjunction('UI', 'startgame', {
    x: 290,
    y: 400,
  });

  adjunction('UI', 'logo', {
    x: 50,
    y: 100,
  });

}

// 準備選角畫面
function apppSelectedRoledee() {

  Object.keys(window.character).forEach((name, i) => {
    adjunction('UI', name + 'face', {
      x: 100 + (50 * i),
      y: 100,
      scale: 0.5,
    });
  });

  adjunction('UI', 'point', {
    x: 110,
    y: 130,
  });

}

// 準備格鬥模式的東西
function appppbattle() {
  // 地圖
  adjunction('map', 'de', {
  });

  // 主角(即第一個加入的角色)
  adjunction('character', 'rock', {
    x: 100,
    y: 340,
    team: 0,
  });

  // 另一個角色
  adjunction('character', 'rock', {
    x: 600,
    y: 340,
    team: 1,
    mirror: true,
  });

  window.mainMap = window.scenes.map[0].Setting;
  window.mainCharacter = window.scenes.character[0].Setting;
}

// 
function adjunction(type, name, data) {
  name = name.toLowerCase();
  var template = JSON.parse(JSON.stringify(window[type][name]));
  template.Setting.scenesIndex = scenesIndex;
  scenesIndex++;

  Object.keys(data).forEach(key => {
    template.Setting[key] = data[key];
  });

  window.scenes[type].push(template);
}

// 
function Clearance() {
  window.scenes = {
    map: [],
    character: [],
    derivative: [],
    UI: [],
  };
}

// 場景切換
function sceneSwitching(TTTNAME) {
  console.log(TTTNAME);
  Clearance();
  // 準備該場景需要的東西
  switch (TTTNAME) {
    // 入口畫面
    case 'Entrance': appppEntrance(); break;
    // 選擇模式
    case 'SelectionMode': break;
    // 選擇角色
    case 'SelectedRole': apppSelectedRoledee(); break;
    // 格鬥模式
    case 'battle': appppbattle(); break;
    // 闖關模式
    case 'Shaoguan': break;
  }

  QPRESS = false;
  window.state = TTTNAME;
}