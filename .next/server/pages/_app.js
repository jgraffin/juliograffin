"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 3935:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

;// CONCATENATED MODULE: external "next/head"
const head_namespaceObject = require("next/head");
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
// EXTERNAL MODULE: ./locales/translate.ts + 2 modules
var translate = __webpack_require__(6937);
// EXTERNAL MODULE: ./hooks/useHeader.tsx
var useHeader = __webpack_require__(2465);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./hooks/appProvider.tsx



const AppProvider = ({
  children
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx(useHeader/* HeaderProvider */.I, {
    children: children
  });
};

/* harmony default export */ const appProvider = (AppProvider);
// EXTERNAL MODULE: ./styles/global.ts
var global = __webpack_require__(8364);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
// EXTERNAL MODULE: external "format-message"
var external_format_message_ = __webpack_require__(2219);
var external_format_message_default = /*#__PURE__*/__webpack_require__.n(external_format_message_);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(9914);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./components/header/styles.ts

const slideInNav = (0,external_styled_components_.keyframes)(["from{opacity:0;transform:translateX(50%);}to{opacity:1;transform:translateX(0);}"]);
const HeaderWrapper = external_styled_components_default().header.withConfig({
  displayName: "styles__HeaderWrapper"
})(["width:100%;height:8rem;backdrop-filter:blur(6px);position:fixed;left:0;top:0;z-index:10;display:flex;align-items:center;@media (max-width:768px){height:6.5rem;}&::after{content:\"\";width:100%;height:8rem;position:fixed;left:0;top:0;z-index:5;background:rgb(0,0,0);opacity:0.6;box-shadow:0 -15px 15px 24px rgb(0 0 0 / 0.4);@media (max-width:768px){height:6.5rem;}}> div{display:flex;justify-content:space-between;position:relative;align-items:center;z-index:8;}@media (min-width:769px){background:linear-gradient( 0deg,rgba(0,0,0,0) 0%,rgba(0,0,0,1) 100% );}"]);
const Brand = external_styled_components_default().div.withConfig({
  displayName: "styles__Brand"
})(["margin-right:auto;width:16rem;@media (max-width:768px){width:14rem;}"]);
const Nav = external_styled_components_default().nav.withConfig({
  displayName: "styles__Nav"
})(["display:none;align-items:center;@media (min-width:768px){display:flex;}ul{display:flex;align-items:center;li{&::after{font-size:1.4rem;display:inline-block;margin:0 3rem;content:\"/\";color:#ffffff;}button{transition:ease-in-out 0.3s;cursor:pointer;color:#ffffff;font-size:1.4rem;&:hover{color:#f1c40f;}}}}"]);
const Lang = external_styled_components_default().nav.withConfig({
  displayName: "styles__Lang"
})(["display:flex;align-items:center;justify-content:center;transform:none;button{color:#ffffff;font-size:2rem;transition:ease-in-out 0.3s;cursor:pointer;@media (min-width:769px){font-size:1.6rem;}&:first-child{margin-right:2rem;margin-left:2rem;@media (min-width:769px){margin-right:1rem;margin-left:0;}}&.is-active{color:#f1c40f;font-family:\"jetbrains_mono_nlextrabold\";cursor:default;}&:hover{color:#f1c40f;}}"]);
const NavButtonMobile = external_styled_components_default().button.withConfig({
  displayName: "styles__NavButtonMobile"
})(["display:flex;align-items:center;justify-content:center;width:42px;height:42px;svg{color:#ffffff;width:60%;height:60%;}@media (min-width:769px){display:none;}"]);
const NavMobile = external_styled_components_default().div.withConfig({
  displayName: "styles__NavMobile"
})(["animation:", " ease-in-out 0.4s forwards;position:fixed;right:0;top:0;width:60%;height:100%;z-index:6;background:#111111;box-shadow:0px 2px 30px 20px rgba(0,0,0,0.5);padding-top:10rem;nav{display:flex;transform:none;justify-content:flex-end;ul{width:100%;justify-content:flex-end;padding-right:15px;li{&:after{display:none;}button{font-size:2rem;}}}&:last-of-type{border-bottom:1px solid rgba(255,255,255,0.1);padding:1rem 0 2rem 0;button{font-size:2rem;&:last-of-type{margin-left:2rem;}}}}.content__jobs{display:block;padding:2rem 15px 0 0;ul{display:block;text-align:right;padding-left:24px;li{margin-bottom:2rem;display:flex;width:100%;justify-content:flex-end;&:last-of-type{margin-bottom:0;}a{color:#ffffff;font-size:1.2rem;line-height:2.6rem;}}}}"], slideInNav);
;// CONCATENATED MODULE: ./public/logo.svg
/* harmony default export */ const logo = ({"src":"/_next/static/image/public/logo.c7d1369f27eebcbb1d4a1a8a93db8dca.svg","height":27,"width":169});
// EXTERNAL MODULE: ./node_modules/react-icons/cg/index.esm.js
var index_esm = __webpack_require__(471);
// EXTERNAL MODULE: ./node_modules/react-icons/vsc/index.esm.js
var vsc_index_esm = __webpack_require__(4578);
// EXTERNAL MODULE: ./frontaid.content.json
var frontaid_content = __webpack_require__(956);
;// CONCATENATED MODULE: ./components/header/header.tsx
















const Header = () => {
  const {
    switchLanguage,
    language
  } = (0,useHeader/* useHeader */.g)();
  const {
    0: isActivePtBr,
    1: setIsActivePtBr
  } = (0,external_react_.useState)("");
  const {
    0: isActiveEnUs,
    1: setIsActiveEnUs
  } = (0,external_react_.useState)("");
  const {
    0: isNavOpened,
    1: setIsNavOpened
  } = (0,external_react_.useState)(false);

  const handleChange = event => {
    const {
      id
    } = event.currentTarget;
    switchLanguage(id);
  };

  const handleOpenNav = () => {
    isNavOpened ? setIsNavOpened(false) : setIsNavOpened(true);
  };

  (0,external_react_.useEffect)(() => {
    let url = window.location.href.split("/");
    let target = url[url.length - 1].toLowerCase();
    let element = document.getElementById(target);
    element && element.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });

    if (language.currentLanguage === "pt-br") {
      setIsActivePtBr("is-active");
      setIsActiveEnUs("");
    } else {
      setIsActiveEnUs("is-active");
      setIsActivePtBr("");
    }
  }, [language]);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(HeaderWrapper, {
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(global/* Container */.W2, {
        children: [/*#__PURE__*/jsx_runtime_.jsx(Brand, {
          children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
            href: "/",
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              children: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
                src: logo,
                alt: "Julio Graffin"
              })
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(NavButtonMobile, {
          onClick: handleOpenNav,
          children: isNavOpened ? /*#__PURE__*/jsx_runtime_.jsx(vsc_index_esm/* VscClose */.ven, {
            viewBox: "0 0 15 15"
          }) : /*#__PURE__*/jsx_runtime_.jsx(index_esm/* CgMenuRight */.IlA, {})
        }), /*#__PURE__*/jsx_runtime_.jsx(Nav, {
          children: /*#__PURE__*/jsx_runtime_.jsx("ul", {
            children: /*#__PURE__*/jsx_runtime_.jsx("li", {
              children: /*#__PURE__*/jsx_runtime_.jsx("button", {
                onClick: e => {
                  let jobs = document.getElementById("jobs");
                  e.preventDefault();
                  jobs && jobs.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                  });
                },
                children: language.currentLanguage === "pt-br" ? external_format_message_default()("title.jobs") : (0,translate/* eng */.P)("title.jobs")
              })
            })
          })
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(Lang, {
          children: [/*#__PURE__*/jsx_runtime_.jsx("button", {
            onClick: e => handleChange(e),
            className: isActivePtBr,
            id: "pt-br",
            children: "pt"
          }), /*#__PURE__*/jsx_runtime_.jsx("button", {
            onClick: e => handleChange(e),
            className: isActiveEnUs,
            id: "en-us",
            children: "en"
          })]
        })]
      })
    }), isNavOpened && /*#__PURE__*/(0,jsx_runtime_.jsxs)(NavMobile, {
      children: [/*#__PURE__*/jsx_runtime_.jsx(Nav, {
        children: /*#__PURE__*/jsx_runtime_.jsx("ul", {
          children: /*#__PURE__*/jsx_runtime_.jsx("li", {
            children: /*#__PURE__*/jsx_runtime_.jsx("button", {
              onClick: e => {
                let jobs = document.getElementById("jobs");
                e.preventDefault();
                setIsNavOpened(false);
                jobs && jobs.scrollIntoView({
                  behavior: "smooth",
                  block: "start"
                });
              },
              children: language.currentLanguage === "pt-br" ? external_format_message_default()("title.jobs") : (0,translate/* eng */.P)("title.jobs")
            })
          })
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "content__jobs",
        children: /*#__PURE__*/jsx_runtime_.jsx("ul", {
          children: frontaid_content/* pages.map */.L.map(item => /*#__PURE__*/jsx_runtime_.jsx("li", {
            children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
              href: "[...slug]",
              as: item.path,
              children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                onClick: handleOpenNav,
                children: /*#__PURE__*/jsx_runtime_.jsx("h3", {
                  children: language.currentLanguage === "pt-br" ? item.title : item === null || item === void 0 ? void 0 : item.title_en
                })
              })
            })
          }, item.id))
        })
      })]
    })]
  });
};

