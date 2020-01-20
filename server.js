import setupApp from './src/app';
const port = 3000;

setupApp()
  .then(app => app.listen(process.env.PORT || port, () => console.log(`Aplicativo rodando na PORT: ${PORT}`)))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
