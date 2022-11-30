import React from 'react';

const Company = ({ company, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <table class="table border shadow">
    <tbody className='list-group mb-4'>
      {company.map(company => (
        <tr key={company.item_ID} className='list-group-item'>   
                <td scope="col-3"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            {company.item_ID}</td>     
                <td scope="col-6"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            {company.CPU_Name}</td>
                <td scope="col"
                        className="px-20 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            {company.GPU_Name}</td>
                       
                <td scope="col"
                        className="px-40 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            {company.Listing}</td>

                <td scope="col"
                        className="px-40 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            {company.ram}</td>

                <td scope="col"
                        className="px-40 py-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            {company.price}
                            </td>
        </tr>
      ))}
    </tbody>
    </table>
  );
};

export default Company;