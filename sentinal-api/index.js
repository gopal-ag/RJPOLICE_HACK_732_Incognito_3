import express from 'express';
import cors from 'cors';
import connectToMongo from './services/db.js';
import CueSchema from './models/Cue.js';
import fetch from 'node-fetch';

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 8080;

connectToMongo();

// Routes
app.get('/', (req, res) => {
    res.send("Hello world!");
});

app.post('/new', async (req, res) => {
    console.log('hi');
    try {
        // Get the picture and model from body
        const { picture, model, cameraIp } = req.body;

        // Save in the database
        await CueSchema.create({
            picture,
            model,
            cameraIp,
        });

        // Send the request to geotagger as well
        await fetch('http://192.168.240.76:5000/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                camera: {
                    location_id: 1,
                    ip: cameraIp,
                    activity_detected: model,
                }
            }),
        });
        return res.status(200).json({ success: true });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ success: false, error: "Internal Server Error" });
    }
});

app.get('/weapons', async (req, res) => {
    try {
        const allWeaponCues = await CueSchema.find({ model: 'weapon' }).sort({ createdAt: -1 });
        return res.status(200).json({ result: allWeaponCues });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Internal Server Error" });
    }
});

app.get('/vandalism', async (req, res) => {
    console.log('hello')
    try {
        const allVandalismCues = await CueSchema.find({ model: 'vandalism' }).sort({ createdAt: -1 });
        return res.status(200).json({ result: allVandalismCues });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Internal Server Error" });
    }
});

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});
