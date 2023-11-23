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


## Solution for problem B

The `searchRange` function is declared and it takes in an array of integers (`numbers`) and a target value (`target`).
Then we let `left` be the leftmost index (0), `right` as the rightmost index (`numbers.length - 1`), and `start` and `end` as -1. These variables will be used to keep track of the starting and ending positions of the target value.

Then we perform the binary search to find the starting position of the target value.
The while loop continues as long as `left` is less than or equal to `right`, which means there are still elements to search.
Inside the loop, we calculate a new variable, the middle index (`mid`) as the average of `left` and `right` rounded down using `Math.floor`.

If the value at the middle index (`numbers[mid]`) is equal to the target, it updates `start` to the current middle index (`mid`) and adjusts `right` to continue searching for a potential earlier occurrence of the target by moving towards the left side of the array.
If the value at the middle index is less than the target, it updates `left` to `mid + 1` to search in the right half of the remaining array.
If the value at the middle index is greater than the target, it updates `right` to `mid - 1` to search in the left half of the remaining array.

We now carry out a binary search again to find the ending position of the target value.
Now before starting the search, we would reset `left` and `right` to their initial values to search the entire array again.
The while loop continues uso long as `left` is less than or equal to `right`.
Inside the loop, we carry out a similar calculation as before to update `end` when the target value is found, and adjust `left` and `right` accordingly.

Finally, the function returns an array `[start, end]` representing the starting and ending positions of the target value in the original array.
If the target value is not found, the function will return `[-1, -1]`.
