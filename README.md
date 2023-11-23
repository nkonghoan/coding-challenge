# coding-challenge
Coding challenge for the technical writer position

## Solution for problem A

A function called `findSingleSalary` is declared with a single parameter, `salaries`, which represents the array of salaries.

We will then create a new `Map` called `countMap` to store the count of each salary.

What's next is to iterate over each salary in the `salaries` array using a `for...of` loop.

Inside the loop, we check if `countMap` already has an entry for the current salary using the `has` method of `Map`.

If it does, it means the salary has already been encountered before. In this case, we retrieve the current count of that salary using the `get` method of `Map`, increment it by 1, and update the count in the `countMap` using the `set` method of `Map`.

If the salary is encountered for the first time, we add a new entry to the `countMap` with the salary as the key and an initial count of 1 using the `set` method of `Map`.

After counting the occurrences of each salary, we iterate over the entries in the `countMap` using a `for...of` loop with destructuring assignment (`[salary, count]`).

Inside the loop, we check if the count of the current entry is equal to 1.

If the count is equal to 1, it means that salary appears only once in the `salaries` array. In this case, we return the salary as the single salary.

If no single salary is found (i.e., all salaries have a count greater than 1), we return `null`.

So in summary the code uses a hashmap (implemented with a `Map` data structure) to count the occurrences of each salary efficiently. By iterating over the `salaries` array only once, we store the count of each salary in the `countMap`. Then, we iterate over the entries in the map to find the salary with a count of 1, indicating the single salary that appears only once in the array.
