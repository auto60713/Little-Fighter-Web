lf2.map.hkc = {
  Setting: {
    name: 'hkc',
    file: {
      'back1': { src: 'map/hkc/back1.bmp', w: 794, h: 101 },
      'back2': { src: 'map/hkc/back2.bmp', w: 794, h: 90 },
      'back22': { src: 'map/hkc/back22.bmp', w: 794, h: 90 },
    },
    limit: { x: 800, y: 400, },
    backgroundColor: '#9D9FA1',
  },
  // 物件
  component: {
    'back1': {
      'standing': { next: 999, pic: ['back1', 0, 0], center: [397, 0], wait: 1, },
    },
    'back2': {
      'standing': { next: 'standing2', pic: ['back2', 0, 0], center: [397, 0], wait: 1, },
      'standing2': { next: 999, pic: ['back22', 0, 0], center: [397, 0], wait: 1, },
    },
  },
  // 擺設
  decorate: [
    { component: 'back1', scale: 1.1, x: 400, y: 0, },
    { component: 'back2', scale: 1.1, x: 400, y: 110, },
  ],
}
