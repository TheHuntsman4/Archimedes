const express = require("express");

const cors = require("cors");

const bodyParser = require("body-parser");

const { Configuration, OpenAIApi } = require("openai");

const config = new Configuration({
  apiKey: "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",
});

const openai = new OpenAIApi(config);

// Setup server

const app = express();
app.use(bodyParser.json());
app.use(cors());

// endpoint for ChatGPT

app.post("/chat", async (req, res) => {
  const { prompt } = req.body;

  const completion = await openai.createCompletion({
    model: "gpt-3.5-turbo",
    max_tokens: 2000,
    temperature: 0,
    prompt: prompt,
  });
  res.send(completion.data.choices[0].text);
});

const PORT = 8008

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});

