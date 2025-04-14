module.exports = {

"[project]/.next-internal/server/app/page/actions.js [app-rsc] (server actions loader, ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
}}),
"[project]/src/app/favicon.ico.mjs { IMAGE => \"[project]/src/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/favicon.ico.mjs { IMAGE => \"[project]/src/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript)"));
}}),
"[project]/src/app/layout.tsx [app-rsc] (ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/layout.tsx [app-rsc] (ecmascript)"));
}}),
"[project]/public/desktopHero.png (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/desktopHero.3eb2df88.png");}}),
"[project]/public/desktopHero.png.mjs { IMAGE => \"[project]/public/desktopHero.png (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$desktopHero$2e$png__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/public/desktopHero.png (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$desktopHero$2e$png__$28$static__in__ecmascript$29$__["default"],
    width: 536,
    height: 357,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAYAAAB4ka1VAAAAsElEQVR42gGlAFr/AN/u+v/J5vv/uuD6/2lse/8yLzj/l67C/8Xk+//d7fn+AOXw+P/Y6ff/0+f3/6ygov9dRD7/iIqQ/9Tn9f/k8Pn+AODo8P/G0+X/q77d/5uoyf+Fe4T/d32L/7nG1//X5O/+AOHo8f/L1+f/0djm/5ekwv+Li6H/foqg/665x//S2+P+AOft8//S2+j/29zk/6yns/+UjZj/f4aY/56jqf/O0tb+fACAfBgaE8YAAAAASUVORK5CYII=",
    blurWidth: 8,
    blurHeight: 5
};
}}),
"[project]/public/mobileHero.png (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/mobileHero.cc9bb850.png");}}),
"[project]/public/mobileHero.png.mjs { IMAGE => \"[project]/public/mobileHero.png (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$mobileHero$2e$png__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/public/mobileHero.png (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$mobileHero$2e$png__$28$static__in__ecmascript$29$__["default"],
    width: 921,
    height: 444,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAYAAACzzX7wAAAAfklEQVR42hXKwQ7BMACA4b6/FxCyzMESc8GVEMw6EiFb1+q2xCa0e4wfl+/0iefbcS1yTnLHJBoRRAFptkHphM45ROs8d12SXRLmi5hwOkaetxgreXmP6HyPsgZTa5azIXE4QNscXalf6BF/yqYmqRpSueZ4WLE3D266oP04voqFa+2ulwuOAAAAAElFTkSuQmCC",
    blurWidth: 8,
    blurHeight: 4
};
}}),
"[project]/src/utils/functions.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "prepareCompaniesForCarousel": (()=>prepareCompaniesForCarousel)
});
function prepareCompaniesForCarousel(companies, isMobile) {
    if (isMobile) {
        // On mobile, each carousel item contains a single company
        return companies.map((company)=>[
                company
            ]);
    } else {
        // On desktop, we group companies into pairs for the 2-row grid
        const itemsPerSlide = 2 // Number of items to show vertically
        ;
        const result = [];
        // Group companies into chunks for the grid
        for(let i = 0; i < companies.length; i += itemsPerSlide){
            const group = companies.slice(i, i + itemsPerSlide);
            result.push(group);
        }
        return result;
    }
}
}}),
"[project]/public/companyLogos/mobile/bog.png (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/bog.464f4281.png");}}),
"[project]/public/companyLogos/mobile/bog.png.mjs { IMAGE => \"[project]/public/companyLogos/mobile/bog.png (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$companyLogos$2f$mobile$2f$bog$2e$png__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/public/companyLogos/mobile/bog.png (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$companyLogos$2f$mobile$2f$bog$2e$png__$28$static__in__ecmascript$29$__["default"],
    width: 34,
    height: 28,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAHCAYAAAA1WQxeAAAA8klEQVR42gHnABj/AAMDAwFFRUU0jo6OdY6OjnmOjo55i4eGdDArJygAAAAAAB4eHhKTk5N4ODg4LiopKCNAMywyuHlUpb2BWrYqFgofACUkJCOkjICRekw0cYRQL3S/ZjCw8INE9OaHT+RSKBI6ACQiISTYjmba+X09/PWSXPj2g0P99Hk287+TeqgYFBIRACQkJCTYi2Ld8X0/8IpEHXa2ViCs73Uy6LadjaAUFBQPADMlHCfXkWzH0Gw1tjAeEiFtNxdc2YNRwZ6VjoUODg4KAA4IBAl2aWFbvK2lm6CenYuro56Tw7GnpVJRUUMCAgIB0JFZ+u90kSYAAAAASUVORK5CYII=",
    blurWidth: 8,
    blurHeight: 7
};
}}),
"[project]/public/companyLogos/mobile/arcton.png (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/arcton.88bf9524.png");}}),
"[project]/public/companyLogos/mobile/arcton.png.mjs { IMAGE => \"[project]/public/companyLogos/mobile/arcton.png (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$companyLogos$2f$mobile$2f$arcton$2e$png__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/public/companyLogos/mobile/arcton.png (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$companyLogos$2f$mobile$2f$arcton$2e$png__$28$static__in__ecmascript$29$__["default"],
    width: 72,
    height: 28,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAYAAACuyE5IAAAAbklEQVR42gFjAJz/AE0iHT8jFBEeJBIPHykQDiRLJB4/Ig8NHxgJCBYjDgwhAI1dToeCSj55fEI3dH0yKnaJPzWBjzoxiYU0LH6INS2GAF1HO000HBgwIBURHjIUETEvEg8sNhUSNS0SDysoDw0o4/QUOP5nelUAAAAASUVORK5CYII=",
    blurWidth: 8,
    blurHeight: 3
};
}}),
"[project]/public/companyLogos/mobile/access.png (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/access.7fe218bc.png");}}),
"[project]/public/companyLogos/mobile/access.png.mjs { IMAGE => \"[project]/public/companyLogos/mobile/access.png (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$companyLogos$2f$mobile$2f$access$2e$png__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/public/companyLogos/mobile/access.png (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$companyLogos$2f$mobile$2f$access$2e$png__$28$static__in__ecmascript$29$__["default"],
    width: 72,
    height: 28,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAYAAACuyE5IAAAAZUlEQVR42hXIPQ5FQBAA4NnZ2b/x3khIVEJiiUYlhFA7gVu4hKuj+JoPXCKZImMBiQC1VqjJGMuIb5AJMJ3XzXFcKc4Tdevi+m0v2+Eo67hXTX+AlbxAn/xUkP8HWcR6FufDi9MHbUsHpTaeyhMAAAAASUVORK5CYII=",
    blurWidth: 8,
    blurHeight: 3
};
}}),
"[project]/public/companyLogos/mobile/extra.png (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/extra.51377c87.png");}}),
"[project]/public/companyLogos/mobile/extra.png.mjs { IMAGE => \"[project]/public/companyLogos/mobile/extra.png (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$companyLogos$2f$mobile$2f$extra$2e$png__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/public/companyLogos/mobile/extra.png (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$companyLogos$2f$mobile$2f$extra$2e$png__$28$static__in__ecmascript$29$__["default"],
    width: 72,
    height: 28,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAYAAACuyE5IAAAAbklEQVR42gFjAJz/AK6urulycnPpx8LP6eDg4uni4uLp2tra6eHh4ene3t7pAIF6jf+ZfcH/qI/O/5COkv+Tk5P/l5eX/5+fn/+Li4v/AJCNlel4aY3ppKGn6c/Pz+nPz8/p09PT6djY2OnKysrpCQBIqlOY8GYAAAAASUVORK5CYII=",
    blurWidth: 8,
    blurHeight: 3
};
}}),
"[project]/public/companyLogos/mobile/croco.png (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/croco.05a7ecdb.png");}}),
"[project]/public/companyLogos/mobile/croco.png.mjs { IMAGE => \"[project]/public/companyLogos/mobile/croco.png (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$companyLogos$2f$mobile$2f$croco$2e$png__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/public/companyLogos/mobile/croco.png (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$companyLogos$2f$mobile$2f$croco$2e$png__$28$static__in__ecmascript$29$__["default"],
    width: 72,
    height: 28,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAYAAACuyE5IAAAAXUlEQVR42k2Kuw5AQBAAd7kNCo3HCVEocEdBoUSiVKiESoLEJ/j/BInippwZgB/bM3gpKKuFLiOOIagg08gf0nk9gv2+zHObaCEGpByAVuJKp4nbsaeuyrUCX/elB3WICBvNVieSAAAAAElFTkSuQmCC",
    blurWidth: 8,
    blurHeight: 3
};
}}),
"[project]/public/companyLogos/mobile/sweeft.png (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/sweeft.6324e67d.png");}}),
"[project]/public/companyLogos/mobile/sweeft.png.mjs { IMAGE => \"[project]/public/companyLogos/mobile/sweeft.png (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$companyLogos$2f$mobile$2f$sweeft$2e$png__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/public/companyLogos/mobile/sweeft.png (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$companyLogos$2f$mobile$2f$sweeft$2e$png__$28$static__in__ecmascript$29$__["default"],
    width: 72,
    height: 28,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAYAAACuyE5IAAAAbklEQVR42gFjAJz/ABQGGx+FFVaapSkxoQ4IBhsJCQkxDAwMPAoKCjAFBQUXACMQZXOFNa35mlwtqgsJBiEPDw9PEBAQUxAQEFALCws2AAQCICMuE4mnQyNYgQUEBBMJCQkuCQkJLgkJCS0GBgYfgaoQQ8ZUP9kAAAAASUVORK5CYII=",
    blurWidth: 8,
    blurHeight: 3
};
}}),
"[project]/public/companyLogos/mobile/philip.png (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/philip.ad2c1c28.png");}}),
"[project]/public/companyLogos/mobile/philip.png.mjs { IMAGE => \"[project]/public/companyLogos/mobile/philip.png (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$companyLogos$2f$mobile$2f$philip$2e$png__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/public/companyLogos/mobile/philip.png (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$companyLogos$2f$mobile$2f$philip$2e$png__$28$static__in__ecmascript$29$__["default"],
    width: 72,
    height: 28,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAYAAACuyE5IAAAAbklEQVR42gFjAJz/AAwXHhIRIzAeBQoOCAIHCgcGDRMNBQsQCwUOFA4EDBIMAB8+VTUjVHhZEyg3IQYXIxsPL0UzDyo+LxIxSDUQLkEsAAsWHRIQICscBw4TCwEFCAYDCg4MAwoPDAMKEAwECg8L5bsJaLPn4ggAAAAASUVORK5CYII=",
    blurWidth: 8,
    blurHeight: 3
};
}}),
"[project]/public/companyLogos/desktop/bogDesktop.png (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/bogDesktop.ce48c949.png");}}),
"[project]/public/companyLogos/desktop/bogDesktop.png.mjs { IMAGE => \"[project]/public/companyLogos/desktop/bogDesktop.png (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$companyLogos$2f$desktop$2f$bogDesktop$2e$png__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/public/companyLogos/desktop/bogDesktop.png (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$companyLogos$2f$desktop$2f$bogDesktop$2e$png__$28$static__in__ecmascript$29$__["default"],
    width: 64,
    height: 60,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAABE0lEQVR42gEIAff+AAEBAQAiIiIeU1NTVFdXV1pXV1daU1JSUh0dHRkAAAAAABUVFRKDg4N8VlZWUklJSUhMSkpKmHZjkKp7YKYgEwobADAwMDB8cm13NSEVLzYeEDFyOxxq2XdB3O6OWPdzPx5rADMuLDPVlXTZ6YJL6uiWaOvzgkX69Xw6/NSKYdA4KB8yADMuLDTjhFLp9Xc1+sRiLsHZbTLb8nQw97yTfbMpKSklADcyMDXgkmnm3XA02zYbDC5qLg1k4G0v3qqOf6EmJiYiACkbEiGuhm+kqHlfn1FMSU1vWUxoyJBxvY2GgoQODg4MAAEBAQAjIyMfVVVVVldXV1tXV1dbVFNTUx0dHRoAAAAAO8pdRxEVHrUAAAAASUVORK5CYII=",
    blurWidth: 8,
    blurHeight: 8
};
}}),
"[project]/public/companyLogos/desktop/arctonDesktop.png (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/arctonDesktop.a601a147.png");}}),
"[project]/public/companyLogos/desktop/arctonDesktop.png.mjs { IMAGE => \"[project]/public/companyLogos/desktop/arctonDesktop.png (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$companyLogos$2f$desktop$2f$arctonDesktop$2e$png__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/public/companyLogos/desktop/arctonDesktop.png (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$companyLogos$2f$desktop$2f$arctonDesktop$2e$png__$28$static__in__ecmascript$29$__["default"],
    width: 152,
    height: 60,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAYAAACuyE5IAAAAbklEQVR42gFjAJz/AEEdGD8fEQ4eIBANHyQODCRBHxpAHw4LHxYIBxUhDQsgAIpZSod6RTl6dT40dHcvJ3aDOzKCiDcuiH0wKX6DMyuFAFE9MkwvGRUuHhMQHS8SDy8rEQ4qMxQRMyoQDSklDgwlq6ATILrc7XAAAAAASUVORK5CYII=",
    blurWidth: 8,
    blurHeight: 3
};
}}),
"[project]/public/companyLogos/desktop/accessDesktop.png (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/accessDesktop.ab43c16b.png");}}),
"[project]/public/companyLogos/desktop/accessDesktop.png.mjs { IMAGE => \"[project]/public/companyLogos/desktop/accessDesktop.png (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$companyLogos$2f$desktop$2f$accessDesktop$2e$png__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/public/companyLogos/desktop/accessDesktop.png (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$companyLogos$2f$desktop$2f$accessDesktop$2e$png__$28$static__in__ecmascript$29$__["default"],
    width: 154,
    height: 60,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAYAAACuyE5IAAAAZUlEQVR42hXHSw5AMBRA0fdptUoJA4lPUhIDExFEmHYLVmET9q4GJ7kXVJIVKGQExAxIhMQirAnJLKSG/X5e4+aD3bKJft2jYTubYfJ111+tGz1IW1akTILaWtRpGlip4kz9dJx/VJ8HG9WUNH4AAAAASUVORK5CYII=",
    blurWidth: 8,
    blurHeight: 3
};
}}),
"[project]/public/companyLogos/desktop/extraDesktop.png (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/extraDesktop.68b2233c.png");}}),
"[project]/public/companyLogos/desktop/extraDesktop.png.mjs { IMAGE => \"[project]/public/companyLogos/desktop/extraDesktop.png (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$companyLogos$2f$desktop$2f$extraDesktop$2e$png__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/public/companyLogos/desktop/extraDesktop.png (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$companyLogos$2f$desktop$2f$extraDesktop$2e$png__$28$static__in__ecmascript$29$__["default"],
    width: 154,
    height: 60,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAYAAACuyE5IAAAAbklEQVR42gFjAJz/AKWlpeZsbGzmwLvI5tnY2uba2trm0tLS5tnZ2ebW1tbmAIJ6jf+bf8L/q5HP/5GQk/+Tk5P/lpaW/6CgoP+NjY3/AIqHjuZxY4XmnZuh5sjIyObIyMjmzMzM5tDR0ObDw8PmvVRHMAJGqT0AAAAASUVORK5CYII=",
    blurWidth: 8,
    blurHeight: 3
};
}}),
"[project]/public/companyLogos/desktop/crocoDesktop.png (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/crocoDesktop.fa505235.png");}}),
"[project]/public/companyLogos/desktop/crocoDesktop.png.mjs { IMAGE => \"[project]/public/companyLogos/desktop/crocoDesktop.png (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$companyLogos$2f$desktop$2f$crocoDesktop$2e$png__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/public/companyLogos/desktop/crocoDesktop.png (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$companyLogos$2f$desktop$2f$crocoDesktop$2e$png__$28$static__in__ecmascript$29$__["default"],
    width: 154,
    height: 60,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAYAAACuyE5IAAAAXElEQVR42k2KsQqAIBQAn/IeNjSEhSBBEBoY1dpU0eooBEFbtPT/X1BBgzfeHcBPKoWyNTad4a5UTEMMQ075bIIPxXnv4jo8bkRA0QEsqaTLBj2tIy695S173ZceX+AHqcv+FusAAAAASUVORK5CYII=",
    blurWidth: 8,
    blurHeight: 3
};
}}),
"[project]/public/companyLogos/desktop/sweeftDesktop.png (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/sweeftDesktop.e4a4e509.png");}}),
"[project]/public/companyLogos/desktop/sweeftDesktop.png.mjs { IMAGE => \"[project]/public/companyLogos/desktop/sweeftDesktop.png (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$companyLogos$2f$desktop$2f$sweeftDesktop$2e$png__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/public/companyLogos/desktop/sweeftDesktop.png (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$companyLogos$2f$desktop$2f$sweeftDesktop$2e$png__$28$static__in__ecmascript$29$__["default"],
    width: 154,
    height: 60,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAYAAACuyE5IAAAAbklEQVR42gFjAJz/ABYHHSSKFlehoiovoQwHBRsJCQkxCwsLPQkJCTQFBQUcACYRbICJN6r6llkqpgkIBh8ODg5ODg4OUw4ODlAKCgo9AAQDJCgxFIyuQiNTfwUEBBMICAgvCQkJMQgICC4GBgYiixoQZqMlZ8oAAAAASUVORK5CYII=",
    blurWidth: 8,
    blurHeight: 3
};
}}),
"[project]/public/companyLogos/desktop/philipDesktop.png (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/philipDesktop.4a4b3353.png");}}),
"[project]/public/companyLogos/desktop/philipDesktop.png.mjs { IMAGE => \"[project]/public/companyLogos/desktop/philipDesktop.png (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$companyLogos$2f$desktop$2f$philipDesktop$2e$png__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/public/companyLogos/desktop/philipDesktop.png (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$companyLogos$2f$desktop$2f$philipDesktop$2e$png__$28$static__in__ecmascript$29$__["default"],
    width: 154,
    height: 60,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAYAAACuyE5IAAAAaElEQVR42jXLOQqFMBAA0PxvYnTGjMENLFxwI6AIWqjYeAtLD+LpBcHilY9hnAW6GgsB5P6FIzmQZ7kKOWrFwUdWHOfWnPcVmbW2ozxVZp+oXQbdH7PfLYZhkge6HDJJofcT0n430AcezV8I7fr/J3UAAAAASUVORK5CYII=",
    blurWidth: 8,
    blurHeight: 3
};
}}),
"[project]/src/utils/alt.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "HomePageAlt": (()=>HomePageAlt)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$desktopHero$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$desktopHero$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/desktopHero.png.mjs { IMAGE => "[project]/public/desktopHero.png (static in ecmascript)" } [app-rsc] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$mobileHero$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$mobileHero$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/mobileHero.png.mjs { IMAGE => "[project]/public/mobileHero.png (static in ecmascript)" } [app-rsc] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$functions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/functions.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$companyLogos$2f$mobile$2f$bog$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$companyLogos$2f$mobile$2f$bog$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/companyLogos/mobile/bog.png.mjs { IMAGE => "[project]/public/companyLogos/mobile/bog.png (static in ecmascript)" } [app-rsc] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$companyLogos$2f$mobile$2f$arcton$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$companyLogos$2f$mobile$2f$arcton$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/companyLogos/mobile/arcton.png.mjs { IMAGE => "[project]/public/companyLogos/mobile/arcton.png (static in ecmascript)" } [app-rsc] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$companyLogos$2f$mobile$2f$access$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$companyLogos$2f$mobile$2f$access$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/companyLogos/mobile/access.png.mjs { IMAGE => "[project]/public/companyLogos/mobile/access.png (static in ecmascript)" } [app-rsc] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$companyLogos$2f$mobile$2f$extra$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$companyLogos$2f$mobile$2f$extra$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/companyLogos/mobile/extra.png.mjs { IMAGE => "[project]/public/companyLogos/mobile/extra.png (static in ecmascript)" } [app-rsc] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$companyLogos$2f$mobile$2f$croco$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$companyLogos$2f$mobile$2f$croco$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/companyLogos/mobile/croco.png.mjs { IMAGE => "[project]/public/companyLogos/mobile/croco.png (static in ecmascript)" } [app-rsc] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$companyLogos$2f$mobile$2f$sweeft$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$companyLogos$2f$mobile$2f$sweeft$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/companyLogos/mobile/sweeft.png.mjs { IMAGE => "[project]/public/companyLogos/mobile/sweeft.png (static in ecmascript)" } [app-rsc] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$companyLogos$2f$mobile$2f$philip$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$companyLogos$2f$mobile$2f$philip$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/companyLogos/mobile/philip.png.mjs { IMAGE => "[project]/public/companyLogos/mobile/philip.png (static in ecmascript)" } [app-rsc] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$companyLogos$2f$desktop$2f$bogDesktop$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$companyLogos$2f$desktop$2f$bogDesktop$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/companyLogos/desktop/bogDesktop.png.mjs { IMAGE => "[project]/public/companyLogos/desktop/bogDesktop.png (static in ecmascript)" } [app-rsc] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$companyLogos$2f$desktop$2f$arctonDesktop$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$companyLogos$2f$desktop$2f$arctonDesktop$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/companyLogos/desktop/arctonDesktop.png.mjs { IMAGE => "[project]/public/companyLogos/desktop/arctonDesktop.png (static in ecmascript)" } [app-rsc] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$companyLogos$2f$desktop$2f$accessDesktop$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$companyLogos$2f$desktop$2f$accessDesktop$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/companyLogos/desktop/accessDesktop.png.mjs { IMAGE => "[project]/public/companyLogos/desktop/accessDesktop.png (static in ecmascript)" } [app-rsc] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$companyLogos$2f$desktop$2f$extraDesktop$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$companyLogos$2f$desktop$2f$extraDesktop$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/companyLogos/desktop/extraDesktop.png.mjs { IMAGE => "[project]/public/companyLogos/desktop/extraDesktop.png (static in ecmascript)" } [app-rsc] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$companyLogos$2f$desktop$2f$crocoDesktop$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$companyLogos$2f$desktop$2f$crocoDesktop$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/companyLogos/desktop/crocoDesktop.png.mjs { IMAGE => "[project]/public/companyLogos/desktop/crocoDesktop.png (static in ecmascript)" } [app-rsc] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$companyLogos$2f$desktop$2f$sweeftDesktop$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$companyLogos$2f$desktop$2f$sweeftDesktop$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/companyLogos/desktop/sweeftDesktop.png.mjs { IMAGE => "[project]/public/companyLogos/desktop/sweeftDesktop.png (static in ecmascript)" } [app-rsc] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$companyLogos$2f$desktop$2f$philipDesktop$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$companyLogos$2f$desktop$2f$philipDesktop$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/companyLogos/desktop/philipDesktop.png.mjs { IMAGE => "[project]/public/companyLogos/desktop/philipDesktop.png (static in ecmascript)" } [app-rsc] (structured image object, ecmascript)');
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const mobileCarouselData = [
    {
        id: "1",
        name: "Bank of Georgia",
        logoUrl: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$companyLogos$2f$mobile$2f$bog$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$companyLogos$2f$mobile$2f$bog$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"]
    },
    {
        id: "2",
        name: "Arcton",
        logoUrl: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$companyLogos$2f$mobile$2f$arcton$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$companyLogos$2f$mobile$2f$arcton$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"]
    },
    {
        id: "3",
        name: "Making Science",
        logoUrl: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$companyLogos$2f$mobile$2f$sweeft$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$companyLogos$2f$mobile$2f$sweeft$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"]
    },
    {
        id: "4",
        name: "Philip Morris International",
        logoUrl: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$companyLogos$2f$mobile$2f$philip$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$companyLogos$2f$mobile$2f$philip$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"]
    },
    {
        id: "5",
        name: "Crocobet",
        logoUrl: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$companyLogos$2f$mobile$2f$croco$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$companyLogos$2f$mobile$2f$croco$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"]
    },
    {
        id: "6",
        name: "AccessBank",
        logoUrl: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$companyLogos$2f$mobile$2f$access$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$companyLogos$2f$mobile$2f$access$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"]
    },
    {
        id: "7",
        name: "Extra",
        logoUrl: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$companyLogos$2f$mobile$2f$extra$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$companyLogos$2f$mobile$2f$extra$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"]
    }
];
const desktopCompanyData = [
    {
        id: "1",
        name: "Bank of Georgia",
        logoUrl: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$companyLogos$2f$desktop$2f$bogDesktop$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$companyLogos$2f$desktop$2f$bogDesktop$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"]
    },
    {
        id: "2",
        name: "Arcton",
        logoUrl: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$companyLogos$2f$desktop$2f$arctonDesktop$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$companyLogos$2f$desktop$2f$arctonDesktop$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"]
    },
    {
        id: "3",
        name: "Making Science",
        logoUrl: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$companyLogos$2f$desktop$2f$sweeftDesktop$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$companyLogos$2f$desktop$2f$sweeftDesktop$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"]
    },
    {
        id: "4",
        name: "Philip Morris International",
        logoUrl: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$companyLogos$2f$desktop$2f$philipDesktop$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$companyLogos$2f$desktop$2f$philipDesktop$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"]
    },
    {
        id: "5",
        name: "Crocobet",
        logoUrl: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$companyLogos$2f$desktop$2f$crocoDesktop$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$companyLogos$2f$desktop$2f$crocoDesktop$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"]
    },
    {
        id: "6",
        name: "AccessBank",
        logoUrl: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$companyLogos$2f$desktop$2f$accessDesktop$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$companyLogos$2f$desktop$2f$accessDesktop$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"]
    },
    {
        id: "7",
        name: "Extra",
        logoUrl: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$companyLogos$2f$desktop$2f$extraDesktop$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$companyLogos$2f$desktop$2f$extraDesktop$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"]
    }
];
const desktopCarouselData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$functions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prepareCompaniesForCarousel"])(desktopCompanyData, false);
const HomePageAlt = {
    "mobile": {
        "hero": {
            "heroTitle": `Take a step from legacy\nmethods to digital business\nexcellence`,
            "heroSubtitle1": "Every modern business needs digital\nrepresentation or an innovative technological\nsolution.",
            "heroSubtitle2": "We will level up your business to the Nextep of\ntechnological evolution",
            "heroImageAlt": "Digital business transformation expert examining interactive call-to-action interface, showcasing modern tech solutions",
            "heroImageSrc": __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$mobileHero$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$mobileHero$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"]
        },
        "carousel": {
            "title": "We have worked with",
            "companies": mobileCarouselData
        }
    },
    "desktop": {
        "hero": {
            "heroTitle": "Move beyond traditional methods\nEmbrace the digital evolution",
            "heroSubtitle1": "Businesses thrive through digital presence\nor cutting-edge technological solutions",
            "heroSubtitle2": "We can guide your business twards\nthe future of digital innovation",
            "heroImageAlt": "Digital business transformation expert examining interactive call-to-action interface, showcasing modern tech solutions",
            "heroImageSrc": __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$desktopHero$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$desktopHero$2e$png__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"]
        },
        "carousel": {
            "title": "We have worked with",
            "companies": desktopCarouselData
        }
    }
};
}}),
"[project]/src/components/ui/carousel.tsx (client reference/proxy) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Carousel": (()=>Carousel),
    "CarouselContent": (()=>CarouselContent),
    "CarouselItem": (()=>CarouselItem),
    "CarouselNext": (()=>CarouselNext),
    "CarouselPrevious": (()=>CarouselPrevious)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const Carousel = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call Carousel() from the server but Carousel is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/ui/carousel.tsx <module evaluation>", "Carousel");
