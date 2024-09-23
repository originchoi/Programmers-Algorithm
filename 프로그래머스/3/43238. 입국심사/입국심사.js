function solution(n, times) {
    let low = 1;
    let high = Math.max(...times) * n;
    let answer = high;
    
    while (low <= high) {
        const mid = Math.floor((low + high) / 2);
        let totalPeople = 0;

        for (const time of times) {
            totalPeople += Math.floor(mid / time);
        }

        if (totalPeople >= n) {
            answer = mid;
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }

    return answer;
}
