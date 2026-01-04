const reverse_array = (arr:number[]) => {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    [arr[left], arr[right]] = [arr[right], arr[left]];
    left += 1;
    right -= 1;
  }
  console.log(arr);
};

let arr:number[] = [1, 2, 3, 4, 5];
reverse_array(arr);
