function solution(skill, skill_trees) {
    let count = 0;

    skill_trees.forEach(tree => {
        let skillIndex = 0;

        for (let i = 0; i < tree.length; i++) {
            if (skill.includes(tree[i])) {
                if (tree[i] === skill[skillIndex]) {
                    skillIndex++;
                } else return;
            }
        }
        
        count++;
    });

    return count;
}
