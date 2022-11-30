import React from 'react';

const Gpu = ({ posts, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <table class="table border shadow">
    <tbody className='list-group mb-4'>
      {posts.map(post => (
        <tr key={post.gpuName} className='list-group-item'>   
                <td scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            {post.gpuName}</td>     
                            <td scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            {post.price}</td> 


        </tr>
      ))}
    </tbody>
    </table>
  );
};

export default Gpu;