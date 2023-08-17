import React from "react";

export const getStaticProps = async () => {
  const posts = await fetch("http://localhost/wordpress/wp-json/wp/v2/posts").then(
    (res) => res.json()
  );

  return { props: { posts } };
};

export default function Categories( props ){
    return(
        <>
        <main>
  <section className="hero_single version_3">
    <div className="wrapper">
      <div className="container">
        <h3>Search Reviews by Categories</h3>
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
                      placeholder="Search for a company..."
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
    <div className="main_title_2">
      <h1>Top Categories</h1>
      <p>Cum doctus civibus efficiantur in imperdiet deterruisset.</p>
    </div>
    <div className="row justify-content-center">


      {props.posts.map(item => (
      <div className="col-lg-3 col-6">
      <a href="grid-listings-filterstop.html" className="box_cat_home">
        <img src="assets/img/icon_home_1.svg" width={65} height={65} alt="" />
        <h3>Clothing</h3>
        <ul className="clearfix">
          <li>
            <strong>1,023</strong> Results
          </li>
          <li>
            <strong>2,435</strong>
            <i className="icon-comment" />
          </li>
        </ul>
      </a>
    </div>
      ))}
    </div>
  </div>
  {/* /container */}
  <div className="bg_color_1">
    <div className="container margin_60_35">
      <div className="main_title_3 text-center">
        <h2>Schools categories</h2>
        <p>Cum doctus civibus efficiantur in imperdiet deterruisset.</p>
      </div>
      <div className="row justify-content-center">
        <div className="col-xl-10 col-lg-12">
          <div className="all_categories clearfix add_bottom_30">
            <ul>
              <li>
                <a href="reviews-page.html">
                  <strong>543</strong>Cars, motorbikes &amp; accessories
                </a>
              </li>
              { props.posts.map(item => (
              <li>
              <a href="reviews-page.html">
                <strong>543</strong>Cars, motorbikes &amp; accessories
              </a>
            </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
    {/* /container */}
  </div>
  {/* /bg_color_1 */}
  <div className="call_section_2">
    <div className="wrapper">
      <div className="container">
        <h3>Get started now with Vanno...improve your business.</h3>
        <a className="btn_1 medium">Join Vanno Now!</a>
      </div>
    </div>
  </div>
  {/* /call_section_2 */}
</main>

        </>
    )
}