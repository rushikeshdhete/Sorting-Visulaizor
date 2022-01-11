

const MergeSort = (array) => {
    const animations = [];
    if (array.length <= 1) return array;
    const auxiliaryArray = array.slice();
    mergeSortHelper(array, 0, array.length - 1, auxiliaryArray, animations);
    return animations;
  }
  
  const mergeSortHelper = (
    mainArray,
    l,
    r,
    auxiliaryArray,
    animations
  ) => {
    if (l < r){
    const m = Math.floor((l + r) / 2);
    mergeSortHelper(auxiliaryArray, l, m, mainArray, animations);
    mergeSortHelper(auxiliaryArray, m + 1, r, mainArray, animations);
    doMerge(mainArray, l, m, r, auxiliaryArray, animations);
    }
  }
  
  const doMerge = (
    mainArray,
    l,
    m,
    r,
    auxiliaryArray,
    animations
  ) => {
    let k = l;
    let i = l;
    let j = m + 1;
    while (i <= m && j <= r) {
      animations.push([i, j]);
      animations.push([i, j]);
      if (auxiliaryArray[i] <= auxiliaryArray[j]) {
        animations.push([k, auxiliaryArray[i]]);
        mainArray[k++] = auxiliaryArray[i++];
      } else {
        animations.push([k, auxiliaryArray[j]]);
        mainArray[k++] = auxiliaryArray[j++];
      }
    }
    while (i <= m) {
      animations.push([i, i]);
      animations.push([i, i]);
      animations.push([k, auxiliaryArray[i]]);
      mainArray[k++] = auxiliaryArray[i++];
    }
    while (j <= r) {
      animations.push([j, j]);
      animations.push([j, j]);
      animations.push([k, auxiliaryArray[j]]);
      mainArray[k++] = auxiliaryArray[j++];
    }
  }

  export default MergeSort;


// const MergeSort = (array) =>{

//     const animations = [];
//     if (array.length <= 1) return array;
//     MergeSortHelp(array, 0, array.length - 1, animations);
//     return animations;
// }

// const MergeSortHelp = (mainArray, l, r, animations) =>{

//     if(l<r)
//     {
//         const m  = Math.floor((l+r)/2);
//         MergeSortHelp(mainArray, l, m, animations );
//         MergeSortHelp(mainArray, m+1, r, animations);
//         doMerge(mainArray, l, m, r, animations);
//     }
// }

// const doMerge = (mainArray, l, m, r, animations) =>{
//     let n1 = m-l-1;
//     let n2 = r-m;
//     let left = [];
//     let right = [];
//     for(let i=0; i<n1; i++)
//     {
//         left[i] = mainArray[i+l];
//     }
//     for(let j=0; j<n2; j++)
//     {
//         right[j] = mainArray[j +m +1];
//     }
//     let i=0, j=0, k=l;
//         while(i<=n1 && j<=n2)
//         {
//             animations.push([i, j]);
//             animations.push([i, j]);
    
//             if(left[i] <= right[j])
//             {
//                 animations.push([k, left[i]]);
//                 mainArray[k++] = left[i++];
//             }
//             else{
//                 animations.push([k, right[j]]);
//                 mainArray[k++] = right[j++];
//             }
//         }
//         while(i<=left.length)
//         {
//             animations.push([i, i]);
//             animations.push([i, i]);
//             animations.push([k, left[i]]);
//             mainArray[k++] = left[i++];
//         }
//         while(j<=right.length)
//         {
//             animations.push([j, j]);
//             animations.push([j, j]);
//             animations.push([k, right[j]]);
//             mainArray[k++] = right[j++];
//         }
    
// }
// export default MergeSort;