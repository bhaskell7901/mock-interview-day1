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