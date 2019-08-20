
// 切換場景
lf2.sceneSwitching = (state) => {

  lf2.initialization();

  // 準備該場景需要的東西
  switch (state) {
    // 入口畫面
    case 'entrance': lf2.prepareEntrance(); break;
    // 選擇模式
    case 'modeSelection': lf2.prepareModeSelection(); break;
    // 選擇角色
    case 'roleSelection': lf2.prepareRoleSelection(); break;
    // 格鬥模式
    case 'battleMode': lf2.prepareBattleMode(); break;
    // 闖關模式
    case 'shaoguanMode': lf2.prepareShaoguanMode('stage1'); break;
  }

  lf2.state = state;
}

// 準備入口畫面的東西
lf2.prepareEntrance = () => {
  lf2.adjunction('UI', 'logo', {
    x: 400,
    y: 150,
  });
  lf2.adjunction('UI', 'startgame', {
    x: 400,
    y: 400,
  });

  lf2.canvas.style.backgroundColor = lf2.backgroundColor.entrance;
}

// 準備選擇模式的東西
lf2.prepareModeSelection = () => {
  lf2.adjunction('UI', 'point', {
    x: 400,
    y: 250,
  });
  lf2.adjunction('UI', 'battleModeButton', {
    x: 400,
    y: 200,
  });
  lf2.adjunction('UI', 'shaoguanModeButton', {
    x: 400,
    y: 400,
  });

  lf2.canvas.style.backgroundColor = lf2.backgroundColor.modeSelection;
}

// 準備選角畫面的東西
lf2.prepareRoleSelection = () => {

  lf2.characterListIndex = 0;
  lf2.characterList = [];

  Object.keys(lf2.character).forEach((name, i) => {
    lf2.adjunction('UI', name, {
      x: 100 + (50 * i),
      y: 100,
      scale: 0.5,
    });
    lf2.characterList.push(name);
  });

  lf2.adjunction('UI', 'point', {
    x: 110,
    y: 130,
  });

  lf2.mainPoint = lf2.scenes.UI[lf2.scenes.UI.length - 1].setting;
  lf2.canvas.style.backgroundColor = lf2.backgroundColor.roleSelection;
}

// 準備格鬥模式的東西
lf2.prepareBattleMode = () => {

  // 地圖
  lf2.adjunction('map', 'lf', {
  });

  lf2.mainMap = lf2.scenes.map[0].setting;
  lf2.canvas.style.backgroundColor = lf2.mainMap.backgroundColor;

  // 主角(即第一個加入的角色)
  lf2.adjunction('character', Object.keys(lf2.character)[lf2.characterListIndex], {
    x: 100,
    y: lf2.mainMap.limit.y,
    team: 0,
  });

  lf2.mainCharacter = lf2.scenes.character[0].setting;

  // 另一個角色
  lf2.adjunction('character', 'Freeze', {
    x: 600,
    y: lf2.mainMap.limit.y,
    team: 1,
    mirror: true,
  });

  lf2.adjunction('UI', 'hpbar2', {
    fixedPosition: [100, 100],
  });
  lf2.adjunction('UI', 'hpbar', {
    fixedPosition: [100, 100],
  });

  lf2.mainHpbar2 = lf2.scenes.UI[0].setting;
}

// 準備闖關模式的東西
lf2.prepareShaoguanMode = (stagename) => {

  lf2.shaoguanBorn(stagename);
}

// 將物件加到場景中
lf2.adjunction = (type, name, data) => {

  var template = JSON.parse(JSON.stringify(lf2[type][name]));

  template.setting.scenesIndex = lf2.scenesIndex;
  lf2.scenesIndex++;

  // 將加入時的設定需求寫入物件中
  Object.keys(data).forEach(key => {
    template.setting[key] = data[key];
  });

  lf2.scenes[type].push(template);
}

// 場景初始化
lf2.initialization = () => {
  lf2.cameraPos = [0, 0];
  lf2.scenesIndex = 0;
  lf2.scenes = {
    map: [],
    character: [],
    derivative: [],
    UI: [],
  };

  delete lf2.mainCharacter;
}

