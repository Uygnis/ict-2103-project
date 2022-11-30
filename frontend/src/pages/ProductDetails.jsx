import React, { useState, useEffect, useRef } from "react";
import { Link ,useParams} from "react-router-dom";
import axios from "axios";

const ProductDetails = () => {
    
    const [singleProduct, setSingleProduct] = useState([])

    async function fetchQuery() {
        try {
          const { data } = await axios.get(
            `http://localhost:5001/api/mysql/amazon_data/get/${window.location.href.slice(
              38
            )}`
          );
          console.log(data)
          setSingleProduct(data);
        } catch (err) {
          console.log(err);
        }
      }
    useEffect(() => {
        fetchQuery();
        console.log(window.location.href.slice(38));
      console.log(singleProduct);
  
    }, [])
  
    return (
        
        
            singleProduct.map((curElem) => {
                return (

                    <div className="card_item" key={curElem.item_ID}>
                        <div className="productdetails">
                            <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="" />
                            <div className="userName">{curElem.productName}</div>
                            <div className="userUrl">{curElem.GPU_Name}</div>
                            <div className="detail-box">
                                <div className="detail-box">
                                <div className="gitDetail"><span>CPU</span>{curElem.CPU_Name}</div>
                                <div className="gitDetail"><span>Manufacturer</span>{curElem.Manufacturer}</div>
                                <div className="gitDetail"><span>Price($)</span>{curElem.Price}</div>
                                <div className="gitDetail"><span>Ram(GB)</span>{curElem.Ram}</div>
                                <div className="gitDetail"><span>Release Year</span>{curElem.releaseYear}</div>
                            </div>
                            </div>
                            <div className="detail-box">
                            <div className="gitDetail font-bold"><span>Specifications</span>{curElem.Listing}</div>
                            </div>
                            &nbsp;
                            &nbsp;
                            &nbsp;
                            &nbsp;
                            
                        </div>

                    </div>
                )
            })
        



    )
  }
export default ProductDetails;