import React from "react";
import { useState,useEffect } from "react"; 
import axios from "axios";

const Pokemon = () =>{
    const [num, setNum] = useState(null);

    useEffect(()=>{
        async function getData(){
            const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`);
            
            console.log(res.data.name);
        }
        getData();
    });
    return(
        <div>
            <h1>your value is {num}</h1>
            <select value={num} onChange={(event)=>{
                setNum(event.target.value);
            }}>
                <option value="1">1</option>
                <option value="2">2</option>  
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>     
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
                <option value="13">13</option>
                <option value="100">100</option>
                
            </select>
        </div>
    )
};
export default Pokemon;