const Config = require('./src/config/config');
const setupApp = require('./src/app');

setupApp()
  .then((app) => {
    console.log('entru')
    app.listen(Config.PORT, () => console.info(`app running on port ${Config.PORT}`))
  })
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
