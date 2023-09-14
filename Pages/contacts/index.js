import React from "react";

export default function contacts(){
    return(
        <>
        <main>
  <section className="hero_single general">
    <div className="wrapper">
      <div className="container">
        <h1>Get in Touch with School Review</h1>
        <p>Claim your school and let School Review helps grow your business using customer reviews</p>
      </div>
    </div>
  </section>
  {/* /hero_single */}
  <div className="bg_color_1">
    <div className="container margin_tabs">
      <div id="tabs" className="tabs">
        <nav>
          <ul>
            <li>
              <a href="#section-1">
                <i className="pe-7s-help1" />
                Questions<em>List of questions frequently asked...</em>
              </a>
            </li>
            <li>
              <a href="#section-2">
                <i className="pe-7s-help2" />
                Support<em>Feel free to reach on to us for any sup.</em>
              </a>
            </li>
          </ul>
        </nav>
        <div className="content">
          <section id="section-1">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div id="message-contact" />
                <form
                  method="post"
                  action="assets/contact.php"
                  id="contactform"
                  autoComplete="off"
                >
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group required">
                        <input
                          className="form-control"
                          type="text"
                          id="name_contact"
                          name="name_contact"
                          placeholder="Name"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group required">
                        <input
                          className="form-control"
                          type="text"
                          id="lastname_contact"
                          name="lastname_contact"
                          placeholder="Last Name"
                        />
                      </div>
                    </div>
                  </div>
                  {/* /row */}
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group required">
                        <input
                          className="form-control"
                          type="email"
                          id="email_contact"
                          name="email_contact"
                          placeholder="Email"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group required">
                        <input
                          className="form-control"
                          type="text"
                          id="phone_contact"
                          name="phone_contact"
                          placeholder="Telephone"
                        />
                      </div>
                    </div>
                  </div>
                  {/* /row */}
                  <div className="form-group required">
                    <textarea
                      className="form-control"
                      id="message_contact"
                      name="message_contact"
                      style={{ height: 150 }}
                      placeholder="Message"
                      defaultValue={""}
                    />
                  </div>
                  <div className="form-group required">
                    <input
                      className="form-control"
                      type="text"
                      id="verify_contact"
                      name="verify_contact"
                      placeholder="Are you human? 3 + 1 ="
                    />
                  </div>
                  <div className="form-group add_top_30 text-center">
                    <input
                      type="submit"
                      defaultValue="Submit"
                      className="btn_1 rounded"
                      id="submit-contact"
                    />
                  </div>
                </form>
              </div>
            </div>
            {/* /row */}
          </section>
          {/* /section */}
          <section id="section-2">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <a href="help.html" className="btn_support">
                  Please first visit our Support Center!
                </a>
                <div id="message-support" />
                <form
                  method="post"
                  action="assets/support.php"
                  id="support"
                  autoComplete="off"
                >
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group required">
                        <input
                          className="form-control"
                          type="text"
                          id="name_support"
                          name="name_support"
                          placeholder="Name"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group required">
                        <input
                          className="form-control"
                          type="email"
                          id="email_support"
                          name="email_support"
                          placeholder="Email"
                        />
                      </div>
                    </div>
                  </div>
                  {/* /row */}
                  <div className="form-group required">
                    <textarea
                      className="form-control"
                      id="message_support"
                      name="message_support"
                      style={{ height: 150 }}
                      placeholder="Support request"
                      defaultValue={""}
                    />
                  </div>
                  <div className="form-group required">
                    <input
                      className="form-control"
                      type="text"
                      id="verify_support"
                      name="verify_support"
                      placeholder="Are you human? 3 + 1 ="
                    />
                  </div>
                  <div className="form-group add_top_30 text-center">
                    <input
                      type="submit"
                      defaultValue="Submit"
                      className="btn_1 rounded"
                      id="submit-support"
                    />
                  </div>
                </form>
              </div>
            </div>
            {/* /row */}
          </section>
          {/* /section */}
        </div>
        {/* /content */}
      </div>
      {/* /tabs */}
    </div>
    {/* /container */}
  </div>
  {/* /bg_color */}
  <div className="container margin_60_35">
    <div className="row">
      <div className="col-md-6">
        <div className="box_faq">
          <i className="icon_info_alt" />
          <h4>What are school reviews and rating systems??</h4>
          <p>
        School reviews and rating systems are mechanisms that provide information about the quality and performance of educational institutions. They help parents, students, and educators make informed decisions about schools.
          </p>
        </div>
      </div>
      <div className="col-md-6">
        <div className="box_faq">
          <i className="icon_info_alt" />
          <h4>Why are school reviews and ratings important?</h4>
          <p>
          Why are school reviews and ratings important?
          </p>
        </div>
      </div>
    </div>
    {/* /row  */}
    <div className="row">
      <div className="col-md-6">
        <div className="box_faq">
          <i className="icon_info_alt" />
          <h4>Where can I find school ratings for my area?</h4>
                  <p>
                    Search base on location will soon be implemented but...<br/>
          You can usually find school ratings on government education websites, school district websites, or educational review websites like GreatSchools, Niche, or SchoolDigger.

          </p>
        </div>
      </div>
      <div className="col-md-6">
        <div className="box_faq">
          <i className="icon_info_alt" />
          <h4>What factors are considered when rating a school?</h4>
          <p>
          

      Factors considered can include academic performance, teacher quality, extracurricular programs, student-teacher ratios, safety, parent reviews, and more, depending on the rating system.
          </p>
        </div>
      </div>
    </div>
    {/* /row  */}
  </div>
</main>

        </>
    )
}