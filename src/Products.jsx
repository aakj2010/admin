import { Link } from "react-router-dom";
function Products() {
    const products = [
        {
            Id: "1",
            name: "OnePlus 9R",
            brand: "OnePlus",
            quantity: "20",
            price: "35000"
        },
        {
            Id: "2",
            name: "Mi 6Pro",
            brand: "Xiomi",
            quantity: "10",
            price: "13500"
        },
        {
            Id: "3",
            name: "Lenovo K6Power",
            brand: "Lenovo",
            quantity: "25",
            price: "10000"
        },
        {
            Id: "4",
            name: "OnePlus 10R",
            brand: "OnePlus",
            quantity: "35",
            price: "40000"
        }
    ]
    return (
        <div class="container-fluid">
            <div class="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 class="h3 mb-0 text-gray-800">Products</h1>
                <Link to="/portal/create-product" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                    class="fas fa-download fa-sm text-white-50"></i>Create Product</Link>
            </div>

            <div class="card shadow mb-4">
                <div class="card-header py-3">
                    <h6 class="m-0 font-weight-bold text-primary"> Products</h6>
                </div>
                <div class="card-body">
                    <div class="table-responsive">
                        <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                            <thead>
                                <tr>
                                    <th>S.No</th>
                                    <th>Product Name</th>
                                    <th>Product Brand</th>
                                    <th>Quantity</th>
                                    <th>Price</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tfoot>
                                <tr>
                                    <th>S.No</th>
                                    <th>Product Name</th>
                                    <th>Product Brand</th>
                                    <th>Quantity</th>
                                    <th>Price</th>
                                    <th>Actions</th>

                                </tr>
                            </tfoot>
                            <tbody>
                                {
                                    products.map((product, index) => {
                                        return <tr>
                                            <td>{index + 1}</td>
                                            <td>{product.name}</td>
                                            <td>{product.brand}</td>
                                            <td>{product.quantity}</td>
                                            <td>{product.price}</td>
                                            <td>
                                                <Link to={`/portal/products/${product.Id}`} className="btn btn-sm btn-primary mr-2">View</Link>
                                                <Link to={`/portal/products/edit/${product.Id}`} className="btn btn-sm btn-warning mr-2">Edit</Link>
                                                <Link to={`/portal/products/${product.Id}`} className="btn btn-sm btn-danger mr-2">Delete</Link>
                                            </td>
                                        </tr>
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Products;