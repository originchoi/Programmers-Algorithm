function solution(number, k) {
    let stack = [];
    let removeCount = k;

    for (let i = 0; i < number.length; i++) {
        const current = number[i];

        while (removeCount > 0 && stack.length > 0 && stack[stack.length - 1] < current) {
            stack.pop();
            removeCount--;
        }

        stack.push(current);
    }

    stack = stack.slice(0, stack.length - removeCount);

    return stack.join("");
}
