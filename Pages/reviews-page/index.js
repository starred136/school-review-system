import Link from "next/link";
import React from "react";



export default function Reviews() {
  
    return(
        <>
        <main>
  <div className="reviews_summary">
    <div className="wrapper">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            {/* <figure> */}
              <img src="/assets/img/schools/yibs-logo.png" alt="yibs-logo" />
            {/* </figure> */}
            <small>Yaoundé</small>
            <h1>YAOUNDE INTERNATIONAL BUSINESS SCHOOL</h1>
            <span className="rating">
              <i className="icon_star" />
              <i className="icon_star" />
              <i className="icon_star" />
              <i className="icon_star" />
              <i className="icon_star empty" />
              <em>4.50/5.00 - based on # reviews</em>
            </span>
          </div>
          <div className="col-lg-4 review_detail">
            <div className="row">
              <div className="col-lg-9 col-9">
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: "90%" }}
                    aria-valuenow={90}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                </div>
              </div>
              <div className="col-lg-3 col-3 text-end">
                <strong>5 stars</strong>
              </div>
            </div>
            {/* /row */}
            <div className="row">
              <div className="col-lg-9 col-9">
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: "95%" }}
                    aria-valuenow={95}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                </div>
              </div>
              <div className="col-lg-3 col-3 text-end">
                <strong>4 stars</strong>
              </div>
            </div>
            {/* /row */}
            <div className="row">
              <div className="col-lg-9 col-9">
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: "60%" }}
                    aria-valuenow={60}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                </div>
              </div>
              <div className="col-lg-3 col-3 text-end">
                <strong>3 stars</strong>
              </div>
            </div>
            {/* /row */}
            <div className="row">
              <div className="col-lg-9 col-9">
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: "20%" }}
                    aria-valuenow={20}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                </div>
              </div>
              <div className="col-lg-3 col-3 text-end">
                <strong>2 stars</strong>
              </div>
            </div>
            {/* /row */}
            <div className="row">

              <div className="col-lg-9 col-9">
                <div className="progress last">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: 0 }}
                    aria-valuenow={90}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                </div>
              </div>
              <div className="col-lg-3 col-3 text-end">
                <strong>1 stars</strong>
              </div>
            </div>
            {/* /row */}
          </div>
        </div>
      </div>
      {/* /container */}
    </div>
  </div>
  {/* /reviews_summary */}

  {/* ------------------------------------------------------- */}
  <div className="container margin_60_35">
  <div className="container margin_40_35">
  <div className="row">
    <div className="col-lg-9">
      <div className="singlepost">
        <figure>
          <img alt="" className="img-fluid" src="img/blog-single.jpg" />
        </figure>
        <h2>YAOUNDE INTERNATIONAL BUSINESS SCHOOL</h2>
        
        {/* /post meta */}
        <div className="post-content">
          <div className="dropcaps">
            <p>
            The Yaounde International Business School (YIBS) is a private university located in Yaounde, the capital city of Cameroon. 
            <br/><br/>
