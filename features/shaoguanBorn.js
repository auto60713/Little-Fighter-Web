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

  // 設定範圍
  lf2.mapLimit.x = lf2.stageIndex.openx;

  // 打倒敵人目標
  lf2.enemyClear = 0;
  lf2.enemyClearGoal = lf2.stageIndex.enemy.length;

  // 產生敵人
  lf2.stageIndex.enemy.forEach(e => {
    lf2.adjunction('character', e.name, {
      HP: e.HP,
      nowHP: e.HP,
      x: e.x,
      y: lf2.mapLimit.y,
      team: 1,
      mirror: true,
    });
  });
}