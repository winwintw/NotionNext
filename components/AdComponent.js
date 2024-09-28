import { useEffect } from 'react';
import Script from 'next/script';

const AdComponent = () => {
  useEffect(() => {
    window.custom_call = function (params) {
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
        queryAdCallback: window.custom_call
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

const OneEmbed = () => {
  useEffect(() => {
    setTimeout(() => {
      // 找到所有 class 为 notion-text 且内容为 '<One/>' 的 div 元素
      const notionTextElements = document.querySelectorAll('div.notion-text')

      // 遍历找到的元素
      notionTextElements?.forEach(element => {
        // 检查元素的内容是否为 '<One/>'
        if (element.innerHTML.trim() === '&lt;One/&gt;') {
          // 创建新的 <AdComponent/ > 元素
          const newInsElement = document.createElement('AdComponent/')

          // 用新创建的 <ins> 元素替换掉原来的 div 元素
          element?.parentNode?.replaceChild(newInsElement, element)
        }
      })

      requestAd()
    }, 1000)
  }, [])
  return <></>
}


export { AdComponent, OneEmbed }
