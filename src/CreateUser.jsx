import { useFormik } from "formik";
import React from "react";
function CreateUser() {
    const formik = useFormik({
        initialValues: {
            username: "",
            position: "",
            office: "",
            age: "",
            startDate: "",
            salary: ""
        },
        validate: (values) => {
            let errors = {};

            if(values.username === ""){
                errors.username = "Please Enter Username"
            }
            if(values.position === ""){
                errors.username = "Please Enter Position"
            }

            return errors;
        },
        onSubmit: (values) => {
            console.log(values);
        }
    });
    return (
        <div className="container">
            <h2 className="text-center">Create User</h2>
            <form onSubmit={formik.handleSubmit}>
                <div className="row">
                    <div className="col-lg-6">
                        <label>UserName</label>
                        <input className="form-control"
                            type={"text"}
                            value={formik.values.username}
                            onChange={formik.handleChange}
                            name="username" />
                            {/* <span style={{color:'red'}}>{formik.errors.username}</span> */}
                    </div>
                    <div className="col-lg-6">
                        <label>Position</label>
                        <input className="form-control"
                            type={"text"}
                            value={formik.values.position}
                            onChange={formik.handleChange}
                            name="position" />
                            {/* <span style={{color:'red'}}>{formik.errors.position}</span> */}
                    </div>
                    <div className="col-lg-6">
                        <label>Office</label>
                        <input className="form-control"
                            type={"text"}
                            value={formik.values.office}
                            onChange={formik.handleChange}
                            name="office" />
                    </div>
                    <div className="col-lg-6">
                        <label>Age</label>
                        <input className="form-control"
                            type={"text"}
                            value={formik.values.age}
                            onChange={formik.handleChange}
                            name="age" />
                    </div>
                    <div className="col-lg-6">
                        <label>StartDate</label>
                        <input className="form-control"
                            type={"date"}
                            value={formik.values.startDate}
                            onChange={formik.handleChange}
                            name="startDate" />
                    </div>
                    <div className="col-lg-6">
                        <label>Salary</label>
                        <input className="form-control"
                            type={"text"}
                            value={formik.values.salary}
                            onChange={formik.handleChange}
                            name="salary" />
                    </div>
                    <div className="col-lg-6">
                        <input className="btn btn-primary mt-2" type={"submit"} value="Submit" />
                    </div>
                </div>
            </form>
        </div>
    );
}
export default CreateUser;