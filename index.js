const app = require("./app").default;

const url = require("url");

Object.defineProperty(global, "__dirname", {
  __proto__: null,
  get: () => url.fileURLToPath(process.cwd()),
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`🚀 Server is live on port: ${PORT}!`);
});
