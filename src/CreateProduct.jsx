import React from 'react'

function CreateProduct() {
  return (
    <div className="container">
      <h2 className="text-center">Create Product</h2>
      <div className="row">
        <div className="col-lg-6">
          <label>Product Name</label>
          <input className="form-control" type={"text"} />
        </div>
        <div className="col-lg-6">
          <label>Product Brand</label>
          <input className="form-control" type={"text"} />
        </div>
        <div className="col-lg-6">
          <label>Quantity</label>
          <input className="form-control" type={"text"} />
        </div>
        <div className="col-lg-6">
          <label>Price</label>
          <input className="form-control" type={"text"} />
        </div>
      </div>
    </div>
  )
}

export default CreateProduct;