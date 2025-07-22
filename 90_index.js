function tuckIn(ar1, ar2) {
    const [first, second] = ar1;
    return [first, ...ar2, second];
}

console.log(
    tuckIn([1, 10], [2, 3, 4, 5, 6, 7, 8, 9]),
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
);
console.log(tuckIn([15, 150], [45, 75, 35]), [15, 45, 75, 35, 150]);
console.log(
    tuckIn(["bottom", "topping"], ["tomatosauce", "vegetables", "cheese"]),
    ["bottom", "tomatosauce", "vegetables", "cheese", "topping"]
);
console.log(
    tuckIn(
        [
            [1, 2],
            [5, 6],
        ],
        [[3, 4]]
    ),
    [
        [1, 2],
        [3, 4],
        [5, 6],
    ]
);
console.log(tuckIn([true, false], [false, true, null, undefined]), [
    true,
    false,
    true,
    null,
    undefined,
    false,
]);
