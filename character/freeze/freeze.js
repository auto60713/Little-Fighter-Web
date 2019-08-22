lf2.character.Freeze = {
  setting: {
    name: 'Freeze',
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
      bdy: { x: 0, y: 0, w: 80, h: 80 },
      hit: {
        right: 'walking', left: 'walking', rightright: 'run', leftleft: 'run', up: 'jumpPre',
        C: 'attack', X: 'defense', A: 'whirlwind', S: 'downPunch', D: 'ball',
      },
    },
    standing2: {
      next: 'standing3', pic: ['0', 1, 0], center: [40, 80], wait: 4, flip: true,
      bdy: { x: 0, y: 0, w: 80, h: 80 },
      hit: {
        right: 'walking', left: 'walking', rightright: 'run', leftleft: 'run', up: 'jumpPre',
        C: 'attack', X: 'defense', A: 'whirlwind', S: 'downPunch', D: 'ball',
      },
    },
    standing3: {
      next: 'standing4', pic: ['0', 2, 0], center: [40, 80], wait: 4, flip: true,
      bdy: { x: 0, y: 0, w: 80, h: 80 },
      hit: {
        right: 'walking', left: 'walking', rightright: 'run', leftleft: 'run', up: 'jumpPre',
        C: 'attack', X: 'defense',  A: 'whirlwind', S: 'downPunch', D: 'ball',
      },
    },
    standing4: {
      next: 999, pic: ['0', 3, 0], center: [40, 80], wait: 4, flip: true,
      bdy: { x: 0, y: 0, w: 80, h: 80 },
      hit: {
        right: 'walking', left: 'walking', rightright: 'run', leftleft: 'run', up: 'jumpPre',
        C: 'attack', X: 'defense',  A: 'whirlwind', S: 'downPunch', D: 'ball',
      },
    },


    // 走路
    walking: {
      next: 'walking2', pic: ['0', 4, 0], center: [40, 80], wait: 4, move: [4, 0], flip: true, hitHold: true,
      bdy: { x: 0, y: 0, w: 80, h: 80 },
      hit: {
        rightright: 'run', leftleft: 'run', up: 'jumpPre',
        C: 'attack', X: 'defense',  A: 'whirlwind', S: 'downPunch', D: 'ball',
      },
    },
    walking2: {
      next: 'walking3', pic: ['0', 5, 0], center: [40, 80], wait: 4, move: [4, 0], flip: true, hitHold: true,
      bdy: { x: 0, y: 0, w: 80, h: 80 },
      hit: {
        rightright: 'run', leftleft: 'run', up: 'jumpPre',
        C: 'attack', X: 'defense', A: 'whirlwind', S: 'downPunch', D: 'ball',
      },
    },
    walking3: {
      next: 'walking4', pic: ['0', 6, 0], center: [40, 80], wait: 4, move: [4, 0], flip: true, hitHold: true,
      bdy: { x: 0, y: 0, w: 80, h: 80 },
      hit: {
        rightright: 'run', leftleft: 'run', up: 'jumpPre',
        C: 'attack', X: 'defense',  A: 'whirlwind', S: 'downPunch', D: 'ball',
      },
    },
    walking4: {
      next: 'walking', pic: ['0', 7, 0], center: [40, 80], wait: 4, move: [4, 0], flip: true, hitHold: true,
      bdy: { x: 0, y: 0, w: 80, h: 80 },
      hit: {
        rightright: 'run', leftleft: 'run', up: 'jumpPre',
        C: 'attack', X: 'defense',  A: 'whirlwind', S: 'downPunch', D: 'ball',
      },
    },



    // 跑步
    run: {
      next: 'run2', pic: ['0', 0, 2], center: [40, 80], wait: 4, move: [6, 0], hitHold: true,
      bdy: { x: 0, y: 0, w: 80, h: 80 },
      hit: {
        up: 'runJumpPre',
        C: 'attack', X: 'defense', A: 'whirlwind', S: 'downPunch', D: 'ball',
      },
    },
    run2: {
      next: 'run3', pic: ['0', 1, 2], center: [40, 80], wait: 4, move: [6, 0], hitHold: true,
      bdy: { x: 0, y: 0, w: 80, h: 80 },
      hit: {
        up: 'runJumpPre',
        C: 'attack', X: 'defense', A: 'whirlwind', S: 'downPunch', D: 'ball',
      },
    },
    run3: {
      next: 'run', pic: ['0', 2, 2], center: [40, 80], wait: 4, move: [6, 0], hitHold: true,
      bdy: { x: 0, y: 0, w: 80, h: 80 },
      hit: {
        up: 'runJumpPre',
        C: 'attack', X: 'defense',  A: 'whirlwind', S: 'downPunch', D: 'ball',
      },
    },


    // 跑步跳躍
    runJumpPre: {
      next: 'runJumping', pic: ['0', 3, 6], center: [40, 80], wait: 0, move: [6, -5],
      bdy: { x: 0, y: 0, w: 80, h: 80 },
    },
    runJumping: {
      next: 'runJumping', pic: ['0', 3, 6], center: [40, 80], wait: 20,
      bdy: { x: 0, y: 0, w: 80, h: 80 },
      hit: {
        C: 'jumpAttack',
      },
    },


    // 跳躍
    jumpPre: {
      next: 'jumping', pic: ['0', 0, 6], center: [40, 80], wait: 1, move: [0, -8], flip: true,
      bdy: { x: 0, y: 0, w: 80, h: 80 },
      hit: {
        right: 'jumpPreMove', left: 'jumpPreMove',
      },
    },
    jumpPreMove: {
      next: 'jumping', pic: ['0', 0, 6], center: [40, 80], wait: 0, move: [4, -8], flip: true,
      bdy: { x: 0, y: 0, w: 80, h: 80 },
    },
    jumping: {
      next: 'jumping', pic: ['0', 2, 6], center: [40, 80], wait: 20, flip: true,

      bdy: { x: 0, y: 0, w: 80, h: 80 },
      hit: {
        C: 'jumpAttack',
      },
    },


    // 跳攻擊
    jumpAttack: {
      next: 'jumpAttack2', pic: ['0', 4, 1], center: [40, 80], wait: 2,
      bdy: { x: 0, y: 0, w: 80, h: 80 },
    },
    jumpAttack2: {
      next: 'jumpAttack3', pic: ['0', 5, 1], center: [40, 80], wait: 2,
      bdy: { x: 0, y: 0, w: 80, h: 80 },
      itr: { x: 0, y: 0, w: 80, h: 80, move: [2, 0], cd: 5, injury: 40, },
    },
    jumpAttack3: {
      next: 999, pic: ['0', 6, 1], center: [40, 80], wait: 20,
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
      bdy: { x: 0, y: 0, w: 80, h: 80 },
      itr: { x: 0, y: 0, w: 80, h: 80, move: [10, -2], cd: 5, injury: 40, },
    },
    runAttack4: {
      next: 'runAttack5', pic: ['1', 5, 3], center: [40, 80], wait: 2, move: [1, 0],
      bdy: { x: 0, y: 0, w: 80, h: 80 },
      itr: { x: 0, y: 0, w: 80, h: 80, move: [10, -2], cd: 5, injury: 40, },
    },
    runAttack5: {
      next: 999, pic: ['1', 6, 3], center: [40, 80], wait: 2, move: [1, 0],
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

    // ==============================================================================
    // 技能
    // ==============================================================================

    // 冰彈
    ball: {
      next: 'ball2', pic: ['2', 0, 0], center: [40, 80], wait: 3,
      bdy: { x: 0, y: 0, w: 80, h: 80 },
    },
    ball2: {
      next: 'ball3', pic: ['2', 1, 0], center: [40, 80], wait: 3,
      bdy: { x: 0, y: 0, w: 80, h: 80 },
    },
    ball3: {
      next: 'ball4', pic: ['2', 2, 0], center: [40, 80], wait: 3,
      bdy: { x: 0, y: 0, w: 80, h: 80 },
    },
    ball4: {
      next: 'ball5', pic: ['2', 3, 0], center: [40, 80], wait: 3,
      bdy: { x: 0, y: 0, w: 80, h: 80 },
      produce: { name: 'Freeze', frame: 'standing', x: 60, y: 7, },
    },
    ball5: {
      next: 'ball6', pic: ['2', 4, 0], center: [40, 80], wait: 3,
      bdy: { x: 0, y: 0, w: 80, h: 80 },
    },
    ball6: {
      next: 999, pic: ['2', 5, 0], center: [40, 80], wait: 3,
      bdy: { x: 0, y: 0, w: 80, h: 80 },
    },


    downPunch: {
      next: 'downPunch2', pic: ['1', 8, 0], center: [40, 80], wait: 1,
      bdy: { x: 0, y: 0, w: 80, h: 80 },
    },
    downPunch2: {
      next: 'downPunch3', pic: ['1', 9, 0], center: [40, 80], wait: 2,
      bdy: { x: 0, y: 0, w: 80, h: 80 },
    },
    downPunch3: {
      next: 'downPunch4', pic: ['1', 7, 1], center: [40, 80], wait: 2,
      bdy: { x: 0, y: 0, w: 80, h: 80 },
    },
    downPunch4: {
      next: 'downPunch5', pic: ['1', 8, 1], center: [40, 80], wait: 2,
      bdy: { x: 0, y: 0, w: 80, h: 80 },
    },
    downPunch5: {
      next: 'downPunch6', pic: ['1', 9, 1], center: [40, 80], wait: 2,
      bdy: { x: 0, y: 0, w: 80, h: 80 },
      produce: { name: 'Freeze', frame: 'cm', x: 60, y: 7, },
    },
    downPunch6: {
      next: 'downPunch7', pic: ['1', 5, 4], center: [40, 80], wait: 2,
      bdy: { x: 0, y: 0, w: 80, h: 80 },
    },
    downPunch7: {
      next: 'downPunch8', pic: ['1', 6, 4], center: [40, 80], wait: 2,
      bdy: { x: 0, y: 0, w: 80, h: 80 },
    },
    downPunch8: {
      next: 999, pic: ['1', 9, 4], center: [40, 80], wait: 2,
      bdy: { x: 0, y: 0, w: 80, h: 80 },
    },



  }
};







