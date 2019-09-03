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
    'back1': {
      'standing': { next: 'standing', pic: ['back1', 0, 0], wait: 100, },
    },
    // 觀眾
    'back2': {
      'standing': { next: 'standing2', pic: ['back2', 0, 0], wait: 20, },
      'standing2': { next: 'standing', pic: ['back22', 0, 0], wait: 20, },
    },
  },
  // 擺設 (相當於人物的setting)
  decorate: [
    { component: 'back1', x: 0, y: 0, },
    { component: 'back2', x: 0, y: 101, },
  ],
}

