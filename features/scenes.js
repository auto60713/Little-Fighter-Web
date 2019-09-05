
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

  lf2[`modeIndex`] = 0;

  lf2.adjunction('UI', 'button', {
    x: 250,
    y: 250,
    nowframe: 'standing',
  });

  lf2.adjunction('UI', 'button', {
    x: 450,
    y: 250,
    nowframe: 'standing2',
  });

  lf2.adjunction('UI', 'point', {
    x: 250,
    y: 350,
  });

  lf2.adjunction('UI', 'title', {
    x: 10,
    y: 10,
    nowframe: 'standing',
  });
}

// 準備選角畫面的東西
lf2.prepareroleSelection = () => {
  lf2.selectionList('character', 120);
}

// 準備選擇地圖的東西
lf2.preparemapSelection = () => {
  lf2.selectionList('map', 220);
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
  lf2.adjunction('character', 'Firen', {
    x: 600,
    y: lf2.mapLimit.y,
    team: 1,
    mirror: -1,
  });

  lf2.adjunction('UI', 'protaghpbar');
  lf2.adjunction('UI', 'protaghpbar', {
    nowframe: 'standing2',
  });

  lf2.mainhpbar2 = lf2.scenes.UI[0].setting;

}

// 準備選擇副本的東西
lf2.prepareshaoguanSelection = () => {
  lf2.selectionList('shaoguan', 220);
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

  lf2.adjunction('UI', 'protaghpbar');
  lf2.adjunction('UI', 'protaghpbar', {
    nowframe: 'standing2',
  });

  lf2.mainhpbar2 = lf2.scenes.UI[0].setting;

  lf2.shaoguanBorn();
}



// 將物件加到場景中
lf2.adjunction = (type, name, data = {}) => {
  const template = JSON.parse(JSON.stringify(lf2[type][name]));

  template.setting.scenesIndex = lf2.scenesIndex;
  lf2.scenesIndex++;

  // FIXME: 應該要為name 但目前都是standing 就standing
  if (type == 'UI' || type == 'character') template.setting.nowframe = 'standing';

  // 將加入時的設定需求寫入物件中
  Object.keys(data).forEach(key => {
    template.setting[key] = data[key];
  });

  // FIXME: 設置地圖可以有特規
  if (type == 'map') {
    lf2.mapLimit = template.setting.limit;
    lf2.canvas.style.backgroundColor = template.setting.backgroundColor;
  }
  else template.setting.nowwait = template.frame[template.setting.nowframe].wait * lf2.waitMagnification;

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
  lf2.canvas.style.backgroundColor = lf2.themeColor;
}

// 建構選擇列表
lf2.selectionList = (type, w) => {

  lf2[`${type}Index`] = 0;

  Object.keys(lf2[type]).forEach((name, i) => {
    lf2.adjunction('UI', name, {
      x: 250 + (w * i),
      y: 250,
    });
  });

  lf2.adjunction('UI', 'point', {
    x: 250,
    y: 350,
  });

  lf2.adjunction('UI', 'title', {
    x: 10,
    y: 10,
    nowframe: type,
  });

}
