// 1
function power(a, b) {
    return Math.pow(a, b);
}

// 2
function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        return true;
    }
    return false;
}

// 3
function calculateArea(a, b, c) {
    let S = (a + b + c) / 2;
    let area = Math.sqrt(S * (S - a) * (S - b) * (S - c));
    return area;
}

// 4
function average(marks) {
    let sum = marks.reduce((acc, mark) => acc + mark, 0);
    return sum / marks.length;
}

function percentage(marks) {
    let sum = marks.reduce((acc, mark) => acc + mark, 0);
    return (sum / (marks.length * 100)) * 100;
}

function mainFunction(marks) {
    let avg = average(marks);
    let perc = percentage(marks);
    console.log(`Average marks: ${avg}`);
    console.log(`Percentage: ${perc}%`);
}

// 5
function indexOf(string, char) {
    for (let i = 0; i < string.length; i++) {
        if (string[i] === char) {
            return i;
        }
    }
    return -1;
}

// 6
function removeVowels(sentence) {
    let vowels = "aeiouAEIOU";
    let result = "";
    for (let i = 0; i < sentence.length; i++) {
        if (!vowels.includes(sentence[i])) {
            result += sentence[i];
        }
    }
    return result;
}

// 7
function countConsecutiveVowels(text) {
    let vowels = "aeiouAEIOU";
    let count = 0;
    for (let i = 0; i < text.length - 1; i++) {
        if (vowels.includes(text[i]) && vowels.includes(text[i + 1])) {
            count++;
        }
    }
    return count;
}

// 8
function convertToMeters(distance) {
    return distance * 1000;
}

function convertToFeet(distance) {
    return distance * 3280.84;
}

function convertToInches(distance) {
    return distance * 39370.1;
}

function convertToCentimeters(distance) {
    return distance * 100000;
}

// 9
function calculateOvertimePay(hoursWorked) {
    const overtimeRate = 12;
    const regularHours = 40;
    if (hoursWorked > regularHours) {
        let overtimeHours = hoursWorked - regularHours;
        return overtimeHours * overtimeRate;
    }
    return 0;
}

// 10
function calculateCurrencyNotes(amount) {
    let notes100 = Math.floor(amount / 100);
    amount = amount % 100;

    let notes50 = Math.floor(amount / 50);
    amount = amount % 50;

    let notes10 = Math.floor(amount / 10);

    return { notes100, notes50, notes10 };
}
