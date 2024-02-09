import { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailErr, setemailErr] = useState("");
  const [passwordErr, setPasswordErr] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    if (e.target.value === "") {
      setemailErr("This field is required");
    } else if (!validateEmail(e.target.value)) {
      setemailErr("Please enter a valid email format");
    } else {
      setemailErr("");
    }
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    if (e.target.value === "") {
      setPasswordErr("This field is required");
    } else if (e.target.value.length < 8) {
      setPasswordErr("Password must contain at least 8 characters");
    } else {
      setPasswordErr("");
    }
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <div className="container mt-5" >
        <div className="row justify-content-md-center mt-5 style={{marginTop:'150px'}}">
          <div className="col-md-6">
            <form>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Email:
                </label>
                <input
                  type="text"
                  className={`form-control ${emailErr ? "border-danger" : ""}`}
                  value={email}
                  onChange={handleEmailChange}
                />
                {emailErr && <p className="text-danger">{emailErr}</p>}
              </div>

              <div className="mb-3">
                <label>Password:</label>
                <div className="d-flex">
                  <input
                    type={showPassword ? "text" : "password"}
                    className={`form-control ${
                      passwordErr ? "border-danger" : ""
                    }`}
                    value={password}
                    onChange={handlePasswordChange}
                  />
                  
                </div>
                {passwordErr && <p className="text-danger">{passwordErr}</p>}
              </div>
              <button
                    type="button"
                    className="btn btn-outline-secondary mt-3"
                    onClick={toggleShowPassword}
                  >
                    {showPassword ? "Hide password" : "Show password" }
                  </button>

              <button className="btn btn-success mt-3" type="submit">
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;