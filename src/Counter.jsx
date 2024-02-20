import React from "react";

function Counter(i){
    console.log(i)
    var [count,setCount]=React.useState(i.icount)
    function increment(){
        i.isserialInc?setCount(count+5):setCount(count+1)
        
    }

    function decrement(){
        i.isserialInc?setCount(count-5):setCount(count-1)
    }

    return <>
    <h1>counter:{count}</h1>
    <button onClick={()=>increment()}>increment</button>
    <button onClick={()=>decrement()} >decrement</button>

    </>
}

export default Counter