import {
  useQueries,
  QueryClient,
  dehydrate,
  useQuery,
} from "@tanstack/react-query";
import React from "react";

export const getStaticProps = async () => {
  const posts = await fetch("http://localhost/wordpress/wp-json/wp/v2/posts").then(
    (res) => res.json()
  );

  return { props: { posts } };
};

export default function Home1( props ) {
  console.log(' props ', props)

  return (
    <>
      <main>
        <section className="hero_single version_1">
          <div className="wrapper">
            <div className="container">
              <h3>Every Review is an Experience! </h3>
              <p>Check Ratings of Businesses, Read Reviews &amp; Buy</p>
              <div className="row justify-content-center">
                <div className="col-lg-9">
                  <form method="post" action="grid-listings-filterstop.html">
                    <div className="row g-0 custom-search-input-2">
                      <div className="col-lg-7">
                        <div className="form-group">
                          <input
                            className="form-control"
                            type="text"
                            placeholder="What are you looking for..."
                          />
                          <i className="icon_search" />
                        </div>
                      </div>
                      <div className="col-lg-3">
                        <select className="wide">
                          <option>All Categories</option>
                          <option>Shops</option>
                          <option>Hotels</option>
                          <option>Restaurants</option>
                          <option>Bars</option>
                          <option>Events</option>
                          <option>Fitness</option>
                        </select>
                      </div>
                      <div className="col-lg-2">
                        <input type="submit" defaultValue="Search" />
                      </div>
                    </div>
                    {/* /row */}
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* /hero_single */}
        <div className="container margin_60_35">
          <div className="main_title_3">
            <h2>Top Schools</h2>
            <p>Cum doctus civibus efficiantur in imperdiet deterruisset.</p>
            <a href="all-categories.html">View all</a>
          </div>
          <div className="row justify-content-center">
            
            {props.posts.map(item => (
               <div className="col-lg-4 col-sm-6">
               <a href="grid-listings-filterstop.html" className="grid_item">
                 <figure>
                   <img src="assets/img/box_cat_home_6.jpg" alt="" />
                   <div className="info">
                     <small> Results </small>
                     <em>
                       <i className="icon-comment" /> \ Reviews
                     </em>
                     <h3>{ item.title.rendered}</h3>
                   </div>
                 </figure>
               </a>
             </div>
            ))}
          </div>
          {/* /row*/}
         </div>
        {/* /container */}
        
  <div className="container margin_60">
    <div className="main_title_3">
      <h2>Latest Reviews</h2>
      <p>Cum doctus civibus efficiantur in imperdiet deterruisset.</p>
      <a href="reviews-page.html">View all</a>
    </div>
    <div id="reccomended" > {/* className="owl-carousel owl-theme" */}
      
      {props.posts.map(item => (
              <div className="item">
              <div className="review_listing">
                <div className="clearfix">
                  <figure>
                    <img src="img/avatar1.jpg" alt="" />
                  </figure>
                  <span className="rating">
                    <i className="icon_star" />
                    <i className="icon_star" />
                    <i className="icon_star" />
                    <i className="icon_star" />
                    <i className="icon_star" />
                    <em>4.50/5.00</em>
                  </span>
                  <small>Shops</small>
                </div>
                <h3>
                  <strong>Jhon Doe</strong> reviewed{" "}
                  <a href="reviews-page.html">Fnac</a>
                </h3>
                <h4>"Avesome Experience"</h4>
                <p>Et nec tantas accusamus salutatus, sit commodo veritus te</p>
                <ul className="clearfix">
                  <li>
                    <small>Published: 26.08.2018</small>
                  </li>
                  <li>
                    <a href="reviews-page.html" className="btn_1 small">
                      Read review
                    </a>
                  </li>
                </ul>
              </div>
            </div>
      ))}
    </div>
    {/* /carousel */}
  </div>
  {/* /container */}


        {/* /bg_color_1 */}
        <div className="call_section_3">
          <div className="wrapper">
            <div className="container clearfix">
              <div className="col-lg-5 col-md-7 float-end">
                <h3>Let's Help You</h3>
                <p>
                  Vanno is a review platform open to everyone. Share your
                  experiences to help others make better choices, and help
                  companies up their game. Our mission is to bring people and
                  companies together to create experiences for everyone.
                </p>
                <p>
                  <a
                    className="btn_1 add_top_10 wow bounceIn"
                    href="pricing.html"
                    data-wow-delay="0.5s"
                  >
                    Join Vanno Now!
                  </a>
                </p>
              </div>
            </div>
            {/* /container */}
          </div>
        </div>
        {/* /call_section */}
      </main>
    </>
  );
}
