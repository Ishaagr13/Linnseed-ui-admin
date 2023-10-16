import React, { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Login = () => {


  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const decodeToken = (token) => {
    try {
      const base64Url = token.split(".")[1];
      const base64 = base64Url.replace("-", "+").replace("_", "/");
      const decodedToken = JSON.parse(atob(base64));
      return decodedToken;
    } catch (error) {
      console.error("Error decoding JWT token:", error);
      return null;
    }
  };

  const handleUsernameChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // Make a POST request to the login API endpoint
      const response = await axios.post('http://localhost:8891/api/admin/auth', {
        email,
        password,
      });

      // Assuming the API returns a token upon successful login
      // console.log('response.data:', response.data);
      // const authToken = response.data.accessToken;
      const accessToken = token.accessToken;
      const decodedToken = decodeToken(accessToken);

      localStorage.setItem("access_token", accessToken);
      console.log('decodedToken', decodedToken)

      // Store the token in your application's state, context, or local storage as needed
      // localStorage.setItem('authToken', authToken);


    } catch (error) {
      console.error('Login failed. Error:', error);
    }
  };



  // return (
  //   <div>
  //     <h1>Login</h1>
  //     <form onSubmit={handleLogin}>
  //       <div>
  //         <label>Username:</label>
  //         <input type="text" value={email} onChange={handleUsernameChange} />
  //       </div>
  //       <div>
  //         <label>Password:</label>
  //         <input type="password" value={password} onChange={handlePasswordChange} />
  //       </div>
  //       <button type="submit">Log In</button>
  //     </form>
  //   </div>
  // );






  return (
    <>
      <div className="container pt-4 pb-4" style={{ marginTop: '8%' }}>
        <div className="row">
          <div className="col-md-6 offset-md-3 box-signin">
            <div className="card shadow border-0 rounded-0 box-inside ">
              <div className="card-header border-0 bg-white pt-3" >
                <h3>
                  Sign <b>In</b>
                </h3>
                <p className="text-muted">
                  Login to admin account
                </p>
              </div>
              <div className="card-body pt-0" >


                <form
                  className="login-form"
                  onSubmit={handleLogin}
                  name="signin"
                  action=""
                  method="post"
                >
                  <div className="form-floating mb-3">
                    <input
                      id="username"
                      name="username"
                      type="text"
                      className="form-control"
                      placeholder="Email"
                      required=""
                      value={email} onChange={handleUsernameChange}

                    />
                    <label for="username">Email</label>
                  </div>

                  <div className="form-floating mb-3">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      className="form-control"
                      placeholder="Password"
                      required=""
                      value={password} onChange={handlePasswordChange}
                    />
                    <label for="password">password</label>
                  </div>

                  <div
                    className="common"
                    style={{
                      height: "50px",
                      // backgroundColor: "#AC7E64",
                      backgroundColor: 'rgb(32, 148, 19)',
                      // width: "42vw",
                      borderRadius: "2px",
                    }}
                  >
                    <input type="hidden" name="submit_type" value="signup" />
                    <button
                      type="submit"
                      className="btn bg-c-main text-white rounded-0 signin-btn"
                      style={{ width: '100%', height: '100%', fontWeight: 600 }}
                    >
                      LOGIN AS ADMIN
                    </button>
                  </div>
                </form>

                <p style={{ marginTop: '20px' }}>
                  Not a member? <a href="/register">Register Now</a>
                </p>

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login