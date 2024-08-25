function solution(n, edge) {
    const graph = Array.from(Array(n + 1), () => []);
    const distances = Array(n + 1).fill(Infinity);
    const queue = [];
    
    edge.forEach(([from, to]) => {
        graph[from].push(to);
        graph[to].push(from);
    });
    
    // 1번 노드에서 시작을 위함
    distances[1] = 0;
    queue.push(1);
    
    while(queue.length > 0) {
        const current = queue.shift();
        const currentDistance = distances[current];
        
        graph[current].forEach(next => {
            if (distances[next] === Infinity) {
                distances[next] = currentDistance + 1;
                queue.push(next);
            }
        });
    }
    
    const maxDistance = Math.max(...distances.slice(1));
    const result = distances.filter(distance => distance === maxDistance);
    
    return result.length;
}
