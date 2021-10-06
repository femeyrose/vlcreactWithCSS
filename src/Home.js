
import React, { useState, useEffect } from "react";
import Nav from './Nav';
import './home.css';
import Tasks from './Tasks';
import { Link } from 'react-router-dom';
import axios from 'axios';





const Home = () => {
    const [categoriesArray, setCategories] = useState([])
    const [solutionsArray, setSolutions] = useState([])
    const [sol, setSol] = useState([])

    useEffect(() => {
        axios.get('http://165.22.218.254:4050/v1/secret/categories').then(rsp => {
            console.log(rsp);

            console.log("rsp.data.info", rsp.data.info)

            setCategories(rsp.data.info);
            

            // const filterArray = () => setCategories(categoriesArray.filter(function (e) {
            //     return e.status != "0";
            // }))
            console.log("all categories-> rsp.data.info", categoriesArray)

            let solutionsList = [];
            for (let i = 0; i < categoriesArray.length; i++) {

                solutionsList.push(categoriesArray[i].solutions);
                console.log(solutionsList[i])

            }
            setSolutions(solutionsList);
            console.log("solutions array", solutionsList)

        })
    },[])

    function fun(item) {
        console.log("hello")
      
        setSol(item.solutions)
        console.log(sol)

    }

    return (
        <div>
            <Nav />
            <section className="mt-3">
                <div className="container vertical-tabs">
                    <div className="row">
                        <div className="col-md-3" >
                           
                                    {categoriesArray.map(function (item,i) {
                                         
                                        return (
                                            <div key={i} className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                                            <div className="nav-link" id="v-pills-one-tab" data-toggle="pill" role="tab" aria-controls="v-pills-one" aria-selected="true">
                                        
                                        <li key={i}><button className="bt" onClick={() => { fun(item) }}>{item.name}</button></li>
                                     
                                       
                                        </div>

                                        </div>)
                                    })
                                    
                                    }

                                    


                              
                        </div>
                        <div className="col-md-8 offset-md-1">
                            <Tasks solutions={sol}/>

                        </div>
                    </div>
                </div>
            </section>

        </div>





    )
}

export default Home;