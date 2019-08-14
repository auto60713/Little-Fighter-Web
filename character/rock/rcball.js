derivative.rcball = {
  Setting: {
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

