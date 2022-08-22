const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const  compareAnswers = (rightAnswers, studantAnswers) => {
    if (rightAnswers === studantAnswers) {
        return 1;
    } if (studantAnswers === 'N.A') {
        return 0;
    }
        return -0.5;   
};

const countScore = (rightAnswers, studantAnswers, compare) =>  {
    let score = 0;
    for (let index = 0; index < rightAnswers.length; index += 1) {
       const compareScore = compare(rightAnswers[index], studantAnswers[index]);
       score += compareScore;
    }
    return `O resultado final é ${score} pontos!`;
}

console.log(countScore(RIGHT_ANSWERS, STUDENT_ANSWERS, compareAnswers));