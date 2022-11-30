import React from 'react';

const Posts = ({ posts, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <table class="table border shadow">
    <tbody className='list-group mb-4'>
      {posts.map(post => (
        <tr key={post.item_ID} className='list-group-item'>   
                <td scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            {post.item_ID}</td>     

                <td scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            {post.CPU_Name}</td>

                <td scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            {post.GPU_Name}</td>
                       
                <td scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            {post.Listing}</td>

                <td scope="col"
                        className="px-40 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            {post.ram}</td>

                <td scope="col"
                        className="px-40 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            {post.price}</td>
        </tr>
      ))}
    </tbody>
    </table>
  );
};

export default Posts;