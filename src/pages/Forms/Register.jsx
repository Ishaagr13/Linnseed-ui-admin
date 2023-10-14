import React, { useState } from 'react'
import axios from 'axios';
import "./Register.css"
import { Link } from 'react-router-dom'

const Register = () => {
    const [uploadStatus, setUploadStatus] = useState('');

    const [data, setData] = useState({
        userName: "",
        fullName: "",
        email: "",
        mobile: "",
        password: "",
        dob: "",
        gender: "",
        profilePhoto: "",
        poaDoc: "",
        poiDoc: "",
    });

    const handleChange = (event, property) => {
        setData({ ...data, [property]: event.target.value });
    };

    const submitForm = (event) => {
        event.preventDefault();

        axios.post("http://localhost:8891/admin/users/", data).then((response) => {
            console.log(response.data);
            console.log("User Registered Successfully")

        }).catch((error) => {
            console.log(error);
            console.log("Invalid Credentials!");

        });
    };
    // const imageHandler=(event)=>{
    //     const file=event.target.files[0];
    //     const formData=new FormData()
    //     formData.append('image',file)

    //     fetch(`http://localhost:8891/admin/users`,{
    //         method:'POST',
    //         body:formData,
    //         headers:{
    //             'Accept':'multipart/form-data',
    //         },
    //         credentials:'include',
    //     })
    //     .the(res=>res.json())
    //     .then(res=>{
    //         setUploadStatus(res.msg);
    //     })
    //     .catch(error=>{
    //         console.error(error)
    //     })
    // }

    return (
        <>
            <div className="form-container" >
                <div className="heading-cont">
                    <h2 style={{ fontWeight: 700,marginLeft:'26px' }}>Sign Up</h2>
                    <p style={{ color: 'gray',marginLeft:'26px' }}>Create new account for Admin</p>
                </div>
                <form onSubmit={submitForm} class="login-form" name="signup" action="" method="post">

                    <div className="form-cont" style={{ display: 'flex', flexWrap: 'wrap' }}>
                        <div class="form-floating mb-3 mx-4 mx-4">
                            <input id="username" name="username" type="text" class="form-control" placeholder="UserName" required=""
                                onChange={(e) => handleChange(e, "userName")}
                                value={data.userName} />
                            <label for="username">User Name</label>
                        </div>
                        <div class="form-floating mb-3 mx-4">
                            <input id="fullName" name="fullName" type="text" class="form-control" placeholder="FullName" required=""
                                onChange={(e) => handleChange(e, "fullName")}
                                value={data.fullName} />
                            <label for="fullName">Full Name</label>
                        </div>

                        <div class="form-floating mb-3 mx-4">
                            <input id="email" name="email" type="email" class="form-control" placeholder="Email" required=""
                                onChange={(e) => handleChange(e, "email")}
                                value={data.email} />
                            <label for="email">Email</label>
                        </div>

                        <div class="form-floating mb-3 mx-4">
                            <input id="mobile" name="mobile" type="number" class="form-control" placeholder="Mobile" required=""
                                onChange={(e) => handleChange(e, "mobile")}
                                value={data.mobile} />
                            <label for="mobile">Mobile</label>
                        </div>

                        <div class="form-floating mb-3 mx-4">
                            <input id="password" name="password" type="password" class="form-control" placeholder="Password" required=""
                                onChange={(e) => handleChange(e, "password")}
                                value={data.password} />
                            <label for="password">Password</label>
                        </div>

                        <div className="form-floating mb-3 mx-4">
                            <input
                                id="dob"
                                name="dob"
                                type="date"
                                className="form-control"
                                required=""
                                onChange={(e) => handleChange(e, "dob")}
                                value={data.dob}
                            />
                            <label htmlFor="dob">Date of Birth</label>
                        </div>

                        <div class="form-floating mb-4">
                            <select class="form-select " id="gender" aria-label="gender"
                                onChange={(e) => handleChange(e, "gender")}
                                value={data.gender}>
                                <option value="" selected>Select</option>
                                <option value="M">Male</option>
                                <option value="F" disabled="" selected="">Female</option>
                            </select>
                            <label for="gender">Gender</label>
                        </div>

                        <div class="form-floating mb-3 mx-4">
                            {/* <input type="file" name="image" accept="image/*" multiple={false} onChange={imageHandler} /> */}
                            <input id="profilepic" name="profilepic" type="file" class="form-control" placeholder="profilepic" required=""
                                 onChange={(e) => handleChange(e, "profilePhoto")}
                                 value={data.profilePhoto} />
                            <label for="profilepic">Profile Pic</label>
                        </div>
                        <h2> {uploadStatus} </h2>
                        <div class="form-floating mb-3 mx-4">
                            <input id="addressproof" name="addressproof" type="file" class="form-control" placeholder="addressproof" required=""
                                onChange={(e) => handleChange(e, "poaDoc")}
                                value={data.poaDoc} />
                            <label for="addressproof">Address Proof</label>
                        </div>
                        <div class="form-floating mb-3 mx-4">
                            <input id="identityproof" name="identityproof" type="file" class="form-control" placeholder="identityproof" required=""
                                onChange={(e) => handleChange(e, "poiDoc")}
                                value={data.poiDoc} />
                            <label for="identityproof">Identity Proof</label>
                        </div>

                    </div>


                    <div class="form-floating mb-3 mx-4" style={{ backgroundColor: 'rgb(32, 148, 19)' }}>
                        <button className='btn-join' style={{ backgroundColor: 'rgb(32, 148, 19)' }} type='submit' >
                            JOIN AS ADMIN
                        </button>
                    </div>

                </form>

                <p style={{ marginTop: '20px',marginLeft:'26px' }}>
                    Already a member ? <a href="/login">Login</a>
                </p>

            </div>
        </>
    )
}

export default Register