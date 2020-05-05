/* JS_level1_Ã¼À°º¹ */

function solution(n, lost, reserve) {
    var answer=n-lost.length;
	for(var a of lost) {
		if(reserve.indexOf(a-1)!=-1 ) {
			reserve.splice(reserve.indexOf(a-1), 1);
			lost.splice(lost.indexOf(a), 1);
			answer++;
		} else if(reserve.indexOf(a)!=-1) {
			reserve.splice(reserve.indexOf(a), 1);
			lost.splice(lost.indexOf(a), 1);
			answer++;
		} else if(reserve.indexOf(a+1)!=-1) {
			reserve.splice(reserve.indexOf(a+1), 1);
			lost.splice(lost.indexOf(a), 1);
			answer++;
		}
	} 
    return answer;
}