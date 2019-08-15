
// 場景切換
lf2.sceneSwitching = (TTTNAME) => {

  lf2.Clearance();
  // 準備該場景需要的東西
  switch (TTTNAME) {
    // 入口畫面
    case 'Entrance': lf2.appppEntrance(); break;
    // 選擇模式
    case 'SelectionMode': break;
    // 選擇角色
    case 'SelectedRole': lf2.apppSelectedRoledee(); break;
    // 格鬥模式
    case 'battle': lf2.appppbattle(); break;
    // 闖關模式
    case 'Shaoguan': break;
  }

  lf2.QPRESS = false;
  lf2.state = TTTNAME;
}

// 準備入口畫面的東西
lf2.appppEntrance = () => {

  lf2.adjunction('UI', 'startgame', {
    x: 290,
    y: 400,
  });

  lf2.adjunction('UI', 'logo', {
    x: 50,
    y: 100,
  });

}

// 準備選角畫面
lf2.apppSelectedRoledee = () => {

  Object.keys(lf2.character).forEach((name, i) => {
    lf2.adjunction('UI', name + 'face', {
      x: 100 + (50 * i),
      y: 100,
      scale: 0.5,
    });
  });

  lf2.adjunction('UI', 'point', {
    x: 110,
    y: 130,
  });

}

// 準備格鬥模式的東西
lf2.appppbattle = () => {
  // 地圖
  lf2.adjunction('map', 'de', {
  });

  // 主角(即第一個加入的角色)
  lf2.adjunction('character', 'rock', {
    x: 100,
    y: 340,
    team: 0,
  });

  // 另一個角色
  lf2.adjunction('character', 'rock', {
    x: 600,
    y: 340,
    team: 1,
    mirror: true,
  });

  lf2.mainMap = lf2.scenes.map[0].Setting;
  lf2.mainCharacter = lf2.scenes.character[0].Setting;
}

// 
lf2.adjunction = (type, name, data) => {
  name = name.toLowerCase();
  var template = JSON.parse(JSON.stringify(lf2[type][name]));
  template.Setting.scenesIndex = lf2.scenesIndex;
  lf2.scenesIndex++;

  Object.keys(data).forEach(key => {
    template.Setting[key] = data[key];
  });

  lf2.scenes[type].push(template);
}

// 
lf2.Clearance = () => {
  lf2.scenes = {
    map: [],
    character: [],
    derivative: [],
    UI: [],
  };
}

