import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
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

                    />
                    <label for="password">password</label>
                  </div>

                  <div
                    className="common"
                    style={{
                      height: "50px",
                      // backgroundColor: "#AC7E64",
                      backgroundColor:'rgb(32, 148, 19)',
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