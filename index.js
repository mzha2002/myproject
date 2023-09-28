import express from "express";
import axios from "axios";

const app = express();
const port = 3000;

app.use(express.static("public"));

app.get("/", async(req,res)=> {
    try {
        const response = await axios.get("https://meme-api.com/gimme");
        const quotes = response.data.preview;
        const quote = quotes[quotes.length -1];
        const quoteTitle = response.data.title;
        const quoteAuthor = response.data.author;
        res.render("index.ejs",{content: quote, title: quoteTitle, author: quoteAuthor});
    } catch(error) {
        res.render("index.ejs", {content: error.response})
    }
})

app.listen(port, ()=> {
    console.log(`server is running on ${port}`)
})


