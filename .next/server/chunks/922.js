"use strict";
exports.id = 922;
exports.ids = [922];
exports.modules = {

/***/ 7922:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ MyLayout)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__(9816);
var style_default = /*#__PURE__*/__webpack_require__.n(style_);
;// CONCATENATED MODULE: ./components/Header.js



const Header = ()=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "jsx-6badb1fce8dc01c3",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                href: "/",
                children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                    className: "jsx-6badb1fce8dc01c3",
                    children: "Home"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                href: "/about",
                children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                    className: "jsx-6badb1fce8dc01c3",
                    children: "About"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                href: "/projects",
                children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                    className: "jsx-6badb1fce8dc01c3",
                    children: "Projects"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                href: "/contact",
                children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                    className: "jsx-6badb1fce8dc01c3",
                    children: "Contact"
                })
            }),
            jsx_runtime_.jsx((style_default()), {
                id: "6badb1fce8dc01c3",
                children: "div.jsx-6badb1fce8dc01c3{background-color:#5d576b;padding:10px;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;height:100%}p.jsx-6badb1fce8dc01c3{color:#abebd2;text-decoration:none;margin-left:20px;margin-right:20px;padding-top:20px}p.jsx-6badb1fce8dc01c3:hover{color:#d496a7;text-decoration:underline}"
            })
        ]
    });
/* harmony default export */ const components_Header = (Header);

;// CONCATENATED MODULE: ./components/MyLayout.js




const layoutStyle = {
    margin: 20,
    padding: 20,
    border: "1px solid #DDD"
};
const Layout = (props)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((head_default()), {
                children: /*#__PURE__*/ jsx_runtime_.jsx("link", {
                    rel: "stylesheet",
                    href: "https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css",
                    integrity: "sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T",
                    crossOrigin: "anonymous"
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                style: layoutStyle,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(components_Header, {}),
                    props.children
                ]
            })
        ]
    });
/* harmony default export */ const MyLayout = (Layout);


/***/ })

};
;