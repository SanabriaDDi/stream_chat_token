require('dotenv').config()
const express = require('express')
const StreamChat = require('stream-chat').StreamChat;
const app = express()

app.use(express.json())

app.post('/token', (req, res) => {
    const {id} = req.body
    const serverClient = StreamChat.getInstance(process.env.GETSTREAM_KEY, process.env.GETSTREAM_SECRET);
    const token = serverClient.createToken(id);
    return res.status(200).json({
        'token': token
    })
})

app.listen(process.env.PORT, () => {
    console.log(`Servidor corriendo en puerto ${process.env.PORT}`)
})