export const calculateSum = (arr) => {
    const numbers = arr.map((item) => {
      if (item === "") {
        return 0;
      } else {
        return parseInt(item);
      }
    });

    const sum = numbers.reduce((acc, curr) => acc + curr, 0);

    return sum;
  };