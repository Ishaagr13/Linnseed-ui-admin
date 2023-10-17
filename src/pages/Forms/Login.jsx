import React, { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

const Login = ({ setToken }) => {

  const navigate = useNavigate();


  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [accessToken, setAccessToken] = useState(null);

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
  const handleNavigateToDashboard = () => {
    navigate('/dash'); // Specify the route you want to navigate to
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
      const response = await axios.post('http://localhost:8891/api/admin/auth', {
        email,
        password,
      });

      console.log('response.data:', response.data);
      const authToken = response.data.accessToken;
      // const accessToken = token.accessToken;
      const decodedToken = decodeToken(accessToken);
      // localStorage.setItem("access_token", accessToken);
      console.log('decodedToken', decodedToken)
      // localStorage.setItem('authToken', authToken);
      setToken(decodedToken);
    } catch (error) {
      console.error('Login failed. Error:', error);
    }
} 


const fetchDataWithAccessToken = async () => {
  try {
    const response = await axios.get('http://localhost:8891/api/admin/auth', {
      headers: {
        Authorization: `Bearer ${accessToken}`, // Include the access token in the Authorization header
      },
    });

    // Handle the response data here
    console.log('Data from the protected endpoint:', response.data);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};


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
                  // value={email}
                  // onChange={(e) => setEmail(e.target.value)}

                  />
                  <label htmlFor="username">Email</label>
                </div>

                <div className="form-floating mb-3">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    required=""
                    // value={password}
                    // onChange={(e) => setPassword(e.target.value)}
                    value={password} onChange={handlePasswordChange}
                  />
                  <label htmlFor="password">password</label>
                </div>

                {/* <Link to="/homepagerefer"> */}
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
                    onClick={handleNavigateToDashboard}
                    className="btn bg-c-main text-white rounded-0 signin-btn"
                    style={{ width: '100%', height: '100%', fontWeight: 600 }}
                  >
                    LOGIN AS ADMIN
                  </button>
                </div>
                {/* </Link> */}

              </form>

              <p style={{ marginTop: '20px' }}>
                {/* Not a member? <a href="/register">Register Now</a> */}
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