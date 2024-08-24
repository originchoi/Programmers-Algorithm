function solution(n, works) {
    if (works.reduce((a, b) => a + b) <= n) return 0;
    
    let sortedWorks = works.sort((a, b) => a - b);
    const worksLength = works.length;
    
    while (n) {
        const maxWork = sortedWorks[worksLength - 1];
        
        for (let i = worksLength - 1; i >= 0; i--) {
            if (sortedWorks[i] >= maxWork) {
                sortedWorks[i]--;
                n--;
            }
            
            if (!n) break;
        }
    }
    
    return sortedWorks.reduce((a, b) => a + Math.pow(b, 2), 0);
}
