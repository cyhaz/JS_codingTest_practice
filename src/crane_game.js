/* JS_level1_ũ���� �����̱� ���� */

function solution(board, moves) {
    var answer=0;   // ���ŵ� ������ ������ ���� ����
    var basket=[];   // ������ ��� �ٱ��� �迭
	
	// moves �迭�� ��Ҹ� ���ʷ� a�� ��� �ݺ��� ����
	for(var a of moves) {
		a=a-1;   // a�� �����̳��� ���� -1�� (a-1)���� �ʱ�ȭ
		// ���������̳ʹ迭���� a��° �����̳� ���� ���� ������ �̾� �ٱ��Ͽ� ��� �ݺ��� ����
		for(var i=0;i<board.length;i++) {
			if(board[i][a]!=0) {
				basket.push(board[i][a]);
				board[i][a]=0;
				break;
			}
		}
		// ���� ������ ��� �ٱ��Ͽ��� ���������� ������ ������ �پ����� ��� 
		// �� ������ �����ϰ� ���ŵ� ������ ������ ���� �ݺ��� ����
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