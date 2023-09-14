import React, { useEffect, useState } from "react";


export default function UserDashboard(){

  const [userData, setUserData] = useState({});
  const [userReviews, setUserReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const siteUrl = "http://localhost/wordpress/mysite";
    
    const userId = "user_id";

    
    fetch(`http://localhost/wordpress/mysite/wp-json/wp/v2/users/${userId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      
    })
      .then((response) => response.json())
      .then((userData) => {
        setUserData(userData);
      })
      .catch((error) => {
        setError("Error fetching user data.");
      });

    // Fetch user's reviews
    fetch(`http://localhost/wordpress/mysite/wp-json/wp/v2/posts?author=${userId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      // Add any necessary authentication headers if required.
    })
      .then((response) => response.json())
      .then((userReviews) => {
        setUserReviews(userReviews);
        setLoading(false);
      })
      .catch((error) => {
        setError("Error fetching user reviews.");
        setLoading(false);
      });
  }, []);


    return(
        <>
        <main className="margin_main_container">
  <div className="user_summary">
    <div className="wrapper">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <figure>
              <img src="assets/img/avatar4.jpg" alt="" />
            </figure>
            <h1>{userData.name}</h1>
                <span>From {userData.location}</span>
                    {/* <h1>Jhon Doe</h1>
                    <span>From Yaoundé</span> */}
          </div>
          <div className="col-md-6">
            <ul>
              <li>
                <strong>#</strong>
                <a
                  href="#0"
                  className="tooltips"
                  data-bs-toggle="tooltip"
                  data-placement="bottom"
                  title="Reviews written by you"
                >
                  <i className="icon_star" /> Reviews
                </a>
              </li>
              <li>
                <strong>#</strong>
                <a
                  href="#0"
                  className="tooltips"
                  data-bs-toggle="tooltip"
                  data-placement="bottom"
                  title="Number of people who have read your reviews"
                >
                  <i className="icon-user-1" /> Reads
                </a>
              </li>
              <li>
                <strong>#</strong>
                <a
                  href="#0"
                  className="tooltips"
                  data-bs-toggle="tooltip"
                  data-placement="bottom"
                  title="Number of people who found your review useful"
                >
                  <i className="icon_like_alt" /> Useful
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* /container */}
    </div>
  </div>
  {/* /user_summary */}
  <div className="container margin_60_35">
    <div className="row">
              <div className="col-lg-8">
                
              {/* {loading ? (
              <p>Loading...</p>
            ) : (
              userReviews.map((review) => (
                <div key={...review.id} className="review_card">
                  <div className="row">
                    <div className="col-md-2 user_info">
                      <figure>
                        <img src={userData.avatar_url} alt="" />
                      </figure>
                      <h5>Review: "{review.title.rendered}"</h5>
                    </div>
                    <div className="col-md-10 review_content">
                      <div className="clearfix add_bottom_15">
                        <span className="rating">
                          {GenerateRating(review.rating)}
                          <em>{review.rating}/5.00</em>
                        </span>
                        <em>Published: {review.date}</em>
                      </div>
                      <h4>{review.title.rendered}</h4>
                      <p>{review.content.rendered}</p>
                      <ul>
                        <li>
                          <a href="#0" className="btn_delete">
                            <i className="icon-trash" />
                            Delete
                          </a>
                        </li>
                        <li>
                          <a href="#0">
                            <i className="icon-edit-3" /> Edit
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              ))
            )} */}
        {/* <div className="review_card">
          
          <div className="row">
            
            <div className="col-md-2 user_info">
              <figure>
                <img src="assets/img/avatar4.jpg" alt="" />
              </figure>
              <h5>Review: "School Name"</h5>
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
                <em>Published: 54 minutes ago</em>
              </div>
              <h4>"Awesome Experience"</h4>
              <p>
                I got a great experience
              </p>
              <ul>
                <li>
                  <a href="#0" className="btn_delete">
                    <i className="icon-trash" />
                    Delete
                  </a>
                </li>
                <li>
                  <a href="#0">
                    <i className="icon-edit-3" /> Edit
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {/* /row */}
        {/* </div> */} 
        {/* /review_card */}
        
        <div className="review_card">
          <div className="row">
            <div className="col-md-2 user_info">
              <figure>
                <img src="assets/img/avatar4.jpg" alt="" />
              </figure>
              <h5>Review: "YAOUNDE INTERNATIONAL BUSINESS SCHOOL"</h5>
            </div>
            <div className="col-md-10 review_content">
              <div className="clearfix add_bottom_15">
                <span className="rating">
                  <i className="icon_star" />
                  <i className="icon_star" />
                  <i className="icon_star" />
                  <i className="icon_star" />
                  <i className="icon_star empty" />
                  <em>4.00/5.00</em>
                </span>
                <em>Published: 26.08.2018</em>
              </div>
              <h4>"Academic Excellence:"</h4>
              <p>
              I am continually impressed by the high level of academic rigor at [School Name]. The dedicated teachers and challenging curriculum have undoubtedly prepared my child for future success.
              </p>
              <ul>
                <li>
                  <a href="#0" className="btn_delete">
                    <i className="icon-trash" />
                    Delete
                  </a>
                </li>
                <li>
                  <a href="#0">
                    <i className="icon-edit-3" /> Edit
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {/* /row */}
        </div>
        {/* /review_card */}
        {/* <div className="review_card">
          <div className="row">
            <div className="col-md-2 user_info">
              <figure>
                <img src="assets/img/avatar4.jpg" alt="" />
              </figure>
              <h5>Review: "Da Alfredo"</h5>
            </div>
            <div className="col-md-10 review_content">
              <div className="clearfix add_bottom_15">
                <span className="rating">
                  <i className="icon_star" />
                  <i className="icon_star" />
                  <i className="icon_star" />
                  <i className="icon_star empty" />
                  <i className="icon_star empty" />
                  <em>3.00/5.00</em>
                </span>
                <em>Published: 12.08.2018</em>
              </div>
              <h4>"Could be Better"</h4>
              <p>
                Eos tollit ancillae ea, lorem consulatu qui ne, eu eros eirmod
                scaevola sea. Et nec tantas accusamus salutatus, sit commodo
                veritus te, erat legere fabulas has ut. Rebum laudem cum ea, ius
                essent fuisset ut. Viderer petentium cu his. Tollit molestie
                suscipiantur his et.
              </p>
              <ul>
                <li>
                  <a href="#0" className="btn_delete">
                    <i className="icon-trash" />
                    Delete
                  </a>
                </li>
                <li>
                  <a href="#0">
                    <i className="icon-edit-3" /> Edit
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div> */}
          {/* /row */}
        {/* /review_card */}
      </div>
      {/* /col */}
      <div className="col-lg-4">
        <div className="box_general general_info">
          <h3>
            Delete a review
            <i className="pe-7s-help1" />
          </h3>
          <p>
            <strong></strong> If you have posted a review that you wish to remove or modify, you can do so by logging into your account and accessing the review from your profile. Look for the "Delete" or "Edit" option to make changes or remove the review entirely. Please remember to follow our community guidelines when posting or editing reviews...
            <br />
            <br />
            <strong>
              <a href="#faq">Read more</a>
            </strong>
          </p>
          <hr />
          <h3>
            Post a review
            <i className="pe-7s-help1" />
          </h3>
          <p>
          If you have posted a review that you wish to remove or modify, you can do so by logging into your account and accessing the review from your profile. Look for the "Delete" or "Edit" option to make changes or remove the review entirely. Please remember to follow our community guidelines when posting or editing reviews...
            <br />
            <strong>
              <a href="#faq">Read more</a>
            </strong>
          </p>
          <hr />
          <h3>
            Approve a review
            <i className="pe-7s-help1" />
          </h3>
          <div>
            You will be updated soon...
          {/* If you are a school or business administrator and wish to manage reviews about your institution, you can claim your profile on our platform. Once claimed, you can:
Set up review management preferences.
Review and respond to incoming reviews.
Flag or report inappropriate reviews for removal.
Ensure that your institution's online presence accurately represents your offerings.
We value the trust and integrity of our review system. Our team is committed to maintaining fairness and transparency in all reviews posted on our platform. If you have any questions or encounter any issues related to reviews, please don't hesitate to reach out to our support team for assistance.

Thank you for being a part of our community and for contributing to the quality of information available to our users. */}
            <br />
            <strong>
              <a href="faq.html">Read more</a>
            </strong>
          </div>
          <hr />
          <div className="text-center">
            <a href="#faq" className="btn_1 small">
              View al Faq
            </a>
          </div>
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