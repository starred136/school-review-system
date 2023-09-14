import Head from "next/head";
import Link from "next/link";

export default function Header(props){
    return(
        <>
  <header className="header menu_fixed">
  <div id="logo">
    <a href="/">
      <img
        src="/assets/img/SchoolReview.svg"
        width={440}
        height={335}
        alt=""
        className="logo_normal"
      />
      {/* <img
        src="img/logo_sticky.svg"
        width={140}
        height={35}
        alt=""
        className="logo_sticky"
      /> */}
    </a>
  </div>
  <ul id="top_menu">
    <li>
      <Link href="/write-review" className="btn_top">
        Write a Review
      </Link>
    </li>
          </ul>


    {/* /top_menu */}
    <Link href="#menu" className="btn_mobile">
    <div className="hamburger hamburger--spin" id="hamburger">
      <div className="hamburger-box">
        <div className="hamburger-inner" />
      </div>
    </div>
   </Link>
  
    <nav id="menu" className="main-menu">
    <ul>
      <li>
        <span>
          <Link href="/">Home</Link>
        </span>
      </li>
      <li>
        <span>
          <Link href="/school">School</Link>
        </span>
      </li>
      <li>
        <span>
          <Link href="/login">Login</Link>
        </span>
      </li>
      <li>
        <span>
          <Link href="/register">Register</Link>
        </span>
      </li>
      <li>
        <span>
          <Link href="/about">About</Link>
        </span>
      </li>
      <li>
        <span>
          <Link href="/help">Help Section</Link>
        </span>
      </li>
      <li>
        <span>
          <Link href="/contacts">Contacts</Link>
        </span>
      </li>

      <li className="d-block d-sm-none">
        <span>
          <Link href="/write-review" className="btn_top">
            Write a review
          </Link>
        </span>
      </li>
    </ul>
  </nav>
</header>

        </>
    )
}