import React, { useState, useEffect } from "react";
import axios from "axios";
import Company from "../components/Company";
import "./AddProduct.css"

const AddProduct = () => {
  const [company, setCompany] = useState([]);
  const [loading, setLoading] = useState(false);
  const [CPU_Name, setCPUName] = useState('');
  const [device, setDevice] = useState({
    CPU_Name:'',
    GPU_Name:'',
    ram:'',
    price:'',
    Listing:'',
  });

  const handleClick = e => {
    fetch('http://localhost:5001/api/mongo/company_data/post', {
       method: 'POST',
       body: JSON.stringify(
          device
       ),
       headers: {
          'Content-type': 'application/json',
       },
    })
       .then((res) => res.json())
       .then((e) => {
       })
       .catch((err) => {
          console.log(err.message);
       });
  };
  useEffect(() => {
    const fetchCompany= async () => {
      setLoading(true);
      const res = await axios.get(
        "http://localhost:5001/api/mongo/company_data/get"
      );
      setCompany(res.data);
      setLoading(false);
    };
    fetchCompany();
  }, []);
    return (
      
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-1">
      <div className="py-2 align-middle inline-block min-w-full">
      <form>
        <div class="center">
        <h1>Add New Product</h1>
        <form>
          <div class="inputbox">
            <input type="text" required="required" onChange={e=>{
              setDevice({...device,CPU_Name:e.target.value})
            }}/>
            <span>CPU Name</span>
          </div>
          <div class="inputbox">
            <input type="text" required="required" onChange={
              e=>{
                setDevice({...device,GPU_Name:e.target.value})
              }
            }/>
            <span>GPU Name</span>
          </div>
          <div class="inputbox">
            <input type="text" required="required" onChange={
              e=>{
                setDevice({...device,ram:e.target.value})
              }
            }/>
            <span>RAM</span>
          </div>
          <div class="inputbox">
            <input type="text" required="required"
             onChange={
              e=>{
                setDevice({...device,price:e.target.value})
              }
            }/>
            <span>Price</span>
          </div>
          <div class="inputbox">
            <input type="text" required="required"  onChange={
              e=>{
                setDevice({...device,Listing:e.target.value})
              }
            }/>
            <span>Listing</span>
          </div>
          <div class="inputbox">
            <input 
            onClick={handleClick}
             type="button" value="submit"/>
          </div>
          </form>
          </div>
        </form>
        <h3 class="mb-3 text-center font-bold">PRODUCT DETAILS</h3>
        <table class="table border shadow">
          <thead className="bg-gray-50">
            <tr className="">
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                ID
              </th>   
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                CPU Name
              </th>
              <th
                scope="col"
                className="px-20 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                GPU Name
              </th>
              <th
                scope="col"
                className="px-40 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Listing
              </th>
              <th
                scope="col"
                className="px-40 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Ram(GB)
              </th>
              <th
                scope="col"
                className="px-40 py-6 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Price($)
              </th>
             
            </tr>
          </thead>
        </table>
      </div>
      <Company company={company} setCompany={setCompany} setDevice={setDevice} device = {device}/>

    </div>
    
  );
};
export default AddProduct;