/* harmony default export */ const header = (Header);
// EXTERNAL MODULE: ./node_modules/react-icons/ai/index.esm.js
var ai_index_esm = __webpack_require__(8193);
// EXTERNAL MODULE: ./node_modules/react-icons/fa/index.esm.js
var fa_index_esm = __webpack_require__(9583);
// EXTERNAL MODULE: ./node_modules/react-icons/gr/index.esm.js
var gr_index_esm = __webpack_require__(5155);
;// CONCATENATED MODULE: ./components/footer/styles.ts

const FooterWrapper = external_styled_components_default().footer.withConfig({
  displayName: "styles__FooterWrapper"
})(["background:#111111;width:100%;padding:45px 0;> div{display:flex;flex-direction:column;}.footer__content{display:flex;flex-direction:column;position:relative;&:first-of-type{padding-bottom:2.8rem;h2{color:#ffffff;display:block;font-family:\"jetbrains_mono_nlextrabold\";font-size:3rem;margin-bottom:5rem;}ul{display:block;width:100%;li{line-height:4rem;a,strong{color:#f1c40f;font-size:1.6rem;font-family:\"jetbrains_mono_nlmedium\";}}}&::after{content:\"\";width:100%;height:1px;position:absolute;left:0;bottom:0;background:#f1c40f;opacity:0.2;}}&:last-of-type{align-items:center;display:grid;grid-template-columns:1fr 1fr;padding-top:4rem;div{ul{align-items:center;display:flex;li{margin-right:2rem;&:first-child{svg{fill:#f1c40f;height:2.4rem;width:2.4rem;}}}}a{font-size:3rem;transition:ease-in-out 0.3s;&:hover{opacity:0.6;}svg{fill:#f1c40f;height:2.2rem;width:2.2rem;}}p{color:#ffffff;font-size:1.2rem;line-height:2.2rem;text-align:right;span{display:inline-block;font-size:1.6rem;vertical-align:middle;}}}}}"]);
;// CONCATENATED MODULE: ./components/footer/footer.tsx
/* eslint-disable react/display-name */












