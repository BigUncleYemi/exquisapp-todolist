const routes = require("./routes");
const fastify = require("fastify")({
  logger: true
});

routes.forEach((route, index) => {
  fastify.route(route);
});

const swagger = require("./config/swagger");
fastify
  .register(require("fastify-swagger"), swagger.options)
  .register(require("fastify-cors"));

const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost/tododlist", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log("MongoDB connected…"))
  .catch(err => console.log(err));

// Run the server!
const start = async () => {
  try {
    await fastify.listen(3000);
    fastify.swagger();
    fastify.log.info(`server listening on ${fastify.server.address().port}`);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};
start();
