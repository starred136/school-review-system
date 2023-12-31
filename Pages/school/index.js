import React from "react";
import Link from "next/link";

export const getStaticProps = async () => {
  const posts = await fetch("http://localhost/wordpress/mysite/wp-json/wp/v2/posts").then(
    (res) => res.json()
  );

  return { props: { posts } };
};

export default function Blog( props ){
    return(
        <>
        <main>
  <section className="hero_single general">
    <div className="wrapper">
      <div className="container">
        <h1>School Blog</h1>
        <p>School Review helps grow your business using customer reviews</p>
      </div>
    </div>
  </section>
  {/* /hero_single */}
  <div className="container margin_60_35">
    <div className="row">
      <div className="col-lg-9">
        <div className="row">
         
          {/* /col */}
          
          {/* /col */}

          {/* /col */}
          
          {/* /col */}
          {props.posts.map(item => (
                      <div className="col-md-6">
                      <article className="blog">
                        <figure>
                          <a href="blog-post.html">
                            <img src="assets/img/blog-6.jpg" alt="" />
                            <div className="preview">
                              <span>Read more</span>
                            </div>
                          </a>
                        </figure>
                        <div className="post_info">
                          <small>Category - 20 Nov. 2017</small>
                          <h2>
                            <Link href="school-post">Truc</Link>
                          </h2>
                          <p>
                            Quodsi sanctus pro eu, ne audire scripserit quo. Vel an enim
                            offendit salutandi, in eos quod omnes epicurei, ex veri
                            qualisque scriptorem mei.
                          </p>
                          <ul>
                            <li>
                              <div className="thumb">
                                <img src="assets/img/avatar.jpg" alt="" />
                              </div>{" "}
                              Admin
                            </li>
                            <li>
                              <i className="ti-comment" />
                              20
                            </li>
                          </ul>
                        </div>
                      </article>
                      {/* /article */}
                    </div>
          ))}
        </div>
        {/* /row */}
        <div className="pagination__wrapper add_bottom_30">
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
            { props.posts.map(item => (
            <li>
            <div className="alignleft">
              <a href="#0">
                <img src="assets/img/blog-5.jpg" alt="" />
              </a>
            </div>
            <small>Category - 11.08.2016</small>
            <h3>
              <a href="#" title="">
                Verear qualisque ex minimum...
              </a>
            </h3>
          </li>
            ))}
          </ul>
        </div>
        {/* /widget */}
        <div className="widget">
          <div className="widget-title">
            <h4>Categories</h4>
          </div>
          <ul className="cats">
              { props.posts.map(item => (
            <li>
            <a href="#">
              Food <span>(12)</span>
            </a>
          </li>
              )) }
          </ul>
        </div>
        {/* /widget */}
        {/* /widget */}
      </aside>
      {/* /aside */}
    </div>
    {/* /row */}
  </div>
  {/* /container */}
</main>

        </>
    )
}