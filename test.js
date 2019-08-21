describe('------------------ Test setArray ------------------', () => {
    afterEach(() => {})
    
    it('Function check', () => {
        const act = ArrayList.setArray([1,2,3]);
        const exp = [1,2,3];
        assert.deepEqual(act, exp);
    });
    
    
    const testedData = [
        {
            value: [1,2,3,4,5],
            expected: [1,2,3,4,5]
        },
        
        {
            value: [4,5,2,5,7,8],
            expected: [4,5,2,5,7,8]
        }
    ];
    
    for (let testSuite of testedData) {
        it(`Test  value ${testSuite['value']} expected ${testSuite['expected']}`, function () {
            const act = ArrayList.setArray(testSuite['value']);
            assert.deepEqual(act, testSuite['expected']);
        });
    }
    
    it('Array length is greater than zero', () => {
        const act = ArrayList.setArray([]);
        assert.isFalse(act);
    });
    
    it('Not string', () => {
        const act = ArrayList.setArray('test');
        assert.isFalse(act);
    });
    
    it('Not Number', () => {
        const act = ArrayList.setArray(546);
        assert.isFalse(act);
    });  
});

describe('------------------ Test getReverse ------------------', () => {
    beforeEach(() => {
    })
    
    it('Function check', () => {
        const act = ArrayList.getReverse(ArrayList.setArray([1,2,3,4,5]));
        const exp = [5,4,3,2,1];
        assert.deepEqual(act, exp);
    });
    
    
    const testedData = [
        {
            'value': [1,2,3,4,5,8],
            'expected': [8,5,4,3,2,1]
        },
        
        {    
            'value': [4,5,2,5,7,8],
            'expected': [8,7,5,2,5,4]
        }
    ];
    
    for (let testSuite of testedData) {
        it(`Test  value ${testSuite['value']} expected ${testSuite['expected']}`,() => {
            const act = ArrayList.getReverse(ArrayList.setArray(testSuite['value']));
            assert.deepEqual(act, testSuite['expected']);
        });
    }
    
    it('Array length is greater than zero', () => {
        const act = ArrayList.getReverse();
        assert.isFalse(act);
    });
    
    it('Not string', () => {
        const act = ArrayList.getReverse();
        assert.isFalse(act);
    });
    
    it('Not Number', () => {
        const act = ArrayList.getReverse();
        assert.isFalse(act);
    });  
});

describe('------------------ Test getPush ------------------', () => {
    beforeEach(() => {
    })
    
    it('Function check', () => {
        ArrayList.setArray([1,2,3,4,5])
        const act = ArrayList.getPush(6,7);
        const exp = [1,2,3,4,5,6,7];
        assert.deepEqual(act, exp);
    });
    
    
    const testedData = [
        {
            'value': [8,5,4,3,2,1],
            'value1': 1,
            'expected': [8,5,4,3,2,1,1]
        },
        
        {    
            'value': [8,7,5,2,5,4],
            'value1': 96,
            'expected': [8,7,5,2,5,4,96]
        },
        
         {    
            'value': [4,5,6,7,8,9,0],
            'value1': 4444,
            'expected': [4,5,6,7,8,9,0,4444]
        },
        
         {    
            'value': [8,7,5,2,5,4],
            'value1': 96,
            'expected': [8,7,5,2,5,4,96]
        }
    ];
    
    for (let testSuite of testedData) {
        it(`Test  value ${testSuite['value']} expected ${testSuite['expected']}`,() => {
            ArrayList.setArray(testSuite['value'])
            const act = ArrayList.getPush(testSuite['value1']);
            assert.deepEqual(act, testSuite['expected']);
        });
    } 
});