const CarouselContent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call CarouselContent() from the server but CarouselContent is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/ui/carousel.tsx <module evaluation>", "CarouselContent");
const CarouselItem = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call CarouselItem() from the server but CarouselItem is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/ui/carousel.tsx <module evaluation>", "CarouselItem");
const CarouselNext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call CarouselNext() from the server but CarouselNext is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/ui/carousel.tsx <module evaluation>", "CarouselNext");
const CarouselPrevious = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call CarouselPrevious() from the server but CarouselPrevious is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/ui/carousel.tsx <module evaluation>", "CarouselPrevious");
}}),
"[project]/src/components/ui/carousel.tsx (client reference/proxy)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Carousel": (()=>Carousel),
    "CarouselContent": (()=>CarouselContent),
    "CarouselItem": (()=>CarouselItem),
    "CarouselNext": (()=>CarouselNext),
    "CarouselPrevious": (()=>CarouselPrevious)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const Carousel = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call Carousel() from the server but Carousel is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/ui/carousel.tsx", "Carousel");
const CarouselContent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call CarouselContent() from the server but CarouselContent is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/ui/carousel.tsx", "CarouselContent");
const CarouselItem = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call CarouselItem() from the server but CarouselItem is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/ui/carousel.tsx", "CarouselItem");
const CarouselNext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call CarouselNext() from the server but CarouselNext is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/ui/carousel.tsx", "CarouselNext");
const CarouselPrevious = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call CarouselPrevious() from the server but CarouselPrevious is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/ui/carousel.tsx", "CarouselPrevious");
}}),
"[project]/src/components/ui/carousel.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$carousel$2e$tsx__$28$client__reference$2f$proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/components/ui/carousel.tsx (client reference/proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$carousel$2e$tsx__$28$client__reference$2f$proxy$29$__ = __turbopack_context__.i("[project]/src/components/ui/carousel.tsx (client reference/proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$carousel$2e$tsx__$28$client__reference$2f$proxy$29$__);
}}),
"[externals]/crypto [external] (crypto, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}}),
"[project]/src/elements/carousel/mobile/company_carousel_mobile.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>CompanyCarouselMobile)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$carousel$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/carousel.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$alt$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/alt.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uuid$2f$dist$2f$esm$2f$v4$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__ = __turbopack_context__.i("[project]/node_modules/uuid/dist/esm/v4.js [app-rsc] (ecmascript) <export default as v4>");
;
;
;
;
;
;
;
function CompanyCarouselMobile({ companies, className }) {
    let carouselItems = companies.map((company)=>{
        return [
            company
        ];
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])("flex flex-col gap-[12px] p-4 w-[90vw]", className),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "text-tertiaryProject text-center",
                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$alt$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["HomePageAlt"].mobile.carousel.title
            }, void 0, false, {
                fileName: "[project]/src/elements/carousel/mobile/company_carousel_mobile.tsx",
                lineNumber: 28,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-primaryProject to-transparent z-10"
                    }, void 0, false, {
                        fileName: "[project]/src/elements/carousel/mobile/company_carousel_mobile.tsx",
                        lineNumber: 30,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$carousel$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Carousel"], {
                        opts: {
                            align: "start",
                            loop: false,
                            dragFree: true
                        },
                        className: "h-[60px]",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$carousel$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CarouselContent"], {
                            className: "-ml-2",
                            children: carouselItems.map((group, groupIndex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$carousel$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CarouselItem"], {
                                    className: `pl-2 basis-auto`,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])("grid gap-4 rounded-lg", "carousel-grid-mobile"),
                                        children: group.map((company)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `carousel-grid-mobile carousel-item-size-mobile rounded-lg p-3 flex flex-col items-center justify-center shadow-sm border border-gray-100`,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "h-[28px] flex items-center justify-center",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                                        src: company.logoUrl,
                                                        alt: `${company.name} logo`,
                                                        className: "object-contain",
                                                        width: 0,
                                                        height: 28,
                                                        style: {
                                                            width: 'auto',
                                                            height: '28px'
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/elements/carousel/mobile/company_carousel_mobile.tsx",
                                                        lineNumber: 52,
                                                        columnNumber: 27
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/elements/carousel/mobile/company_carousel_mobile.tsx",
                                                    lineNumber: 51,
                                                    columnNumber: 25
                                                }, this)
                                            }, company.id, false, {
                                                fileName: "[project]/src/elements/carousel/mobile/company_carousel_mobile.tsx",
                                                lineNumber: 47,
                                                columnNumber: 23
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/elements/carousel/mobile/company_carousel_mobile.tsx",
                                        lineNumber: 45,
                                        columnNumber: 19
                                    }, this)
                                }, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uuid$2f$dist$2f$esm$2f$v4$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])(), false, {
                                    fileName: "[project]/src/elements/carousel/mobile/company_carousel_mobile.tsx",
                                    lineNumber: 41,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/elements/carousel/mobile/company_carousel_mobile.tsx",
                            lineNumber: 39,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/elements/carousel/mobile/company_carousel_mobile.tsx",
                        lineNumber: 31,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-primaryProject to-transparent z-10"
                    }, void 0, false, {
                        fileName: "[project]/src/elements/carousel/mobile/company_carousel_mobile.tsx",
                        lineNumber: 68,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/elements/carousel/mobile/company_carousel_mobile.tsx",
                lineNumber: 29,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/elements/carousel/mobile/company_carousel_mobile.tsx",
        lineNumber: 27,
        columnNumber: 5
    }, this);
}
}}),
"[project]/src/elements/carousel/desktop/company_carousel_desktop.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>CompanyCarouselDesktop)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$carousel$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/carousel.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$alt$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/alt.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uuid$2f$dist$2f$esm$2f$v4$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__ = __turbopack_context__.i("[project]/node_modules/uuid/dist/esm/v4.js [app-rsc] (ecmascript) <export default as v4>");
;
;
;
;
;
;
;
function CompanyCarouselDesktop({ companies, className }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])("flex flex-col w-[100vw] gap-[16px]", className),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "text-tertiaryProject text-start",
                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$alt$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["HomePageAlt"].desktop.carousel.title
            }, void 0, false, {
                fileName: "[project]/src/elements/carousel/desktop/company_carousel_desktop.tsx",
                lineNumber: 24,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$carousel$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Carousel"], {
                opts: {
                    align: "start",
                    loop: false
                },
                className: "w-full h-[244px]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$carousel$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CarouselContent"], {
                    className: "",
                    children: companies.map((group, groupIndex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$carousel$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CarouselItem"], {
                            className: `pl-4`,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])("grid gap-4 rounded-lg", ""),
                                children: group.map((company)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `carousel-grid-desktop carousel-item-size-desktop rounded-lg p-3 flex flex-col items-center justify-center shadow-sm border border-gray-100`,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "h-[60px] flex items-center justify-center",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                                src: company.logoUrl,
                                                alt: `${company.name} logo`,
                                                className: "object-contain",
                                                width: 0,
                                                height: 60,
                                                style: {
                                                    width: 'auto',
                                                    height: '60px'
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/src/elements/carousel/desktop/company_carousel_desktop.tsx",
                                                lineNumber: 45,
                                                columnNumber: 23
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/elements/carousel/desktop/company_carousel_desktop.tsx",
                                            lineNumber: 44,
                                            columnNumber: 21
                                        }, this)
                                    }, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uuid$2f$dist$2f$esm$2f$v4$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])(), false, {
                                        fileName: "[project]/src/elements/carousel/desktop/company_carousel_desktop.tsx",
                                        lineNumber: 40,
                                        columnNumber: 19
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/elements/carousel/desktop/company_carousel_desktop.tsx",
                                lineNumber: 38,
                                columnNumber: 15
                            }, this)
                        }, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uuid$2f$dist$2f$esm$2f$v4$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])(), false, {
                            fileName: "[project]/src/elements/carousel/desktop/company_carousel_desktop.tsx",
                            lineNumber: 34,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/elements/carousel/desktop/company_carousel_desktop.tsx",
                    lineNumber: 32,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/elements/carousel/desktop/company_carousel_desktop.tsx",
                lineNumber: 25,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/elements/carousel/desktop/company_carousel_desktop.tsx",
        lineNumber: 23,
        columnNumber: 5
    }, this);
}
}}),
"[project]/src/app/page.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Home)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$alt$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/alt.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$elements$2f$carousel$2f$mobile$2f$company_carousel_mobile$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/elements/carousel/mobile/company_carousel_mobile.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$elements$2f$carousel$2f$desktop$2f$company_carousel_desktop$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/elements/carousel/desktop/company_carousel_desktop.tsx [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
;
function Home() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "desktop-content-appearance w-full desktop-background mt-[44px]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col gap-[24px] mt-[8px]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$alt$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["HomePageAlt"].desktop.hero.heroTitle
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 15,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col gap-[20px]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    className: "text-tertiaryProject",
                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$alt$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["HomePageAlt"].desktop.hero.heroSubtitle1
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 17,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    className: "text-tertiaryProject",
                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$alt$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["HomePageAlt"].desktop.hero.heroSubtitle2
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 18,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-row gap-[16px]",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "/services",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Button"], {
                                                className: "w-[160px] h-[40px] secondary-button-font",
                                                variant: "projectSecondary",
                                                children: "Services"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 21,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 20,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "/contact",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Button"], {
                                                className: "w-[160px] h-[40px] hero-button-font",
                                                variant: "projectSelected",
                                                children: "Get in touch"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 24,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 23,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 19,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 16,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 14,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 13,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "desktop-content-appearance mt-[44px]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$elements$2f$carousel$2f$desktop$2f$company_carousel_desktop$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                    companies: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$alt$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["HomePageAlt"].desktop.carousel.companies
                }, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 32,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 31,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "flex flex-col mobile-content-appearance gap-[12px] items-center justify-center w-[90vw]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-center",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$alt$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["HomePageAlt"].mobile.hero.heroTitle
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 36,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                        className: "text-center text-tertiaryProject",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$alt$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["HomePageAlt"].mobile.hero.heroSubtitle1
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 37,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                        className: "text-center text-tertiaryProject",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$alt$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["HomePageAlt"].mobile.hero.heroSubtitle2
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 38,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "/contact",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Button"], {
                            variant: "projectSelected",
                            children: "Get in touch"
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 40,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 39,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                        alt: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$alt$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["HomePageAlt"].mobile.hero.heroImageAlt,
                        src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$alt$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["HomePageAlt"].mobile.hero.heroImageSrc,
                        className: "mt-[24px] w-full"
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 42,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 35,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "mobile-content-appearance",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$elements$2f$carousel$2f$mobile$2f$company_carousel_mobile$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                    companies: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$alt$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["HomePageAlt"].mobile.carousel.companies
                }, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 47,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 46,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
}}),
"[project]/src/app/page.tsx [app-rsc] (ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/page.tsx [app-rsc] (ecmascript)"));
}}),

};

//# sourceMappingURL=%5Broot%20of%20the%20server%5D__04e4a234._.js.map