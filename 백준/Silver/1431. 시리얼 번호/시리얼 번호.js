const INPUT_PATH = "../inputs/시리얼번호.txt";

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : INPUT_PATH;
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(input) {
  const N = Number(input.shift());
  const serialNumbers = input;

  serialNumbers.sort((a, b) => {
    if (a.length !== b.length) return a.length - b.length;

    let sumA = 0;
    let sumB = 0;

    for (let i = 0; i < a.length; i++) {
      if (!isNaN(a[i])) sumA += Number(a[i]);
      if (!isNaN(b[i])) sumB += Number(b[i]);
    }

    if (sumA !== sumB) {
      return sumA - sumB;
    }

    return a < b ? -1 : a > b ? 1 : 0;
  });

  return serialNumbers.join("\n");
}

console.log(solution(input));
