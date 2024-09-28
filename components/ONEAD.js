import { useEffect } from 'react';
import Script from 'next/script';

const ONEAD = () => {
  useEffect(() => {
    const custom_call = (params) => {
      if (params.hasAd) {
        console.log('TD has AD');
      } else {
        console.log('TD AD Empty');
      }
    };

    window.ONEAD_TEXT = {
      pub: {
        uid: "2000285",
        slotobj: document.getElementById("div-onead-draft"),
        player_mode: "text-drive",
        queryAdCallback: custom_call
      }
    };

    window.ONEAD_text_pubs = window.ONEAD_text_pubs || [];
    window.ONEAD_text_pubs.push(window.ONEAD_TEXT);
  }, []);

  return (
    <>
      <div id="div-onead-draft"></div>
      <Script
        src="https://ad-specs.guoshipartners.com/static/js/ad-serv.min.js"
        strategy="lazyOnload"
      />
    </>
  );
};

export default AdComponent;
