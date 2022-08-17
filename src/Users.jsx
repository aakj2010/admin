import { Link } from "react-router-dom";

function Users() {
    const users = [
        {
            id: 1,
            name: "Haroon",
            position: "CTO",
            office: "BPO",
            age: "33",
            startDate: "23/04/2022",
            salary: "45000"
        },
        {
            id: 2,
            name: "Mydeen",
            position: "CTO",
            office: "GnG",
            age: "33",
            startDate: "23/04/2022",
            salary: "40000"
        },
        {   
            id: 3,
            name: "Midhun",
            position: "Teacher",
            office: "Vel",
            age: "33",
            startDate: "23/04/2022",
            salary: "58000"
        },
        {   
            id: 4,
            name: "Navaraj",
            position: "Teacher",
            office: "Fairlands",
            age: "33",
            startDate: "23/04/2022",
            salary: "58000"
        }
    ]
    return (
        <div class="container-fluid">

            {/* <!-- Page Heading --> */}
            <div class="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 class="h3 mb-0 text-gray-800">Users</h1>
                <Link to="/portal/create-user" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                    class="fas fa-download fa-sm text-white-50"></i>Create User</Link>
            </div>


            {/* <!-- DataTales Example --> */}
            <div class="card shadow mb-4">
                <div class="card-header py-3">
                    <h6 class="m-0 font-weight-bold text-primary">Users</h6>
                </div>
                <div class="card-body">
                    <div class="table-responsive">
                        <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                            <thead>
                                <tr>
                                    <th>S.No</th>
                                    <th>Name</th>
                                    <th>Position</th>
                                    <th>Office</th>
                                    <th>Age</th>
                                    <th>Start date</th>
                                    <th>Salary</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tfoot>
                                <tr>
                                    <th>S.No</th>
                                    <th>Name</th>
                                    <th>Position</th>
                                    <th>Office</th>
                                    <th>Age</th>
                                    <th>Start date</th>
                                    <th>Salary</th>
                                    <th>Actions</th>
                                </tr>
                            </tfoot>
                            <tbody>
                                {
                                    users.map((user, index)=>{
                                        return <tr>
                                        <td>{index + 1}</td>
                                        <td>{user.name}</td>
                                        <td>{user.position}</td>
                                        <td>{user.office}</td>
                                        <td>{user.age}</td>
                                        <td>{user.startDate}</td>
                                        <td>${user.salary}</td>
                                        <td>
                                            <Link to={`/portal/users/${user.id}`} className="btn btn-sm btn-primary mr-2"> View </Link>
                                            <Link to={`/portal/users/${user.id}`} className="btn btn-sm btn-warning mr-2"> Edit </Link>
                                            <Link to={`/portal/users/${user.id}`} className="btn btn-sm btn-danger mr-2"> Delete </Link>
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
export default Users;