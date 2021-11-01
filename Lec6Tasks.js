let fruits = ["banana", "apple", "orange", "pineapple"];
let nums1 = [11, 22, 33, 44, 55]
let nums2 = [0.1, 0.2, 0.3, 0.4, 0.5]

//Task 1
/*Write a JavaScript function to get the last element of an array*/
function getLastElem(arr) {
    let lastIndex = arr.length - 1;
    return arr[lastIndex];   // The function returns the last element of an array
  };
//console.log(getLastElem(fruits));

//Task 2
/*Write a simple JavaScript program to join all elements of the following array into a string*/
//Option 1, using join() method
console.log(fruits.join());
console.log(fruits.join(" .oOo. "));

//Option 2, using custom joinArray() function
function joinArray(arr, separator) {
    if (separator === '') {
        return arr.join();
    } else {
        return arr.join(separator)
    }
}
//console.log(joinArray(fruits, " @ "));
//console.log(joinArray(fruits));


//Task 3
/*There are two arrays with individual values, write a JavaScript program to compute
the sum of each individual index value from the given arrays and send them to third array*/
function arrayFromSummedElements(arr1, arr2) {
    let arrFromSumElements = [];
    if (arr1.length === arr2.length) {
        for (let i = 0; i< arr1.length; i++) {
            arrFromSumElements.push(arr1[i]+arr2[i]);
        }
        return arrFromSumElements;
    } else {
        let arrLen = Math.min(arr1.length, arr2.length);
        for (let i = 0; i< arrLen; i++) {
            arrFromSumElements.push(arr1[i]+arr2[i]);
        }
        return arrFromSumElements;
    }
}
//console.log(arrayFromSummedElements(nums1, nums2));
//console.log(arrayFromSummedElements([100, 200, 300], [1, 2, 3, 4]))

//Task 4
/*Write a JavaScript program to calculate the area and perimeter of the rectangle.
Rectangle should be an object with properties width and heigh and methods getArea() and getPerimeter()*/
let rectangle = {
    width:3,
    height:10,
    getArea: function() {return this.height * this.width},
    getPerimeter: function() {return (this.height + this.width)*2}
};
//console.log(`Area = ${rectangle.getArea()}, Perimeter = ${rectangle.getPerimeter()}`);