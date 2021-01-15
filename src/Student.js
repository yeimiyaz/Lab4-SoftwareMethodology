import React from "react"
import Course from './Course.js';

const Student = (props) => {
const Loop = () =>{
    var rows = [];
        for (var i = 0; i < props.enrolled; i++) {
        rows.push( <Course enrolled={i}></Course>);
        }
    return(rows)  
    }
return  <div>
            <p> Student <b>{props.name}</b> name with student <b>{props.number}</b> </p>
            <Loop/>
        </div>
};

export default Student;