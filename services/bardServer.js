const express = require("express");
const { TextServiceClient } = require("@google-ai/generativelanguage").v1beta2;
const { GoogleAuth } = require("google-auth-library");
const cors = require("cors");

const MODEL_NAME = "models/text-bison-001";
console.log(process.env.REACT_APP_BARD_API_KEY);
const API_KEY = "AIzaSyB_-kghfcVGyAe7NCdG3IwpS5E4w9F3fpc";

const client = new TextServiceClient({
  authClient: new GoogleAuth().fromAPIKey(API_KEY),
});

const app = express();
const PORT = 8008;


app.use(express.json());
app.use(cors());


app.post("/generate", (req, res) => {
  const requestBody = req.body;

  if (requestBody.prompt) {
    const prompt = requestBody.prompt;

    client
      .generateText({
        model: MODEL_NAME,
        prompt: {
          text: prompt,
        },
      })
      .then((result) => {
        const generatedOutput = result[0].candidates[0].output;
        res.json({ generatedOutput });
      })
      .catch((error) => {
        console.error("Error generating text:", error);
        res.status(500).send("Internal Server Error");
      });
  } else {
    res.status(400).send("Bad Request: Missing 'prompt' in the request body");
  }
});

app.use((req, res) => {
  res.status(404).send("Not Found");
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
