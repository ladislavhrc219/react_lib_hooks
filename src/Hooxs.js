import React, {useState}  from 'react';

// importfrom 'react';



// function replicaFunction = ()
// useReplica = function


function Hooxs () {
    const [count, setCount] = useState(0); 

    // function replicaFunction(){
    //     setReplica = replica +1;
    // }
    return (
        <div>
            <h2> Yo! </h2>
            <h2> {count}</h2>
            {/* <p> {replicaFunction } </p> */}
 <button onClick={()=> setCount(count+1)}> hey click me</button>
       
        </div>
    );
};

export default Hooxs;
