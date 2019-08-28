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
      bdy: { x: 0, y: 0, w: 80, h: 80 },
      hit: {
        R: 'walking', L: 'walking', RR: 'running', LL: 'running', U: 'jump',
        B1: 'punch', B2: 'defend', B6: 'jumpSword', B5: 'dashSword', B4: 'blast',
      },
    },
    standing2: {
      next: 'standing3', pic: ['0', 1, 0], center: [40, 80], wait: 4, flip: true,
      bdy: { x: 0, y: 0, w: 80, h: 80 },
      hit: {
        R: 'walking', L: 'walking', RR: 'running', LL: 'running', U: 'jump',
        B1: 'punch', B2: 'defend',  B6: 'jumpSword', B5: 'dashSword', B4: 'blast',
      },
    },
    standing3: {
      next: 'standing4', pic: ['0', 2, 0], center: [40, 80], wait: 4, flip: true,
      bdy: { x: 0, y: 0, w: 80, h: 80 },
      hit: {
        R: 'walking', L: 'walking', RR: 'running', LL: 'running', U: 'jump',
        B1: 'punch', B2: 'defend',  B6: 'jumpSword', B5: 'dashSword', B4: 'blast',
      },
    },
    standing4: {
      next: 999, pic: ['0', 3, 0], center: [40, 80], wait: 4, flip: true,
      bdy: { x: 0, y: 0, w: 80, h: 80 },
      hit: {
        R: 'walking', L: 'walking', RR: 'running', LL: 'running', U: 'jump',
        B1: 'punch', B2: 'defend', B6: 'jumpSword', B5: 'dashSword', B4: 'blast',
      },
    },


    // 走路
    walking: {
      next: 'walking2', pic: ['0', 4, 0], center: [40, 80], wait: 4, move: [4, 0], flip: true, hitHold: true,
      bdy: { x: 0, y: 0, w: 80, h: 80 },
      hit: {
        RR: 'running', LL: 'running', U: 'jump',
        B1: 'punch', B2: 'defend',  B6: 'jumpSword', B5: 'dashSword', B4: 'blast',
      },
    },
    walking2: {
      next: 'walking3', pic: ['0', 5, 0], center: [40, 80], wait: 4, move: [4, 0], flip: true, hitHold: true,
      bdy: { x: 0, y: 0, w: 80, h: 80 },
      hit: {
        RR: 'running', LL: 'running', U: 'jump',
        B1: 'punch', B2: 'defend',  B6: 'jumpSword', B5: 'dashSword', B4: 'blast',
      },
    },
    walking3: {
      next: 'walking4', pic: ['0', 6, 0], center: [40, 80], wait: 4, move: [4, 0], flip: true, hitHold: true,
      bdy: { x: 0, y: 0, w: 80, h: 80 },
      hit: {
        RR: 'running', LL: 'running', U: 'jump',
        B1: 'punch', B2: 'defend',  B6: 'jumpSword', B5: 'dashSword', B4: 'blast',
      },
    },
    walking4: {
      next: 'walking', pic: ['0', 7, 0], center: [40, 80], wait: 4, move: [4, 0], flip: true, hitHold: true,
      bdy: { x: 0, y: 0, w: 80, h: 80 },
      hit: {
        RR: 'running', LL: 'running', U: 'jump',
        B1: 'punch', B2: 'defend',  B6: 'jumpSword', B5: 'dashSword', B4: 'blast',
      },
    },



    // 跑步
    run: {
      next: 'run2', pic: ['0', 0, 2], center: [40, 80], wait: 4, move: [6, 0], hitHold: true,
      bdy: { x: 0, y: 0, w: 80, h: 80 },
      hit: {
        U: 'dash',
        B1: 'punch', B2: 'defend', B6: 'jumpSword', B5: 'dashSword', B4: 'blast',
      },
    },
    run2: {
      next: 'run3', pic: ['0', 1, 2], center: [40, 80], wait: 4, move: [6, 0], hitHold: true,
      bdy: { x: 0, y: 0, w: 80, h: 80 },
      hit: {
        U: 'dash',
        B1: 'punch', B2: 'defend',  B6: 'jumpSword', B5: 'dashSword', B4: 'blast',
      },
    },
    run3: {
      next: 'running', pic: ['0', 2, 2], center: [40, 80], wait: 4, move: [6, 0], hitHold: true,
      bdy: { x: 0, y: 0, w: 80, h: 80 },
      hit: {
        U: 'dash',
        B1: 'punch', B2: 'defend', B6: 'jumpSword', B5: 'dashSword', B4: 'blast',
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
        B1: 'jump_attack',
      },
    },


    // 跳躍
    jumpPre: {
      next: 'jumping', pic: ['0', 0, 6], center: [40, 80], wait: 1, move: [0, -8], flip: true,
      bdy: { x: 0, y: 0, w: 80, h: 80 },
      hit: {
        R: 'jumpPreMove', L: 'jumpPreMove',
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
        B1: 'jump_attack',
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
      next: 'defend', pic: ['0', 6, 5], center: [40, 80], wait: 3, flip: true, hitHold: true,
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

    // 第一刀波
    blast: {
      next: 'blast2', pic: ['1', 5, 6], center: [40, 80], wait: 2,
      bdy: { x: 0, y: 0, w: 80, h: 80 },
    },
    blast2: {
      next: 'blast3', pic: ['1', 6, 6], center: [40, 80], wait: 2,
      bdy: { x: 0, y: 0, w: 80, h: 80 },
    },
    blast3: {
      next: 'blast4', pic: ['1', 7, 6], center: [40, 80], wait: 2,
      bdy: { x: 0, y: 0, w: 80, h: 80 },
    },
    blast4: {
      next: 'blast5', pic: ['1', 8, 6], center: [40, 80], wait: 2,
      bdy: { x: 0, y: 0, w: 80, h: 80 },
    },
    blast5: {
      next: 999, pic: ['1', 9, 6], center: [40, 80], wait: 2,
      bdy: { x: 0, y: 0, w: 80, h: 80 },
      hit: {
        B4: 'blast6',
      },
    },
    // 第二刀波
    blast6: {
      next: 'blast7', pic: ['1', 8, 0], center: [40, 80], wait: 2,
      bdy: { x: 0, y: 0, w: 80, h: 80 },
    },
    blast7: {
      next: 'blast8', pic: ['1', 9, 0], center: [40, 80], wait: 2,
      bdy: { x: 0, y: 0, w: 80, h: 80 },
    },
    blast8: {
      next: 'blast9', pic: ['1', 8, 1], center: [40, 80], wait: 2,
      bdy: { x: 0, y: 0, w: 80, h: 80 },
    },
    blast9: {
      next: 'blast10', pic: ['1', 9, 1], center: [40, 80], wait: 2,
      bdy: { x: 0, y: 0, w: 80, h: 80 },
    },
    blast10: {
      next: 999, pic: ['1', 9, 3], center: [40, 80], wait: 2,
      bdy: { x: 0, y: 0, w: 80, h: 80 },
      hit: {
        B4: 'blast11',
      },
    },
    // 第三刀波
    blast11: {
      next: 'blast12', pic: ['1', 0, 3], center: [40, 80], wait: 2,
      bdy: { x: 0, y: 0, w: 80, h: 80 },
    },
    blast12: {
      next: 'blast13', pic: ['1', 1, 3], center: [40, 80], wait: 2,
      bdy: { x: 0, y: 0, w: 80, h: 80 },
    },
    blast13: {
      next: 'blast14', pic: ['1', 0, 4], center: [40, 80], wait: 2,
      bdy: { x: 0, y: 0, w: 80, h: 80 },
    },
    blast14: {
      next: 'blast15', pic: ['1', 1, 4], center: [40, 80], wait: 2,
      bdy: { x: 0, y: 0, w: 80, h: 80 },
    },
    blast15: {
      next: 'blast16', pic: ['1', 9, 4], center: [40, 80], wait: 2,
      bdy: { x: 0, y: 0, w: 80, h: 80 },
    },
    blast16: {
      next: 999, pic: ['1', 9, 5], center: [40, 80], wait: 2,
      bdy: { x: 0, y: 0, w: 80, h: 80 },
    },




    dashSword: {
      next: 'dashSword2', pic: ['2', 0, 2], center: [40, 80], wait: 2, move: [5, 0],
      bdy: { x: 0, y: 0, w: 80, h: 80 },
    },
    dashSword2: {
      next: 'dashSword3', pic: ['2', 1, 2], center: [40, 80], wait: 2, move: [5, 0],
      bdy: { x: 0, y: 0, w: 80, h: 80 },
    },
    dashSword3: {
      next: 'dashSword4', pic: ['2', 2, 2], center: [40, 80], wait: 2, move: [5, 0],
      bdy: { x: 0, y: 0, w: 80, h: 80 },
    },
    dashSword4: {
      next: 'dashSword5', pic: ['2', 3, 2], center: [40, 80], wait: 2, move: [5, 0],
      bdy: { x: 0, y: 0, w: 80, h: 80 },
    },
    dashSword5: {
      next: 'dashSword6', pic: ['2', 4, 2], center: [40, 80], wait: 2, move: [5, 0],
      bdy: { x: 0, y: 0, w: 80, h: 80 },
    },
    dashSword6: {
      next: 'dashSword7', pic: ['2', 5, 2], center: [40, 80], wait: 2, move: [5, 0],
      bdy: { x: 0, y: 0, w: 80, h: 80 },
    },
    dashSword7: {
      next: 'dashSword8', pic: ['2', 6, 2], center: [40, 80], wait: 2, move: [5, 0],
      bdy: { x: 0, y: 0, w: 80, h: 80 },
    },
    dashSword8: {
      next: 'dashSword9', pic: ['2', 7, 2], center: [40, 80], wait: 2, move: [5, 0],
      bdy: { x: 0, y: 0, w: 80, h: 80 },
    },
    dashSword9: {
      next: 'dashSword10', pic: ['2', 8, 2], center: [40, 80], wait: 2, move: [5, 0],
      bdy: { x: 0, y: 0, w: 80, h: 80 },
    },
    dashSword10: {
      next: 'dashSword11', pic: ['2', 9, 2], center: [40, 80], wait: 2, move: [5, 0],
      bdy: { x: 0, y: 0, w: 80, h: 80 },
    },
    dashSword11: {
      next: 'dashSword12', pic: ['2', 9, 3], center: [40, 80], wait: 2, move: [5, 0],
      bdy: { x: 0, y: 0, w: 80, h: 80 },
    },
    dashSword12: {
      next: 'dashSword13', pic: ['2', 8, 3], center: [40, 80], wait: 2, move: [5, 0],
      bdy: { x: 0, y: 0, w: 80, h: 80 },
    },
    dashSword13: {
      next: 'dashSword14', pic: ['2', 7, 3], center: [40, 80], wait: 2, move: [5, 0],
      bdy: { x: 0, y: 0, w: 80, h: 80 },
    },
    dashSword14: {
      next: 'dashSword15', pic: ['2', 6, 3], center: [40, 80], wait: 2, move: [5, 0],
      bdy: { x: 0, y: 0, w: 80, h: 80 },
    },
    dashSword15: {
      next: 'dashSword16', pic: ['2', 5, 3], center: [40, 80], wait: 2, move: [5, 0],
      bdy: { x: 0, y: 0, w: 80, h: 80 },
    },
    dashSword16: {
      next: 'dashSword17', pic: ['2', 4, 3], center: [40, 80], wait: 2, move: [5, 0],
      bdy: { x: 0, y: 0, w: 80, h: 80 },
    },
    dashSword17: {
      next: 'dashSword18', pic: ['2', 3, 3], center: [40, 80], wait: 2, move: [5, 0],
      bdy: { x: 0, y: 0, w: 80, h: 80 },
    },
    dashSword18: {
      next: 'dashSword19', pic: ['2', 2, 3], center: [40, 80], wait: 2, move: [5, 0],
      bdy: { x: 0, y: 0, w: 80, h: 80 },
    },
    dashSword19: {
      next: 'dashSword20', pic: ['2', 1, 3], center: [40, 80], wait: 2, move: [5, 0],
      bdy: { x: 0, y: 0, w: 80, h: 80 },
    },
    dashSword20: {
      next: 999, pic: ['2', 0, 3], center: [40, 80], wait: 2, move: [5, 0],
      bdy: { x: 0, y: 0, w: 80, h: 80 },
    },


    // 第一上斬
    jumpSword: {
      next: 'jumpSword2', pic: ['2', 0, 0], center: [40, 80], wait: 2, move: [2, 0],
      bdy: { x: 0, y: 0, w: 80, h: 80 },
    },
    jumpSword2: {
      next: 'jumpSword3', pic: ['2', 1, 0], center: [40, 80], wait: 2,
      bdy: { x: 0, y: 0, w: 80, h: 80 },
    },
    jumpSword3: {
      next: 'jumpSword4', pic: ['2', 2, 0], center: [40, 80], wait: 2,
      bdy: { x: 0, y: 0, w: 80, h: 80 },
    },
    jumpSword4: {
      next: 'jumpSword5', pic: ['2', 3, 0], center: [40, 80], wait: 2,
      bdy: { x: 0, y: 0, w: 80, h: 80 },
    },
    jumpSword5: {
      next: 'jumpSword6', pic: ['2', 4, 0], center: [40, 80], wait: 2,
      bdy: { x: 0, y: 0, w: 80, h: 80 },
    },
    jumpSword6: {
      next: 'jumpSword7', pic: ['2', 7, 1], center: [40, 80], wait: 2,
      bdy: { x: 0, y: 0, w: 80, h: 80 },
    },
    jumpSword7: {
      next: 'jumpSword8', pic: ['2', 6, 2], center: [40, 80], wait: 2,
      bdy: { x: 0, y: 0, w: 80, h: 80 },
      hit: {
        U: 'jumpSword15',
      },
    },
    jumpSword8: {
      next: 999, pic: ['2', 5, 2], center: [40, 80], wait: 2,
      bdy: { x: 0, y: 0, w: 80, h: 80 },
      hit: {
        B6: 'jumpSword9', U: 'jumpSword15',
      },
    },

    // 第二上斬
    jumpSword9: {
      next: 'jumpSword10', pic: ['2', 1, 1], center: [40, 80], wait: 2, move: [2, 0],
      bdy: { x: 0, y: 0, w: 80, h: 80 },
    },
    jumpSword10: {
      next: 'jumpSword11', pic: ['2', 0, 1], center: [40, 80], wait: 2,
      bdy: { x: 0, y: 0, w: 80, h: 80 },
    },
    jumpSword11: {
      next: 'jumpSword12', pic: ['2', 2, 1], center: [40, 80], wait: 2,
      bdy: { x: 0, y: 0, w: 80, h: 80 },
    },
    jumpSword12: {
      next: 'jumpSword13', pic: ['2', 3, 1], center: [40, 80], wait: 2,
      bdy: { x: 0, y: 0, w: 80, h: 80 },
    },
    jumpSword13: {
      next: 'jumpSword14', pic: ['2', 4, 1], center: [40, 80], wait: 2,
      bdy: { x: 0, y: 0, w: 80, h: 80 },
      hit: {
        U: 'jumpSword15',
      },
    },
    jumpSword14: {
      next: 999, pic: ['2', 0, 3], center: [40, 80], wait: 2,
      bdy: { x: 0, y: 0, w: 80, h: 80 },
      hit: {
        B6: 'jumpSword', U: 'jumpSword15',
      },
    },


    // 上斬跳
    jumpSword15: {
      next: 'jumpSword16', pic: ['2', 5, 0], center: [40, 80], wait: 2, move: [5, -8],
      bdy: { x: 0, y: 0, w: 80, h: 80 },
    },
    jumpSword16: {
      next: 'jumpSword16', pic: ['2', 6, 0], center: [40, 80], wait: 2,
      bdy: { x: 0, y: 0, w: 80, h: 80 },
      hit: {
        B6: 'jumpSword17',
      },
    },

    // 下斬
    jumpSword17: {
      next: 'jumpSword18', pic: ['2', 7, 0], center: [40, 80], wait: 2,
      bdy: { x: 0, y: 0, w: 80, h: 80 },
    },
    jumpSword18: {
      next: 'jumpSword19', pic: ['2', 8, 0], center: [40, 80], wait: 2,
      bdy: { x: 0, y: 0, w: 80, h: 80 },
    },
    jumpSword19: {
      next: 'jumpSword20', pic: ['2', 9, 0], center: [40, 80], wait: 2,
      bdy: { x: 0, y: 0, w: 80, h: 80 },
    },
    jumpSword20: {
      next: 'jumpSword21', pic: ['2', 9, 1], center: [40, 80], wait: 2,
      bdy: { x: 0, y: 0, w: 80, h: 80 },
    },
    jumpSword21: {
      next: 'jumpSword21', pic: ['2', 8, 1], center: [40, 80], wait: 2,
      bdy: { x: 0, y: 0, w: 80, h: 80 },
    },

  }
};




