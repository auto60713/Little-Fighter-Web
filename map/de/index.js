map.de = {
  Setting: {
    name: 'de',
    file: {
      'g1': { src: 'map/de/g1.png', w: 69, h: 69 },
      'g2': { src: 'map/de/g2.png', w: 69, h: 69 },
      's1': { src: 'map/de/s1.png', w: 215, h: 71 },
    },
    limit: { x: 750, y: 340, },
    scale: 1,
  },
  // 物件
  component: {
    'g1': {
      frame: {
        0: { pic: ['g1', 0, 0], center: [0, 0], next: 0, wait: 1, },
      }
    }
  },
  // 擺設
  arrange: [
    {
      component: 'g1', x: 69 * 0, y: 400, nowwait: 0, nowframe: 0,
    },
    {
      component: 'g1', x: 69 * 1, y: 400, nowwait: 0, nowframe: 0,
    },
    {
      component: 'g1', x: 69 * 2, y: 400, nowwait: 0, nowframe: 0,
    },
    {
      component: 'g1', x: 69 * 3, y: 400, nowwait: 0, nowframe: 0,
    },
    {
      component: 'g1', x: 69 * 4, y: 400, nowwait: 0, nowframe: 0,
    },
    {
      component: 'g1', x: 69 * 5, y: 400, nowwait: 0, nowframe: 0,
    },
    {
      component: 'g1', x: 69 * 6, y: 400, nowwait: 0, nowframe: 0,
    },
    {
      component: 'g1', x: 69 * 7, y: 400, nowwait: 0, nowframe: 0,
    },
    {
      component: 'g1', x: 69 * 8, y: 400, nowwait: 0, nowframe: 0,
    },
    {
      component: 'g1', x: 69 * 9, y: 400, nowwait: 0, nowframe: 0,
    },
    {
      component: 'g1', x: 69 * 10, y: 400, nowwait: 0, nowframe: 0,
    },
    {
      component: 'g1', x: 69 * 11, y: 400, nowwait: 0, nowframe: 0,
    },


  ],
}