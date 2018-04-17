
/*#### Ping Pong Filter ####
# Imagine that we have a filter that goes through an array and removes every other
# element. When it reaches the final element it turns around and does the whole
# process again, this time going from the end to the start. It repeats this
# behavior until there is only one element left.
#
# For example:
# Given a starting array [1, 2, 3, 4, 5, 6, 7, 8]
# We start from the beginning and remove every other element (indicated with !)
# [!1, 2, !3, 4, !5, 6, !7, 8] = [2, 4, 6, 8]
# Next we start from the end and remove every other element
# [2, !4, 6, !8] = [2, 6]
# Now we start from the beginning again and remove every other element
# [!2, 6] = [6]
#
# Write a method that takes an array of elements. It should return the only
# element that would remain after filtering the array in the manner described
# above.
#
# Examples:
#
# ping_pong_filter([1!, 2, 3!, 4, 5!, 6, 7!, 8]) # => 6
#
# ping_pong_filter([1, 2, 3, 4]) # => 2
#
# ping_pong_filter([3, 5, 7, 8, 9, 2]) # => 8
*/

//Have a while loop to check to see whether the length of the array is greater than 1
//iterate through the array (i = 0; i < array.length; i += 2) and get elements we need i+1.
//Report the array's length
//Reverse the array and use the for loop as above. 
//Do this until the array's length becomes one


function pingPongFilter(arr) {  //[1!, 2, 3!, 4, 5!, 6, 7!, 8]
    var arrLength = arr.length;  //1

    while (arrLength > 1) {     
        arr = getElements(arr);   //[2,6] => [6]
        arrLength = arr.length;

        if (arrLength > 1) { 
            arr = getElements(arr.reverse());   //[8,6,4,2] => [6,2]
            arrLength = arr.length;
            arr = arr.reverse(); //[2,6]
        }
    }

    return arr[0]; //=>6
}


function getElements(array) {
    var result = [];

    //!!!!!!! ARRAY.LENGTH - 1
    for (var i = 0; i < array.length - 1; i += 2) {
        result.push(array[i + 1]);
    }

    return result;
}


console.log(pingPongFilter([1, 2, 3, 4])); //# => 2
console.log(pingPongFilter([3, 5, 7, 8, 9, 2])); //=> 8
console.log(pingPongFilter([2,3,4,5,10,7,18,8])); // # => 7
console.log("EXTRA EXAMPLES:");
console.log(pingPongFilter([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16,17]));
//console.log(pingPongFilter([1!, 2!, 3!, 4!, 5!, 6, 7!, 8!, 9!, 10!, 11!, 12!, 13!, 14!, 15!, 16!,17!]));






function ping_pong_filter(array){
    var length = array.length;
    while (length > 1) {
        array = removeElements(array);
        length = array.length;

        if (length > 1) {
            array = removeElements(array.reverse());   
            length = array.length;
            array = array.reverse();
        }
    }
    
    return array[0];
}

function removeElements(arr) {
    var newArr = []; 

    for (var i = 0; i < arr.length - 1; i = i + 2) {
            newArr.push(arr[i+1]);
        }
        
    return newArr;
}

//console.log(removeElements([1,2,3]));

console.log(ping_pong_filter([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16,17]));
console.log(ping_pong_filter([1, 2, 3, 4])); // # => 2
console.log(ping_pong_filter([2,3,4,5,10,7,18,8])); // # => 7

/*console.log(ping_pong_filter([1, 2, 3, 4, 5, 6, 7, 8])); // # => 6
console.log(ping_pong_filter([1, 2, 3, 4])); // # => 2
console.log(ping_pong_filter([3, 5, 7, 8, 9, 2])); // # => 8
*/