describe('------------------ Test getSort ------------------', () => {
    beforeEach(() => {
    })
    
    it('Function check', () => {
        const act = ArrayList.getSort(ArrayList.setArray([1,2,3,7,5]));
        const exp = [1,2,3,5,7];
        assert.deepEqual(act, exp);
    });
    
    
    const testedData = [
        {
            'value': [8,5,4,3,2,1],
            'expected': [1,2,3,4,5,8]
        },
        
        {    
            'value': [5,5,5,7,7,3,2,9],
            'expected': [2,3,5,5,5,7,7,9]
        }
    ];
    
    for (let testSuite of testedData) {
        it(`Test  value ${testSuite['value']} expected ${testSuite['expected']}`,() => {
            const act = ArrayList.getSort(ArrayList.setArray(testSuite['value']));
            assert.deepEqual(act, testSuite['expected']);
        });
    }
    
    it('Array length is greater than zero', () => {
        const act = ArrayList.getSort();
        assert.isFalse(act);
    });
    
    it('Not string', () => {
        const act = ArrayList.getSort();
        assert.isFalse(act);
    });
    
    it('Not Number', () => {
        const act = ArrayList.getSort();
        assert.isFalse(act);
    });  
});

describe('------------------ Test getPop ------------------', () => {
    beforeEach(() => {
    })
    
    it('Function check', () => {
        const act = ArrayList.getPop(ArrayList.setArray([1,2,3,7,5]));
        const exp = [1,2,3,7];
        assert.deepEqual(act, exp);
    });
    
    
    const testedData = [
        {
            'value': [8,5,4,3,2,1],
            'expected': [8,5,4,3,2,]
        },
        
        {    
            'value': [5,5,5,7,7,3,2,'test'],
            'expected': [5,5,5,7,7,3,2,]
        }
    ];
    
    for (let testSuite of testedData) {
        it(`Test  value ${testSuite['value']} expected ${testSuite['expected']}`,() => {
            const act = ArrayList.getPop(ArrayList.setArray(testSuite['value']));
            assert.deepEqual(act, testSuite['expected']);
        });
    }
    
    it('Array length is greater than zero', () => {
        const act = ArrayList.getPop();
        assert.isFalse(act);
    }); 
    
        it('Not string', () => {
        const act = ArrayList.getSort();
        assert.isFalse(act);
    });
    
    it('Not Number', () => {
        const act = ArrayList.getSort();
        assert.isFalse(act);
    }); 
});

describe('------------------ Test getShift ------------------', () => {
    beforeEach(() => {
    })
    
    it('Function check', () => {
        const act = ArrayList.getShift(ArrayList.setArray([1,2,3,7,5]));
        const exp = [2,3,7,5];
        assert.deepEqual(act, exp);
    });
    
    
    const testedData = [
        {
            'value': [8,5,4,3,2,1],
            'expected': [5,4,3,2,1]
        },
        
        {    
            'value': [5,5,5,7,7,3,2,'test'],
            'expected': [5,5,7,7,3,2,'test']
        }
    ];
    
    for (let testSuite of testedData) {
        it(`Test  value ${testSuite['value']} expected ${testSuite['expected']}`,() => {
            const act = ArrayList.getShift(ArrayList.setArray(testSuite['value']));
            assert.deepEqual(act, testSuite['expected']);
        });
    }
    
    it('Array length is greater than zero', () => {
        const act = ArrayList.getShift();
        assert.isFalse(act);
    }); 
    
        it('Not string', () => {
        const act = ArrayList.getShift();
        assert.isFalse(act);
    });
    
    it('Not Number', () => {
        const act = ArrayList.getShift();
        assert.isFalse(act);
    }); 
});

describe('------------------ Test getUnshift ------------------', () => {
    beforeEach(() => {
    })
    
    it('Function check', () => {
        ArrayList.setArray([1,2,3,7,5])
        const act = ArrayList.getUnshift(6,7,8);
        const exp = [6,7,8,1,2,3,7,5];
        assert.deepEqual(act, exp);
    });
    
    
    const testedData = [
        {
            'value': [8,5,4,3,2,1],
            'value1': 1,
            'expected': [1,8,5,4,3,2,1]
        },
        
        {    
            'value': [8,7,5,2,5,4],
            'value1': 96,
            'expected': [96,8,7,5,2,5,4]
        },
        
         {    
            'value': [4,5,6,7,8,9,0],
            'value1': 4444,
            'expected': [4444,4,5,6,7,8,9,0]
        },
        
         {    
            'value': [8,7,5,2,5,4],
            'value1': '96',
            'expected': ['96',8,7,5,2,5,4]
        }
    ];
    
    for (let testSuite of testedData) {
        it(`Test  value ${testSuite['value']} expected ${testSuite['expected']}`,() => {
            ArrayList.setArray(testSuite['value'])
            const act = ArrayList.getUnshift(testSuite['value1']);
            assert.deepEqual(act, testSuite['expected']);
        });
    } 
});

