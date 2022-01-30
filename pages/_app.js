import "../styles/globals.css";
import "rc-rate/assets/index.css";
import Head from "next/head";
import { useEffect } from "react";

export default function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);
  useEffect(() => {
    console.log("OK");
    init();

    return () => {
      cleanup();
    };
  }, []);
  return getLayout(
    <>
      <Head>
        <title>Paimon Data</title>
        <link rel="shortcut icon" href="/images/ui/paimon.png" />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3247125224510311"
          crossOrigin="anonymous"
        ></script>
      </Head>
      <div id="fb-root"></div>

      <div id="fb-customer-chat" className="fb-customerchat"></div>
      <Component {...pageProps} />
    </>
  );
}

/**
 *
 */
export function init() {
  var chatbox = document.getElementById("fb-customer-chat");
  chatbox.setAttribute("page_id", "102049665270384"); // TODO: move to args
  chatbox.setAttribute("attribution", "biz_inbox");

  window.fbAsyncInit = function () {
    FB.init({
      xfbml: true,
      version: "v12.0",
    });
  };

  (function (d, s, id) {
    var js,
      fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s);
    js.id = id;
    js.src = "https://connect.facebook.net/vi_VN/sdk/xfbml.customerchat.js";
    fjs.parentNode.insertBefore(js, fjs);
  })(document, "script", "facebook-jssdk");
}

/**
 *
 */
export function cleanup() {
  (function (d, id) {
    var target = d.getElementById(id);
    if (target) {
      target.parentNode.removeChild(target);
    }
  })(document, "facebook-jssdk");

  delete window.FB;
}
