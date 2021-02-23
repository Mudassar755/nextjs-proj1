import { useRouter } from "next/router"
// import * as locales from "../content/locale"
// import {Provider} from 'react-redux'
// import store from '../redux/Store'
// import * as gtag from '../lib/gtag'
// import withRedux from "next-redux-wrapper";
// import all locales through barrel file
// import 'react-intl-tel-input/dist/main.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'react-multi-carousel/lib/styles.css';
// import "react-image-crop/dist/ReactCrop.css";
// import "simplebar/src/simplebar.css";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import '../styles/dashboard.css'
// import '../styles/Feedback.css'
// import '../styles/globals.css'
import { useEffect } from "react"

function MyApp({ Component, pageProps }) {
  
  const router = useRouter()
  // const { locale, defaultLocale, pathname } = router
  // const localeCopy = locales[locale]
  // const messages = localeCopy[pathname]
  // useEffect(() => {
  //   const handleRouteChange = (url) => {
  //     gtag.pageview(url)
  //   }
  //   router.events.on('routeChangeComplete', handleRouteChange)
  //   return () => {
  //     router.events.off('routeChangeComplete', handleRouteChange)
  //   }
  // }, [router.events])
  return(
    // <Provider store={store}>
 <Component {...pageProps} />
  // </Provider>
  )
}

// const makeStore = () => store;

export default (MyApp)
