const arr = [1,2,3,4,1,2,3,4,1,2,3]

const counts={}

arr.forEach((element)=>{

    if(counts[element]){
        counts[element]=counts[element]+1
    }
    else{
        counts[element]=1
    }

})

const maxOutput = [];

while (true) {
    let patternCompleted = true;

    let pattern='';

    for (let i = 1; i <= 4; i++) {
        if (counts[i] > 0) {
            pattern=pattern+i
            counts[i]--;
        } else {
            patternCompleted = false;
            break;
        }
    }

            
    maxOutput.push(pattern)

    if (!patternCompleted) {
        break;
    }
}

const patterCount = {}

maxOutput.forEach((pattern)=>{

    if(patterCount[pattern]){
        patterCount[pattern]=patterCount[pattern]+1
    }else{
        patterCount[pattern]=1
    }

})

console.log(patterCount)









