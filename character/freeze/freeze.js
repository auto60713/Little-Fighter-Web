lf2.character.Freeze = {
  setting: {
    name: 'Freeze',
    file: {
      '0': { deputy: 'png', w: 80, h: 80 },
      '1': { deputy: 'png', w: 80, h: 80 },
      '2': { deputy: 'png', w: 80, h: 80 },
    },
    scale: 1,
    HP: 500,
  },
  frame: {

    // 站立
    standing: {
      next: 'standing2', pic: ['0', 0, 0], center: [39, 79], wait: 16, flip: true,
      bdy: { x: 21, y: 18, w: 43, h: 62 },
      hit: {
        R: 'walking', L: 'walking', RR: 'running', LL: 'running', U: 'jump',
        B1: 'punch', B2: 'defend', B4: 'whirlwind', B5: 'downPunch', B6: 'ball',
      },
    },
    standing2: {
      next: 'standing3', pic: ['0', 0, 1], center: [39, 79], wait: 7, flip: true,
      bdy: { x: 21, y: 18, w: 43, h: 62 },
      hit: {
        R: 'walking', L: 'walking', RR: 'running', LL: 'running', U: 'jump',
        B1: 'punch', B2: 'defend', B4: 'whirlwind', B5: 'downPunch', B6: 'ball',
      },
    },
    standing3: {
      next: 'standing4', pic: ['0', 0, 2], center: [39, 79], wait: 5, flip: true,
      bdy: { x: 21, y: 18, w: 43, h: 62 },
      hit: {
        R: 'walking', L: 'walking', RR: 'running', LL: 'running', U: 'jump',
        B1: 'punch', B2: 'defend', B4: 'whirlwind', B5: 'downPunch', B6: 'ball',
      },
    },
    standing4: {
      next: 999, pic: ['0', 0, 3], center: [39, 79], wait: 7, flip: true,
      bdy: { x: 21, y: 18, w: 43, h: 62 },
      hit: {
        R: 'walking', L: 'walking', RR: 'running', LL: 'running', U: 'jump',
        B1: 'punch', B2: 'defend', B4: 'whirlwind', B5: 'downPunch', B6: 'ball',
      },
    },


    // 走路
    walking: {
      next: 'walking2', pic: ['0', 0, 4], center: [39, 78], wait: 3, move: [4, 0], flip: true, hitHold: true,
      bdy: { x: 28, y: 15, w: 27, h: 65 },
      hit: {
        RR: 'running', LL: 'running', U: 'jump',
        B1: 'punch', B2: 'defend', B4: 'whirlwind', B5: 'downPunch', B6: 'ball',
      },
    },
    walking2: {
      next: 'walking3', pic: ['0', 0, 5], center: [39, 79], wait: 3, move: [4, 0], flip: true, hitHold: true,
      bdy: { x: 28, y: 15, w: 27, h: 65 },
      hit: {
        RR: 'running', LL: 'running', U: 'jump',
        B1: 'punch', B2: 'defend', B4: 'whirlwind', B5: 'downPunch', B6: 'ball',
      },
    },
    walking3: {
      next: 'walking4', pic: ['0', 0, 6], center: [39, 79], wait: 3, move: [4, 0], flip: true, hitHold: true,
      bdy: { x: 28, y: 15, w: 27, h: 65 },
      hit: {
        RR: 'running', LL: 'running', U: 'jump',
        B1: 'punch', B2: 'defend', B4: 'whirlwind', B5: 'downPunch', B6: 'ball',
      },
    },
    walking4: {
      next: 'walking', pic: ['0', 0, 7], center: [39, 78], wait: 3, move: [4, 0], flip: true, hitHold: true,
      bdy: { x: 28, y: 15, w: 27, h: 65 },
      hit: {
        RR: 'running', LL: 'running', U: 'jump',
        B1: 'punch', B2: 'defend', B4: 'whirlwind', B5: 'downPunch', B6: 'ball',
      },
    },


    // 跑步
    run: {
      next: 'run2', pic: ['0', 2, 0], center: [35, 79], wait: 3, move: [6, 0], hitHold: true,
      bdy: { x: 25, y: 19, w: 38, h: 60 },
      hit: {
        U: 'dash',
        B1: 'punch', B2: 'defend', B4: 'whirlwind', B5: 'downPunch', B6: 'ball',
      },
    },
    run2: {
      next: 'run3', pic: ['0', 2, 1], center: [41, 79], wait: 3, move: [6, 0], hitHold: true,
      bdy: { x: 25, y: 19, w: 38, h: 60 },
      hit: {
        U: 'dash',
        B1: 'punch', B2: 'defend', B4: 'whirlwind', B5: 'downPunch', B6: 'ball',
      },
    },
    run3: {
      next: 'running', pic: ['0', 2, 2], center: [36, 79], wait: 3, move: [6, 0], hitHold: true,
      bdy: { x: 25, y: 19, w: 38, h: 60 },
      hit: {
        U: 'dash',
        B1: 'punch', B2: 'defend', B4: 'whirlwind', B5: 'downPunch', B6: 'ball',
      },
    },


    // 普攻
    attack: {
      next: 'attack2', pic: ['0', 1, 0], center: [42, 79], wait: 2, move: [1, 0],
      bdy: { x: 26, y: 12, w: 27, h: 68 },
    },
    attack2: {
      next: 999, pic: ['0', 1, 1], center: [35, 79], wait: 2,
      bdy: { x: 25, y: 11, w: 35, h: 69 },
      itr: { x: 44, y: 31, w: 35, h: 22, move: [2, 0], cd: 5, injury: 20, },

    },


    // 跳攻擊
    jumpAttack: {
      next: 'jumpAttack2', pic: ['0', 1, 4], center: [40, 80], wait: 3,
      bdy: { x: 26, y: 3, w: 36, h: 69 },
    },
    jumpAttack2: {
      next: 'jumpAttack3', pic: ['0', 1, 5], center: [40, 80], wait: 1,
      bdy: { x: 13, y: 5, w: 36, h: 70 },
      itr: { x: 28, y: 32, w: 40, h: 25, move: [7, 0], cd: 5, injury: 35, },
    },
    jumpAttack3: {
      next: 999, pic: ['0', 1, 6], center: [40, 80], wait: 5,
      bdy: { x: 14, y: 3, w: 36, h: 69 },
      itr: { x: 28, y: 36, w: 44, h: 22, move: [7, 0], cd: 5, injury: 35, },
    },


    // 跑步攻擊
    runAttack: {
      next: 'runAttack2', pic: ['1', 2, 3], center: [36, 79], wait: 1, move: [6, 0],
      bdy: { x: 18, y: 9, w: 38, h: 69 },
    },
    runAttack2: {
      next: 'runAttack3', pic: ['1', 3, 3], center: [36, 79], wait: 1, move: [4, 0],
      bdy: { x: 18, y: 9, w: 39, h: 70 },
    },
    runAttack3: {
      next: 'runAttack4', pic: ['1', 4, 3], center: [17, 79], wait: 1,
      bdy: { x: 10, y: 12, w: 40, h: 68 },
      itr: { x: 21, y: 33, w: 57, h: 30, move: [10, 0], cd: 5, injury: 50, },
    },
    runAttack4: {
      next: 'runAttack5', pic: ['1', 5, 3], center: [16, 79], wait: 2,
      bdy: { x: 15, y: 15, w: 41, h: 63 },
      itr: { x: 13, y: 35, w: 64, h: 37, move: [10, 0], cd: 5, injury: 50, },
    },
    runAttack5: {
      next: 999, pic: ['1', 6, 3], center: [16, 79], wait: 3,
      bdy: { x: 16, y: 20, w: 38, h: 61 },
    },


    // 跑跳攻
    runAttack: {
      next: 'runAttack2', pic: ['1', 4, 7], center: [26, 78], wait: 2,
      bdy: { x: 0, y: 0, w: 80, h: 80 },
    },
    runAttack2: {
      next: 'runAttack3', pic: ['1', 4, 8], center: [20, 78], wait: 3,
      bdy: { x: 0, y: 0, w: 80, h: 80 },
      itr: { x: 24, y: 23, w: 55, h: 39, move: [12, 0], cd: 5, injury: 70, },
    },
    runAttack3: {
      next: 'runAttack4', pic: ['1', 4, 9], center: [29, 77], wait: 3,
      bdy: { x: 0, y: 0, w: 80, h: 80 },
    },
    runAttack4: {
      next: 'runAttack4', pic: ['1', 5, 2], center: [39, 79], wait: 100,
      bdy: { x: 0, y: 0, w: 80, h: 80 },
    },


    // 防禦
    defense: {
      next: 'defend', pic: ['0', 5, 6], center: [39, 79], wait: 3, flip: true, hitHold: true,
      bdy: { x: 20, y: 19, w: 38, h: 60 },
    },


    // 被打飛
    falling: {
      next: 'falling2', pic: ['0', 3, 0], center: [39, 79], wait: 3, falling: true,
      bdy: { x: 25, y: 25, w: 21, h: 20 },
    },
    falling2: {
      next: 'falling3', pic: ['0', 3, 1], center: [37, 85], wait: 3, falling: true,
      bdy: { x: 22, y: 20, w: 24, h: 23 },
    },
    falling3: {
      next: 'falling4', pic: ['0', 3, 2], center: [39, 79], wait: 3, falling: true,
      bdy: { x: 27, y: 22, w: 20, h: 18 },
    },
    falling4: {
      next: 'falling4', pic: ['0', 3, 3], center: [39, 79], wait: 3, falling: true,
      bdy: { x: 22, y: 30, w: 27, h: 21 },
    },

    // 躺地
    lyingDown: {
      next: 999, pic: ['0', 3, 4], center: [39, 72], wait: 10, lyingDown: true,
    },


    // 跳躍
    jumpPre: {
      next: 'jumping', pic: ['0', 6, 0], center: [39, 79], wait: 1, move: [0, -8], flip: true,
      bdy: { x: 22, y: 24, w: 35, h: 58 },
      hit: {
        R: 'jumpPreMove', L: 'jumpPreMove',
      },
    },
    jumpPreMove: {
      next: 'jumping', pic: ['0', 6, 1], center: [42, 79], wait: 0, move: [4, -8], flip: true,
      bdy: { x: 26, y: 26, w: 34, h: 56 },
    },
    jumping: {
      next: 'jumping', pic: ['0', 6, 2], center: [39, 79], wait: 20, flip: true,

      bdy: { x: 0, y: 0, w: 80, h: 80 },
      hit: {
        B1: 'jump_attack',
      },
    },


    // 跑步跳躍
    runJumpPre: {
      next: 'runJumping', pic: ['0', 6, 3], center: [39, 79], wait: 0, move: [6, -5],
      bdy: { x: 0, y: 0, w: 80, h: 80 },
    },
    runJumping: {
      next: 'runJumping', pic: ['0', 6, 3], center: [39, 79], wait: 20,
      bdy: { x: 0, y: 0, w: 80, h: 80 },
      hit: {
        B1: 'jump_attack',
      },
    },









    // 受傷
    injured: {
      next: 999, pic: ['0', 6, 0], center: [40, 80], wait: 2,
      bdy: { x: 0, y: 0, w: 80, h: 80 },
    },



    // ==============================================================================
    // 技能
    // ==============================================================================

    // 冰彈
    ball: {
      next: 'ball2', pic: ['2', 0, 0], center: [40, 79], wait: 1,
      bdy: { x: 26, y: 12, w: 27, h: 68 },
    },
    ball2: {
      next: 'ball3', pic: ['2', 1, 0], center: [39, 79], wait: 1,
      bdy: { x: 26, y: 12, w: 27, h: 68 },
    },
    ball3: {
      next: 'ball4', pic: ['2', 2, 0], center: [22, 79], wait: 1, move: [4, 0],
      bdy: { x: 26, y: 12, w: 27, h: 68 },
    },
    ball4: {
      next: 'ball5', pic: ['2', 3, 0], center: [39, 79], wait: 1, move: [3, 0],
      bdy: { x: 26, y: 12, w: 27, h: 68 },
      produce: { name: 'Freeze', frame: 'standing', x: 80, y: 46 },
    },
    ball5: {
      next: 'ball6', pic: ['2', 4, 0], center: [37, 79], wait: 2, move: [1, 0],
      bdy: { x: 25, y: 11, w: 35, h: 67 },
    },
    ball6: {
      next: 999, pic: ['2', 5, 0], center: [32, 79], wait: 3,
      bdy: { x: 24, y: 14, w: 31, h: 64 },
    },


    downPunch: {
      next: 'downPunch2', pic: ['1', 0, 8], center: [39, 79], wait: 1,
      bdy: { x: 24, y: 14, w: 31, h: 64 },
    },
    downPunch2: {
      next: 'downPunch3', pic: ['1', 0, 9], center: [30, 79], wait: 1,
      bdy: { x: 24, y: 14, w: 31, h: 64 },
    },
    downPunch3: {
      next: 'downPunch4', pic: ['1', 1, 7], center: [30, 79], wait: 1,
      bdy: { x: 24, y: 14, w: 31, h: 64 },
    },
    downPunch4: {
      next: 'downPunch5', pic: ['1', 1, 8], center: [28, 79], wait: 1,
      bdy: { x: 24, y: 14, w: 31, h: 64 },
    },
    downPunch5: {
      next: 'downPunch6', pic: ['1', 1, 9], center: [32, 79], wait: 1,
      bdy: { x: 24, y: 14, w: 31, h: 64 },
    },
    downPunch6: {
      next: 'downPunch7', pic: ['1', 4, 5], center: [32, 79], wait: 2,
      bdy: { x: 24, y: 14, w: 31, h: 64 },
      produce: { name: 'Freeze', frame: 'cm', x: 105, y: 77 },
    },
    downPunch7: {
      next: 'downPunch8', pic: ['1', 4, 6], center: [32, 79], wait: 4,
      bdy: { x: 24, y: 14, w: 31, h: 64 },
    },
    downPunch8: {
      next: 999, pic: ['1', 4, 9], center: [32, 79], wait: 3,
      bdy: { x: 24, y: 14, w: 31, h: 64 },
    },



  }
};







