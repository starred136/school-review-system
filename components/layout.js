import {  Head, Main, NextScript } from 'next/document'
import Header from './Header'
import Footer from '@/components/Footer'


export const metadata = {
  title: 'School Review App',
  description: 'Discover the best school around you.',
}



export default function Layout(props) {

 

  return (
    
    <>
      <html lang="en">

          <Head>
            <link href="/assets/css/bootstrap.min.css" rel="stylesheet"/>
            <link href="/assets/css/style.css" rel="stylesheet"/>
            <link href="/assets/css/vendors.css" rel="stylesheet"/>
            <link href="/assets/css/vendors.unminified.css" rel="stylesheet"/>
            <link href="/assets/css/blog.css" rel="stylesheet"/>
            <link href="/assets/css/bootstrap.css" rel="stylesheet"/>
            <link href="/assets/css/custom.css" rel="stylesheet"/>
            <link href="/assets/css/demo-pages-icons.css" rel="stylesheet"/>
            <link href="/assets/css/jquery.mmenu.all.css" rel="stylesheet"/>

            <link href="css/custom.css" rel="stylesheet"></link>

          </Head>

          <body>
            <Header />
              <Main />
                <NextScript />
            <Footer/>

            <script src="/assets/js/bootstrap.bundle.js" />
            <script src="/assets/js/bootstrap.bundle.min.js" />
            <script src="/assets/js/common_scripts.js" />
            {/* <script src="/assets/js/functions.js" /> */}
            <script src="/assets/js/hideShowPassword.js" />
            <script src="/assets/js/hideShowPassword.min.js" />
            <script src="/assets/js/isotope.min.js" />
            <script src="/assets/js/jquery.cookiebar.js" />
            <script src="/assets/js/jquery.easing.js" />
            <script src="/assets/js/jquery.magnific-popup.js" />
            <script src="/assets/js/jquery.magnific-popup.min.js" />
            <script src="/assets/js/jquery.mmenu.all.js" />
            <script src="/assets/js/jquery.mmenu.js" />
            <script src="/assets/js/jquery.nice-select.js" />
            <script src="/assets/js/jquery.nice-select.min.js" />
            <script src="/assets/js/mapmarker_func.jquery.js" />
            <script src="/assets/js/mapmarker.jquery.js" />
            <script src="/assets/js/modernizr.js" />
            <script src="/assets/js/owl.carousel.js" />
            <script src="/assets/js/pw_strenght.js" />
            <script src="/assets/js/rangeslider.js" />
            <script src="/assets/js/ResizeSensor.js" />
            <script src="/assets/js/ResizeSensor.min.js" />
            <script src="/assets/js/sticky-kit.js" />
            <script src="/assets/js/sticky-kit.min.js" />
            <script src="/assets/js/tabs.js" />
            <script src="/assets/js/theia-sticky-sidebar.js" />
            <script src="/assets/js/wow.js" />
            <script src="/assets/js/wow.min.js" />
          </body>
      
      </html>

        </>
    

  )
}