
import Nav from './Nav';
import { Link } from 'react-router-dom';
import Tasks from "./Tasks";
import React, { useState, useEffect } from "react";
import axios from 'axios';

const Soultion = () => {

    const [cat, setCat] = useState([])
    const [solItem, setSolItem] = useState('')
    const [desc, setDesc] = useState('')
    const [product, setProduct] = useState([])

    useEffect(() => {
        let y = localStorage.getItem('solId');
        console.log({ y })
        axios.get(`http://165.22.218.254:4050/v1/secret/solutions/${y}`).then(rsp => {
            console.log(rsp);
            console.log(rsp.data.info.name)
            console.log(rsp.data.info.category.name)
            setCat(rsp.data.info.category.name)
            setSolItem(rsp.data.info.name)
            setDesc(rsp.data.info.description)
            setProduct(rsp.data.info.products)

        })



    }, [])


    return (
        <div>
            {/* <Nav /> */}
            <div className="container">
                <div className="col-md-12 wid">
                    <div className="card wd" >
                     
                        <div className="card-body">
                            <h5 className="cent">{cat}</h5>
                            <h6 className="card-title"><strong>Product Name :</strong> {solItem}</h6>
                            <p className="card-text"><strong>Product Description: </strong>{desc}</p> 

                            <h6>Products</h6>

                            {product.map(function (item,i) {
                            
                                return (
                                <div key={i}>
                                <img className="st" src={item.logo} alt="product image"/>
                                <p><strong>Product name: </strong> {item.name}</p>
                               
                                <p> <strong>Short Description:</strong> {item.short_desc}</p>
                                </div>

                                );
                            })
                            }                        
                            </div>
                    </div>
                </div>
            </div>

        </div>


    )
}

export default Soultion;