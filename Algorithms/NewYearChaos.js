// https://www.hackerrank.com/challenges/new-year-chaos/problem?h_l=interview&playlist_slugs%5B%5D%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D%5B%5D=arrays&isFullScreen=true

function minimumBribes(q) {
    let bribes = 0;
 
    for (let i = q.length - 1; i >= 0; i--){   
        if (q[i] - (i + 1) > 2) return "Too chaotic";
 
        let j = Math.max(0, q[i] - 2); // get the number at the immediate front of the current interger's ORIGINAL position (i.e index + 1) 
 
        while(j < i){
            if(q[j] > q[i]) bribes++; // for each number > current interger from j to i increase bribes by 1 (a bribe surely occurred)
            j++;
        }
    }
 
    return bribes;
}
 
minimumBribes([2, 5, 1, 3, 4])