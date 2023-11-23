export const calculateMean = (array: any) => {
    const sum = array.reduce((acc: any, val: any) => acc + parseFloat(val), 0);
    return sum / array.length;
  };

 export  const calculateMedian = (array: any) => {
    const sortedArray = array.map((val: any) => parseFloat(val)).sort((a: any, b: any) => a - b);
    const middle = Math.floor(sortedArray.length / 2);

    if (sortedArray.length % 2 === 0) {
      return (sortedArray[middle - 1] + sortedArray[middle]) / 2;
    }

    return sortedArray[middle];
  };

  export const calculateMode = (array: any) => {
    const counts: any = {};
    let maxCount = 0;
    let mode;

    array.forEach((element: any) => {
      const num = parseFloat(element);
      counts[num] = (counts[num] || 0) + 1;

      if (counts[num] > maxCount) {
        maxCount = counts[num];
        mode = num;
      }
    });

    return mode;
  };