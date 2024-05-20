import express from 'express';
const app = express();
const port = 3000;
import url from "url";

const __dirname = url.fileURLToPath(new URL(".", import.meta.url));

app.get('/', (req, res) => {
    // res.send('Hello World!');
    
    // kalau pake json seperti dibawah ini
    // res.json({
    //     nama: "Yanwar Ardika C.",
    //     role: "Mahasiswa",
    //     usia: 20
    // });

    res.sendFile("./page/index.html", { root: __dirname });
});

app.get('/about', (req, res) => {
    res.send('About Page');
});

app.get('/contact', (req, res) => {
    res.send('Contact Me');
});

app.use('*', (req, res) => {
    res.status(404);
    res.send('Not Found');
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});