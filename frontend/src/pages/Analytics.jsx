import React, { useEffect, useState } from "react"

const Analytics = () => {
  const [users, setUsers] = useState([])

  const fetchData = () => {
    fetch("http://localhost:5001/api/mysql/amazon_data/getQty")
      .then(response => {
        return response.json()
      })
      .then(data => {
        setUsers(data)
      })
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div>
      {users.length > 0 && (
        <ul>
          {users.map(user => (
            <li key={user.item_ID}>{user.item_ID}</li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default Analytics;