YIBS offers a range of undergraduate and postgraduate programs in the field of business administration, international business, finance, marketing, entrepreneurship, and related disciplines. The university aims to provide students with practical skills and knowledge to succeed in the business world.
<br/>
The faculty at YIBS consists of experienced professors and industry professionals who bring their expertise to the classroom. The university also emphasizes practical learning through internships, case studies, and group projects.
<br/>
YIBS is known for its international focus, with students from various countries studying on campus. This diversity provides a multicultural learning environment and promotes global perspectives.
<br/>
Additionally, YIBS has collaborations and partnerships with other international universities, enabling students to participate in exchange programs and gain exposure to different educational systems and cultures.
<br/>
The university's campus facilities include well-equipped classrooms, a library, computer labs, and recreational spaces. YIBS also organizes events, seminars, and workshops to enrich students' learning experiences and foster networking opportunities.
            </p>
          </div>
          <p>
          
          </p>
        </div>
        {/* /post */}

      </div>


       </div>
    {/* /col */}
    <aside className="col-lg-3">
      <div className="widget search_blog">
        <div className="form-group">
          <input
            type="text"
            name="search"
            id="search"
            className="form-control"
            placeholder="Search.."
          />
          <span>
            <input type="submit" defaultValue="Search" />
          </span>
        </div>
      </div>
      {/* /widget */}
      <div className="widget">
        <div className="widget-title">
          <h4>Latest Post</h4>
        </div>
        <ul className="comments-list">
          <li>
            <div className="alignleft">
              <a href="#0">
                <img src="img/blog-5.jpg" alt="" />
              </a>
            </div>
            <small>Publish: - latest</small>
            <h3>
              <a href="#" title="">
                By......
              </a>
            </h3>
          </li>
          <li>
            <div className="alignleft">
              <a href="#0">
                <img src="img/blog-6.jpg" alt="" />
              </a>
            </div>
            <small>Publish: - latest</small>
            <h3>
              <a href="#" title="">
                By......
              </a>
            </h3>
          </li>
         
        </ul>
      </div>
      {/* /widget */}
      <div className="widget">
        <div className="widget-title">
          <h4>Categories</h4>
        </div>
        <ul className="cats">
          <li>
            <a href="#">
              School name <span>(12)</span>
            </a>
          </li>
          <li>
            <a href="#">
              Places to visit <span>(21)</span>
            </a>
          </li>
        </ul>
      </div>
      {/* /widget */}
      <div className="widget">
        <div className="widget-title">
          <h4>Popular Schools</h4>
        </div>
        <div className="tags">
          <a href="#"></a>
          <a href="#"></a>
          <a href="#"></a>
        </div>
      </div>
      {/* /widget */}
    </aside>
    {/* /aside */}
  </div>
  {/* /row */}
