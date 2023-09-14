import React, { useState } from "react";
import Link from "next/link";

export default function Register() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { firstName, lastName, email, password, confirmPassword } = formData;

    // Perform password confirmation validation
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setIsSubmitting(true);

    // Create an object with the registration data
    const registrationData = {
      firstName,
      lastName,
      email,
      password,
    };

    try {
      // Send a POST request to your REST API endpoint
      const response = await fetch("http://localhost/wordpress/mysite/wp-json/api/signup/insert", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(registrationData),
      });

      if (response.ok) {
        // Registration successful
        setError("");
        // Clear the form
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          password: "",
          confirmPassword: "",
        });
      } else {
        // Registration failed
        const data = await response.json();
        setError(data.message || "Registration failed.");
      }
    } catch (error) {
      setError("An error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

    return(
        <>
        
  <nav id="menu" className="fake_menu" />
  <div className="register">
    <aside>
      <figure>
        
      </figure>
      <div className="divider">
        <span>Or</span>
      </div>
      <form autoComplete="off" onSubmit={handleSubmit}>
        <div className="form-group">
          
                <input
                  className="form-control"
                  type="text"
                  placeholder="Name"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                
                />
          <i className="ti-user" />
        </div>
        <div className="form-group">
                <input
                  className="form-control"
                  type="text"
                  placeholder="Last Name"
                  name="Last Name"
                  value={formData.lastName}
                  onChange={handleChange}
                  required  
                />
          <i className="ti-user" />
        </div>
        <div className="form-group">
                <input
                  className="form-control"
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
          <i className="icon_mail_alt" />
        </div>
        <div className="form-group">
          <input
            className="form-control"
                  type="password"
                  name="password"
            id="password1"
                  placeholder="Password"
                  value={formData.password}
                onChange={handleChange}
                required
          />
          <i className="icon_lock_alt" />
        </div>
        <div className="form-group">
          <input
            className="form-control"
                  type="password"
                  id="password2"
                  name="confirmPassword"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
          />
          <i className="icon_lock_alt" />
              </div>
              
        <div id="pass-info" className="clearfix" />
        {error && <p className="error">{error}</p>}
            {isSubmitting ? (
              <p>Submitting...</p>
            ) : (
              <button type="submit" className="btn_1 rounded full-width">
                Register Now!
              </button>
            )}
        <div className="text-center add_top_10">
          Already have an acccount?{" "}
          <strong>
            <Link href="/login">Sign In</Link>
          </strong>
        </div>
      </form>
      <div className="copy">© 2023 School Review</div>
    </aside>
  </div>
 
</>

      
    )
}