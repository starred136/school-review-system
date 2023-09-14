import React, { useState } from "react";
import Link from "next/link";

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
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

    const { email, password } = formData;

    setIsSubmitting(true);

    // Create an object with the login data
    const loginData = {
      email,
      password,
    };

    try {
      // Send a POST request to your REST API endpoint for login
      const response = await fetch("http://localhost/wordpress/mysite/wp/v2/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginData),
      });

      if (response.ok) {
        // Login successful
        setError("cool dude");
        // Redirect or perform other actions as needed
      } else {
        // Login failed
        const data = await response.json();
        setError(data.message || "Login failed.");
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
  <div id="preloader">
    <div data-loader="circle-side" />
  </div>
  {/* End Preload */}
  <div className="login">
    <aside>
      <figure>
      </figure>
      <form onSubmit={handleSubmit}>

        <div className="divider">
          <span>Or</span>
        </div>
        <div className="form-group">
          <input
            type="email"
            className="form-control"
            name="email"
            id="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <i className="icon_mail_alt" />
        </div>
        <div className="form-group">
          <input
            type="password"
            className="form-control"
            name="password"
            id="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <i className="icon_lock_alt" />
        </div>
        <div className="clearfix add_bottom_30">
          <div className="checkboxes float-start">
            <label className="container_check">
              Remember me
              <input type="checkbox" />
              <span className="checkmark" />
            </label>
          </div>
          <div className="float-end mt-1">
            <a id="forgot" href="javascript:void(0);">
              Forgot Password?
            </a>
          </div>
        </div>
        {error && <p className="error">{error}</p>}
            {isSubmitting ? (
              <p>Logging in...</p>
            ) : (
              <button type="submit" className="btn_1 rounded full-width">
                Login to School Review
              </button>
            )}
        <div className="text-center add_top_10">
          New to School Review?{" "}
          <strong>
            <Link href="/register">Sign up!</Link>
          </strong>
        </div>
      </form>
      <div className="copy">© 2023 School Review</div>
    </aside>
  </div>
  
</>

       
    )
}