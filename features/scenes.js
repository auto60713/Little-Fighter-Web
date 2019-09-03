
// 切換場景
lf2.sceneSwitching = (state) => {

  lf2.initialization();

  lf2[`prepare${state}`]();

  lf2.state = state;
}

// 準備入口畫面的東西
lf2.prepareentrance = () => {
  lf2.adjunction('UI', 'logo');
  lf2.adjunction('UI', 'startgame');
}

// 準備選擇模式的東西
lf2.preparemodeSelection = () => {
  lf2.selectionList('mode', 100);
}

// 準備選角畫面的東西
lf2.prepareroleSelection = () => {
  lf2.selectionList('character', 50);
}

// 準備選擇地圖的東西
lf2.preparemapSelection = () => {
  lf2.selectionList('map', 150);
}

// 準備格鬥模式的東西
lf2.preparebattleMode = () => {

  // 地圖
  lf2.adjunction('map', Object.keys(lf2.map)[lf2.mapIndex]);

  // 主角(即第一個加入的角色)
  lf2.adjunction('character', Object.keys(lf2.character)[lf2.characterIndex], {
    x: 100,
    y: lf2.mapLimit.y,
    team: 0,
  });

  // 另一個角色
  lf2.adjunction('character', 'Davis', {
    x: 600,
    y: lf2.mapLimit.y,
    team: 1,
    mirror: true,
  });

  lf2.adjunction('UI', 'protagHPbar');
  lf2.adjunction('UI', 'protagHPbar', {
    nowframe: 'standing2',
  });

  lf2.mainHpbar2 = lf2.scenes.UI[0].setting;

}

// 準備選擇副本的東西
lf2.prepareshaoguanSelection = () => {
  lf2.selectionList('shaoguan', 150);
}

// 準備闖關模式的東西
lf2.prepareshaoguanMode = () => {

  // 地圖
  lf2.adjunction('map', Object.keys(lf2.map)[1]);

  // 主角(即第一個加入的角色)
  lf2.adjunction('character', Object.keys(lf2.character)[lf2.characterIndex], {
    x: 100,
    y: lf2.mapLimit.y,
    team: 0,
  });

  lf2.adjunction('UI', 'protagHPbar');
  lf2.adjunction('UI', 'protagHPbar', {
    nowframe: 'standing2',
  });

  lf2.mainHpbar2 = lf2.scenes.UI[0].setting;

  lf2.shaoguanBorn();
}



// 將物件加到場景中
lf2.adjunction = (type, name, data = {}) => {
  var template = JSON.parse(JSON.stringify(lf2[type][name]));

  template.setting.scenesIndex = lf2.scenesIndex;
  lf2.scenesIndex++;

  template.setting.name = name;

  // 將加入時的設定需求寫入物件中
  Object.keys(data).forEach(key => {
    template.setting[key] = data[key];
  });

  if (template.setting.fixedPosition) {
    template.setting.x = template.setting.fixedPosition[0];
    template.setting.y = template.setting.fixedPosition[1];
  }

  if (type == 'map') {
    lf2.mapLimit = template.setting.limit;
    lf2.canvas.style.backgroundColor = template.setting.backgroundColor;
  }

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
  lf2.canvas.style.backgroundColor = '#102463';
}

// 建構選擇列表
lf2.selectionList = (type, w) => {

  lf2[`${type}Index`] = 0;

  Object.keys(lf2[type]).forEach((name, i) => {
    lf2.adjunction('UI', name, {
      x: 100 + (w * i),
      y: 100,
    });
  });

  lf2.adjunction('UI', 'point', {
    x: 120,
    y: 140,
  });

}
