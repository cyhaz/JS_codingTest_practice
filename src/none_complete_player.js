/* JS_level1_�������� ���� ���� */

function solution(participant, completion) {
    participant.sort();
    completion.sort();
    for(var i=0;i<participant.length;i++) {
        if(participant[i]!==completion[i]) {
            return participant[i];
        }
    }
}

/*
participant : ������ �迭
completion : ������ �迭

1) �� �迭�� ���ĺ������� ����
2) �� �迭���� ���� �ڸ��� �ִ� ��Ұ� ���� �������� Ȯ���ϴ� �ݺ���
3) if, �������� ���� ��Ұ� �ִٸ�, �����ڹ迭���� ������ �����ڹ迭���� ���� ����(�������� ���� ����) �߰�!
4) �������� ���� ���� ����
*/