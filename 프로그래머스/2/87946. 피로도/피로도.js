function solution(k, dungeons) {
    const visited = new Array(dungeons.length).fill(false);
    let answer = 0;

    function DFS(hp, L) {
        for (let i = 0; i < dungeons.length; i++) {
            if (!visited[i] && dungeons[i][0] <= hp) {
                visited[i] = true;
                DFS(hp - dungeons[i][1], L + 1);
                visited[i] = false;
            }
        }
        
        answer = Math.max(answer, L);
    }

    DFS(k, 0);

    return answer;
}
