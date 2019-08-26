lf2.character.Davis = {
  setting: {
    name: 'Davis',
    file: {
      '0': { deputy: 'png', w: 80, h: 80 },
      '1': { deputy: 'png', w: 80, h: 80 },
      '2': { deputy: 'png', w: 80, h: 80 },
    },
    scale: 1,
    HP: 500,
  },
  frame: {

    // 校正完畢

    // 站立
    standing: {
      next: 'standing2', pic: ['0', 0, 0], center: [39, 79], wait: 5, flip: true,
      bdy: { x: 21, y: 18, w: 43, h: 62 },
      hit: {
        R: 'walking', L: 'walking', RR: 'run', LL: 'run', U: 'jumpPre',
        B1: 'attack', B2: 'defense', B6: 'singLong', B5: 'manyPunch', B4: 'ball',
      },
    },
    standing2: {
      next: 'standing3', pic: ['0', 0, 1], center: [39, 79], wait: 3, flip: true,
      bdy: { x: 21, y: 18, w: 43, h: 62 },
      hit: {
        R: 'walking', L: 'walking', RR: 'run', LL: 'run', U: 'jumpPre',
        B1: 'attack', B2: 'defense', B6: 'singLong', B5: 'manyPunch', B4: 'ball',
      },
    },
    standing3: {
      next: 'standing4', pic: ['0', 0, 2], center: [39, 79], wait: 5, flip: true,
      bdy: { x: 21, y: 18, w: 43, h: 62 },
      hit: {
        R: 'walking', L: 'walking', RR: 'run', LL: 'run', U: 'jumpPre',
        B1: 'attack', B2: 'defense', B6: 'singLong', B5: 'manyPunch', B4: 'ball',
      },
    },
    standing4: {
      next: 999, pic: ['0', 0, 3], center: [39, 79], wait: 9, flip: true,
      bdy: { x: 21, y: 18, w: 43, h: 62 },
      hit: {
        R: 'walking', L: 'walking', RR: 'run', LL: 'run', U: 'jumpPre',
        B1: 'attack', B2: 'defense', B6: 'singLong', B5: 'manyPunch', B4: 'ball',
      },
    },


    // 走路
    walking: {
      next: 'walking2', pic: ['0', 0, 4], center: [39, 78], wait: 3, move: [5, 0], flip: true, hitHold: true,
      bdy: { x: 28, y: 15, w: 27, h: 65 },
      hit: {
        RR: 'run', LL: 'run', U: 'jumpPre',
        B1: 'attack', B2: 'defense', B6: 'singLong', B5: 'manyPunch', B4: 'ball',
      },
    },
    walking2: {
      next: 'walking3', pic: ['0', 0, 5], center: [39, 79], wait: 3, move: [5, 0], flip: true, hitHold: true,
      bdy: { x: 28, y: 15, w: 27, h: 65 },
      hit: {
        RR: 'run', LL: 'run', U: 'jumpPre',
        B1: 'attack', B2: 'defense', B6: 'singLong', B5: 'manyPunch', B4: 'ball',
      },
    },
    walking3: {
      next: 'walking4', pic: ['0', 0, 6], center: [39, 79], wait: 3, move: [5, 0], flip: true, hitHold: true,
      bdy: { x: 28, y: 15, w: 27, h: 65 },
      hit: {
        RR: 'run', LL: 'run', U: 'jumpPre',
        B1: 'attack', B2: 'defense', B6: 'singLong', B5: 'manyPunch', B4: 'ball',
      },
    },
    walking4: {
      next: 'walking', pic: ['0', 0, 7], center: [39, 79], wait: 3, move: [5, 0], flip: true, hitHold: true,
      bdy: { x: 28, y: 15, w: 27, h: 65 },
      hit: {
        RR: 'run', LL: 'run', U: 'jumpPre',
        B1: 'attack', B2: 'defense', B6: 'singLong', B5: 'manyPunch', B4: 'ball',
      },
    },


    // 跑步
    run: {
      next: 'run2', pic: ['0', 2, 0], center: [36, 80], wait: 3, move: [10, 0], hitHold: true,
      bdy: { x: 25, y: 19, w: 38, h: 60 },
      hit: {
        U: 'runJumpPre',
        B1: 'runAttack', B2: 'defense', B6: 'singLong', B5: 'manyPunch', B4: 'ball',
      },
    },
    run2: {
      next: 'run3', pic: ['0', 2, 1], center: [37, 79], wait: 3, move: [10, 0], hitHold: true,
      bdy: { x: 25, y: 19, w: 38, h: 60 },
      hit: {
        U: 'runJumpPre',
        B1: 'runAttack', B2: 'defense', B6: 'singLong', B5: 'manyPunch', B4: 'ball',
      },
    },
    run3: {
      next: 'run', pic: ['0', 2, 2], center: [32, 78], wait: 3, move: [10, 0], hitHold: true,
      bdy: { x: 25, y: 19, w: 38, h: 60 },
      hit: {
        U: 'runJumpPre',
        B1: 'runAttack', B2: 'defense', B6: 'singLong', B5: 'manyPunch', B4: 'ball',
      },
    },


    // 普攻
    attack: {
      next: 'attack2', pic: ['0', 1, 0], center: [42, 79], wait: 1, move: [1, 0],
      bdy: { x: 28, y: 12, w: 33, h: 70 },
    },
    attack2: {
      next: 'attack3', pic: ['0', 1, 1], center: [23, 79], wait: 1,
      bdy: { x: 13, y: 11, w: 31, h: 68 },
      itr: { x: 21, y: 31, w: 43, h: 18, move: [2, 0], cd: 5, injury: 20, },
    },
    attack3: {
      next: 'attack4', pic: ['0', 1, 2], center: [28, 79], wait: 1,
      bdy: { x: 17, y: 9, w: 31, h: 72 },
    },
    attack4: {
      next: 999, pic: ['0', 1, 3], center: [41, 79], wait: 1,
      bdy: { x: 29, y: 10, w: 32, h: 70 },
    },


    // 跳攻擊
    jumpAttack: {
      next: 'jumpAttack2', pic: ['1', 6, 2], center: [36, 75], wait: 1,
      bdy: { x: 18, y: 10, w: 35, h: 57 },
    },
    jumpAttack2: {
      next: 'jumpAttack3', pic: ['1', 6, 3], center: [39, 74], wait: 1,
      bdy: { x: 22, y: 9, w: 35, h: 56 },
    },
    jumpAttack3: {
      next: 'jumpAttack4', pic: ['1', 6, 4], center: [35, 75], wait: 1,
      bdy: { x: 24, y: 6, w: 29, h: 60 },
    },
    jumpAttack4: {
      next: 'jumpAttack5', pic: ['1', 6, 5], center: [25, 70], wait: 3,
      bdy: { x: 11, y: 2, w: 29, h: 63 },
      itr: { x: 17, y: 37, w: 52, h: 17, move: [9, -5], cd: 5, injury: 60, },
    },
    jumpAttack5: {
      next: 'jumpAttack6', pic: ['1', 6, 6], center: [25, 71], wait: 1,
      bdy: { x: 11, y: 5, w: 28, h: 63 },
      itr: { x: 32, y: 40, w: 36, h: 16, move: [9, -5], cd: 5, injury: 60, },
    },
    jumpAttack6: {
      next: 999, pic: ['1', 6, 7], center: [33, 72], wait: 3,
      bdy: { x: 21, y: 6, w: 29, h: 58 },
    },


    // 跑步攻擊
    runAttack: {
      next: 'runAttack2', pic: ['1', 3, 2], center: [35, 79], wait: 2,
      bdy: { x: 17, y: 25, w: 44, h: 54 },
    },
    runAttack2: {
      next: 'runAttack3', pic: ['1', 3, 3], center: [30, 79], wait: 1, move: [16, 0],
      bdy: { x: 25, y: 24, w: 31, h: 55 },
    },
    runAttack3: {
      next: 'runAttack4', pic: ['1', 3, 4], center: [25, 79], wait: 1,
      bdy: { x: 15, y: 19, w: 37, h: 62 },
      itr: { x: -18, y: 24, w: 88, h: 30, move: [20, 0], cd: 5, injury: 55, },
    },
    runAttack4: {
      next: 'runAttack5', pic: ['1', 3, 5], center: [20, 79], wait: 3,
      bdy: { x: 14, y: 14, w: 43, h: 67 },
      itr: { x: 28, y: 25, w: 43, h: 27, move: [17, 0], cd: 5, injury: 40, },
    },
    runAttack5: {
      next: 'runAttack6', pic: ['1', 3, 6], center: [20, 79], wait: 2,
      bdy: { x: 14, y: 14, w: 43, h: 67 },
    },
    runAttack6: {
      next: 'runAttack7', pic: ['1', 3, 6], center: [30, 79], wait: 2,
      bdy: { x: 20, y: 11, w: 31, h: 68 },
    },
    runAttack7: {
      next: 999, pic: ['1', 3, 6], center: [32, 79], wait: 1,
      bdy: { x: 20, y: 11, w: 31, h: 68 },
    },


    // 跑跳攻擊
    dashAttack: {
      next: 'dashAttack2', pic: ['1', 6, 2], center: [36, 75], wait: 1,
      bdy: { x: 18, y: 10, w: 35, h: 57 },
    },
    dashAttack2: {
      next: 'dashAttack3', pic: ['0', 6, 3], center: [39, 74], wait: 1,
      bdy: { x: 22, y: 9, w: 35, h: 56 },
    },
    dashAttack3: {
      next: 'dashAttack4', pic: ['0', 6, 4], center: [35, 75], wait: 1,
      bdy: { x: 24, y: 6, w: 29, h: 60 },
    },
    dashAttack4: {
      next: 'dashAttack5', pic: ['0', 6, 5], center: [25, 70], wait: 3,
      bdy: { x: 11, y: 2, w: 29, h: 63 },
      itr: { x: 17, y: 37, w: 52, h: 17, move: [14, -5], cd: 5, injury: 80, },
    },
    dashAttack5: {
      next: 'dashAttack6', pic: ['0', 6, 6], center: [25, 71], wait: 1,
      bdy: { x: 11, y: 5, w: 28, h: 63 },
      itr: { x: 32, y: 40, w: 36, h: 16, move: [14, -5], cd: 5, injury: 80, },
    },
    dashAttack6: {
      next: 999, pic: ['0', 6, 7], center: [33, 72], wait: 3,
      bdy: { x: 21, y: 6, w: 29, h: 58 },
    },


    // 防禦
    defense: {
      next: 'defense', pic: ['0', 5, 6], center: [39, 79], wait: 3, flip: true, hitHold: true,
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
      next: 999, pic: ['0', 3, 4], center: [39, 66], wait: 10, lyingDown: true,
    },


    // 跳躍
    jumpPre: {
      next: 'jumping', pic: ['0', 6, 0], center: [39, 79], wait: 1, move: [0, -16/2], flip: true,
      bdy: { x: 22, y: 24, w: 35, h: 58 },
      hit: {
        R: 'jumpPreMove', L: 'jumpPreMove',
      },
    },
    jumpPreMove: {
      next: 'jumping', pic: ['0', 6, 1], center: [39, 79], wait: 0, move: [10/2, -16/2], flip: true,
      bdy: { x: 26, y: 26, w: 34, h: 56 },
    },
    jumping: {
      next: 'jumping', pic: ['0', 6, 2], center: [39, 79], wait: 20, flip: true,
      bdy: { x: 20, y: 11, w: 29, h: 61 },
      hit: {
        B1: 'jumpAttack',
      },
    },


    // 跑步跳躍
    runJumpPre: {
      next: 'runJumping', pic: ['0', 6, 3], center: [39, 79], wait: 0, move: [18/2, -10/2],
      bdy: { x: 0, y: 0, w: 80, h: 80 },
    },
    runJumping: {
      next: 'runJumping', pic: ['0', 6, 3], center: [39, 79], wait: 20,
      bdy: { x: 0, y: 0, w: 80, h: 80 },
      hit: {
        B1: 'jumpAttack',
      },
    },








    // 受傷
    injured: {
      next: 999, pic: ['0', 0, 6], center: [40, 80], wait: 2,
      bdy: { x: 0, y: 0, w: 80, h: 80 },
    },








    // ==============================================================================
    // 技能
    // ==============================================================================


    ball: {
      next: 'ball2', pic: ['2', 0, 0], center: [39, 79], wait: 1,
      bdy: { x: 21, y: 18, w: 43, h: 62 },
    },
    ball2: {
      next: 'ball3', pic: ['2', 0, 1], center: [39, 79], wait: 1,
      bdy: { x: 21, y: 18, w: 43, h: 62 },
    },
    ball3: {
      next: 'ball4', pic: ['2', 0, 2], center: [39, 79], wait: 1,
      bdy: { x: 21, y: 18, w: 43, h: 62 },
    },
    ball4: {
      next: 'ball5', pic: ['2', 0, 3], center: [39, 79], wait: 1,
      bdy: { x: 21, y: 18, w: 43, h: 62 },
    },
    ball5: {
      next: 'ball6', pic: ['2', 0, 4], center: [30, 79], wait: 1,
      bdy: { x: 21, y: 18, w: 43, h: 62 },
      produce: { name: 'Davis', frame: 'standing', x: 90, y: 43 },
    },
    ball6: {
      next: 'ball7', pic: ['2', 0, 6], center: [39, 79], wait: 1,
      bdy: { x: 21, y: 18, w: 43, h: 62 },
    },
    ball7: {
      next: 999, pic: ['2', 0, 0], center: [39, 79], wait: 2,
      bdy: { x: 21, y: 18, w: 43, h: 62 },
    },


    manyPunch: {
      next: 'manyPunch2', pic: ['2', 1, 3], center: [37, 79], wait: 1, move: [7, 0],
      bdy: { x: 21, y: 18, w: 43, h: 62 },
    },
    manyPunch2: {
      next: 'manyPunch3', pic: ['2', 1, 4], center: [33, 79], wait: 1, move: [5, 0],
      bdy: { x: 21, y: 18, w: 43, h: 62 },
      itr: { x: 17, y: 35, w: 61, h: 13, move: [7, 0], cd: 5, injury: 25, },
    },
    manyPunch3: {
      next: 'manyPunch4', pic: ['2', 1, 5], center: [38, 79], wait: 1, move: [3, 0],
      bdy: { x: 21, y: 18, w: 43, h: 62 },
    },
    manyPunch4: {
      next: 'manyPunch5', pic: ['2', 1, 6], center: [32, 79], wait: 1, move: [3, 0],
      bdy: { x: 21, y: 18, w: 43, h: 62 },
      itr: { x: 14, y: 35, w: 58, h: 18, move: [7, 0], cd: 5, injury: 25, },
    },
    manyPunch5: {
      next: 'manyPunch6', pic: ['2', 1, 7], center: [24, 79], wait: 1, move: [3, 0],
      bdy: { x: 21, y: 18, w: 43, h: 62 },
    },
    manyPunch6: {
      next: 'manyPunch7', pic: ['2', 1, 8], center: [24, 79], wait: 1, move: [5, 0],
      bdy: { x: 21, y: 18, w: 43, h: 62 },
    },
    manyPunch7: {
      next: 'manyPunch8', pic: ['2', 1, 9], center: [22, 79], wait: 1, move: [5, 0],
      bdy: { x: 21, y: 18, w: 43, h: 62 },
      itr: { x: -1, y: 22, w: 81, h: 25, move: [2, -1], cd: 5, injury: 25, },
    },
    manyPunch8: {
      next: 'manyPunch9', pic: ['2', 2, 9], center: [18, 79], wait: 1, move: [3, 0],
      bdy: { x: 21, y: 18, w: 43, h: 62 },
    },
    manyPunch9: {
      next: 'manyPunch10', pic: ['2', 2, 8], center: [22, 79], wait: 1, move: [5, 0],
      bdy: { x: 21, y: 18, w: 43, h: 62 },
    },
    manyPunch10: {
      next: 'manyPunch11', pic: ['2', 2, 7], center: [26, 79], wait: 1, move: [7, 0],
      bdy: { x: 21, y: 18, w: 43, h: 62 },
    },
    manyPunch11: {
      next: 'manyPunch12', pic: ['2', 2, 6], center: [22, 79], wait: 1, move: [3, 0],
      bdy: { x: 21, y: 18, w: 43, h: 62 },
      itr: { x: 12, y: 11, w: 70, h: 51, move: [7, -15], cd: 5, injury: 25, },
    },
    manyPunch12: {
      next: 'manyPunch13', pic: ['2', 2, 5], center: [27, 79], wait: 2, move: [3, 0],
      bdy: { x: 21, y: 18, w: 43, h: 62 },
    },
    manyPunch13: {
      next: 999, pic: ['2', 2, 4], center: [34, 79], wait: 3,
      bdy: { x: 21, y: 18, w: 43, h: 62 },
    },


    // 昇龍拳
    singLong: {
      next: 'singLong2', pic: ['2', 3, 0], center: [30, 76], wait: 1, move: [7, -9],
    },
    singLong2: {
      next: 'singLong3', pic: ['2', 3, 1], center: [28, 79], wait: 1,
      itr: { x: 10, y: 3, w: 72, h: 75, move: [7, -13], cd: 5, injury: 85, },
    },
    singLong3: {
      next: 'singLong4', pic: ['2', 3, 2], center: [26, 81], wait: 1,
      bdy: { x: 19, y: 7, w: 36, h: 69 },
      itr: { x: 13, y: -1, w: 67, h: 80, move: [7, -11], cd: 5, injury: 60, },
    },
    singLong4: {
      next: 'singLong5', pic: ['2', 3, 3], center: [26, 78], wait: 1,
      bdy: { x: 28, y: 12, w: 29, h: 66 },
      itr: { x: 11, y: -2, w: 63, h: 80, move: [7, -9], cd: 5, injury: 45, },
    },
    singLong5: {
      next: 'singLong6', pic: ['2', 3, 4], center: [34, 81], wait: 2,
      bdy: { x: 0, y: 0, w: 80, h: 80 },
      itr: { x: 19, y: 1, w: 61, h: 80, move: [7, -7], cd: 5, injury: 30, },
    },
    singLong6: {
      next: 'singLong7', pic: ['2', 3, 5], center: [33, 75], wait: 2,
      bdy: { x: 27, y: 7, w: 28, h: 65 },
    },
    singLong7: {
      next: 'singLong8', pic: ['2', 3, 6], center: [29, 74], wait: 3,
      bdy: { x: 23, y: 11, w: 30, h: 61 },
    },
    singLong8: {
      next: 999, pic: ['2', 3, 7], center: [29, 73], wait: 20,
      bdy: { x: 21, y: 3, w: 33, h: 68 },
    },


  }
};





