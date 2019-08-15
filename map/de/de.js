lf2.map.de = {
  Setting: {
    name: 'de',
    file: {
      'g1': { src: 'map/de/g1.png', w: 69, h: 69 },
      'g2': { src: 'map/de/g2.png', w: 69, h: 69 },
      's1': { src: 'map/de/s1.png', w: 215, h: 71 },
    },
    limit: { x: 1320, y: 400, },
    scale: 1,
  },
  // 物件
  component: {
    'g1': {
      frame: {
        'standing': { pic: ['g1', 0, 0], center: [0, 0], next: 999, wait: 1, },
      }
    }
  },
  // 擺設
  decorate: [
    {
      component: 'g1', x: 0, y: 400, nowwait: 0, nowframe: 'standing',
      repeat: { attr: 'x', numer: 69, times: 20, },
    },
  ],
}

