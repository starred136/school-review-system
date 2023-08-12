'use-client'

import React, { Component, Fragment } from "react";

export class Bootstrap extends Component {
  componentDidMount = () => {
    if (typeof window !== "undefined") {
      import("jquery").then(($) => {
        require("/assets/js/bootstrap.bundle")
         require("../public/assets/js/jquery.cookiebar")
         require("../public/assets/js/common_scripts")
         require("../public/assets/js/ResizeSensor")
         require("../public/assets/js/functions")
         require("../public/assets/js/hideShowPasswordr")
         require("../public/assets/js/jquery.cookiebar")
         require("../public/assets/js/jquery.easing")
         require("../public/assets/js/jquery.magnific-popup")
         require("../public/assets/js/jquery.mmenur")
         require("../public/assets/js/jquery.nice-select")
         require("../public/assets/js/mapmarker.jquery")
         require("../public/assets/js/mapmarker_func.jquery")
         require("../public/assets/js/modernizr")
         require("../public/assets/js/owl.carousel")
         require("../public/assets/js/pw_strenght")
         require("../public/assets/js/rangeslider")
         require("../public/assets/js/sticky-kit")
         require("../public/assets/js/tabs")
         require("../public/assets/js/theia-sticky-sidebar")
         require("../public/assets/js/")
      });
    }
  };

  render() {
    return <Fragment>{this.props.children}</Fragment>;
  }
}

