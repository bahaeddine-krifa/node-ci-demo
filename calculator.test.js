const { add, subtract } = require('./calculator');

test('adds 2 + 3 = 5', () => {
    expect(add(2, 3)).toBe(5);
});

test('subtracts 5 - 3 = 2', () => {
    expect(subtract(5, 3)).toBe(2);
});