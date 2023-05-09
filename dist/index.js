/******/ /* webpack/runtime/compat */
/******/ 
/******/ if (typeof __nccwpck_require__ !== 'undefined') __nccwpck_require__.ab = new URL('.', import.meta.url).pathname.slice(import.meta.url.match(/^file:\/\/\/\w:/) ? 1 : 0, -1) + "/";
/******/ 
/************************************************************************/
var __webpack_exports__ = {};
const app = require("./app").default;

const url = require('url');

Object.defineProperty(global, '__dirname', {
	__proto__: null,
	get: () => url.fileURLToPath(import.meta.url),
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`🚀 Server is live on port: ${PORT}!`);
});

