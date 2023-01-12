//01-b-are-dupes
function areDupes(arr){
    
    if(arr.length > 1){
        for( var i = 0; i < arr.length; ++i ){
            for( var j = i + 1; j < arr.length; ++j ){
                if( arr[i] === arr[j]){
                    return true;
                }    
            }
        }   
    }
    return false;
}

// 02-b-unshift
function unShift(arr, elm){
    arr.unshift(elm);
    return arr;
}

// 03-b-count-the-pairs
function pairCount(arr){
    if( arr.length > 1){
        var tested = [];
        var pairCount = 0;
        var currentCount = 0;

        // tested[0] = arr[0];
        for( var i = 0; i < arr.length; ++i ){
            if( tested.indexOf(arr[i]) < 0 ){
                for( var j = 1; j < arr.length; ++j ){
                    if( arr[i] === arr[j] ){
                        tested.push(arr[i]);
                        ++currentCount;
                    }
                }
            }
            pairCount = pairCount + Math.floor(currentCount / 2);
            currentCount = 0;
        }
        return pairCount;
    }    
    return 0;
}

function deDupe(arr){
    obj = {};
    arr.forEach((element) => { 
        obj[element] = true;
    });
    return Object.keys(obj);
}

function reverseString(str){
    var newStr = [];
    str = str.split("");

    for( var i = str.length - 1 ; i >= 0; --i ){
        newStr.push(str[i]);
    }
    return newStr.join("");
}

function commonLetters(str1, str2){
    var obj = {};
    
    for( var i = 0; i < str1.length; ++i ){
        if( str2.includes(str1[i])) {
            obj[str1[i]] = 0;
        }     
    }
    // str1 = str1.split("");
    // // str2 = str2.split("");
    // str1.forEach((elm, str2) => {
    //     if( str2.indexOf(elm) !== -1 ){
    //         obj[elm] = str2[str2.indexOf(elm)];
    //     };
    return Object.keys(obj);
    // };

}

function getConsecutiveCount(str){
    var arr = [];
    var count = 1;

    str = str.split("");


    for( var i = 1; i < str.length; ++i ){
        if( str[i - 1] === str[i] ){
            ++count;
        } else {
            arr.push([str[i-1], count ]);
            count = 1;
        }
    }
    
    var rtnStr = "";
    for( var i = 0; i < arr.length; ++i ){
        rtnStr = rtnStr + arr[i][0] + arr[i][1];
    }
    return rtnStr;

}