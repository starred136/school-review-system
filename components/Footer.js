import Head from "next/head";

export default function Footer(props){
    return(
        <>
        <footer>
  <div className="container">
    <div className="row">
      <div className="col-lg-3 col-md-6 col-sm-6">
        <a
          data-bs-toggle="collapse"
          data-bs-target="#collapse_ft_1"
          aria-expanded="false"
          aria-controls="collapse_ft_1"
          className="collapse_bt_mobile"
        >
          <h3>Quick Links</h3>
          <div className="circle-plus closed">
            <div className="horizontal" />
            <div className="vertical" />
          </div>
        </a>
        <div className="collapse show" id="collapse_ft_1">
          <ul className="links">
            <li>
              <a href="#0">About us</a>
            </li>
            <li>
              <a href="#0">Faq</a>
            </li>
            <li>
              <a href="#0">Help</a>
            </li>
            <li>
              <a href="#0">My account</a>
            </li>
            <li>
              <a href="#0">Create account</a>
            </li>
            <li>
              <a href="#0">Contacts</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 col-sm-6">
        <a
          data-bs-toggle="collapse"
          data-bs-target="#collapse_ft_2"
          aria-expanded="false"
          aria-controls="collapse_ft_2"
          className="collapse_bt_mobile"
        >
          <h3>Categories</h3>
          <div className="circle-plus closed">
            <div className="horizontal" />
            <div className="vertical" />
          </div>
        </a>
        <div className="collapse show" id="collapse_ft_2">
          <ul className="links">
            <li>
              <a href="#0">Shops</a>
            </li>
            <li>
              <a href="#0">Hotels</a>
            </li>
            <li>
              <a href="#0">Restaurants</a>
            </li>
            <li>
              <a href="#0">Bars</a>
            </li>
            <li>
              <a href="#0">Events</a>
            </li>
            <li>
              <a href="#0">View all</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 col-sm-6">
        <a
          data-bs-toggle="collapse"
          data-bs-target="#collapse_ft_3"
          aria-expanded="false"
          aria-controls="collapse_ft_3"
          className="collapse_bt_mobile"
        >
          <h3>Contacts</h3>
          <div className="circle-plus closed">
            <div className="horizontal" />
            <div className="vertical" />
          </div>
        </a>
        <div className="collapse show" id="collapse_ft_3">
          <ul className="contacts">
            <li>
              <i className="ti-home" />
              97845 Baker st. 567
              <br />
              Los Angeles - US
            </li>
            <li>
              <i className="ti-headphone-alt" />
              +61 23 8093 3400
            </li>
            <li>
              <i className="ti-email" />
              <a href="#0">info@domain.com</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 col-sm-6">
        <a
          data-bs-toggle="collapse"
          data-bs-target="#collapse_ft_4"
          aria-expanded="false"
          aria-controls="collapse_ft_4"
          className="collapse_bt_mobile"
        >
          <div className="circle-plus closed">
            <div className="horizontal" />
            <div className="vertical" />
          </div>
          <h3>Keep in touch</h3>
        </a>
        <div className="collapse show" id="collapse_ft_4">
          <div id="newsletter">
            <div id="message-newsletter" />
            <form
              method="post"
              action="assets/newsletter.php"
              name="newsletter_form"
              id="newsletter_form"
            >
              <div className="form-group">
                <input
                  type="email"
                  name="email_newsletter"
                  id="email_newsletter"
                  className="form-control"
                  placeholder="Your email"
                />
                <input
                  type="submit"
                  defaultValue="Submit"
                  id="submit-newsletter"
                />
              </div>
            </form>
          </div>
          <div className="follow_us">
            <h5>Follow Us</h5>
            <ul>
              <li>
                <a href="#0">
                  <i className="ti-facebook" />
                </a>
              </li>
              <li>
                <a href="#0">
                  <i className="ti-twitter-alt" />
                </a>
              </li>
              <li>
                <a href="#0">
                  <i className="ti-google" />
                </a>
              </li>
              <li>
                <a href="#0">
                  <i className="ti-pinterest" />
                </a>
              </li>
              <li>
                <a href="#0">
                  <i className="ti-instagram" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    {/* /row*/}
    <hr />
    <div className="row">
      <div className="col-lg-6">
        <ul id="footer-selector">
          <li>
            <div className="styled-select" id="lang-selector">
              <select>
                <option value="English" selected="">
                  English
                </option>
                <option value="French">French</option>
                <option value="Spanish">Spanish</option>
                <option value="Russian">Russian</option>
              </select>
            </div>
          </li>
        </ul>
      </div>
      <div className="col-lg-6">
        <ul id="additional_links">
          <li>
            <a href="#0">Terms and conditions</a>
          </li>
          <li>
            <a href="#0">Privacy</a>
          </li>
          <li>
            <span>© 2023 Vanno</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</footer>

        </>
    )
}