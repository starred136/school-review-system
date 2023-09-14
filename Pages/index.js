import React from "react";
// import {SearchBar} from "@/lib";
  
// import { posts } from "jquery";

  const WORDPRESS_API_URL = process.env.NEXT_PUBLIC_WORDPRESS_API_URL || "http://localhost/wordpress/mysite/wp-json/wp/v2/posts";

export const getStaticProps = async () => {
  const posts = await fetch(WORDPRESS_API_URL,
    )
      .then((res) => res.json());
 

  return { props: { posts} };
};

  export default function Home1( props ) {
    console.log(' props ', props)

    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = new Date().toLocaleDateString('en-US', options);

    return (
      <>
        <main>
          <section className="hero_single version_1">
            <div className="wrapper">
              <div className="container">
                <h3>Every Review is an Experience! </h3>
                <p>Check Ratings of Schools, Read Reviews &amp; Rate</p>
                <div className="row justify-content-center">
                  <div className="col-lg-9">
                        {/* <SearchBar/> */}
                   <form method="post" action="#">
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
                        {/* <select className="wide">
                          <option><a href="/reviews-page/siantou">siantou</a></option>
                          <option><a href="/reviews-page/ICT">ICT University, Yaoundé</a></option>
                          <a href="/reviews-page/ICT"><option>ICT University, Yaoundé</option></a>
                          <option><a href="/reviews-page/ICT">ICT University, Yaoundé</a></option>
                        </select> */}
                      </div>
                        {/* <CustomFilter title="Location"/> */}
                        {/* <CustomFilter title="offer programs"/>*/}
                        <div className="col-lg-2">
                          <input type="submit" defaultValue="Search" />
                        </div>
                      </div>

                      {/* /row8*/}
                    </form>

                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* /hero_single*/}
          <div className="container margin_60_35">
            <div className="main_title_3">
              <h2>Top Schools</h2>
              <p>Search for the best school.</p>
              <a href="#">View all</a>
            </div>
            <div className="row justify-content-center">
             <div className="col-lg-4 col-sm-6"  >
               <a href="/reviews-page/siantou" className="grid_item">
                 <figure>
                   <img src="assets/img/schools/siantoulogo.jpg" alt="" />
                   <div className="info">
                     <small> Results </small>
                     <em>
                          <i className="icon-comment" />
                          {/* {post.length} */}
                          \ Reviews
                     </em>
                     {/* <li>{post.title.rendered}</li> */}
                        {/* <li>{post.title.rendered}</li> */}
                      <li>
                        <a href="/reviews-page/siantou">siantou</a>
                        </li>
                      {/* <h3>{item.title.rendered}</h3> */}
                   </div>
                 </figure>
               </a>
             </div>
             <div className="col-lg-4 col-sm-6"  >
               <a href="/reviews-page/ICT" className="grid_item">
                 <figure>
                   <img src="/assets/img/schools/ictu-logo.png" alt="ict" />
                   <div className="info">
                     <small> Results </small>
                     <em>
                          <i className="icon-comment" />
                          {/* {post.length} */}
                          \ Reviews
                     </em>
                     {/* <li>{post.title.rendered}</li> */}
                        {/* <li>{post.title.rendered}</li> */}
                      <li>
                      <a href="/reviews-page/ICT">ICT University, Yaoundé</a>
                      </li>  
                      {/* <h3>{item.title.rendered}</h3> */}
                   </div>
                 </figure>
               </a>
             </div>
             
             <div className="col-lg-4 col-sm-6"  >
               <a href="/reviews-page/YIBS" className="grid_item">
                 <figure>
                   <img src="/assets/img/schools/yibs-logo.png" alt="yibslogo" />
                   <div className="info">
                     <small> Results </small>
                     <em>
                          <i className="icon-comment" />
                          {/* {post.length} */}
                          \ Reviews
                     </em>
                     {/* <li>{post.title.rendered}</li> */}
                        {/* <li>{post.title.rendered}</li> */}
                      <li>
                      <a href="/reviews-page/YIBS">siantou</a>
                      </li>  
                      {/* <h3>{item.title.rendered}</h3> */}
                   </div>
                 </figure>
               </a>
             </div>
             <div className="col-lg-4 col-sm-6"  >
               <a href="/reviews-page/ICT" className="grid_item">
                 <figure>
                   <img src="assets/img/box_cat_home_6.jpg" alt="" />
                   <div className="info">
                     <small> Results </small>
                     <em>
                          <i className="icon-comment" />
                          {/* {post.length} */}
                          \ Reviews
                     </em>
                     {/* <li>{post.title.rendered}</li> */}
                        {/* <li>{post.title.rendered}</li> */}
                      <li>
                      <a href="/reviews-page/ICT">ICT University, Yaoundé</a>
                      </li>  
                      {/* <h3>{item.title.rendered}</h3> */}
                   </div>
                 </figure>
               </a>
             </div>
              {/* {props.posts.map(post => (
                <div className="col-lg-4 col-sm-6" key={...post.id} >
               <a href="#" className="grid_item">
                 <figure>
                   <img src="assets/img/box_cat_home_6.jpg" alt="" />
                   <div className="info">
                     <small> Results </small>
                     <em>
                          <i className="icon-comment" />
                          {post.length}
                          \ Reviews
                     </em>
                     {/* <li>{post.title.rendered}</li> 
                        <li>{post.title.rendered}</li>
                        <a href="/reviews-page/siantou">
                          siantou
                     </a>
                      {/* <h3>{item.title.rendered}</h3> 
                   </div>
                 </figure>
               </a>
             </div>
              ))} */}
            </div>
            {/* /row*/}
          </div>
          {/* /container */}
          
    <div className="container margin_60">
      <div className="main_title_3">
        <h2>Latest Reviews</h2>
        <p>Cum doctus civibus efficiantur in imperdiet deterruisset.</p>
        <a href="reviews-page">View all</a>
      </div>
      <div id="reccomended" > {/* className="owl-carousel owl-theme" */}
        
              {props.posts.map(post => ( 
          <div className="item" key={...post.id} >
                <div className="review_listing">
                  <div className="clearfix">
                    <figure>
                      <img src="/assets/img/avatar1.jpg" alt="" />
                    </figure>
                    <span className="rating">
                      <i className="icon_star" />
                      <i className="icon_star" />
                      <i className="icon_star" />
                      <i className="icon_star" />
                      <i className="icon_star" />
                      <em>4.00/5.00</em>
                    </span>
                    <small>Yaoundé</small>
                  </div>
                  <h3>
                    <strong>Jhon Doe</strong> reviewed{" "}
                    <a href="/reviews-page">.....</a>
                  </h3>
                  <h4>"Avesome Experience"</h4>
                  <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />   
              {/* <p>Et nec tantas accusamus salutatus, sit commodo veritus te</p> */}
                  <ul className="clearfix">
                    <li>
                      <small>Published: Latest</small>
                    </li>
                    <li>
                      <a href="/reviews-page" className="btn_1 small">
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
                    School Review is a review platform open to everyone. Share your
                    experiences to help others make better choices, and help
                    companies up their game. Our mission is to provide transparent and unbiased information to assist students, parents, and educators in making informed decisions about educational institutions.
                    <br />
                    <br />
                    Which later will bring people and
                    companies together to create experiences for everyone.
                  </p>
                  <p>
                    <a
                      className="btn_1 add_top_10 wow bounceIn"
                      href="#"
                      data-wow-delay="0.5s"
                    >
                      Join Us Now!
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
