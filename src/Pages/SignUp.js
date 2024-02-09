import { useState } from "react";


function Signup() {

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [emailErr, setemailErr] = useState("");
  const [nameErr, setNameErr] = useState("");
  const [usernameErr, setUsernameErr] = useState("");
  const [passwordErr, setPasswordErr] = useState("");
  const [confirmPasswordErr, setConfirmPasswordErr] = useState("");

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateUsername = (username) => { 
    return !/\s/.test(username);
  };

  const validatePassword = (password) => {
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
  };

  const validateConfirmPassword = (confirmPassword) => {
    return confirmPassword === password;
  };

  const handleEmailChange = (e) => {
    
    setEmail(e.target.value);

    if (setEmail==0) {
      setemailErr("this field is required");
    } else if (!validateEmail(e.target.value)) {
      setemailErr("please enter valid email format");
    } else {
      setemailErr("");
    }
  };

  const handleNameChange = (e) => {
    
    setName(e.target.value);

    if (e.target.value == 0) {
      setNameErr("This field is required");
    } else {
      setNameErr("");
    }
  };

  const handleUsernameChange = (e) => {
   
    setUsername(e.target.value);

    if (e.target.value==0) {
      setUsernameErr("This field is required");
    } else if (!validateUsername(e.target.value)) {
      setUsernameErr("Username should not contain spaces");
    } else {
      setUsernameErr("");
    }
  };

  const handlePasswordChange = (e) => {
    
    setPassword(e.target.value);

    if (e.target.value==0) {
      setPasswordErr("This field is required");
    } else if (!validatePassword(e.target.value)) {
      setPasswordErr(
        "password must be contain at least 8 character contain lowercase uppercase and special character"
      );
    } else {
      setPasswordErr("");
    }
  };

  const handleConfirmPasswordChange = (e) => {
    const newConfirmPassword = e.target.value;
    setConfirmPassword(newConfirmPassword);

    if (newConfirmPassword==0) {
      setConfirmPasswordErr("This field is required");
    } else if (!validateConfirmPassword(newConfirmPassword)) {
      setConfirmPasswordErr("Passwords do not match");
    } else {
      setConfirmPasswordErr("");
    }
  };

 

  
    return (
        <div className="container  " style={{marginTop:'150px'}}>
          <div className="row  d-flex justify-content-center align-items-center">
            <div className="col-6">
              <form>
               
                <div className="mb-3">
                  <label>Name:</label>
                  <input
                    type="text"
                    className={`form-control ${nameErr ? "border-danger" : ""}`}
                    value={name}
                    onChange={handleNameChange}
                  />
                  {nameErr && <p className="text-danger">{nameErr}</p>}
                </div>
                <div className="mb-3">
                
                <label htmlFor="exampleInputEmail1" className="form-label">Email:</label>
                <input
                  type="text"
                  className={`form-control ${emailErr ? "border-danger" : ""}`}
                  value={email}
                  onChange={handleEmailChange}
                />
                {emailErr && <p className="text-danger">{emailErr}</p>}
              </div>
                <div className="mb-3">
                  <label>Username:</label>
                  <input
                    type="text"
                    className={`form-control ${usernameErr ? "border-danger" : ""}`}
                    value={username}
                    onChange={handleUsernameChange}
                  />
                  {usernameErr && <p className="text-danger">{usernameErr}</p>}
                </div>
                <div className="mb-3">
                  <label>Password:</label>
                  <input
                    type="password"
                    className={`form-control ${passwordErr ? "border-danger" : ""}`}
                    value={password}
                    onChange={handlePasswordChange}
                  />
                  {passwordErr && <p className="text-danger">{passwordErr}</p>}
                </div>
                <div className="mb-3">
                  <label>Confirm Password:</label>
                  <input
                    type="password"
                    className={`form-control ${confirmPasswordErr ? "border-danger" : ""}`}
                    value={confirmPassword}
                    onChange={handleConfirmPasswordChange}
                  />
                  {confirmPasswordErr && <p className="text-danger">{confirmPasswordErr}</p>}
                </div>
                <button className="btn btn-success mt-3" type="submit">
                  Register
                </button>
              </form>
            </div>
          </div>
        </div>
  );
};

export default Signup;