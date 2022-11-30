import React, { useState, useEffect } from "react";
import axios from "axios";
import Gpu from "../components/Gpu";
import Pagination from "../components/Pagination";

const GpuList = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get(
        "http://localhost:5001/api/mysql/gpu_benchmarks/exists"
      );
      setPosts(res.data);
      setLoading(false);
    };

    fetchPosts();
  }, []);

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-1">
      <div className="py-2 align-middle inline-block min-w-full">
        <h3 class="mb-3 text-center font-bold">PRODUCT DETAILS</h3>
        <table class="table border shadow">
          <thead className="bg-gray-50">
            <tr className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Gpu Name
              </th>
              <th
                scope="col"
                className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                <div className="px-11 py-1 text-centre">Price($)</div>
              </th>

            </tr>
          </thead>
        </table>
      </div>
      <Gpu posts={currentPosts} loading={loading} />
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={paginate}
        bgColor="Red"
        selectColor="firebrick"
        indexbgColor="silver"
        justify-content="space-between"
      />
    </div>
  );
};

export default GpuList;
