function findSingleSalary(salaries) {
    const countMap = new Map();
  
    // Count the occurrences of each element in the array
    for (const salary of salaries) {
      if (countMap.has(salary)) {
        countMap.set(salary, countMap.get(salary) + 1);
      } else {
        countMap.set(salary, 1);
      }
    }
  
    // Find the element with count 1
    for (const [salary, count] of countMap) {
      if (count === 1) {
        return salary;
      }
    }
  
    // If no single salary found, return null or throw an error
    return null;
  }