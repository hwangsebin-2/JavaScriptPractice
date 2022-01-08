/* commit test */
function solution(phone_number) {
    var answer = phone_number.length -4;
    return '*'.repeat(answer) + phone_number.substring(answer);
    //return answer;
}