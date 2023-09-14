import React, { useState } from "react";

export const getStaticProps = async () => {
  // await createCustomPostType();
  const posts = await fetch("http://localhost/wordpress/mysite/wp-json/wp/v2/posts").then((res) => res.json());
  return { props: { posts } };
};

export default function WriteReview(props) {
  console.log('props ', props)
  
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [rating, setRating] = useState("0");

  const [isSummitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false); 
  const [error, setError] = useState(null); 
  const [agreed, setAgreed] = useState(false);
        

  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDate = new Date().toLocaleDateString('en-US', options);
    
  async function handleSubmit(event)
  {
    event.preventDefault();
    
    // Form validation
    if (!title || !content || rating === "0" || !agreed) {
      setError("Please fill in all fields, select a rating, and agree to the terms.");
      return;
    }
    setError(null);

    // Creating an object with the post and review data
    

    // Create a post with title and content
    const postApiUrl = "http://localhost/wordpress/mysite/wp-json/wp/v2/posts";
    const postData = {
      title: title,
      content: content,
      status: "publish",
    };
    console.log('postData', postData)
    try {
      setIsSubmitting(true);

      // Create the post
      const postResponse = await fetch(postApiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(postData),
      });

      if (postResponse.ok) {
        console.log("Post created successfully!");

        // Get the ID of the newly created post
        const postId = await postResponse.json();

        // Create a review with the rating and post ID
        // Creating an object with the rating data rating , comment id and 
        // actual ratingUr for API endpoint
        const reviewApiUrl = "http://localhost/wordpress/mysite/wp-json/api/review/insert";
        const reviewData = {
          rating: parseFloat(rating),
          comment_ID: postId,
          submit_date: formattedDate,
        };
    
    // Create the review
    const reviewResponse = await fetch(reviewApiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(reviewData),
    });

    if (reviewResponse.ok) {
      console.log("Review created successfully!");
      setIsSubmitted(true);
    } else {
      console.error("Failed to create review.");
    }
  } else {
    console.error("Failed to create post.");
  }
} catch (error) {
  console.error("Error:", error);
} finally {
  // Clear the form fields after a successful submission
  setTitle("");
  setContent("");
  setRating("0");
  setAgreed(false);
  setIsSubmitting(false);
}
    console.log(event)
  }

    
  if (isSummitting) {
    return (
    <>
    <p>Loading...</p>
    <div>
          {WriteReview}
    </div>
    </>
    )
     // Show a loading indicator
  }
  
  // const GenerateRating = (rating) =>
  //   {
  
  //     switch (rating) {
  //       case 1:
  //         return (
  //           <span className="rating">
  //             <i className="icon_star" />
  //             <i className="icon_star empty" />
  //             <i className="icon_star empty" />
  //             <i className="icon_star empty" />
  //             <i className="icon_star empty" />
  //             <em>1.00/5.00</em>
  //           </span>
  //         );
  //       case 2:
  //         return (
  //           <span className="rating">
  //             <i className="icon_star" />
  //             <i className="icon_star" />
  //             <i className="icon_star empty" />
  //             <i className="icon_star empty" />
  //             <i className="icon_star empty" />
  //             <em>2.00/5.00</em>
  //           </span>
  //         );
  //       case 3:
  //         return (
  //           <span className="rating">
  //             <i className="icon_star" />
  //             <i className="icon_star" />
  //             <i className="icon_star" />
  //             <i className="icon_star empty" />
  //             <i className="icon_star empty" />
  //             <em>3.00/5.00</em>
  //           </span>
  //         );
  //       case 4:
  //         return (
  //           <span className="rating">
  //             <i className="icon_star" />
  //             <i className="icon_star" />
  //             <i className="icon_star" />
  //             <i className="icon_star" />
  //             <i className="icon_star empty" />
  //             <em>4.00/5.00</em>
  //           </span>
  //         );
  //       case 5:
  //         return (
  //           <span className="rating">
  //             <i className="icon_star" />
  //             <i className="icon_star" />
  //             <i className="icon_star" />
  //             <i className="icon_star" />
  //             <i className="icon_star" />
  //             <em>5.00/5.00</em>
  //           </span>
  //         );
  //       default:
  //         return null;
  //         console.log(rating)
  //     }
                              
  //   };
    return (
      <>
        <main className="margin_main_container">
          <div className="container margin_60_35">
            <div className="row">
      
            
          <div className="col-15">{/* col-lg-8 */}
                <div>
                  
                {isSubmitted ? (
                  <div className="success-message">
                  Your review has been submitted successfully!
                </div>
                  ) : (
                    error && <div className="error-message">{error}</div>
                    )}
                    </div>
                

    <form onSubmit={handleSubmit} className="box_general write_review">
          
                  <h1>Write a review on YAOUNDE INTERNATIONAL BUSINESS SCHOOL</h1>
                  <div className="rating_submit">
                    <div className="form-group">
                      <label className="d-block">Overall rating</label>
                      <div className="rating">
                        <input
                          type="radio"
                          className="rating-input"
                          id="5_star"
                          name="rating-input"
                          // defaultValue={"5 Stars"}
                          value="5"
                          onChange={(event) => setRating(event.target.value)}
                        />
                        <label htmlFor="5_star" className="rating-star" />
                        <input
                          type="radio"
                          className="rating-input"
                          id="4_star"
                          name="rating-input"
                          // defaultValue="4 Stars"
                          value="4"
                          onChange={(event) => setRating(event.target.value)}
                        />
                        <label htmlFor="4_star" className="rating-star" />
                        <input
                          type="radio"
                          className="rating-input"
                          id="3_star"
                          name="rating-input"
                          // defaultValue="3 Stars"
                          value="3"
                          onChange={(event) => setRating(event.target.value)}
                        />
                        <label htmlFor="3_star" className="rating-star" />
                        <input
                          type="radio"
                          className="rating-input"
                          id="2_star"
                          name="rating-input"
                          // defaultValue="2 Stars"
                          value="2"
                          onChange={(event) => setRating(event.target.value)}
                        />
                        <label htmlFor="2_star" className="rating-star" />
                        <input
                          type="radio"
                          className="rating-input"
                          id="1_star"
                          name="rating-input"
                          // defaultValue="1 Star"
                          value="1"
                          onChange={(event) => setRating(event.target.value)}
                        />
                        <label htmlFor="1_star" className="rating-star" />
                      </div>
                    </div>
                  </div>
                  {/* /rating_submit */}
                  <div className="form-group">
                    <label>Title of your review</label>
                    <input
                      className="form-control"
                      type="text"
                      placeholder="If you could say it in one sentence, what would you say?"
                      value={title}
                      onChange={(event) => setTitle(event.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label>Your review</label>
                    <textarea
                      className="form-control"
                      style={{ height: 180 }}
                      placeholder="Write your review to help others learn about this online business"
                      value={content}
                      onChange={(event) => setContent(event.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <div className="checkboxes float-start add_bottom_15 add_top_15">
                      <label className="container_check">
                        Agree to our <a href="#policy">Policies</a>.
                        <input
                        type="checkbox"
                        checked={agreed}
                        onChange={() => setAgreed(!agreed)}
                      />
                        <span className="checkmark" />
                      </label>
                                        
                    </div>
                  </div>
                  <br></br>
                  <br></br>
                  <br></br>
                <button type="submit" className="btn_1">Submit review</button>
          
                </form >
        
              </div>

      {/* /col */}
      
  {/* <div className="col-lg-4">
  <div className="latest_review">
    <h4>
      Recent reviews
      <br />
      for YAOUNDE INTERNATIONAL BUSINESS SCHOOL
    </h4>
    {props.posts.map((review) => (
      <div key={review.id} className="review_listing">
        <div className="clearfix add_bottom_10">
          <figure>
            <img src={`assets/img/avatar${review.userId}.jpg`} alt="" />
          </figure>
          <span className="rating">
            {/* Display the rating here *
            /}
            {GenerateRating(review.rating)}
          </span>
          <small>YAOUNDE INTERNATIONAL BUSINESS SCHOOL</small>
        </div>
        <h3>
          <strong>{review.username}</strong>
        </h3>
        <h4>"{review.title}"</h4>
        <p>{review.content}</p>
        <ul className="clearfix">
          <li>
            <small>{review.date}</small>
          </li>
          <li>
            {/* Link to the review page *
            +74/}
            <a href={`/reviews-page/${review.id}`} className="btn_1 small">
              Read review
            </a>
          </li>
        </ul>
      </div>
    ))}
  </div>
</div> */}
          {/* /review_listing */}
          {/* <div className="review_listing">
            <div className="clearfix add_bottom_10">
              <figure>
                <img src="assets/img/avatar4.jpg" alt="" />
              </figure>
              <span className="rating">
                <i className="icon_star" />
                <i className="icon_star" />
                <i className="icon_star" />
                <i className="icon_star" />
                <i className="icon_star empty" />
                <em>4.50/5.00</em>
              </span>
              <small>YAOUNDE INTERNATIONAL BUSINESS SCHOOL</small>
            </div>
            <h3>
              <strong>Jhon Doe</strong>
            </h3>
            <h4>"Avesome Experience"</h4>
            <p>Et nec tantas accusamus salutatus, sit commodo veritus te</p>
            <ul className="clearfix">
              <li>
                <small>26.08.2018</small>
              </li>
              <li>
                <a href="reviews-page.html" className="btn_1 small">
                  Read review
                </a>
              </li>
            </ul>
          </div> */}
              {/* /review_listing */}
            {/* </div> */}
            {/* /latest_review */}
              
              {/* </div> */}              
       
      
    </div>
    {/* /row */}
  </div>
  {/* /container */}
</main>

        </>
    )
}


