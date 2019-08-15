character.freeze = {
  Setting: {
    name: 'Freeze',
    file: {
      '0': { src: 'character/freeze/freeze_0.png', w: 80, h: 80 },
      '1': { src: 'character/freeze/freeze_1.png', w: 80, h: 80 },
      '2': { src: 'character/freeze/freeze_2.png', w: 80, h: 80 },
    },
    walkingSpeed: 8,
    jumpPower: 4.5,
    scale: 1,
  },
  frame: {
    // standing
    0: {
      pertain: 'idle', pic: ['0', 0, 0], center: [0, 0], next: 1, wait: 2, flip: true, walk: true,
      hitHold: {},
      hit: { up: 6, right: 3, left: 3, },
    },
    // standing
    1: {
      pertain: 'idle', pic: ['0', 1, 0], center: [0, 0], next: 2, wait: 2, flip: true, walk: true,
      hitHold: {},
      hit: { up: 6, right: 3, left: 3, },
    },
    // standing
    2: {
      pertain: 'idle', pic: ['0', 2, 0], center: [0, 0], next: 0, wait: 2, flip: true, walk: true,
      hitHold: {},
      hit: { up: 6, right: 3, left: 3, },
    },

    // walking
    3: {
      pertain: 'idle', pic: ['0', 3, 0], center: [0, 0], next: 999, wait: 2, flip: true, walk: true,
      hitHold: { right: 4, left: 4, },
      hit: { up: 6, },
    },
    // walking
    4: {
      pertain: 'idle', pic: ['0', 4, 0], center: [0, 0], next: 999, wait: 2, flip: true, walk: true,
      hitHold: { right: 5, left: 5, },
      hit: { up: 6, },
    },
    // walking
    5: {
      pertain: 'idle', pic: ['0', 5, 0], center: [0, 0], next: 999, wait: 2, flip: true, walk: true,
      hitHold: { right: 3, left: 3, },
      hit: { up: 6, },
    },

    // jump-pre
    6: {
      pertain: 'jump', pic: ['0', 4, 1], center: [0, 0], next: 8, wait: 0, move: [0, -8], flip: true, walk: true,
    },

    // jumping
    8: {
      pertain: 'idle', pic: ['0', 4, 1], center: [0, 0], next: 8, wait: 1, flip: true,
    },




    // 受傷
    20: {
      pertain: 'skill', pic: ['0', 6, 0], center: [0, 0], next: 999, wait: 2,
      hitHold: {},
      hit: {},
    },
  }
};