const Footer = () => {
  const {
    language
  } = (0,useHeader/* useHeader */.g)();
  return /*#__PURE__*/jsx_runtime_.jsx(FooterWrapper, {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(global/* Container */.W2, {
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "footer__content",
        children: [/*#__PURE__*/jsx_runtime_.jsx("h2", {
          children: language.currentLanguage === "pt-br" ? external_format_message_default().rich(external_format_message_default()("title.contact"), {
            br: () => /*#__PURE__*/jsx_runtime_.jsx("br", {}, "br")
          }) : translate/* eng.rich */.P.rich((0,translate/* eng */.P)("title.contact"), {
            br: () => /*#__PURE__*/jsx_runtime_.jsx("br", {}, "br")
          })
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
          children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
            children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
              href: "mailto:juliograffin@gmail.com",
              children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                children: "juliograffin@gmail.com"
              })
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("li", {
            children: /*#__PURE__*/jsx_runtime_.jsx("strong", {
              children: "+5541 99505-2527"
            })
          })]
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "footer__content",
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
            children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
              children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                href: "https://github.com/jgraffin",
                passHref: true,
                children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                  target: "_blank",
                  rel: "noopener noreferrer",
                  "aria-label": "Github",
                  children: /*#__PURE__*/jsx_runtime_.jsx(ai_index_esm/* AiOutlineGithub */.idJ, {})
                })
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("li", {
              children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                href: "https://linkedin.com/in/juliograffin",
                passHref: true,
                children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                  target: "_blank",
                  rel: "noopener noreferrer",
                  "aria-label": "LinkedIn",
                  children: /*#__PURE__*/jsx_runtime_.jsx(fa_index_esm/* FaLinkedin */.ltd, {})
                })
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("li", {
              children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                href: "https://www.instagram.com/jotagraffin/",
                passHref: true,
                children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                  target: "_blank",
                  rel: "noopener noreferrer",
                  "aria-label": "Instagram",
                  children: /*#__PURE__*/jsx_runtime_.jsx(gr_index_esm/* GrInstagram */.Z8w, {})
                })
              })
            })]
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
            children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
              children: "\xA9"
            }), " 2021 -", " ", language.currentLanguage === "pt-br" ? external_format_message_default()("text.rights") : (0,translate/* eng */.P)("text.rights")]
          })
        })]
      })]
    })
  });
};

