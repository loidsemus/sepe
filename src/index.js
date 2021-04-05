require("dotenv").config();
const path = require("path")
const signale = require("signale")

const Commando = require("discord.js-commando")
const client = new Commando.Client({
  commandPrefix: ";",
  owner: "219846009864454146"
});

client.registry.registerDefaultTypes()
  .registerDefaultGroups()
  .registerDefaultCommands()
  .registerCommandsIn(path.join(__dirname, "commands"))

client.on("ready", () => {
  signale.success(`Logged in & ready (${client.user.tag})`);
});

client.on('error', err => signale.error(err));

client.login(process.env.DISCORD_TOKEN);
