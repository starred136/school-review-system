import React from "react";

export default function(){
    return(
        <>
        <main>
  <section className="hero_single general">
    <div className="wrapper">
      <div className="container">
        <form>
          <img src="assets/img/404.svg" alt="" className="img-fluid" />
          <div id="custom-search-input">
            <div className="input-group">
              <input
                type="text"
                className="search-query"
                placeholder="Search pages..."
              />
              <input
                type="submit"
                className="btn_search"
                defaultValue="Search"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  </section>
  {/* /hero_single */}
</main>

        </>
    )
}