</div>

  </div>
  {/* ------------------------------------------------------- */}

  <div className="container margin_60_35">
  <span>
          <Link href="/write-review" className="btn_top">
            Add a review
          </Link>
        </span> 
        <br/><br/><br/>
    <div className="row">
      <div className="col-lg-8">
        <div className="review_card">
          <div className="row">
            <div className="col-md-2 user_info">
              <figure>
                <img src="img/avatar1.jpg" alt="" />
              </figure>
              <h5>Marika</h5>
            </div>


            <div className="col-md-10 review_content">


              <h4>"Avesome Experience"</h4>
              <p>
                Eos tollit ancillae ea, lorem consulatu qui ne, eu eros eirmod
                scaevola sea. Et nec tantas accusamus salutatus, sit commodo
                veritus te, erat legere fabulas has ut. Rebum laudem cum ea, ius
                essent fuisset ut. Viderer petentium cu his. Tollit molestie
                suscipiantur his et.
              </p>
              <ul>
                <li>
                  <a href="#0">
                    <i className="icon_like_alt" />
                    <span>Useful</span>
                  </a>
                </li>
                <li>
                  <a href="#0">
                    <i className="icon_dislike_alt" />
                    <span>Not useful</span>
                  </a>
                </li>
                <li>
                  <span>Share</span>{" "}
                  <a href="#0">
                    <i className="ti-facebook" />
                  </a>{" "}
                  <a href="#0">
                    <i className="ti-twitter-alt" />
                  </a>{" "}
                  <a href="#0">
                    <i className="ti-google" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {/* /row */}
          <div className="row reply">
            <div className="col-md-2 user_info">
              <figure>
                <img src="img/avatar.jpg" alt="" />
              </figure>
            </div>
            <div className="col-md-10">
              <div className="review_content">
                <strong>Reply from YAOUNDE INTERNATIONAL BUSINESS SCHOOL</strong>
                <em>Published 3 minutes ago</em>
                <p>
                  <br />
                  Hi Monika,
                  <br />
                  <br />
                  Eos tollit ancillae ea, lorem consulatu qui ne, eu eros eirmod
                  scaevola sea. Et nec tantas accusamus salutatus, sit commodo
                  veritus te, erat legere fabulas has ut. Rebum laudem cum ea,
                  ius essent fuisset ut. Viderer petentium cu his. Tollit
                  molestie suscipiantur his et.
                  <br />
                  <br />
                  Thanks
                </p>
              </div>
            </div>
          </div>
          {/* /reply */}
        </div>
        {/* /review_card */}
        <div className="review_card">
          <div className="row">
            <div className="col-md-2 user_info">
              <figure>
                <img src="img/avatar4.jpg" alt="" />
              </figure>
              <h5>Lukas</h5>
            </div>
            <div className="col-md-10 review_content">
              <div className="clearfix add_bottom_15">
                <span className="rating">
                  <i className="icon_star" />
                  <i className="icon_star" />
                  <i className="icon_star" />
                  <i className="icon_star" />
                  <i className="icon_star" />
                  <em>5.00/5.00</em>
                </span>
                <em>Published 54 minutes ago</em>
              </div>
              <h4>"Avesome Experience"</h4>
              <p>
                Eos tollit ancillae ea, lorem consulatu qui ne, eu eros eirmod
                scaevola sea. Et nec tantas accusamus salutatus, sit commodo
                veritus te, erat legere fabulas has ut. Rebum laudem cum ea, ius
                essent fuisset ut. Viderer petentium cu his. Tollit molestie
                suscipiantur his et.
              </p>
              <ul>
                <li>
                  <a href="#0">
                    <i className="icon_like_alt" />
                    <span>Useful</span>
                  </a>
                </li>
                <li>
                  <a href="#0">
                    <i className="icon_dislike_alt" />
                    <span>Not useful</span>
                  </a>
                </li>
                <li>
                  <span>Share</span>{" "}
                  <a href="#0">
                    <i className="ti-facebook" />
                  </a>{" "}
                  <a href="#0">
                    <i className="ti-twitter-alt" />
                  </a>{" "}
                  <a href="#0">
                    <i className="ti-google" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {/* /row */}
        </div>
        {/* /review_card */}
        <div className="review_card">
          <div className="row">
            <div className="col-md-2 user_info">
              <figure>
                <img src="img/avatar6.jpg" alt="" />
              </figure>
              <h5>Marika</h5>
            </div>
            <div className="col-md-10 review_content">
              <div className="clearfix add_bottom_15">
                <span className="rating">
                  <i className="icon_star" />
                  <i className="icon_star" />
                  <i className="icon_star" />
                  <i className="icon_star" />
                  <i className="icon_star empty" />
                  <em>4.50/5.00</em>
                </span>
                <em>Published 54 minutes ago</em>
              </div>
              <h4>"Avesome Experience"</h4>
              <p>
                Eos tollit ancillae ea, lorem consulatu qui ne, eu eros eirmod
                scaevola sea. Et nec tantas accusamus salutatus, sit commodo
                veritus te, erat legere fabulas has ut. Rebum laudem cum ea, ius
                essent fuisset ut. Viderer petentium cu his. Tollit molestie
                suscipiantur his et.
              </p>
              <ul>
                <li>
                  <a href="#0">
                    <i className="icon_like_alt" />
                    <span>Useful</span>
                  </a>
                </li>
                <li>
                  <a href="#0">
                    <i className="icon_dislike_alt" />
                    <span>Not useful</span>
                  </a>
                </li>
                <li>
                  <span>Share</span>{" "}
                  <a href="#0">
                    <i className="ti-facebook" />
                  </a>{" "}
                  <a href="#0">
                    <i className="ti-twitter-alt" />
                  </a>{" "}
                  <a href="#0">
                    <i className="ti-google" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {/* /row */}
          <div className="row reply">
            <div className="col-md-2 user_info">
              <figure>
                <img src="img/avatar.jpg" alt="" />
              </figure>
            </div>
            <div className="col-md-10">
              <div className="review_content">
                <strong>Reply from YAOUNDE INTERNATIONAL BUSINESS SCHOOL</strong>
                <em>Published 3 minutes ago</em>
                <p>
                  <br />
                  Hi Monika,
                  <br />
                  <br />
                  Eos tollit ancillae ea, lorem consulatu qui ne, eu eros eirmod
                  scaevola sea. Et nec tantas accusamus salutatus, sit commodo
                  veritus te, erat legere fabulas has ut. Rebum laudem cum ea,
                  ius essent fuisset ut. Viderer petentium cu his. Tollit
                  molestie suscipiantur his et.
                  <br />
                  <br />
                  Thanks
                </p>
              </div>
            </div>
          </div>
          {/* /reply */}
        </div>
        {/* /review_card */}
        <div className="review_card">
          <div className="row">
            <div className="col-md-2 user_info">
              <figure>
                <img src="img/avatar7.jpg" alt="" />
              </figure>
              <h5>Lukas</h5>
            </div>
            <div className="col-md-10 review_content">
              <div className="clearfix add_bottom_15">
                <span className="rating">
                  <i className="icon_star" />
                  <i className="icon_star" />
                  <i className="icon_star" />
                  <i className="icon_star" />
                  <i className="icon_star" />
                  <em>5.00/5.00</em>
                </span>
                <em>Published 54 minutes ago</em>
              </div>
              <h4>"Avesome Experience"</h4>
              <p>
                Eos tollit ancillae ea, lorem consulatu qui ne, eu eros eirmod
                scaevola sea. Et nec tantas accusamus salutatus, sit commodo
                veritus te, erat legere fabulas has ut. Rebum laudem cum ea, ius
                essent fuisset ut. Viderer petentium cu his. Tollit molestie
                suscipiantur his et.
              </p>
              <ul>
                <li>
                  <a href="#0">
                    <i className="icon_like_alt" />
                    <span>Useful</span>
                  </a>
                </li>
                <li>
                  <a href="#0">
                    <i className="icon_dislike_alt" />
                    <span>Not useful</span>
                  </a>
                </li>
                <li>
                  <span>Share</span>{" "}
                  <a href="#0">
                    <i className="ti-facebook" />
                  </a>{" "}
                  <a href="#0">
                    <i className="ti-twitter-alt" />
                  </a>{" "}
                  <a href="#0">
                    <i className="ti-google" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {/* /row */}
        </div>
        {/* /review_card */}
        <div className="pagination__wrapper add_bottom_15">
          <ul className="pagination">
            <li>
              <a href="#0" className="prev" title="previous page">
                ❮
              </a>
            </li>
            <li>
              <a href="#0" className="active">
                1
              </a>
            </li>
            <li>
              <a href="#0">2</a>
            </li>
            <li>
              <a href="#0">3</a>
            </li>
            <li>
              <a href="#0">4</a>
            </li>
            <li>
              <a href="#0" className="next" title="next page">
                ❯
              </a>
            </li>
          </ul>
        </div>
        {/* /pagination */}
      </div>
      {/* /col */}
      <div className="col-lg-4">
        <div className="box_general company_info">
          <h3>YAOUNDE INTERNATIONAL BUSINESS SCHOOL</h3>
          <p>
          YIBS offers career development programs that are industry-focused and are designed to meet new market trends for emerging economies. We aim to imbed in students a career focus and a vision for a lasting impact on their lives and the communities (society) in which they operate.
