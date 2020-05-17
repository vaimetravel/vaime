import React, { useMemo, useEffect } from "react"
import { StyleSheetManager } from "styled-components"

export default ({ children }) => {
  // styled component support
  const iframeHead = useMemo(() => {
    const iframe = document.getElementsByTagName('iframe')[0]
    if (!iframe) return null
    const iframeHeadElem = iframe.contentDocument.head
    return iframeHeadElem
  }, [])

  // font support
  useEffect(() => {
    const iframe = document.getElementsByTagName('iframe')[0]
    if (!iframe) return null
    const iframeHeadElem = iframe.contentDocument.head

    const link = document.createElement('link')
    link.href='https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400&display=swap'
    link.rel='stylesheet'

    iframeHeadElem.appendChild(link)
  }, [])

  return (
    <StyleSheetManager target={iframeHead}>
      {children}
    </StyleSheetManager>
  )
}