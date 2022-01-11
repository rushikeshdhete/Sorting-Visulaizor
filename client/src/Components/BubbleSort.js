

const BubbleSort = (array) =>{

    const animations = [];

    for(let i=0; i<array.length; i++)
    {
        for(let j =0; j< array.length - i -1; j++)
        {
            // const animation = {};
            
            if(array[j] > array[j+1] )
            {
                // animation.comparison = [j, j+1];
                // animation.swap = [array[j], array[j+1]];
                animations.push([j, j+1]) ;
                animations.push([j, j+1]);
                animations.push([j+1, array[j]]);
                animations.push([j, array[j+1]]);
                let temp = array[j+1];
                array[j+1] = array[j];
                array[j] = temp;
            }
            else{
                // animation.comparison = [j, j];
                // animation.swap = [array[j], array[j]];
                animations.push([j, j]) ;
                animations.push([j, j]);
                animations.push([j, array[j]]);
                animations.push([j, array[j]]);
            }
            // animations.push(animation);
        }
    }
    // console.log(animations)
    return animations;
}

export default BubbleSort;