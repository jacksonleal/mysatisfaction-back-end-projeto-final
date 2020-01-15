const Config = require('./src/config/config');
const setupApp = require('./src/app');

setupApp()
<<<<<<< HEAD
  .then((app) => {
    app.listen(Config.PORT, () => console.info(`app running on port ${Config.PORT}`))
  })
=======
  .then((app) => app.listen(Config.PORT, () => console.info(`app running on port ${Config.PORT}`)))
>>>>>>> 34ab948b6d0a98c063ec0aa1b6a5deb4d29422d9
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