lf2.derivative.Davis = {
  setting: {
    name: 'Davis',
    file: {
      'ball': { deputy: 'png', w: 82, h: 47 },
    },
    scale: 1,
  },
  frame: {

    standing: {
      next: 'standing2', pic: ['ball', 0, 0], center: [56, 24], wait: 1, move: [4, 0],
      bdy: { x: 26, y: 12, w: 45, h: 24 },
      itr: { x: 26, y: 12, w: 45, h: 24, cd: 100, injury: 30, move: [7, 0], next: 'falling', }
    },
    standing2: {
      next: 'standing3', pic: ['ball', 0, 1], center: [53, 24], wait: 1, move: [5, 0],
      bdy: { x: 26, y: 12, w: 45, h: 24 },
      itr: { x: 26, y: 12, w: 45, h: 24, cd: 100, injury: 30, move: [7, 0], next: 'falling', }
    },
    standing3: {
      next: 'standing4', pic: ['ball', 0, 0], center: [56, 24], wait: 1, move: [7, 0],
      bdy: { x: 26, y: 12, w: 45, h: 24 },
      itr: { x: 26, y: 12, w: 45, h: 24, cd: 100, injury: 30, move: [7, 0], next: 'falling', }
    },
    standing4: {
      next: 'standing5', pic: ['ball', 0, 1], center: [52, 24], wait: 1, move: [9, 0],
      bdy: { x: 26, y: 12, w: 45, h: 24 },
      itr: { x: 26, y: 12, w: 45, h: 24, cd: 100, injury: 30, move: [7, 0], next: 'falling', }
    },
    standing5: {
      next: 'standing6', pic: ['ball', 0, 2], center: [53, 24], wait: 1, move: [10, 0],
      bdy: { x: 26, y: 12, w: 45, h: 24 },
      itr: { x: 26, y: 12, w: 45, h: 24, cd: 100, injury: 30, move: [7, 0], next: 'falling', }
    },
    standing6: {
      next: 'standing7', pic: ['ball', 0, 3], center: [52, 24], wait: 1, move: [13, 0],
      bdy: { x: 26, y: 12, w: 45, h: 24 },
      itr: { x: 26, y: 12, w: 45, h: 24, cd: 100, injury: 30, move: [7, 0], next: 'falling', }
    },
    standing7: {
      next: 'standing8', pic: ['ball', 0, 2], center: [53, 24], wait: 1, move: [16, 0],
      bdy: { x: 26, y: 12, w: 45, h: 24 },
      itr: { x: 26, y: 12, w: 45, h: 24, cd: 100, injury: 30, move: [7, 0], next: 'falling', }
    },
    standing8: {
      next: 'standing9', pic: ['ball', 0, 3], center: [53, 24], wait: 1, move: [18, 0],
      bdy: { x: 26, y: 12, w: 45, h: 24 },
      itr: { x: 26, y: 12, w: 45, h: 24, cd: 100, injury: 30, move: [7, 0], next: 'falling', }
    },
    standing9: {
      next: 'standing10', pic: ['ball', 2, 0], center: [55, 24], wait: 1, move: [20, 0],
      bdy: { x: 26, y: 12, w: 45, h: 24 },
      itr: { x: 26, y: 12, w: 45, h: 24, cd: 100, injury: 30, move: [7, 0], next: 'falling', }
    },
    standing10: {
      next: 'standing9', pic: ['ball', 2, 1], center: [55, 24], wait: 1, move: [20, 0],
      bdy: { x: 26, y: 12, w: 45, h: 24 },
      itr: { x: 26, y: 12, w: 45, h: 24, cd: 100, injury: 30, move: [7, 0], next: 'falling', }
    },


    falling: {
      next: 'disappear2', pic: ['ball', 1, 0], center: [55, 22], wait: 1,
    },
    disappear2: {
      next: 'disappear3', pic: ['ball', 1, 1], center: [52, 23], wait: 1,
    },
    disappear3: {
      next: 'disappear4', pic: ['ball', 1, 2], center: [46, 21], wait: 1,
    },
    disappear4: {
      next: 1000, pic: ['ball', 1, 3], center: [43, 22], wait: 1,
    },


  }
};



