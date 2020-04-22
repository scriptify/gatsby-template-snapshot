
  const React = require("react")

  const additionalPageInformation = {"/":{"headerRestHtml":"\n\t\t<title>Snapshot by TEMPLATED</title>\n\t\t<meta charset=\"utf-8\">\n\t\t<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n\t\t\n\t","htmlAttributes":{},"bodyAttributes":{}},"/gallery/":{"headerRestHtml":"\n\t\t<title>Gallery - Snapshot by TEMPLATED</title>\n\t\t<meta charset=\"utf-8\">\n\t\t<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n\t\t\n\t","htmlAttributes":{},"bodyAttributes":{}},"/generic/":{"headerRestHtml":"\n\t\t<title>Generic - Snapshot by TEMPLATED</title>\n\t\t<meta charset=\"utf-8\">\n\t\t<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n\t\t\n\t","htmlAttributes":{},"bodyAttributes":{}},"/index-1/":{"headerRestHtml":"\n\t\t<title>Snapshot by TEMPLATED</title>\n\t\t<meta charset=\"utf-8\">\n\t\t<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n\t\t\n\t","htmlAttributes":{},"bodyAttributes":{}}};
  
  exports.onRenderBody = function(apiCallbackContext, pluginOptions) {
    const {
      pathname,
      setHtmlAttributes,
      setBodyAttributes
    } = apiCallbackContext
  
    const foundInformation = additionalPageInformation[pathname]
  
    if (foundInformation) {
      const { htmlAttributes, bodyAttributes } = foundInformation
      setHtmlAttributes(htmlAttributes)
      setBodyAttributes(bodyAttributes)
    }
  }  
  