describe('------------------ Test getSlice ------------------', () => {
    beforeEach(() => {
    })
    
    it('Function check', () => {
        ArrayList.setArray([1,2,3,7,5])
        const act = ArrayList.getSlice(0,1);
        const exp = [1];
        assert.deepEqual(act, exp);
    });
    
    
    const testedData = [
        {
            'value0': [8,5,4,3,2,1],
            'value1': 0,
            'value2': 1,
            'expected': [8]
        },
        
        {    
            'value0': [8,7,5,2,5,4],
            'value1': 0,
            'value2': 2,
            'expected': [8,7]
        },
        
         {    
            'value0': [4,5,6,7,8,9,0],
            'value1': 0,
             'value2': undefined,
            'expected': [4,5,6,7,8,9,0]
        },
    ];
    
    for (let testSuite of testedData) {
        it(`Test  value ${testSuite['value']} expected ${testSuite['expected']}`,() => {
            ArrayList.setArray(testSuite['value0'])
            const act = ArrayList.getSlice(testSuite['value1'], testSuite['value2']);
            assert.deepEqual(act, testSuite['expected']);
        });
    } 
});

describe('------------------ Test getRemove ------------------', () => {
    beforeEach(() => {
    })
    
    it('Function check', () => {
        ArrayList.setArray([1,2,3,7,5])
        const act = ArrayList.getRemove(3);
        const exp = [1,2,3,5];
        assert.deepEqual(act, exp);
    });
    
    
    const testedData = [
        {
            'value': [8,5,4,3,2,1],
            'value1': 3,
            'expected': [8,5,4,2,1]
        },
        
        {    
            'value': [5,5,5,7,7,3,2,'test'],
            'value1': 0,
            'expected': [5,5,7,7,3,2,'test']
        }
    ];
    
    for (let testSuite of testedData) {
        it(`Test  value ${testSuite['value']} expected ${testSuite['expected']}`,() => {
            ArrayList.setArray(testSuite['value'])
            const act = ArrayList.getRemove(testSuite['value1']);
            assert.deepEqual(act, testSuite['expected']);
        });
    }
    
    it('Array length is greater than zero', () => {
        const act = ArrayList.getRemove();
        assert.isFalse(act);
    }); 
    
        it('Not string', () => {
        const act = ArrayList.getRemove();
        assert.isFalse(act);
    });
    
    it('Not Number', () => {
        const act = ArrayList.getRemove();
        assert.isFalse(act);
    }); 
});

describe('------------------ Test getSize ------------------', () => {
    beforeEach(() => {
    })
    
    it('Function check', () => {
        const act = ArrayList.getSize(ArrayList.setArray([1,2,3,7,5]));
        const exp = 5;
        assert.deepEqual(act, exp);
    });
    
    
    const testedData = [
        {
            'value': [8,5,4,3,2,1],
            'expected': 6
        },
        
        {    
            'value': [5,5,5,7,7,3,2,'test'],
            'expected': 8
        }
    ];
    
    for (let testSuite of testedData) {
        it(`Test  value ${testSuite['value']} expected ${testSuite['expected']}`,() => {
            ArrayList.setArray(testSuite['value'])
            const act = ArrayList.getSize(ArrayList.setArray(testSuite['value']));
            assert.deepEqual(act, testSuite['expected']);
        });
    }
    
    it('Array length is greater than zero', () => {
        const act = ArrayList.getSize();
        assert.isFalse(act);
    }); 
    
        it('Not string', () => {
        const act = ArrayList.getSize();
        assert.isFalse(act);
    });
    
    it('Not Number', () => {
        const act = ArrayList.getSize();
        assert.isFalse(act);
    }); 
});