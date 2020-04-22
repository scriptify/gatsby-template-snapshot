
  const additionalPageInformation = {"/":{"headerRestHtml":"\n\t\t<title>Snapshot by TEMPLATED</title>\n\t\t<meta charset=\"utf-8\">\n\t\t<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n\t\t\n\t","htmlAttributes":{},"bodyAttributes":{}},"/gallery/":{"headerRestHtml":"\n\t\t<title>Gallery - Snapshot by TEMPLATED</title>\n\t\t<meta charset=\"utf-8\">\n\t\t<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n\t\t\n\t","htmlAttributes":{},"bodyAttributes":{}},"/generic/":{"headerRestHtml":"\n\t\t<title>Generic - Snapshot by TEMPLATED</title>\n\t\t<meta charset=\"utf-8\">\n\t\t<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n\t\t\n\t","htmlAttributes":{},"bodyAttributes":{}},"/index-1/":{"headerRestHtml":"\n\t\t<title>Snapshot by TEMPLATED</title>\n\t\t<meta charset=\"utf-8\">\n\t\t<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n\t\t\n\t","htmlAttributes":{},"bodyAttributes":{}}};

  window.statikk = {
    log: function(...params) {
      if (process.env.NODE_ENV !== "production") {
        console.info("[STATIKK]", ...params)
      }
    },
  }
  
  function applyAttributes(elem, attrs = {}) {
    [...elem.attributes].forEach(attr => {
      elem.setAttribute(attr.nodeName, '');
    })
    Object.keys(attrs).forEach(key => {
      const val = attrs[key]
      elem.setAttribute(key, val)
    })
  }
  
  exports.onPreRouteUpdate = function({ location, prevLocation }) {
    if (!prevLocation && process.env.NODE_ENV !== "development") {
      // This was already done by SSR HTML page ;)
      return
    }
  
    let { pathname = "" } = location
  
    if (!pathname.endsWith("/")) {
      pathname = `${pathname}/`
    }
  
    const foundInformation = additionalPageInformation[pathname]
  
    if (foundInformation) {
      const $body = document.querySelector("body")
      const $html = document.querySelector("html")
      const {
        htmlAttributes,
        bodyAttributes,
        headerRestHtml,
      } = foundInformation
      applyAttributes($body, bodyAttributes)
      applyAttributes($html, htmlAttributes)
      let $head = document.querySelector("head #additionalHeadHtml")
      if (!$head) {
        document
          .querySelector("head")
          .insertAdjacentHTML("beforeend", '<div id="additionalHeadHtml"></div>')
        $head = document.querySelector("head #additionalHeadHtml")
      }
      $head.innerHTML = headerRestHtml
    }
  }
  
  
  
  