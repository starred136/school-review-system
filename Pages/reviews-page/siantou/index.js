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
            <figure>
              <img src="/assets/img/schools/siantoulogo.jpg" alt="logo" />
            </figure>
            <small>School</small>
            <h1>Siantou University Institute (IUS), Yaoundé</h1>
            <span className="rating">
              <i className="icon_star" />
              <i className="icon_star" />
              <i className="icon_star" />
              <i className="icon_star" />
              <i className="icon_star empty" />
              <em>#.0/5.00 - based on ## reviews</em>
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
                    aria-valuenow={100}
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
                    aria-valuenow={0}
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
        <h2>Ei pro alia placerat theophrastus</h2>
        
        {/* /post meta */}
        <div className="post-content">
          <div className="dropcaps">
            <p>
            The Siantou University Institute (IUS) was created in 1991, offers training in commercial, technological, tourism, communication, paramedical, and health fields with a common value: the ability to evolve and succeed in one’s professional career.<br/>
Located in the capital -Yaounde, it is undoubtedly the most prestigious private university in Cameroon. It deserves its place in the top rankings.
Siantou is the best private university every will appreciate, each year the number of student increase considerably. Why not choose to study for the next academic year.

            </p>
          </div>
          <p>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetur, from a Lorem Ipsum passage, and
            going through the cites of the word in classical literature,
            discovered the undoubtable source. Lorem Ipsum comes from sections
            1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes
            of Good and Evil) by Cicero, written in 45 BC. This book is a
            treatise on the theory of ethics, very popular during the
            Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit
            amet..", comes from a line in section 1.10.32.
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
            <small>School name - 11.08.2016</small>
            <h3>
              <a href="#" title="">
                Verear qualisque ex minimum...
              </a>
            </h3>
          </li>
          <li>
            <div className="alignleft">
              <a href="#0">
                <img src="img/blog-6.jpg" alt="" />
              </a>
            </div>
            <small>School - 11.08.2016</small>
            <h3>
              <a href="#" title="">
                Verear qualisque ex minimum...
              </a>
            </h3>
          </li>
         
        </ul>
      </div>
      {/* /widget */}
      <div className="widget">
        <div className="widget-title">
          <h4>Schools</h4>
        </div>
        <ul className="cats">
          <li>
            <a href="#">
            School name <span>(12)</span>
            </a>
          </li>
          <li>
            <a href="#">
              School name <span>(21)</span>
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
          <a href="#">School name</a>
          <a href="#">School name</a>
          <a href="#">See more</a>
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
          <div className="row reply">
            <div className="col-md-2 user_info">
              <figure>
                <img src="img/avatar.jpg" alt="" />
              </figure>
            </div>
            <div className="col-md-10">
              <div className="review_content">
                <strong>Reply from Siantou University Institute (IUS)</strong>
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
        {/* 
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
          </div> */}
          {/* /row */}
          <div className="row reply">
            <div className="col-md-2 user_info">
              <figure>
                <img src="img/avatar.jpg" alt="" />
              </figure>
            </div>
            <div className="col-md-10">
              <div className="review_content">
                <strong>Reply from Siantou University Institute (IUS)</strong>
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
          <h3>Siantou University Institute (IUS)</h3>
          <p>
            Illud scripserit mei an, sea te sonet partem contentiones. Eu quo
            corrumpit euripidis, enim sadipscing eos an. Mucius doctus
            constituto pri at, ne cetero postulant pro. At vix utinam corpora,
            ea oblique moderatius usu. Vix id viris consul honestatis, an
            constituto deterruisset consectetuer pro.
          </p>
          <p>
            <strong>Address</strong>
            <br />
            Address
            <br />
            location
          </p>
          <p>
            <strong>Website</strong>
            <br />
            <a href="#0">siantou-univ.com https://siantou-univ.com (bing.com)</a>
          </p>
          <p>
            <strong>Email</strong>
            <br />
            <a href="#0">info@.com</a>
          </p>
          <p>
            <strong>Telephone</strong>
            <br />
            number
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