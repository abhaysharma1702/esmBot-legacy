exports.run = async (client, message, args) => {// eslint-disable-line no-unused-vars
  if (message.author.id === "198198681982205953") {
    await message.reply("esmBot is restarting.");
    client.commands.forEach(async cmd => {
      await client.unloadCommand(cmd);
    });
    process.exit(1);
  } else {
    message.reply("only the bot owner can restart esmBot!");
  }
};

exports.aliases = ["reboot", "kys"];
