/* JS_level1_크레인 인형뽑기 게임 */

function solution(board, moves) {
    var answer=0;   // 제거된 인형의 갯수를 담을 변수
    var basket=[];   // 인형이 담길 바구니 배열
	
	// moves 배열의 요소를 차례로 a에 담는 반복문 실행
	for(var a of moves) {
		a=a-1;   // a번 컨테이너의 값을 -1한 (a-1)으로 초기화
		// 인형컨테이너배열에서 a번째 컨테이너 가장 위의 인형을 뽑아 바구니에 담는 반복문 실행
		for(var i=0;i<board.length;i++) {
			if(board[i][a]!=0) {
				basket.push(board[i][a]);
				board[i][a]=0;
				break;
			}
		}
		// 뽑은 인형이 담긴 바구니에서 위에서부터 동일한 인형이 붙어있을 경우 
		// 두 인형을 삭제하고 제거된 인형의 갯수를 세는 반복문 실행
		while(basket.length>1) {
			var x=basket.pop();
			if(x==basket.slice(-1)[0]) {
				basket.pop();
				answer+=2;
			} else {
				basket.push(x);
				break;
			}
		}
	}
    return answer;
}