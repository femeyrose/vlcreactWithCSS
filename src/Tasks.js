
import Solution from './Solution';
import { Link } from 'react-router-dom';
import Nav from './Nav';
import React, { useState, useEffect } from "react";
import axios from 'axios';

const Tasks = ({ solutions }) => {
    const [solu, setSolu] = useState([])


    useEffect(() => {
        axios.get('http://165.22.218.254:4050/v1/secret/solutions').then(rsp => {
            console.log(rsp);

        })
    }


        , [])

        function findId(solution) {
            console.log(solution.solutionsid)
            localStorage.setItem('solId',solution.solutionsid);
          
        }

    return (
        <div>
            {/* <Nav/> */}
            <div className="container">
                <div className="col-md-12 wid">
                    <div className="card wd" >
                        <div className="card">
                            <div className="card-body">
                                <Link to="/solution" style={{ textDecoration: 'none' }}> 
                                {solutions.map(solution => (<li key={solution.name} className="remlis">
                                <button className="bt" onClick={() => { findId(solution) }} >
                                    {solution.name}
                                    </button>
                                     </li>

                                ))}
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default Tasks;