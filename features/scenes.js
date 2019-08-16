
// 切換場景
lf2.sceneSwitching = (state) => {

  lf2.Clearance();

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
    case 'shaoguanMode': lf2.prepareShaoguanMode(); break;
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
}

// 準備選角畫面的東西
lf2.prepareRoleSelection = () => {

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
lf2.prepareBattleMode = () => {

  // 地圖
  lf2.adjunction('map', 'de', {
  });

  // 主角(即第一個加入的角色)
  lf2.adjunction('character', 'Freeze', {
    x: 100,
    y: 400,
    team: 0,
  });

  // 另一個角色
  lf2.adjunction('character', 'Freeze', {
    x: 600,
    y: 400,
    team: 1,
    mirror: true,
  });

  lf2.adjunction('UI', 'hpbar2', {
    x: 100,
    y: 100,
    originalPosition: [100, 100],
  });
  lf2.adjunction('UI', 'hpbar', {
    x: 100,
    y: 100,
    originalPosition: [100, 100],
  });



  lf2.mainMap = lf2.scenes.map[0].Setting;
  lf2.mainCharacter = lf2.scenes.character[0].Setting;
  lf2.mainHpbar2 = lf2.scenes.UI[0].Setting;
}

// 準備闖關模式的東西
lf2.prepareShaoguanMode = () => {

  // 地圖
  lf2.adjunction('map', 'de', {
  });

  // 主角(即第一個加入的角色)
  lf2.adjunction('character', 'Freeze', {
    x: 100,
    y: 400,
    team: 0,
  });

  // 另一個角色
  lf2.adjunction('character', 'Freeze', {
    x: 600,
    y: 400,
    team: 1,
    mirror: true,
  });

  lf2.adjunction('UI', 'hpbar2', {
    x: 100,
    y: 100,
    originalPosition: [100, 100],
  });
  lf2.adjunction('UI', 'hpbar', {
    x: 100,
    y: 100,
    originalPosition: [100, 100],
  });


  lf2.mainMap = lf2.scenes.map[0].Setting;
  lf2.mainCharacter = lf2.scenes.character[0].Setting;
  lf2.mainHpbar2 = lf2.scenes.UI[0].Setting;
}

// 將物件加到場景中
lf2.adjunction = (type, name, data) => {

  // name = name.toLowerCase();

  var template = JSON.parse(JSON.stringify(lf2[type][name]));
  template.Setting.scenesIndex = lf2.scenesIndex;
  lf2.scenesIndex++;

  Object.keys(data).forEach(key => {
    template.Setting[key] = data[key];
  });

  lf2.scenes[type].push(template);
}

// 清空場景
lf2.Clearance = () => {
  lf2.scenesIndex = 0;
  lf2.scenes = {
    map: [],
    character: [],
    derivative: [],
    UI: [],
  };
}

// 衍生物
lf2.produceDerivative = (Setting, frame) => {
  if (frame.produce && !Setting.alreadyProduced) {

    var direction = Setting.mirror ? -1 : 1;

    lf2.adjunction('derivative', frame.produce.name,
      {
        x: Setting.x + (frame.produce.x * direction),
        y: Setting.y + frame.produce.y,
        team: Setting.team,
        mirror: Setting.mirror,
      }
    );

    Setting.alreadyProduced = true;
  }
}


lf2.sceneGOTO = (type, name, data) => {

  var ertet = '';
  // 每個模式要跑的畫面
  switch (lf2.state) {
    // 入口畫面
    case 'entrance': ertet = 'modeSelection'; break;
    // 選擇模式
    case 'modeSelection': ertet = 'roleSelection'; break;
    // 選擇角色
    case 'roleSelection': ertet = 'shaoguanMode'; break;
    // 格鬥模式
    case 'battleMode': ertet = ''; break;
    // 闖關模式
    case 'shaoguanMode': ertet = ''; break;
  }
  if (ertet != '') lf2.sceneSwitching(ertet);
}