import express from "express";

const { PORT = "8080" } = process.env;

const app = express();

function getRandomNumber(min, max) {
	return Math.floor(Math.random() * (max - min) + min);
}

app.get("/rolldice", (_, res) => {
	res.send(getRandomNumber(1, 6).toString());
});

app.listen(PORT, () => {
	console.log(`Listening for requests on http://localhost:${PORT}`);
});
