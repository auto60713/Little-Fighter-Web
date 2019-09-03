lf2.shaoguanBorn = () => {



  lf2.enemyBorn();





}

lf2.enemyBorn = () => {

  var template = JSON.parse(JSON.stringify(lf2.shaoguan[Object.keys(lf2.shaoguan)[lf2.shaoguanIndex]]));

  if (!lf2.stageIndex) lf2.stageIndex = template.part.standing;
  else {
    if (lf2.stageIndex.next == 999) {
      if (lf2.gameOver == null) {
        lf2.adjunction('UI', 'ko');
        lf2.gameOver = 180;
      }
    }
    else lf2.stageIndex = template.part[lf2.stageIndex.next];
  }

  // 打倒敵人目標
  lf2.enemyClear = 0;
  lf2.enemyClearGoal = lf2.stageIndex.enemy.length;

  if (!lf2.gameOver) {

    if (lf2.stageIndex.map) {
      lf2.scenes.map.splice(0, 1);
      lf2.adjunction('map', lf2.stageIndex.map);
      lf2.stageIndex.map = null;

      lf2.scenes.character[0].setting.x = 200;
      lf2.scenes.character[0].setting.y = lf2.mapLimit.y;
      lf2.cameraPos = [0, 0];
    }

    // 設定範圍
    lf2.mapLimit.x = lf2.stageIndex.openx;

    // 產生敵人
    lf2.stageIndex.enemy.forEach(e => {
      lf2.adjunction('character', e.name, {
        hp: e.hp,
        nowhp: e.hp,
        x: e.x,
        y: lf2.mapLimit.y,
        team: 1,
        mirror: -1,
      });
    });
  }

}