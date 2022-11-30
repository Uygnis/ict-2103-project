import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
const Product = () => {

    const [users, setUsers] = useState([]);



    const getUsers = async () => {
        const response = await fetch("http://localhost:5001/api/mongo/amazon_data/get");
        const FinalData = await response.json();
        setUsers(FinalData)
    }



    useEffect(() => {
        getUsers();
    }, [])

    return (
      
            <div className="Productcard">
               
                {
                    users.map((curElem) => {
                        return (

                            <div className="card_item" key={curElem.item_ID}>
                                <div className="card_inner">
                                    <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="" />
                                    <div className="userName">{curElem.CPU_Name}</div>
                                    <div className="userUrl">{curElem.GPU_Name}</div>
                                    <div className="detail-box">

                                        <div className="gitDetail"><span>Price($)</span>{curElem.price}</div>
                                        <div className="gitDetail"><span>Ram</span>{curElem.ram}</div>
                                        
                                    </div>
                                    <Link to={`product/${curElem.item_ID}`}>
                                    <button className="seeMore">See More</button></Link>
                                    
                                </div>

                            </div>
                        )
                    })
                }

            </div>              


    )
}

export default Product;
