import { siteConfig } from '@/lib/config'
import { loadExternalResource } from '@/lib/utils'
import { useEffect } from 'react'


/**
 * 嵌入到文章内部的广告单元
 * 检测文本内容 出现<embOneAD/> 关键词时自动替换为广告
 * @param {*} props
 */
const OneADEmbed = () => {
  useEffect(() => {
    setTimeout(() => {
      // 找到所有 class 为 notion-text 且内容为 '<embOneAD/>' 的 div 元素
      const notionTextElements = document.querySelectorAll('div.notion-text')

      // 遍历找到的元素
      notionTextElements?.forEach(element => {
        // 检查元素的内容是否为 '<embOneAD/>'
        if (element.innerHTML.trim() === '&lt;embOneAD/&gt;') {
          // 创建新的 <embOneAD> 元素
          const newembOneADElement = document.createElement('embOneAD')
          newembOneADElement.className = 'adsbygoogle w-full py-1'
          newembOneADElement.style.display = 'block'
          newembOneADElement.setAttribute(
            'data-ad-client',
            siteConfig('ADSENSE_GOOGLE_ID')
          )
          newembOneADElement.setAttribute(
            'data-adtest',
            siteConfig('ADSENSE_GOOGLE_TEST') ? 'on' : 'off'
          )
          newembOneADElement.setAttribute(
            'data-ad-slot',
            siteConfig('ADSENSE_GOOGLE_SLOT_AUTO')
          )
          newembOneADElement.setAttribute('data-ad-format', 'auto')
          newembOneADElement.setAttribute('data-full-width-responsive', 'true')

          // 用新创建的 <embOneAD> 元素替换掉原来的 div 元素
          element?.parentNode?.replaceChild(newembOneADElement, element)
        }
      })

      requestAd()
    }, 1000)
  }, [])
  return <></>
}

export default embOneAD
