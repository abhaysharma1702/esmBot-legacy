exports.run = async (client, message, args) => { // eslint-disable-line no-unused-vars
  if (!message.member.permissions.has("ADMINISTRATOR") && message.author.id !== "198198681982205953") return message.reply("you need to be an administrator on this server to change the prefix!");
  if (args.length !== 0) {
    client.settings.set(message.guild.id, args[0], "prefix");
    message.channel.send(`The prefix has been changed to ${args.join(" ")}.`);
  } else {
    return message.reply("you need to provide what you want the prefix to be!");
  }
};
