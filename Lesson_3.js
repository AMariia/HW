const ArrayList = {
	array: null,

	setArray: function (array) {
        if(array.length === 0 | typeof array === 'string' | typeof array === 'number'){
           return false;
        }
        this.array = array;
        return array;
	},
    
    setSlice: function (Slice) {
//        if(Slice.length === 0 | typeof array === 'string' | typeof array === 'number'){
//           return false;
//        }
        this.Slice = Slice;
        return Slice;
	},
    
    getReverse: function () {
        if(arguments.length === 0 | typeof arguments === 'string' | typeof arguments === 'number'){
            return false;
        }
        let Reverse;
        for (let i = 0; i < this.array.length; i++) {
            for (let j = 0; j < this.array.length - 1 - i; j++) {
                Reverse = this.array[j];
                this.array[j] = this.array[j + 1];
                this.array[j + 1] = Reverse;
            }
        }
        return this.array;
    },
    
    getPush: function () {
        for(let i = 0; i < this.array.length; i++){
            if(i === this.array.length - 1){
                let arr = [];
                i++
                for(let j = 0; j < arguments.length; j++){
                    arr[j] = arguments[j];
                    this.array[i++] = arr[j];
                }  
            }
        }
        return this.array;
    },
    
    getSort: function () {
        if(arguments.length === 0 | typeof arguments === 'string' | typeof arguments === 'number'){
            return false;
        }
        for(let i = 1; i < this.array.length; i++){
            let x = this.array[i];
            let j = i - 1;
            while(j >= 0 && x <= this.array[j]){
                this.array[j+1] = this.array[j];
                j = j - 1;
            } 
            this.array[j + 1] = x;
        }
    return this.array;
    },
    
    getPop : function () {
        if(arguments.length === 0 | typeof arguments === 'string' | typeof arguments === 'number'){
            return false;
        }
        let a = this.array.length;
        for(var i = 0; i <= this.array.length; i++){
            if(i === this.array.length - 1){
                let back = i;
                this.array.length = i;
            }
        }
        return this.array;
    },
    
    getShift : function () {
        if(arguments.length === 0 | typeof arguments === 'string' | typeof arguments === 'number'){
            return false;
        }
        this.array[0] = null;
            for(let i = 0; i < this.array.length; i++){
                if(this.array[i] === null){
                    var iter = i;
                    continue;
                }
                if(i > iter){
                    this.array[i - 1] = this.array[i] 
                }
            }
    this.array.length--;
    return this.array;
    },
    
    getUnshift : function () {
        let cloneArray = [];
        for(let j = 0; j < this.array.length; j++){
            cloneArray[j] = this.array[j];
        }
        let lenghtArr = this.array.length + arguments.length;
        this.array[lenghtArr - 1] = null;
        for(let i = 0; i < this.array.length; i++){
            this.array[i] = arguments[i];
            if(i > arguments.length - 1){
                this.array[i] = cloneArray[i - arguments.length];
            }
        }
        return this.array;
    },
    
    getSlice : function (from, before = this.array.length) {
        this.Slise = [];
        for(let i = from, j = 0; i < before, j < before; i++, j++){
                this.Slise[i] = this.array[i];
        }
        return this.Slise;
    },
    
    getRemove : function (a) {
        if(arguments.length === 0 | typeof arguments === 'string' | typeof arguments === 'number'){
            return false;
        }
        this.array[a] = null;
            for(let i = 0; i < this.array.length; i++){
                if(this.array[i] === null){
                    var iter = i;
                    continue;
                }
                if(i > iter){
                    this.array[i - 1] = this.array[i] 
                }
            }
    this.array.length--;
    return this.array;
},
    
    getSize : function () {
        if(arguments.length === 0 | typeof arguments === 'string' | typeof arguments === 'number'){
            return false;
        }
        return this.array.length;
    },
    
    toString: function(array) {
        alert('Сейчас массив имеет такой вид - ' + '[' + this.array + ']');
    }
}



