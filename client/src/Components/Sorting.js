import React, { useEffect, useState } from "react";
import "./Sorting.css";
import MergeSort from "./MergeSort";
import BubbleSort from "./BubbleSort";
import SelectionSort from "./SelectionSort";
import { NavLink } from "react-router-dom";

// const SPEED = 500;
const Sorting = () =>{

    const [array, setArray] = useState([]);
    const [ARRAY_SIZE, setsize] = useState(10);
    const [myWidth, setwidth] = useState(30);
    const [SPEED, setspeed] = useState(500)


    useEffect(()=>{
        resetArray();
    }, []);
    
    // const myWidth = 50;
    const changeWidth = () =>{
        const arraybar = document.getElementsByClassName("array-bar");
        for(let i=0; i<array.length; i++)
        {
            arraybar[i].style.width = `${myWidth}px`; 
        }
    } 

    const resetArray = () =>{
        const array = []
        for(let i = 0; i< ARRAY_SIZE; i++)
        {
            array.push(randomIntFromIntervals(5, 100));
        }
        console.log(array);
        setArray(array);
    }

    const randomIntFromIntervals = (min, max) =>{
        return Math.floor(Math.random() * (max - min +1)*min);
    }


    const mergeSort1 = () =>{
        const animations = MergeSort(array);
        for(let i = 0; i<animations.length; i++)
        {
            const arrayBars = document.getElementsByClassName('array-bar');
            const isColorChange = i%3 !== 2;
            if(isColorChange)
            {
                const [barOneIdx, barTwoIdx] = animations[i];
                // const barOneStyle = arrayBars[barOneIdx].style;
                // const barTwoStyle = arrayBars[barTwoIdx].style;
                const color = i%3 ===0 ? 'red' : 'rgb(0, 217, 255)';
                setTimeout(()=>{
                //    barOneStyle.backgroundColor = color;
                arrayBars[barOneIdx].style.backgroundColor = color;
                //    barTwoStyle.backgroundColor = color;
                   arrayBars[barTwoIdx].style.backgroundColor = color;
                }, i*SPEED);
            }else{
                setTimeout(()=>{
                    const [barOneIdx, newHeight] = animations[i];
                    // const barOneStyle = arrayBars[barOneIdx].style;
                    // barOneStyle.height = `${newHeight}px`;
                    arrayBars[barOneIdx].style.height = `${newHeight}px`;
                }, i*SPEED);
            }
        }
    }



            // const selectionSort = () =>{
            // //     const animations = [];
            // const animations = SelectionSort(array);
            // console.log(animations);
            // let k = 0;
            // // const Arraybar = document.getElementsByClassName('array-bar');
            // for(let i=0; i< array.length; i++)
            // {
            //     const Arraybar = document.getElementsByClassName('array-bar');
            //     for(let j = i+1; j<array.length; j++)
            //     {
            //         // animations.push([mini, j]);
                    
            //         const [first, second] = animations[k];
            //         // console.log(first);
            //         setTimeout(()=>{
            //             Arraybar[first].style.backgroundColor = 'red';
            //             Arraybar[second].style.backgroundColor = 'red';
            //         }, j*SPEED);
            //         k++;
            //         const [first1, second1] = animations[k];
            //         setTimeout(()=>{
            //             // Arraybar[first1].style.backgroundColor = 'rgb(0, 217, 255)';
            //             // Arraybar[second1].style.backgroundColor = 'rgb(0, 217, 255)';
            //         },j* SPEED);
            //         k++;
            //         // animations.push([mini, j]);
                   
            //     }
            //     // animations.push([mini, array[i]]);
            //     // animations.push([i, array[mini]]);
            // }
            // }




    // const ARRAY_SIZE = 20;

    const arraysize = (e) =>{
     const size = e.target.value;
     setsize(size);
     resetArray();
}
    const arraywidth = (e) =>{
        const wid = e.target.value;
        setwidth(wid);
        changeWidth();
    }

    const arrayspeed = (e) =>{
        const speed = e.target.value;
        setspeed(speed);
    }

    const bubbleSort = () =>{
        const animations = BubbleSort(array);
        // console.log(animations);
        for(let i=0; i<animations.length; i++)
        {
           const arraybar  = document.getElementsByClassName('array-bar');
            let iscolorchange;
            if(i%4 ===0 || i%4 ===1)
            {
                iscolorchange = true;
            }
            else{
                iscolorchange = false;
            }
            console.log(iscolorchange);
            if(iscolorchange)
            {
                const [baroneidx, bartwoidx] = animations[i];
                const color = i%4 ===0 ? "red" : "rgb(82, 226, 118)";
                setTimeout(()=>{
                    arraybar[baroneidx].style.backgroundColor = color;
                    arraybar[bartwoidx].style.backgroundColor = color;
                }, i*SPEED);
            }
            else{
                setTimeout(()=>{
                    const [idx, height1] = animations[i];
                    arraybar[idx].style.height = `${height1}px`;
                    arraybar[idx].style.backgroundColor = 'rgb(0, 217, 255)';
                }, i*SPEED);
            }

        }
       
    }
    

    
    



    return(
        <>
        
        <div class="container-fluid">
        <section class="row">
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top nav-bar">

            <div className="col-4">
            <div className = "row"> 
            <label for="ex1" className = "col-4">Array Size</label>
            <input onChange={e=> arraysize(e)} value={ARRAY_SIZE} class="form-control col-4" id="ex1" type="number"/>
            </div>
            <div className = "row ">
            <label for="ex1" className = "col-4">Array Width</label>
            <input onChange={e=> arraywidth(e)} value={myWidth} class="form-control col-4" id="ex1" type="number"/>
            </div>
            <div className = "row">
            <label for="ex1" className = "col-4">Array Speed</label>
            <input onChange={e=> arrayspeed(e)} value={SPEED} class="form-control col-4" id="ex1" type="number"/>    
            </div>
            </div>


            <div class="col-8">
            
<div className="container">
        <NavLink className="navbar-brand" to="#">Sorting Visualizor</NavLink>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
            <li className="nav-item ml-3">
                    {/* <NavLink className="nav-link" to="#">MergeSort</NavLink> */}
                    <button className="btn btn-outline-dark btn-sm" onClick={()=>{resetArray()}}>Generate</button>
                    {/* <button type="button" class="btn" onClick ={()=>resetArray()}>Generate</button> */}
                </li>
                <li className="nav-item ml-3">
                    {/* <NavLink className="nav-link" to="#">MergeSort</NavLink> */}
                    <button className="btn btn-outline-dark btn-sm" onClick={()=>{mergeSort1()}}>MergeSort</button>
                </li>
                <li className="nav-item ml-3">
                    {/* <NavLink className="nav-link" to="#">BubbleSort</NavLink> */}
                    <button className="btn btn-outline-dark btn-sm" onClick={()=>{bubbleSort()}}>BubbleSort</button>
                </li>
                <li className="nav-item ml-3">
                    {/* <NavLink className="nav-link" to="#">BubbleSort</NavLink> */}
                    <button className="btn btn-outline-dark btn-sm" onClick={()=>{}}>SelectionSort</button>
                </li>
            </ul>
        </div>
        </div>
            </div>




        </nav>
        </section>


        <section class="row container ">
        <div className = "array-container">
            {array.map((value, id)=>(
                <div className="array-bar center" key = {id} style ={{ height : `${value}px`} }>
                </div>
            ))
            }
            </div>
          
        </section>
        <footer>
            <div></div>
        </footer>
            </div>
        </>
    )

}
export default Sorting;