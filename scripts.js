// data pool
let num;
let name;
let nums = [39, 130, 139, 70, 117, 83];
let names = ["Isaac", "Abraham", "Solomon", "David", "Paul", "Peter"];
let stashArr = [];

// Randomly selects questions
const determineContent = () => {
    for (i = 0; i < 5; i++) {
        name = names[Math.floor(Math.random()*5)];
        num = nums[Math.floor(Math.random()*5)];
        let numsQuestions = [`There are ${num} books in the Old Testament.`, `Adam was ${num} years old when Seth was born.`, `Psalm ${num} is know for the psalmist asking where he can flee from the spirit of the Lord.`, `David was ${num} years old when he died.`, `Psalm ${num} is the shortest chapter in the Bible.`, `Zacharias the priest was ${num} years old when an angel appeared to him.`];
        let strQuestions = [`${name} was deceived by his son.`, `${name} had a wife that died before he did.`, `${name} was born in the mountains.`, `${name} was extremely rich.`, `${name} sailed the Mediterranean.`, `${name} had things in common with a rock.`];
        let j = Math.floor(Math.random()*2);
        if (j === 1) {
            stashArr.push(strQuestions[i]);
        } else {
            stashArr.push(numsQuestions[i]);
        }
    }
}

const generateMessages = () => {
    let resultArray = [];
    determineContent();
    for (i = 0; i < 5; i++) {
        let j = Math.floor(Math.random()*stashArr.length)
        resultArray[i] = stashArr[j];
        stashArr.splice(j, 1);
    }
    for (i = 0; i < resultArray.length; i++) {
        console.log((i + 1) + '. ' + resultArray[i]);
    }
}

// output
console.log("Bible Trivia Quiz: true, false, or we don't know?\n");
generateMessages();