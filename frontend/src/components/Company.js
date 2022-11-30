import React from 'react';

const Company = ({ company, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }
  async function handleClick(e){
        console.log(e)
        // Send a post request to update the data in the database.
        return await fetch(`http://localhost:5001/api/mongo/company_data/delete/${e._id}`, {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
        })
        window.location.reload(true);
  }
 
  return (
    <table class="table border shadow">
    <tbody className='list-group mb-4'>
      {company.map(e => (
        <tr key={e.item_ID} className='list-group-item'>   
                <td scope="col-3"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            {e.item_ID}</td>     
                <td scope="col-6"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            {e.CPU_Name}</td>
                <td scope="col"
                        className="px-20 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            {e.GPU_Name}</td>
                       
                <td scope="col"
                        className="px-40 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            {e.Listing}</td>

                <td scope="col"
                        className="px-40 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            {e.ram}</td>

                <td scope="col"
                        className="px-40 py- text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            {e.price}
                            </td>
                            <td class="inputbox">
            <input 
            onClick={i=>handleClick(e)}
             type="button" value="delete"/>
      </td>
        </tr>
      ))}
    </tbody>
    </table>
  );
};

export default Company;