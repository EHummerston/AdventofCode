const dayThree = {

    // DAY 1-1
    1: (input) => {
        const r = ~~(Math.ceil(Math.sqrt(input)) / 2);
        const index = input - Math.pow(r * 2 - 1, 2);
        const c = Math.abs((index % (r * 2)) - r);

        return r === 0 ? r : r + c;
    },

    // DAY 1-2
    2: (input) => {
        /*
        const r = ~~(Math.ceil(Math.sqrt(input)) / 2) + 1;
        const d = (r * 2) - 1;
        const quarter = (r - 1) * 2;
        const index = input - Math.pow(d - 2, 2);
        const c = Math.abs(((index) % (quarter)) - (r - 1));
        const steps = r + c - 1;
        return steps;
        */
    }

};

$('.solve').click(function () {
    const button = $(this);
    if (!button.prop('disabled')) {
        button.prop('disabled', true);
        const solutionPart = button.closest('.advent-problem').data('problem');
        const code = button.siblings('code, pre');
        code.text(dayThree[solutionPart](Number(code.text())));
        code.removeClass('number');
    }
});

const day3Input = 368078;

console.log("\tDay 3-1 test data:");
console.log(dayThree[1](1));
console.log(dayThree[1](12));
console.log(dayThree[1](23));
console.log(dayThree[1](1024));

console.log("\tDay 3-1 answer:");
console.log(dayThree[1](day3Input));

console.log("\tDay 3-2 test data:");
console.log(dayThree[2](1));
console.log(dayThree[2](2));
console.log(dayThree[2](3));
console.log(dayThree[2](4));
console.log(dayThree[2](5));

console.log("\tDay 3-2 answer:");
console.log(dayThree[2](day3Input));