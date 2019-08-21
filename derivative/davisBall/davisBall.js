

lf2.derivative.davisBall = {
    setting: {
        name: 'davisBall',
        file: {
            'ball': { deputy: 'png', w: 81, h: 82 },
        },
        scale: 1,
    },
    frame: {
        standing: {
            next: 'fly2', pic: ['ball', 0, 0], center: [40, 82], wait: 2, move: [4, 0],
            itr: { x: 0, y: 0, w: 82, h: 83, cd: 100, injury: 40, move: [1, -10], }
        },
        fly2: {
            next: 'fly3', pic: ['ball', 1, 0], center: [40, 82], wait: 2, move: [4, 0],
            itr: { x: 0, y: 0, w: 82, h: 83, cd: 100, injury: 40, move: [1, -10], }
        },
        fly3: {
            next: 'fly4', pic: ['ball', 2, 0], center: [40, 82], wait: 2, move: [4, 0],
            itr: { x: 0, y: 0, w: 82, h: 83, cd: 100, injury: 40, move: [1, -10], }
        },
        fly4: {
            next: 'standing', pic: ['ball', 3, 0], center: [40, 82], wait: 2, move: [4, 0],
            itr: { x: 0, y: 0, w: 82, h: 83, cd: 100, injury: 40, move: [1, -10], }
        },
    }
};


