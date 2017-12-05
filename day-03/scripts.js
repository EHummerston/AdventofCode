const dayThree = {

    // DAY 1-1
    1: (input) => {
        const r = ~~(Math.ceil(Math.sqrt(input)) / 2);
        const index = input - (r * 2 - 1) ** 2;
        const c = Math.abs((index % (r * 2)) - r);

        return r === 0 ? r : r + c;
    },

    // DAY 1-2
    2: (input) => {
        const X = 21;
        const Y = 21;
        let grid = [];
        let x, y, dx, dy;
        x = y = dx = 0;
        dy = -1;
        let t = Math.max(X, Y);
        const maxI = t * t;
        for (let i = 0; i < maxI; i++) {
            if ((-X / 2 <= x) && (x <= X / 2) && (-Y / 2 <= y) && (y <= Y / 2)) {
                gX = x + ~~(X / 2);
                gY = y + ~~(Y / 2);
                if (!grid[gX]) {
                    grid[gX] = [];
                }
                if (!grid[gX][gY]) {
                    grid[gX][gY] = 0;
                }
                let sum = 0;
                if (x === 0 && y === 0) {
                    grid[gX][gY] = 1;
                }
                else {
                    for (let adjX = -1; adjX <= 1; adjX++) {
                        if (!grid[gX + adjX]) {
                            continue;
                        }

                        for (let adjY = -1; adjY <= 1; adjY++) {
                            if (!grid[gX + adjX][gY + adjY]) {
                                continue;
                            }

                            sum += grid[gX + adjX][gY + adjY];
                        }

                    }

                    grid[gX][gY] = sum;
                }

                if (sum > input) {
                    return sum;
                }
            }
            if ((x === y) || ((x < 0) && (x === -y)) || ((x > 0) && (x === 1 - y))) {
                t = dx;
                dx = -dy;
                dy = t;
            }
            x += dx;
            y += dy;
        }
        console.log(grid);

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