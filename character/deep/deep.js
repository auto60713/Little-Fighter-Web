lf2.character.Deep = {
  setting: {
    name: 'Deep',
    file: {
      '0': { deputy: 'png', w: 80, h: 80 },
      '1': { deputy: 'png', w: 80, h: 80 },
      '2': { deputy: 'png', w: 80, h: 80 },
    },
    walkingSpeed: 4,
    jumpPower: 4.5,
    scale: 1,
    HP: 500,
  },
  frame: {

    // 站立
    standing: {
      next: 'standing2', pic: ['0', 0, 0], center: [40, 80], wait: 4, flip: true,
      hit: {
        C: 'attack', X: 'defense', A: 'iceBall', up: 'jumpPre', right: 'walking', left: 'walking',
        rightright: 'run', leftleft: 'run', S: 'icePunch',
      },
      doublehit: {},
      bdy: { x: 0, y: 0, w: 80, h: 80 },
    },
    standing2: {
      next: 'standing3', pic: ['0', 1, 0], center: [40, 80], wait: 4, flip: true,
      hit: {
        C: 'attack', X: 'defense', A: 'iceBall', up: 'jumpPre', right: 'walking', left: 'walking',
        rightright: 'run', leftleft: 'run', S: 'icePunch',
      },
      bdy: { x: 0, y: 0, w: 80, h: 80 },
    },
    standing3: {
      next: 'standing4', pic: ['0', 2, 0], center: [40, 80], wait: 4, flip: true,
      hit: {
        C: 'attack', X: 'defense', A: 'iceBall', up: 'jumpPre', right: 'walking', left: 'walking',
        rightright: 'run', leftleft: 'run', S: 'icePunch',
      },
      bdy: { x: 0, y: 0, w: 80, h: 80 },
    },
    standing4: {
      next: 999, pic: ['0', 3, 0], center: [40, 80], wait: 4, flip: true,
      hit: {
        C: 'attack', X: 'defense', A: 'iceBall', up: 'jumpPre', right: 'walking', left: 'walking',
        rightright: 'run', leftleft: 'run', S: 'icePunch',
      },
      bdy: { x: 0, y: 0, w: 80, h: 80 },
    },



    // 被打飛
    falling: {
      next: 'falling2', pic: ['0', 0, 3], center: [40, 80], wait: 2, falling: true,
      bdy: { x: 0, y: 0, w: 80, h: 80 },
    },
    falling2: {
      next: 'falling3', pic: ['0', 1, 3], center: [40, 80], wait: 2, falling: true,
      bdy: { x: 0, y: 0, w: 80, h: 80 },
    },
    falling3: {
      next: 'falling4', pic: ['0', 2, 3], center: [40, 80], wait: 2, falling: true,
      bdy: { x: 0, y: 0, w: 80, h: 80 },
    },
    falling4: {
      next: 'falling4', pic: ['0', 3, 3], center: [40, 80], wait: 2, falling: true,
      bdy: { x: 0, y: 0, w: 80, h: 80 },
    },

    // 躺地
    lyingDown: {
      next: 999, pic: ['0', 4, 3], center: [40, 75], wait: 10, lyingDown: true,
    },


    // 跳躍
    jumpPre: {
      next: 'jumping', pic: ['0', 0, 6], center: [40, 80], wait: 1, move: [0, -8], flip: true,
      hit: { right: 'jumpPreMove', left: 'jumpPreMove', },
      bdy: { x: 0, y: 0, w: 80, h: 80 },
    },
    jumpPreMove: {
      next: 'jumping', pic: ['0', 0, 6], center: [40, 80], wait: 0, move: [4, -8], flip: true,
      bdy: { x: 0, y: 0, w: 80, h: 80 },
    },
    jumping: {
      next: 'jumping', pic: ['0', 2, 6], center: [40, 80], wait: 20, flip: true,
      hit: { C: 'jumpAttack', },
      bdy: { x: 0, y: 0, w: 80, h: 80 },
    },


    // 跳攻擊
    jumpAttack: {
      next: 'jumpAttack2', pic: ['0', 4, 1], center: [40, 80], wait: 2,
      bdy: { x: 0, y: 0, w: 80, h: 80 },
    },
    jumpAttack2: {
      next: 'jumpAttack3', pic: ['0', 5, 1], center: [40, 80], wait: 2,
      itr: { x: 0, y: 0, w: 80, h: 80, move: [2, 0], cd: 5, injury: 40, },
      bdy: { x: 0, y: 0, w: 80, h: 80 },
    },
    jumpAttack3: {
      next: 999, pic: ['0', 6, 1], center: [40, 80], wait: 20,
      bdy: { x: 0, y: 0, w: 80, h: 80 },
    },


    // 走路
    walking: {
      next: 'walking2', pic: ['0', 4, 0], center: [40, 80], wait: 4, move: [4, 0], flip: true, hitHold: true,
      hit: { C: 'attack', X: 'defense', A: 'iceBall', up: 'jumpPre', rightright: 'run', leftleft: 'run', S: 'icePunch', },
      bdy: { x: 0, y: 0, w: 80, h: 80 },
    },
    walking2: {
      next: 'walking3', pic: ['0', 5, 0], center: [40, 80], wait: 4, move: [4, 0], flip: true, hitHold: true,
      hit: { C: 'attack', X: 'defense', A: 'iceBall', up: 'jumpPre', rightright: 'run', leftleft: 'run', S: 'icePunch', },
      bdy: { x: 0, y: 0, w: 80, h: 80 },
    },
    walking3: {
      next: 'walking4', pic: ['0', 6, 0], center: [40, 80], wait: 4, move: [4, 0], flip: true, hitHold: true,
      hit: { C: 'attack', X: 'defense', A: 'iceBall', up: 'jumpPre', rightright: 'run', leftleft: 'run', S: 'icePunch', },
      bdy: { x: 0, y: 0, w: 80, h: 80 },
    },
    walking4: {
      next: 'walking', pic: ['0', 7, 0], center: [40, 80], wait: 4, move: [4, 0], flip: true, hitHold: true,
      hit: { C: 'attack', X: 'defense', A: 'iceBall', up: 'jumpPre', rightright: 'run', leftleft: 'run', S: 'icePunch', },
      bdy: { x: 0, y: 0, w: 80, h: 80 },
    },


    // 跑步
    run: {
      next: 'run2', pic: ['0', 0, 2], center: [40, 80], wait: 4, move: [6, 0], hitHold: true,
      hit: { C: 'runAttack', up: 'runJumpPre', S: 'icePunch', },
      bdy: { x: 0, y: 0, w: 80, h: 80 },
    },
    run2: {
      next: 'run3', pic: ['0', 1, 2], center: [40, 80], wait: 4, move: [6, 0], hitHold: true,
      hit: { C: 'runAttack', up: 'runJumpPre', S: 'icePunch', },
      bdy: { x: 0, y: 0, w: 80, h: 80 },
    },
    run3: {
      next: 'run', pic: ['0', 2, 2], center: [40, 80], wait: 4, move: [6, 0], hitHold: true,
      hit: { C: 'runAttack', up: 'runJumpPre', S: 'icePunch', },
      bdy: { x: 0, y: 0, w: 80, h: 80 },
    },



    // 跑步攻擊
    runAttack: {
      next: 'runAttack2', pic: ['1', 2, 3], center: [40, 80], wait: 2, move: [1, 0],
      bdy: { x: 0, y: 0, w: 80, h: 80 },
    },
    runAttack2: {
      next: 'runAttack3', pic: ['1', 3, 3], center: [40, 80], wait: 2, move: [1, 0],
      bdy: { x: 0, y: 0, w: 80, h: 80 },
    },
    runAttack3: {
      next: 'runAttack4', pic: ['1', 4, 3], center: [40, 80], wait: 2, move: [1, 0],
      itr: { x: 0, y: 0, w: 80, h: 80, move: [10, -2], cd: 5, injury: 40, },
      bdy: { x: 0, y: 0, w: 80, h: 80 },
    },
    runAttack4: {
      next: 'runAttack5', pic: ['1', 5, 3], center: [40, 80], wait: 2, move: [1, 0],
      itr: { x: 0, y: 0, w: 80, h: 80, move: [10, -2], cd: 5, injury: 40, },
      bdy: { x: 0, y: 0, w: 80, h: 80 },
    },
    runAttack5: {
      next: 999, pic: ['1', 6, 3], center: [40, 80], wait: 2, move: [1, 0],
      bdy: { x: 0, y: 0, w: 80, h: 80 },
    },


    // 跳躍
    runJumpPre: {
      next: 'runJumping', pic: ['0', 3, 6], center: [40, 80], wait: 0, move: [6, -5],
      bdy: { x: 0, y: 0, w: 80, h: 80 },
    },
    runJumping: {
      next: 'runJumping', pic: ['0', 3, 6], center: [40, 80], wait: 20,
      hit: { C: 'jumpAttack', },
      bdy: { x: 0, y: 0, w: 80, h: 80 },
    },





    // 防禦
    defense: {
      next: 'defense', pic: ['0', 6, 5], center: [40, 80], wait: 3, flip: true, hitHold: true,
      bdy: { x: 0, y: 0, w: 80, h: 80 },
    },

    // 受傷
    injured: {
      next: 999, pic: ['0', 6, 0], center: [40, 80], wait: 2,
      bdy: { x: 0, y: 0, w: 80, h: 80 },
    },


    // 普攻
    attack: {
      next: 'attack2', pic: ['0', 0, 1], center: [40, 80], wait: 1, move: [1, 0],
      bdy: { x: 0, y: 0, w: 80, h: 80 },
    },
    attack2: {
      next: 'attack3', pic: ['0', 1, 1], center: [40, 80], wait: 1,
      itr: { x: 0, y: 0, w: 80, h: 80, move: [2, -2], cd: 5, injury: 40, },
      bdy: { x: 0, y: 0, w: 80, h: 80 },
    },
    attack3: {
      next: 999, pic: ['0', 0, 1], center: [40, 80], wait: 1,
      bdy: { x: 0, y: 0, w: 80, h: 80 },
    },


    // ==============================================================================
    // 技能
    // ==============================================================================

    // 冰彈
    iceBall: {
      next: 'iceBall2', pic: ['2', 0, 0], center: [40, 80], wait: 3,
      bdy: { x: 0, y: 0, w: 80, h: 80 },
    },
    iceBall2: {
      next: 'iceBall3', pic: ['2', 1, 0], center: [40, 80], wait: 3,
      bdy: { x: 0, y: 0, w: 80, h: 80 },
    },
    iceBall3: {
      next: 'iceBall4', pic: ['2', 2, 0], center: [40, 80], wait: 3,
      bdy: { x: 0, y: 0, w: 80, h: 80 },
    },
    iceBall4: {
      next: 'iceBall5', pic: ['2', 3, 0], center: [40, 80], wait: 3,
      bdy: { x: 0, y: 0, w: 80, h: 80 },
      produce: { name: 'freezeBall', frame: 'standing', x: 60, y: 7, },
    },
    iceBall5: {
      next: 'iceBall6', pic: ['2', 4, 0], center: [40, 80], wait: 3,
      bdy: { x: 0, y: 0, w: 80, h: 80 },
    },
    iceBall6: {
      next: 999, pic: ['2', 5, 0], center: [40, 80], wait: 3,
      bdy: { x: 0, y: 0, w: 80, h: 80 },
    },


    icePunch: {
      next: 'icePunch2', pic: ['1', 8, 0], center: [40, 80], wait: 1,
      bdy: { x: 0, y: 0, w: 80, h: 80 },
    },
    icePunch2: {
      next: 'icePunch3', pic: ['1', 9, 0], center: [40, 80], wait: 2,
      bdy: { x: 0, y: 0, w: 80, h: 80 },
    },
    icePunch3: {
      next: 'icePunch4', pic: ['1', 7, 1], center: [40, 80], wait: 2,
      bdy: { x: 0, y: 0, w: 80, h: 80 },
    },
    icePunch4: {
      next: 'icePunch5', pic: ['1', 8, 1], center: [40, 80], wait: 2,
      bdy: { x: 0, y: 0, w: 80, h: 80 },
    },
    icePunch5: {
      next: 'icePunch6', pic: ['1', 9, 1], center: [40, 80], wait: 2,
      bdy: { x: 0, y: 0, w: 80, h: 80 },
      produce: { name: 'freezeBall', frame: 'cm', x: 60, y: 7, },
    },
    icePunch6: {
      next: 'icePunch7', pic: ['1', 5, 4], center: [40, 80], wait: 2,
      bdy: { x: 0, y: 0, w: 80, h: 80 },
    },
    icePunch7: {
      next: 'icePunch8', pic: ['1', 6, 4], center: [40, 80], wait: 2,
      bdy: { x: 0, y: 0, w: 80, h: 80 },
    },
    icePunch8: {
      next: 999, pic: ['1', 9, 4], center: [40, 80], wait: 2,
      bdy: { x: 0, y: 0, w: 80, h: 80 },
    },



  }
};




