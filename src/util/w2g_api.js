const axios = require("axios")

module.exports = class W2GClient {
    constructor(apiKey) {
        this.apiKey = apiKey;
    }

    /**
     * Creates a room and returns the URL
     * @param {string} [video]
     * @returns {Promise<string>} the url of the room
     */
    createRoom(video) {
        return new Promise((resolve, reject) => {
            const content = {
                w2g_api_key: this.apiKey
            }
            if (video) {
                content.share = video
            }

            axios.post("https://w2g.tv/rooms/create.json", content)
                .then(content => {
                    resolve("https://w2g.tv/rooms/" + content.data.streamkey)
                })
                .catch(reject)
        })
    }
}