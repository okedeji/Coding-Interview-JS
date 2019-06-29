

function solution(X, Y, D) {
    return Math.ceil((Y-X)/D) //Math.ceil() helps round up to the the nearest higher integer not Math.round() so it will only round up to higher integer and not nearest integer
}

solution(10, 85, 30)