lf2.derivative.Freeze = {
  setting: {
    name: 'Freeze',
    file: {
      'ball': { deputy: 'png', w: 81, h: 82 },
      'col': { deputy: 'png', w: 110, h: 110 },
    },
    scale: 1,
  },
  frame: {

    standing: {
      next: 'standing2', pic: ['ball', 0, 0], center: [40, 82], wait: 2, move: [4, 0],
      bdy: { x: 0, y: 0, w: 80, h: 80 },
      itr: { x: 0, y: 0, w: 82, h: 83, cd: 100, injury: 40, move: [1, -10], next: 'falling', }
    },
    standing2: {
      next: 'standing3', pic: ['ball', 1, 0], center: [40, 82], wait: 2, move: [4, 0],
      bdy: { x: 0, y: 0, w: 80, h: 80 },
      itr: { x: 0, y: 0, w: 82, h: 83, cd: 100, injury: 40, move: [1, -10], next: 'falling', }
    },
    standing3: {
      next: 'standing4', pic: ['ball', 2, 0], center: [40, 82], wait: 2, move: [4, 0],
      bdy: { x: 0, y: 0, w: 80, h: 80 },
      itr: { x: 0, y: 0, w: 82, h: 83, cd: 100, injury: 40, move: [1, -10], next: 'falling', }
    },
    standing4: {
      next: 'standing', pic: ['ball', 3, 0], center: [40, 82], wait: 2, move: [4, 0],
      bdy: { x: 0, y: 0, w: 80, h: 80 },
      itr: { x: 0, y: 0, w: 82, h: 83, cd: 100, injury: 40, move: [1, -10], next: 'falling', }
    },

    falling: {
      next: 'disappear2', pic: ['ball', 0, 1], center: [40, 82], wait: 2, move: [2, 0],
    },
    disappear2: {
      next: 'disappear3', pic: ['ball', 1, 1], center: [40, 82], wait: 2,
    },
    disappear3: {
      next: 'disappear4', pic: ['ball', 2, 1], center: [40, 82], wait: 2,
    },
    disappear4: {
      next: 1000, pic: ['ball', 3, 1], center: [40, 82], wait: 2,
    },


    cm: {
      next: 'cm2', pic: ['col', 20, 0], center: [0, 0], wait: 10, move: [4, 0], shadowHide: true,
      produce: { name: 'freezeBall', frame: 'cols', x: 0, y: 0, },
    },
    cm2: {
      next: 'cm3', pic: ['col', 20, 0], center: [0, 0], wait: 10, move: [4, 0], shadowHide: true,
      produce: { name: 'freezeBall', frame: 'colm', x: 0, y: 0, },
    },
    cm3: {
      next: 1000, pic: ['col', 20, 0], center: [0, 0], wait: 0, move: [4, 0], shadowHide: true,
      produce: { name: 'freezeBall', frame: 'coll', x: 0, y: 0, },
    },

    cols: {
      next: 'cols2', pic: ['col', 0, 2], center: [40, 109], wait: 1,
      itr: { x: 0, y: 0, w: 82, h: 83, cd: 100, injury: 40, move: [1, -5], }
    },
    cols2: {
      next: 'cols3', pic: ['col', 1, 2], center: [40, 109], wait: 1,
      itr: { x: 0, y: 0, w: 82, h: 83, cd: 100, injury: 40, move: [1, -5], }
    },
    cols3: {
      next: 'cols4', pic: ['col', 2, 2], center: [40, 109], wait: 1,
      itr: { x: 0, y: 0, w: 82, h: 83, cd: 100, injury: 40, move: [1, -5], }
    },
    cols4: {
      next: 'cols5', pic: ['col', 3, 2], center: [40, 109], wait: 1,
      itr: { x: 0, y: 0, w: 82, h: 83, cd: 100, injury: 40, move: [1, -5], }
    },
    cols5: {
      next: 'cols6', pic: ['col', 4, 2], center: [40, 109], wait: 1,
    },
    cols6: {
      next: 1000, pic: ['col', 5, 2], center: [40, 109], wait: 100,
    },

    colm: {
      next: 'colm2', pic: ['col', 0, 1], center: [60, 109], wait: 1,
      itr: { x: 0, y: 0, w: 82, h: 83, cd: 100, injury: 40, move: [1, -5], }
    },
    colm2: {
      next: 'colm3', pic: ['col', 1, 1], center: [60, 109], wait: 1,
      itr: { x: 0, y: 0, w: 82, h: 83, cd: 100, injury: 40, move: [1, -5], }
    },
    colm3: {
      next: 'colm4', pic: ['col', 2, 1], center: [60, 109], wait: 1,
      itr: { x: 0, y: 0, w: 82, h: 83, cd: 100, injury: 40, move: [1, -5], }
    },
    colm4: {
      next: 'colm5', pic: ['col', 3, 1], center: [60, 109], wait: 1,
      itr: { x: 0, y: 0, w: 82, h: 83, cd: 100, injury: 40, move: [1, -5], }
    },
    colm5: {
      next: 'colm6', pic: ['col', 4, 1], center: [60, 109], wait: 1,
    },
    colm6: {
      next: 1000, pic: ['col', 5, 1], center: [60, 109], wait: 100,
    },

    coll: {
      next: 'coll2', pic: ['col', 0, 0], center: [50, 109], wait: 1,
      itr: { x: 0, y: 0, w: 82, h: 83, cd: 100, injury: 40, move: [1, -5], }
    },
    coll2: {
      next: 'coll3', pic: ['col', 1, 0], center: [50, 109], wait: 1,
      itr: { x: 0, y: 0, w: 82, h: 83, cd: 100, injury: 40, move: [1, -5], }
    },
    coll3: {
      next: 'coll4', pic: ['col', 2, 0], center: [50, 109], wait: 1,
      itr: { x: 0, y: 0, w: 82, h: 83, cd: 100, injury: 40, move: [1, -5], }
    },
    coll4: {
      next: 'coll5', pic: ['col', 3, 0], center: [50, 109], wait: 1,
      itr: { x: 0, y: 0, w: 82, h: 83, cd: 100, injury: 40, move: [1, -5], }
    },
    coll5: {
      next: 'coll6', pic: ['col', 4, 0], center: [50, 109], wait: 1,
    },
    coll6: {
      next: 1000, pic: ['col', 5, 0], center: [50, 109], wait: 100,
    },

  }
};


