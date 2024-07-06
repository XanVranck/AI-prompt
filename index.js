const express = require('express');
const aiService = require('./services/ai.service');
const app = express();
const port = 3000;

app.use(express.static('public'));
app.use(express.json());
app.post('/api/prompt', (req, res) => {
    aiService.callAI(req.body.prompt, res, req)
});

app.listen(port, () => {
  console.log(`Chatbot app listening at http://localhost:${port}`);
});

module.exports = app;