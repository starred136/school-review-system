import React from "react";

export default function WriteReview(){
    return(
        <>
        <main className="margin_main_container">
  <div className="container margin_60_35">
    <div className="row">
      <div className="col-lg-8">
        <div className="box_general write_review">
          <h1>Write a review of Good Electronics</h1>
          <div className="rating_submit">
            <div className="form-group">
              <label className="d-block">Overall rating</label>
              <span className="rating">
                <input
                  type="radio"
                  className="rating-input"
                  id="5_star"
                  name="rating-input"
                  defaultValue="5 Stars"
                />
                <label htmlFor="5_star" className="rating-star" />
                <input
                  type="radio"
                  className="rating-input"
                  id="4_star"
                  name="rating-input"
                  defaultValue="4 Stars"
                />
                <label htmlFor="4_star" className="rating-star" />
                <input
                  type="radio"
                  className="rating-input"
                  id="3_star"
                  name="rating-input"
                  defaultValue="3 Stars"
                />
                <label htmlFor="3_star" className="rating-star" />
                <input
                  type="radio"
                  className="rating-input"
                  id="2_star"
                  name="rating-input"
                  defaultValue="2 Stars"
                />
                <label htmlFor="2_star" className="rating-star" />
                <input
                  type="radio"
                  className="rating-input"
                  id="1_star"
                  name="rating-input"
                  defaultValue="1 Star"
                />
                <label htmlFor="1_star" className="rating-star" />
              </span>
            </div>
          </div>
          {/* /rating_submit */}
          <div className="form-group">
            <label>Title of your review</label>
            <input
              className="form-control"
              type="text"
              placeholder="If you could say it in one sentence, what would you say?"
            />
          </div>
          <div className="form-group">
            <label>Your review</label>
            <textarea
              className="form-control"
              style={{ height: 180 }}
              placeholder="Write your review to help others learn about this online business"
              defaultValue={""}
            />
          </div>
          <div className="form-group">
            <div className="checkboxes float-start add_bottom_15 add_top_15">
              <label className="container_check">
                Eos tollit ancillae ea, lorem consulatu qui ne, eu eros eirmod
                scaevola sea. Et nec tantas accusamus salutatus, sit commodo
                veritus te, erat legere fabulas has ut. Rebum laudem cum ea, ius
                essent fuisset ut. Viderer petentium cu his.
                <input type="checkbox" />
                <span className="checkmark" />
              </label>
            </div>
          </div>
          <a href="confirm.html" className="btn_1">
            Submit review
          </a>
        </div>
      </div>
      {/* /col */}
      <div className="col-lg-4">
        <div className="latest_review">
          <h4>
            Recent reviews
            <br />
            for Good Electronics
          </h4>
          <div className="review_listing">
            <div className="clearfix add_bottom_10">
              <figure>
                <img src="assets/img/avatar3.jpg" alt="" />
              </figure>
              <span className="rating">
                <i className="icon_star" />
                <i className="icon_star" />
                <i className="icon_star" />
                <i className="icon_star" />
                <i className="icon_star empty" />
                <em>4.50/5.00</em>
              </span>
              <small>Shops</small>
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
          </div>
          {/* /review_listing */}
          <div className="review_listing">
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
              <small>Shops</small>
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
          </div>
          {/* /review_listing */}
        </div>
        {/* /latest_review */}
      </div>
    </div>
    {/* /row */}
  </div>
  {/* /container */}
</main>

        </>
    )
}