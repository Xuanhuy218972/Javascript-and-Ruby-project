function newArray() {
    let length = 0;
    let A = [];
    return {
        getLength: function () {
            return length;
        },

        push: function (element) {
            A.push(element);
            length++;
        },
        toArray: function () {
            return A;
        },
        get: function (index) {
            if (isNaN(index)) {
                throw new Error("Error: not a number");              
            }
            return A[index];
        },
        set: function(index){

        }
    };
}

const arr = newArray();
arr.getLength()
//console.log(arr.getLength());
arr.push(1);
//console.log(arr.getLength());
//console.log(arr.toArray());

console.log(arr.get(0));
console.log(arr.set(0,10));
console.log(arr.set(2,5));