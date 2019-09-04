lf2.map.hkc = {
  setting: {
    file: {
      'back1': { deputy: 'bmp', w: 794, h: 101 },
      'back2': { deputy: 'bmp', w: 794, h: 90 },
      'back22': { deputy: 'bmp', w: 794, h: 90 },
    },
    limit: { x: 800, y: 250, },
    backgroundColor: '#9D9FA1',
  },
  // 物件 (相當於人物的frame)
  component: {
    // 燈
    'back1': { next: 'back1', pic: ['back1', 0, 0], wait: 100, },

    // 觀眾
    'back2': { next: 'back22', pic: ['back2', 0, 0], wait: 20, },
    'back22': { next: 'back2', pic: ['back22', 0, 0], wait: 20, },
  },
  // 擺設 (相當於人物的setting)
  decorate: [
    { nowframe: 'back1', x: 0, y: 0, },
    { nowframe: 'back2', x: 0, y: 101, },
  ],
}

