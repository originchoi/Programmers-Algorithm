function solution(files) {
    const parsedFiles = files.map((file, index) => {
        let head = "";
        let number = "";
        let i = 0;
        
        while (i < file.length && isNaN(file[i]) || file[i] === " ") {
            head += file[i];
            i++;
        }
        
        while (i < file.length && !isNaN(file[i]) && file[i] !== " " && number.length < 5) {
            number += file[i];
            i++;
        }
        
        
        return [head, number, ,index];
    });

    parsedFiles.sort((a, b) => {
        const [headA, numberA, ,indexA] = a;
        const [headB, numberB, ,indexB] = b;
        const headCompare = headA.toLowerCase().localeCompare(headB.toLowerCase());
        
        if (headCompare !== 0) return headCompare;

        const numberCompare = parseInt(numberA) - parseInt(numberB);
        
        if (numberCompare !== 0) return numberCompare;

        return indexA - indexB;
    });

    return parsedFiles.map(file => files[file[3]]);
}
