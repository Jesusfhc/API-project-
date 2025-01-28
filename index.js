import express from 'express';
import axios from 'axios';
import bodyParser from 'body-parser';

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public'));

const sportsToken = ""

app.get("/", async (req, res) => {
    try {
        const request = await axios.get(`https://www.scorebat.com/video-api/v3/feed/?token=${sportsToken}`);
        const sports = request.data;
        res.render('deporte.ejs', { videos: sports.response });
    } catch (error) {
        console.log(error);
    }
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});