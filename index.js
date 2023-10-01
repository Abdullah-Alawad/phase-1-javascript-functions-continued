// code your solution here
function saturdayFun(str = "roller-skate"){
    return `This Saturday, I want to ${str}!`;
}


function mondayWork(activity = "go to the office"){
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(adj){
    const inner = function (val = "special"){
        return `You are ${adj}${val}${adj}!`
    }
    return inner;
}