lf2.derivative.Freeze = {
  setting: {
    name: 'Freeze',
    file: {
      'ball': { deputy: 'png', w: 82, h: 83 },
      'col': { deputy: 'png', w: 110, h: 110 },
      'ww': { deputy: 'png', w: 160, h: 160 },
    },
    scale: 1,
  },
  frame: {

    standing: {
      next: 'standing2', pic: ['ball', 0, 0], center: [40, 41], wait: 0, move: [9, 0],
      bdy: { x: 22, y: 27, w: 55, h: 27 },
      itr: { x: 22, y: 27, w: 55, h: 27, move: [7, 0], cd: 100, injury: 45, next: 'falling', }
    },
    standing2: {
      next: 'standing3', pic: ['ball', 0, 1], center: [40, 41], wait: 0, move: [9, 0],
      bdy: { x: 22, y: 27, w: 55, h: 27 },
      itr: { x: 22, y: 27, w: 55, h: 27, move: [7, 0], cd: 100, injury: 45, next: 'falling', }
    },
    standing3: {
      next: 'standing4', pic: ['ball', 0, 2], center: [40, 41], wait: 0, move: [9, 0],
      bdy: { x: 22, y: 27, w: 55, h: 27 },
      itr: { x: 22, y: 27, w: 55, h: 27, move: [7, 0], cd: 100, injury: 45, next: 'falling', }
    },
    standing4: {
      next: 'standing5', pic: ['ball', 3, 0], center: [40, 41], wait: 0, move: [9, 0],
      bdy: { x: 22, y: 27, w: 55, h: 27 },
      itr: { x: 22, y: 27, w: 55, h: 27, move: [7, 0], cd: 100, injury: 45, next: 'falling', }
    },
    standing5: {
      next: 'standing6', pic: ['ball', 2, 0], center: [40, 43], wait: 0, move: [9, 0],
      bdy: { x: 22, y: 27, w: 55, h: 27 },
      itr: { x: 22, y: 27, w: 55, h: 27, move: [7, 0], cd: 100, injury: 45, next: 'falling', }
    },
    standing6: {
      next: 'standing', pic: ['ball', 3, 0], center: [40, 43], wait: 0, move: [9, 0],
      bdy: { x: 22, y: 27, w: 55, h: 27 },
      itr: { x: 22, y: 27, w: 55, h: 27, move: [7, 0], cd: 100, injury: 45, next: 'falling', }
    },


    falling: {
      next: 'disappear2', pic: ['ball', 0, 1], center: [44, 41], wait: 1, move: [2, 0],
    },
    disappear2: {
      next: 'disappear3', pic: ['ball', 1, 1], center: [44, 41], wait: 1,
    },
    disappear3: {
      next: 'disappear4', pic: ['ball', 2, 1], center: [44, 41], wait: 1,
    },
    disappear4: {
      next: 1000, pic: ['ball', 3, 1], center: [44, 41], wait: 1,
    },


    cm: {
      next: 'cm2', pic: ['col', 20, 0], center: [1, 0], wait: 1, move: [4, 0], shadowHide: true,
    },
    cm2: {
      next: 'cm3', pic: ['col', 20, 0], center: [1, 0], wait: 5, move: [6, 0], shadowHide: true,
      produce: { name: 'freezeBall', frame: 'cols', x: -13, y: 5 },
    },
    cm3: {
      next: 'cm4', pic: ['col', 20, 0], center: [1, 0], wait: 5, move: [6, 0], shadowHide: true,
      produce: { name: 'freezeBall', frame: 'colm', x: -5, y: 5 },
    },
    cm4: {
      next: 1000, pic: ['col', 20, 0], center: [1, 0], wait: 1, move: [6, 0], shadowHide: true,
      produce: { name: 'freezeBall', frame: 'coll', x: 29, y: 5 },
    },



    cols: {
      next: 'cols2', pic: ['col', 2, 0], center: [25, 111], wait: 1,
      itr: { x: 16, y: 83, w: 26, h: 25, cd: 100, injury: 60, move: [7, -10], }
    },
    cols2: {
      next: 'cols3', pic: ['col', 2, 1], center: [35, 111], wait: 2,
      itr: { x: 23, y: 44, w: 41, h: 64, cd: 100, injury: 60, move: [7, -10], }
    },
    cols3: {
      next: 'cols4', pic: ['col', 2, 2], center: [38, 112], wait: 2,
      itr: { x: 17, y: 44, w: 54, h: 58, cd: 100, injury: 60, move: [7, -10], }
    },
    cols4: {
      next: 'cols5', pic: ['col', 2, 3], center: [35, 112], wait: 4,
      itr: { x: 11, y: 27, w: 51, h: 79, cd: 100, injury: 60, move: [7, -10], }
    },
    cols5: {
      next: 'cols6', pic: ['col', 2, 4], center: [33, 112], wait: 3,
    },
    cols6: {
      next: 1000, pic: ['col', 2, 5], center: [37, 112], wait: 175,
    },


    colm: {
      next: 'colm2', pic: ['col', 0, 1], center: [35, 111], wait: 1,
      itr: { x: 3, y: 59, w: 42, h: 51, cd: 100, injury: 60, move: [7, -10], }
    },
    colm2: {
      next: 'colm3', pic: ['col', 1, 1], center: [38, 111], wait: 2,
      itr: { x: 12, y: 20, w: 57, h: 87, cd: 100, injury: 60, move: [7, -10], }
    },
    colm3: {
      next: 'colm4', pic: ['col', 2, 1], center: [40, 1112], wait: 2,
      itr: { x: 14, y: 26, w: 65, h: 84, cd: 100, injury: 60, move: [7, -10], }
    },
    colm4: {
      next: 'colm5', pic: ['col', 3, 1], center: [34, 112], wait: 4,
      itr: { x: 5, y: 23, w: 65, h: 84, cd: 100, injury: 60, move: [7, -10], }
    },
    colm5: {
      next: 'colm6', pic: ['col', 4, 1], center: [39, 112], wait: 3,
    },
    colm6: {
      next: 1000, pic: ['col', 5, 1], center: [41, 112], wait: 175,
    },


    coll: {
      next: 'coll2', pic: ['col', 0, 0], center: [44, 111], wait: 1,
      itr: { x: 3, y: 59, w: 42, h: 51, cd: 100, injury: 60, move: [7, -10], }
    },
    coll2: {
      next: 'coll3', pic: ['col', 0, 1], center: [48, 111], wait: 2,
      itr: { x: 14, y: 7, w: 66, h: 101, cd: 100, injury: 60, move: [7, -10], }
    },
    coll3: {
      next: 'coll4', pic: ['col', 0, 2], center: [51, 112], wait: 2,
      itr: { x: 14, y: 15, w: 70, h: 95, cd: 100, injury: 60, move: [7, -10], }
    },
    coll4: {
      next: 'coll5', pic: ['col', 0, 3], center: [52, 112], wait: 4,
      itr: { x: 14, y: 15, w: 70, h: 95, cd: 100, injury: 60, move: [7, -10], }
    },
    coll5: {
      next: 'coll6', pic: ['col', 0, 4], center: [52, 112], wait: 3,
    },
    coll6: {
      next: 1000, pic: ['col', 0, 5], center: [52, 112], wait: 175,
    },

  }
};


