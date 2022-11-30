import React from 'react';

const AddProduct = () => {

    return (
        <form>
        <div>
            <h1>Company Product Page </h1>
            <div class = "form-group">
                <label>CPU Name</label>
                <input type="text" class="form-control" name = "cpuName" placeholder="CPU Name"/>
            </div>
            <div class = "form-group">
                <label>GPU Name</label>
                <input type="text" class="form-control" name = "gpuName" placeholder="GPU Name"/>
            </div>
            <div class = "form-group">
                <label>RAM</label>
                <input type="text" class="form-control" name = "ram" placeholder="RAM"/>
            </div>
            <div class = "form-group">
                <label>Price</label>
                <input type="text" class="form-control" name = "price" placeholder="Price"/>
            </div>
            <div class = "form-group">
                <label>Listing</label>
                <input type="text" class="form-control" name = "listing" placeholder="Price"/>
            </div>
            
        </div>
        </form>

    );
};

export default AddProduct;