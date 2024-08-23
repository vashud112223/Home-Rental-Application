import React, { useEffect, useState} from "react";
import { useNavigate } from "react-router-dom"
import "../Styles/Register.scss";
const RegisterPage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const[passwordMatch, setpasswordMatch] = useState(true)

  useEffect(() => {
    setpasswordMatch(formData.password === formData.confirmPassword || formData.confirmPassword === "")
  },)

  const navigate = useNavigate();
  const handleSubmit = async(e) => {
    e.preventDefault()

    try{
        const register_form = new FormData()

        for(var key in formData){
            register_form.append(key,formData[key])
        }

        const response = await fetch("http://localhost:3001/auth/register", {
            method: "POST",
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
 
        if(response.ok) {
            navigate("/login")
        }
    } catch(err) {
        console.log("Registration failed", err.message)
    }
  }
  return (
    <div className="register">
      <div className="register_content">
        <form className="register_content_form" onSubmit={handleSubmit}>
          <input
            placeholder="First Name"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
          <input
            placeholder="Last Name"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
          <input
            placeholder="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            placeholder="Password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <input
            placeholder="Confirm Password"
            name="confirmPassword"
            type="password"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
          
         
          {!passwordMatch && (
            
            <p style={{color: "red"}}>Password are not matched!</p>
          )}
          
          <button type="submit" disabled={!passwordMatch}>Register</button>
        </form>
        <a href="/login">Already have an account? Log In Here</a>
      </div>
    </div>
  );
}

export default RegisterPage;
