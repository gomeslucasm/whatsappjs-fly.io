const { Client, LocalAuth } = require("whatsapp-web.js");
const {
  runQRCodeServer,
  registerQRCodeRoute,
} = require("whatsapp.js-qrcode-page");

require("dotenv").config();

function runClient(clientOptions) {
  const client = new Client(clientOptions);

  client.once("ready", () => {
    console.log("Client is ready!");
  });

  client.once("authenticated", () => {
    console.log(
      "Client ",
      client?.authStrategy?.clientId ?? "",
      " is Authenticated! "
    );
  });

  client.on("message", (message) => {
    if (message.body === "ping") {
      client.sendMessage(message.from, "pong");
    }
  });

  registerQRCodeRoute(client);

  client.initialize();
}

const DEFAULT_OPTIONS = {
  puppeteer: {
    headless: true,
    args: [
      "--log-level=3", // fatal only
      "--start-maximized",
      "--no-default-browser-check",
      "--disable-infobars",
      "--disable-web-security",
      "--disable-site-isolation-trials",
      "--no-experiments",
      "--ignore-gpu-blacklist",
      "--ignore-certificate-errors",
      "--ignore-certificate-errors-spki-list",
      "--disable-gpu",
      "--disable-extensions",
      "--disable-default-apps",
      "--enable-features=NetworkService",
      "--disable-setuid-sandbox",
      "--no-sandbox",
    ],
  },
};

function run() {
  const numbers = process.env.CLIENT_NUMBERS.split(",");

  const clientsOptions = numbers.map((id) => ({
    ...DEFAULT_OPTIONS,
    authStrategy: new LocalAuth({
      clientId: id,
      dataPath: "clientsAuth",
    }),
  }));

  clientsOptions.map((clientOptions) => {
    runClient(clientOptions);
  });

  runQRCodeServer();
}

run();
