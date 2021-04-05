const { Command } = require("discord.js-commando")
const W2GClient = require("../../util/w2g_api")

module.exports = class W2GCommand extends Command {
    constructor(client) {
        super(client, {
            name: "w2g",
            aliases: ["watch2gether"],
            group: "util",
            memberName: "w2g",
            description: "Skapa ett watch2gether-rum",
            args: [
                {
                    key: "video",
                    prompt: "Vilken video",
                    type: "string",
                    default: ""
                }
            ]
        });
    }

    async run(message, { video }) {
        const statusMessage = await message.say("ok 💯🔥🤣😎")
        try {
            const roomUrl = await new W2GClient(process.env.W2G_TOKEN).createRoom(video)
            statusMessage.edit(roomUrl)
        } catch (error) {
            statusMessage.edit("Error")
        }
    }
}