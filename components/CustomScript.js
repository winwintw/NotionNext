import { useEffect } from 'react';

const CustomScript = () => {
  useEffect(() => {
    // 創建 div 元素
    const div = document.createElement('div');
    div.id = 'oneadMFSDFPTag';
    document.body.appendChild(div);

    // 創建並執行第一個 script
    const script1 = document.createElement('script');
    script1.type = 'text/javascript';
    script1.innerHTML = `
      var custom_call = function (params) {
        if (params.hasAd) {
          console.log('MFS has AD')
        } else {
          console.log('MFS AD empty')
        }
      }
      var _ONEAD = {};
      _ONEAD.pub = {};
      _ONEAD.pub.slotobj = document.getElementById("oneadMFSDFPTag");
      _ONEAD.pub.slots = ["div-onead-ad"];
      _ONEAD.pub.uid = "2000285";
      _ONEAD.pub.external_url = "https://onead.onevision.com.tw/";
      _ONEAD.pub.player_mode_div = "div-onead-ad";
      _ONEAD.pub.player_mode = "mobile-fullscreen";
      _ONEAD.pub.google_view_click = "%%CLICK_URL_UNESC%%";
      _ONEAD.pub.google_view_pixel = "";
      _ONEAD.pub.queryAdCallback = custom_call
      var ONEAD_pubs = ONEAD_pubs || [];
      ONEAD_pubs.push(_ONEAD);
    `;
    document.body.appendChild(script1);

    // 創建並執行第二個 script
    const script2 = document.createElement('script');
    script2.type = 'text/javascript';
    script2.src = 'https://ad-specs.guoshipartners.com/static/js/onead-lib.min.js';
    document.body.appendChild(script2);
  }, []);

  return null;
};

export default CustomScript;
