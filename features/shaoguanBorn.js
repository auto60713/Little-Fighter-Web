lf2.shaoguanBorn = () => {

  var template = JSON.parse(JSON.stringify(lf2.shaoguan[Object.keys(lf2.shaoguan)[lf2.shaoguanIndex]]));

  var stage = template.part.standing;

  lf2.mapLimit.x = stage.openx;
  lf2.enemyClear = 0;
  stage.enemy.forEach(e => {
    lf2.adjunction('character', e.name, {
      hp: e.HP,
      x: e.x,
      y: lf2.mapLimit.y,
      team: 1,
      mirror: true,
    });
  });



}