<br/>
Our tuition staff is drawn from network of reputable business executives in leading firms, who have acquired similar qualifications and are currently leveraging on the field. We are unique in our delivery and do not discriminate on any basis, given the opportunity to transform individuals into becoming proactive business experts through the various tuition programs.
<br/>
Thus, we offer career advancement opportunities at all levels and in varied business related disciplines; entry levels ranging from GCE Ordinary level to Masters.
          </p>
          <p>
            <strong>Address</strong>
            <br />
            97845 Baker st. 567
            <br />
            Los Angeles - US
          </p>
          <p>
            <strong>Website</strong>
            <br />
            <a href="#0">www.goodelectronics.com</a>
          </p>
          <p>
            <strong>Email</strong>
            <br />
            <a href="#0">info@goodelectronics.com</a>
          </p>
          <p>
            <strong>Telephone</strong>
            <br />
            +54 423 565624
          </p>
          <p className="follow_company">
            <strong>Follow us</strong>
            <br />
            <a href="#0">
              <i className="social_facebook_circle" />
            </a>
            <a href="#0">
              <i className="social_twitter_circle" />
            </a>
            <a href="#0">
              <i className="social_googleplus_circle" />
            </a>
            <a href="#0">
              <i className="social_instagram_circle" />
            </a>
          </p>
        </div>
      </div>
    </div>
    {/* /row */}
  </div>
  {/* /container */}
</main>

        </>
    )
}