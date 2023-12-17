const app = require("./app");
const { info } = require("./utils/logger");
const { PORT } = require("./utils/config");

app.listen(PORT, () => {
  info(`Listening to port http://localhost/${PORT}`);
});
