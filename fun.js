//commit 1
//commit 2
//commit 3
//commit 4

//closures
// function updateClickCount() {
//     var counter = 0;
//     ++counter;
//     console.log("counter=>", counter)
//     return counter
//     // Do something with counter
// }

// function countWrapper() {
//     var counter = 0;
//     function updateClickCount() {
//         ++counter;
//         // Do something with counter
//     }
//     updateClickCount();
//     console.log("counter=>", counter)
//     return counter;
// }


var updateClickCount = (function(){
    var counter = 0;

    return function(){
        ++counter;
        document.getElementById("spnCount").innerHTML = counter;
    }
})();

console.log(updateClickCount());


//closures