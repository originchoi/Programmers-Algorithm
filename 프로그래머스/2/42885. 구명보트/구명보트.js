function solution(people, limit) {
    const sortedPeople = people.sort((a, b) => a - b);
    let left = 0;
    let right = sortedPeople.length - 1;
    let count = 0;
    
    while(left <= right) {
        if (people[left] + people[right] <= limit) {
            left++;
        }
        
        right--;
        count++;
    }
    
    return count;
}
