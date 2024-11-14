import { useEffect } from 'react';
import Script from 'next/script';

const OneADNativeDrive = () => {
  useEffect(() => {
    window.custom_call = function (params) {
        if (params.hasAd) {
        console.log('NDG has AD');
      } else {
        console.log('NDG AD Empty');
      }
    };

    window.ONEAD_TEXT = {
      pub: {
        uid: "2000285",
        slotobj: document.getElementById("div-onead-ndg"),
        player_mode: "native-drive-group",
        space_id: "",
        position_id: "0",
        queryAdCallback: window.custom_call
      }
    };

    window.ONEAD_text_pubs = window.ONEAD_text_pubs || [];
    window.ONEAD_text_pubs.push(window.ONEAD_TEXT);
  }, []);

  return (
    <>
      <div id="div-onead-ndg"></div>
      <Script
        src="https://ad-specs.guoshipartners.com/static/js/ad-serv.min.js"
        strategy="afterInteractive"
      />
    </>
  );
};

export default OneADNativeDrive;
