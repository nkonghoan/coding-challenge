
function searchRange(numbers, target) {
    //function to help find the leftmost position of the target
    function findLeftPosition(numbers, target) {
      let left = 0;
      let right = numbers.length - 1;
      let position = -1;
  
      while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (numbers[mid] >= target) {
          right = mid - 1;
          if (numbers[mid] === target) {
            position = mid;
          }
        } else {
          left = mid + 1;
        }
      }
  
      return position;
    }
  
    //function to help find the righmost position of the target
    function findRightPosition(numbers, target) {
      let left = 0;
      let right = numbers.length - 1;
      let position = -1;
  
      while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (numbers[mid] <= target) {
          left = mid + 1;
          if (numbers[mid] === target) {
            position = mid;
          }
        } else {
          right = mid - 1;
        }
      }
  
      return position;
    }
  
    const start = findLeftPosition(numbers, target);
    const end = findRightPosition(numbers, target);
  
    return [start, end];
  }