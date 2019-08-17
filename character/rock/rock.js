lf2.character.rock = {
  setting: {
    name: 'Rock',
    file: {
      'action': { src: 'character/rock/0.png', w: 64, h: 64 },
    },
    walkingSpeed: 8,
    jumpPower: 4.5,
    scale: 1,
  },
  frame: {
    // standing
    0: {
      pertain: 'idle', pic: ['action', 0, 0], center: [0, 0], next: 1, wait: 2, flip: true, walk: true,
      hitHold: {},
      hit: { Q: 10, up: 6, right: 3, left: 3, },
      bdy: { x: 0, y: 0, w: 64, h: 64 },
    },
    // standing
    1: {
      pertain: 'idle', pic: ['action', 1, 0], center: [0, 0], next: 2, wait: 2, flip: true, walk: true,
      hitHold: {},
      hit: { Q: 10, up: 6, right: 3, left: 3, },
      bdy: { x: 0, y: 0, w: 64, h: 64 },
    },
    // standing
    2: {
      pertain: 'idle', pic: ['action', 2, 0], center: [0, 0], next: 0, wait: 2, flip: true, walk: true,
      hitHold: {},
      hit: { Q: 10, up: 6, right: 3, left: 3, },
      bdy: { x: 0, y: 0, w: 64, h: 64 },
    },

    // walking
    3: {
      pertain: 'idle', pic: ['action', 3, 0], center: [0, 0], next: 999, wait: 2, flip: true, walk: true,
      hitHold: { right: 4, left: 4, },
      hit: { Q: 10, up: 6, },
    },
    // walking
    4: {
      pertain: 'idle', pic: ['action', 4, 0], center: [0, 0], next: 999, wait: 2, flip: true, walk: true,
      hitHold: { right: 5, left: 5, },
      hit: { Q: 10, up: 6, },
    },
    // walking
    5: {
      pertain: 'idle', pic: ['action', 5, 0], center: [0, 0], next: 999, wait: 2, flip: true, walk: true,
      hitHold: { right: 3, left: 3, },
      hit: { Q: 10, up: 6, },
    },

    // jump-pre
    6: {
      pertain: 'jump', pic: ['action', 4, 1], center: [0, 0], next: 8, wait: 0, move: [0, -8], flip: true, walk: true,
      hitHold: {},
      hit: {},
    },

    // jumping
    8: {
      pertain: 'idle', pic: ['action', 4, 1], center: [0, 0], next: 8, wait: 1, flip: true,
      hitHold: {},
      hit: { Q: 11, },
    },


    // shoot
    10: {
      pertain: 'skill', pic: ['action', 0, 1], center: [0, 0], next: 999, wait: 3,
      hitHold: { Q: 10, },
      hit: {},
      produce: { name: 'rcball', x: 60, y: 7, powX: 10, powY: 0, }
    },

    // jump-shoot
    11: {
      pertain: 'skill', pic: ['action', 5, 1], center: [0, 0], next: 999, wait: 1,
      hitHold: { Q: 11, },
      hit: {},
      produce: { name: 'rcball', x: 60, y: 7, powX: 10, powY: 0, }
    },



    // 受傷
    20: {
      pertain: 'skill', pic: ['action', 6, 0], center: [0, 0], next: 999, wait: 2,
      hitHold: {},
      hit: {},
    },
  }
};



lf2.derivative.rcball = {
  setting: {
    name: 'rcball',
    file: {
      'action': { src: 'character/rock/rcball.png', w: 1280, h: 1280 },
    },
    scale: 0.05,
  },
  frame: {
    0: {
      pic: ['action', 0, 0], center: [0, 0], next: 1, wait: 1, move: [4, 0],
      itr: {
        x: 0, y: 0, w: 80, h: 1, move: [1, -3], fall: 70, cd: 100, bdefend: 30, injury: 45,
      }
    },
    1: {
      pic: ['action', 0, 0], center: [0, 0], next: 0, wait: 1, move: [4, 0],
      itr: {
        x: 0, y: 0, w: 80, h: 1, move: [1, -3], fall: 70, cd: 100, bdefend: 30, injury: 45,
      }
    },

  }
};

