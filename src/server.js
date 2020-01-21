import setupApp from "./app";
const port = 3000;

(async () => {
  try {
    const app = await setupApp();
    const server = app.listen(process.env.PORT || port, () =>
      console.info(`aplicativo em execução na porta: ${port}`)
    );

    const exitSignals = ["SIGINT", "SIGTERM", "SIGQUIT"];
    exitSignals.map(sig =>
      process.on(sig, () =>
        server.close(err => {
          if (err) {
            console.error(err);
            process.exit(1);
          }
          app.database.connection.close(function () {
            console.info("Conexão com o banco de dados fechada!");
            process.exit(0);
          });
        })
      )
    );
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
})();
