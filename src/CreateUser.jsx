import React from "react";
function CreateUser() {
    return (
       
        <div className="container">
             <h2 className="text-center">Create User</h2>
            <div className="row">
                <div className="col-lg-6">
                    <label>UserName</label>
                    <input className="form-control" type={"text"} />
                </div>
                <div className="col-lg-6">
                    <label>Position</label>
                    <input className="form-control" type={"text"} />
                </div>
                <div className="col-lg-6">
                    <label>Office</label>
                    <input className="form-control" type={"text"} />
                </div>
                <div className="col-lg-6">
                    <label>Age</label>
                    <input className="form-control" type={"text"} />
                </div>
                <div className="col-lg-6">
                    <label>StartDate</label>
                    <input className="form-control" type={"date"} />
                </div>
                <div className="col-lg-6">
                    <label>Salary</label>
                    <input className="form-control" type={"text"} />
                </div>
            </div>
        </div>
    );
}
export default CreateUser;