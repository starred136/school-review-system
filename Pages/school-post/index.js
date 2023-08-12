import React from "react";

export default function UserDashboard(){
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
            <h1>Mark Steinberg</h1>
            <span>United States</span>
          </div>
          <div className="col-md-6">
            <ul>
              <li>
                <strong>3</strong>
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
                <strong>12</strong>
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
                <strong>36</strong>
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
        <div className="review_card">
          <div className="row">
            <div className="col-md-2 user_info">
              <figure>
                <img src="assets/img/avatar4.jpg" alt="" />
              </figure>
              <h5>Review: "Good Electronics"</h5>
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
        <div className="review_card">
          <div className="row">
            <div className="col-md-2 user_info">
              <figure>
                <img src="img/avatar4.jpg" alt="" />
              </figure>
              <h5>Review: "Fnac"</h5>
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
              <h4>"Excellent Product"</h4>
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
          {/* /row */}
        </div>
        {/* /review_card */}
        <div className="review_card">
          <div className="row">
            <div className="col-md-2 user_info">
              <figure>
                <img src="img/avatar4.jpg" alt="" />
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
          {/* /row */}
        </div>
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
            <strong>Mucius doctus constituto pri at.</strong> At vix utinam
            corpora, ea oblique moderatius usu. Vix id viris consul honestatis,
            an constituto deterruisset consectetuer pro quo corrumpit
            euripidis...
            <br />
            <strong>
              <a href="faq.html">Rear more</a>
            </strong>
          </p>
          <hr />
          <h3>
            Post a review
            <i className="pe-7s-help1" />
          </h3>
          <p>
            Dolor detraxit duo in, ei sea dicit reformidans. Mel te accumsan
            patrioque referrentur. Has causae perfecto ut, ex choro assueverit
            eum...
            <br />
            <strong>
              <a href="faq.html">Rear more</a>
            </strong>
          </p>
          <hr />
          <h3>
            Approve a review
            <i className="pe-7s-help1" />
          </h3>
          <p>
            Sed ne prompta insolens mediocrem, omnium fierent sed an, quod
            vivendo mel in. Argumentum honestatis ad mel, cu vis quot utroque...
            <br />
            <strong>
              <a href="faq.html">Rear more</a>
            </strong>
          </p>
          <hr />
          <div className="text-center">
            <a href="faq.html" className="btn_1 small">
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