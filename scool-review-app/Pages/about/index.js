import React from "react";

export default function About(){
    return(
        <>
        <main>
  <section className="hero_single office">
    <div className="wrapper">
      <div className="container">
        <h1>About Vanno</h1>
        <p>Vanno helps grow your business using customer reviews</p>
      </div>
    </div>
  </section>
  {/* /hero_single */}
  <div className="container margin_80">
    <div className="row d-flex align-items-center">
      <div className="col-lg-6">
        <img alt="" src="assets/img/office_2.jpg" className="img-fluid rounded" />
      </div>
      <div className="col-lg-6 pl-lg-5 pt-4">
        <h2>Passion Drive Us</h2>
        <p className="lead">
          Dolor detraxit duo in, ei sea dicit reformidans. Mel te accumsan
          patrioque referrentur. Has causae perfecto ut, ex choro assueverit
          eum. Qui omnium cetero expetenda no, detracto vivendum corrumpit cu
          duo.
        </p>
        <p className="lead">Sed ne prompta insolens mediocrem.</p>
        <p className="lead">
          <em>Mark Twain CEO</em>
        </p>
      </div>
    </div>
  </div>
  {/* /container */}
  <div className="bg_color_1">
    <div className="container margin_80">
      <div className="row d-flex align-items-center">
        <div className="col-lg-6 pl-lg-5 order-lg-last">
          <img alt="" src="assets/img/office_3.jpg" className="img-fluid rounded" />
        </div>
        <div className="col-lg-6 pt-4 order-lg-first">
          <h2>Succes is our GOAL!</h2>
          <p className="lead">
            Vis at partem hendrerit, his te facete tacimates concludaturque, duo
            ex fabulas menandri. Idque saperet assentior mea an. Nisl copiosae
            reformidans duo ea, no doming elaboraret sed.
          </p>
          <p className="lead">
            Quod exerci torquatos id sit, ne vix officiis consetetur. Te viris
            corpora voluptaria mea, hendrerit prodesset no cum.
          </p>
        </div>
      </div>
    </div>
    {/* /container */}
  </div>
  {/* /bg_color_1 */}
  <div className="values">
    <div className="wrapper">
      <div className="container">
        <div className="main_title_2">
          <h2>Our Values</h2>
          <p>Cum doctus civibus efficiantur in imperdiet deterruisset.</p>
        </div>
        <div className="row justify-content-center" style={{ minHeight: 210 }}>
          <div className="col-lg-5">
            <div
              className="nav flex-column"
              role="tablist"
              aria-orientation="vertical"
            >
              <a
                className="nav-link active"
                id="tab-1"
                data-bs-toggle="tab"
                href="#tab-1-content"
                role="tab"
                aria-controls="tab-1-content"
                aria-selected="true"
              >
                Helps consumers and companies
              </a>
              <a
                className="nav-link"
                id="tab-2"
                data-bs-toggle="tab"
                href="#tab-2-content"
                role="tab"
                aria-controls="tab-2-content"
                aria-selected="false"
              >
                Shoppers and retailers benefits
              </a>
              <a
                className="nav-link"
                id="tab-3"
                data-bs-toggle="tab"
                href="#tab-3-content"
                role="tab"
                aria-controls="tab-3-content"
                aria-selected="false"
              >
                Making e-commerce so divers
              </a>
              <a
                className="nav-link"
                id="tab-3"
                data-bs-toggle="tab"
                href="#tab-4-content"
                role="tab"
                aria-controls="tab-4-content"
                aria-selected="false"
              >
                Assess their service daily
              </a>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="tab-content">
              <div
                className="tab-pane fade show active"
                id="tab-1-content"
                role="tabpanel"
                aria-labelledby="tab-1"
              >
                <p className="lead">
                  Vis at partem hendrerit, his te facete tacimates
                  concludaturque, duo ex fabulas menandri. Idque saperet
                  assentior mea an. Nisl copiosae reformidans duo ea, no doming
                  elaboraret sed. Malorum cotidieque an cum.
                </p>
              </div>
              <div
                className="tab-pane fade"
                id="tab-2-content"
                role="tabpanel"
                aria-labelledby="tab-2"
              >
                <p className="lead">
                  Sed ne prompta insolens mediocrem, omnium fierent sed an, quod
                  vivendo mel in. Argumentum honestatis ad mel, cu vis quot
                  utroque. Nemore percipit no has. Mollis tincidunt his ex,
                  dolore inimicus no cum.
                </p>
              </div>
              <div
                className="tab-pane fade"
                id="tab-3-content"
                role="tabpanel"
                aria-labelledby="tab-3"
              >
                <p className="lead">
                  Quod exerci torquatos id sit, ne vix officiis consetetur. Te
                  viris corpora voluptaria mea, hendrerit prodesset no cum. Has
                  tota semper alterum ne, qui te suas sensibus. Duo persius
                  sensibus ne, choro soluta adolescens vim te, sale scripta ex
                  his.
                </p>
              </div>
              <div
                className="tab-pane fade"
                id="tab-4-content"
                role="tabpanel"
                aria-labelledby="tab-4"
              >
                <p className="lead">
                  Sumo periculis inciderint ius ex. Sit te fierent probatus
                  delicata, id mel nonumy consul oporteat. Agam tractatos te
                  eam, iisque vulputate moderatius cu sit. Oratio complectitur
                  contentiones nam ut, at legere maiorum fierent duo. Mel ea
                  vero aliquid.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* /values */}
  <div className="container margin_80_55">
    <div className="main_title_2">
      <h2>Our founders</h2>
      <p>Cum doctus civibus efficiantur in imperdiet deterruisset.</p>
    </div>
    <div id="carousel" className="owl-carousel owl-theme">
      <div className="item">
        <a href="#0">
          <div className="title">
            <h4>
              Julia Holmes<em>CEO</em>
            </h4>
          </div>
          <img src="assets/img/1_carousel.jpg" alt="" />
        </a>
      </div>
      <div className="item">
        <a href="#0">
          <div className="title">
            <h4>
              Lucas Smith<em>Marketing</em>
            </h4>
          </div>
          <img src="assets/img/2_carousel.jpg" alt="" />
        </a>
      </div>
      <div className="item">
        <a href="#0">
          <div className="title">
            <h4>
              Paul Stephens<em>Business strategist</em>
            </h4>
          </div>
          <img src="assets/img/3_carousel.jpg" alt="" />
        </a>
      </div>
      <div className="item">
        <a href="#0">
          <div className="title">
            <h4>
              Pablo Himenez<em>Customer Service</em>
            </h4>
          </div>
          <img src="assets/img/4_carousel.jpg" alt="" />
        </a>
      </div>
      <div className="item">
        <a href="#0">
          <div className="title">
            <h4>
              Andrew Stuttgart<em>Admissions</em>
            </h4>
          </div>
          <img src="assets/img/5_carousel.jpg" alt="" />
        </a>
      </div>
    </div>
    {/* /carousel */}
  </div>
  {/*/container*/}
</main>

        </>
    )
}