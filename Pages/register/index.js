import Link from "next/link";
import React from "react";

export default function Register(){
    return(
        <>
        <>
  <nav id="menu" className="fake_menu" />
  <div className="register">
    <aside>
      <figure>
        
      </figure>
      <div className="divider">
        <span>Or</span>
      </div>
      <form autoComplete="off">
        <div className="form-group">
          <input className="form-control" type="text" placeholder="Name" />
          <i className="ti-user" />
        </div>
        <div className="form-group">
          <input className="form-control" type="text" placeholder="Last Name" />
          <i className="ti-user" />
        </div>
        <div className="form-group">
          <input className="form-control" type="email" placeholder="Email" />
          <i className="icon_mail_alt" />
        </div>
        <div className="form-group">
          <input
            className="form-control"
            type="password"
            id="password1"
            placeholder="Password"
          />
          <i className="icon_lock_alt" />
        </div>
        <div className="form-group">
          <input
            className="form-control"
            type="password"
            id="password2"
            placeholder="Confirm Password"
          />
          <i className="icon_lock_alt" />
        </div>
        <div id="pass-info" className="clearfix" />
        <a href="#0" className="btn_1 rounded full-width">
          Register Now!
        </a>
        <div className="text-center add_top_10">
          Already have an acccount?{" "}
          <strong>
            <Link href="/login">Sign In</Link>
          </strong>
        </div>
      </form>
      <div className="copy">© 2023 Vanno</div>
    </aside>
  </div>
  {/* /login */}
  {/* COMMON SCRIPTS */}
  {/* SPECIFIC SCRIPTS */}
</>

        </>
    )
}