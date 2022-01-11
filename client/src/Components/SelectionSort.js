

// const SelectionSort = (array) =>{
//     const animations = [];

//     for(let i=0; i< array.length; i++)
//     {
//         let mini = i;
//         for(let j = i+1; j<array.length; j++)
//         {
//             animations.push([mini, j]);
//             animations.push([mini, j]);
//             if(array[j]<array[mini])
//             {
//                 mini = j;
//             }
//         }
//         animations.push([mini, array[i]]);
//         animations.push([i, array[mini]]);

//         let temp = array[mini];
//         array[mini] = array[i];
//         array[i] = temp;
//     }
//     return animations;
// }

const SelectionSort = (array) =>{
        const animations = [];
    
        for(let i=0; i< array.length; i++)
        {
            let mini = i;
            for(let j = i+1; j<array.length; j++)
            {
                animations.push([mini, j]);
                animations.push([mini, j]);
                if(array[j]<array[mini])
                {
                    mini = j;
                }
            }
            animations.push([mini, array[i]]);
            animations.push([i, array[mini]]);
    
            let temp = array[mini];
            array[mini] = array[i];
            array[i] = temp;
        }
        return animations;
    }

export default SelectionSort;