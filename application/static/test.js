// test codes from geeksforgeeks to fetch data from api (mongo)
// api url
const api_url = "http://localhost:8000/record/";

// Defining async function
async function getapi(url) {
  // Storing response
  const response = await fetch(url, {
    method: "GET",
    // mode: "no-cors",
    "content-type": "application/json",
  });

  // Storing data in form of JSON
  var data = await response.json();
  console.log(data);
  if (response) {
    hideloader();
  }
  show(data);
}
// Calling that async function
getapi(api_url);

// Function to hide the loader
function hideloader() {
  document.getElementById("loading").style.display = "none";
}
// Function to define innerHTML for HTML table
function show(data) {
  let tab = `<tr>
          <th>item_ID</th>
          <th>CPU_Name</th>
          <th>GPU_Name</th>
          <th>ram</th>
          <th>price</th>
          <th>Listing</th>
         </tr>`;

  // Loop to access all rows
  for (let r of data) {
    tab += `<tr> 
    <td>${r.item_ID} </td>
    <td>${r.CPU_Name}</td>
    <td>${r.GPU_Name}</td> 
    <td>${r.ram}</td>    
    <td>${r.price}</td> 
    <td>${r.Listing}</td>       
</tr>`;
  }
  // Setting innerHTML as tab variable
  document.getElementById("displayData").innerHTML = tab;
}
