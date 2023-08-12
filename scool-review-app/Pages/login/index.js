import React from "react";
import Link from "next/link";


export default function Login(){
    return(
        <>
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
      <form>

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
          />
          <i className="icon_mail_alt" />
        </div>
        <div className="form-group">
          <input
            type="password"
            className="form-control"
            name="password"
            id="password"
            defaultValue=""
            placeholder="Password"
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
        <a href="#0" className="btn_1 rounded full-width">
          Login to Vanno
        </a>
        <div className="text-center add_top_10">
          New to Vanno?{" "}
          <strong>
            <Link href="/register">Sign up!</Link>
          </strong>
        </div>
      </form>
      <div className="copy">© 2023 Vanno</div>
    </aside>
  </div>
  {/* /login */}
  {/* COMMON SCRIPTS */}
</>

        </>
    )
}