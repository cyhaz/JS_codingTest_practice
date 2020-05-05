/* JS_level1_완주하지 못한 선수 */

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
participant : 참가자 배열
completion : 완주자 배열

1) 두 배열을 알파벳순으로 정렬
2) 각 배열에서 같은 자리에 있는 요소가 서로 동일한지 확인하는 반복문
3) if, 동일하지 않은 요소가 있다면, 참가자배열에는 있지만 완주자배열에는 없는 선수(완주하지 못한 선수) 발견!
4) 완주하지 못한 선수 리턴
*/