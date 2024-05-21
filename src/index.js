import express from 'express';
const app = express();
const port = 3000;
import url from "url";

//membuat variable __dirname untuk dijadikan url sesuai apa yang diambil untuk source tampilan
const __dirname = url.fileURLToPath(new URL(".", import.meta.url));

app.get('/', (req, res) => {
    // res.send('Hello World!');
    
    // kalau pake json seperti dibawah ini
    // res.json({
    //     nama: "Yanwar Ardika C.",
    //     role: "Mahasiswa",
    //     usia: 20
    // });

    // console.log(__dirname); //ha;aman ini ada di src(lihat hasilnya di terminal)
    res.sendFile("./page/index.html", { root: __dirname });
});

app.get('/about', (req, res) => {
    // res.send('About Page');
    res.sendFile("./page/about.html", { root: __dirname });
});


app.get('/contact', (req, res) => {
    // res.send('Contact Me');
    res.sendFile("./page/contact.html", { root: __dirname });
});

app.get("/barang/:id", (req, res) => {
    const id = req.params.id;
    const name = req.query.kategori;
    // console.log("req.params");
    res.send("Ini barang ke-" + id + "<br> dengan kategori " + name);
});

app.use('*', (req, res) => {
    res.status(404);
    // res.send('Not Found');
    res.sendFile("./page/404.html", { root: __dirname });
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});