/* harmony default export */ const footer = (Footer);
;// CONCATENATED MODULE: ./pages/_app.tsx
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }












function MyApp({
  Component,
  pageProps
}) {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)((head_default()), {
      children: [/*#__PURE__*/jsx_runtime_.jsx("title", {
        children: "Julio Graffin - Ui / Front-end"
      }), /*#__PURE__*/jsx_runtime_.jsx("link", {
        rel: "shortcut icon",
        href: "/favicon.svg"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "theme-color",
        content: "#f1c40f"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1, maximum-scale=5"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "description",
        content: "Portfolio contendo trabalhos dos quais participei em v\xE1rias empresas, com times multi disciplinares. Trabalhos de design, front-end e CMS"
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(appProvider, {
      children: [/*#__PURE__*/jsx_runtime_.jsx(global/* default */.ZP, {}), /*#__PURE__*/jsx_runtime_.jsx(header, {}), /*#__PURE__*/jsx_runtime_.jsx(Component, _objectSpread({}, pageProps)), /*#__PURE__*/jsx_runtime_.jsx(footer, {})]
    })]
  });
}

/* harmony default export */ const _app = (MyApp);

/***/ }),

/***/ 2219:
/***/ ((module) => {

module.exports = require("format-message");

/***/ }),

/***/ 9325:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 822:
/***/ ((module) => {

module.exports = require("next/dist/server/image-config.js");

/***/ }),

/***/ 6695:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 5378:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 7162:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 8773:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 2248:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 9372:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 665:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 2747:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 333:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 3456:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 556:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/to-base-64.js");

/***/ }),

/***/ 7620:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 9297:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 5282:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 9914:
/***/ ((module) => {

module.exports = require("styled-components");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [90,193,912,656], () => (__webpack_exec__(3935)));
module.exports = __webpack_exports__;

})();