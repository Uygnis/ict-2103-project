import React, {useState, useEffect} from 'react'

const Update = () => {
    async function handleUpdate(e){
        console.log(e)
         await fetch(`http://localhost:5001/api/mongo/company_data/update/${e._id}`,{
          method:"PATCH",
          headers: { "Content-Type": "application/json" },
        })
        window.location.reload(true);
      }
    //   const [item, setItem] = (JSON.parse(window.sessionStorage.getItem("item"))??null)
    //   console.log(item)
  return (
    <div> <div class="inputbox">
    <input type="text" required="required" style={{border: '1px solid black'}}/>
    <input type="text" required="required" style={{border: '1px solid black'}}/>
    <input type="text" required="required" style={{border: '1px solid black'}}/>
    <input type="text" required="required" style={{border: '1px solid black'}}/>
    <input type="text" required="required" style={{border: '1px solid black'}}/></div></div>
  )
}

export default Update