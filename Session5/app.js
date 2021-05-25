// function checkString(myStr) {
//     if (myStr.indexOf('Java') == 0)
//         return true;
//     return false;
// }

// function checkString(myStr) {
//     if (myStr.indexOf('Java') == 0)
//         return true;
//     else
//         return false;
// }

function checkString(myStr) {
    return myStr.indexOf('Java') == 0;
}

console.log(checkString('Java hello Java'));

// 2.
function findMaxDiff(myInter) {
    if (myInter.length < 2) {
        return 0;
    } else {
        let maxDiff = 0;
        for (let i = 0; i < myInter.length; i++) {
            let a = Math.abs(myInter[i]) - Math.abs(myInter[i -1])
            if (maxDiff < a) {
                maxDiff = a;
            } else {
                
            }
        }
    }

}
