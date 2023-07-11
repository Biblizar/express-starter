const express = require('express');

const router = express.Router();
// eslint-disable-next-line import/no-extraneous-dependencies
const swaggerUi = require('swagger-ui-express');
const fs = require('fs');
// eslint-disable-next-line import/no-extraneous-dependencies
const YAML = require('yaml');

const swaggerDocument = fs.readFileSync('./swagger.yaml', 'utf8');
const swagger = YAML.parseDocument(swaggerDocument);

const options = {
  swaggerOptions: {
    url: './swagger.yaml',
  },
};
router.get('/swagger.yaml', (_req, res) => {
  res.send(swaggerDocument).end();
});
router.use('/', swaggerUi.serveFiles(null, options), swaggerUi.setup(swagger, options));

module.exports = router;
