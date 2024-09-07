function solution(n) {
    let answer = 0;

    answer = n.toString().split("").reduce((acc, curr) => acc + parseInt(curr), 0);

    return answer;
}
