import {React,useState} from "react";
import CalculatorBox from "./Components/CalculatorBox";

const App =()=>{
    const [state,setState]= useState({

        fristValue:"sakmxalsx",
        secondValue:"",
        Operator:""
    })
    handelWrite =()=>{
        
    }
    return(
        <div className="bg-black w-full h-screen flex justify-center items-center">
            <CalculatorBox/>
        </div>
    )
}

export default App