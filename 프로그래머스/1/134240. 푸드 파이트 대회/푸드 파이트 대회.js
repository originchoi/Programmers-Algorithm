function solution(food) {
    let answer = "";
    let index = 1;
    
    while (index < food.length) {
        const str = index.toString();
        
        answer += str.repeat(food[index] / 2);
        index++;
    }
    
    const result = `${answer}0${answer.split("").reverse().join("")}`;
    
    return result;
}
