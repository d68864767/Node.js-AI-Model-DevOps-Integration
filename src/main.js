const express = require('express');
const devOps = require('./devOps');
const dataManagement = require('./dataManagement');
const governance = require('./governance');
const research = require('./research');
const debugging = require('./debugging');
const testing = require('./testing');
const documentation = require('./documentation');
const scaling = require('./scaling');
const ethics = require('./ethics');
const community = require('./community');

const app = express();
const port = process.env.PORT || 3000;

app.use('/devOps', devOps);
app.use('/dataManagement', dataManagement);
app.use('/governance', governance);
app.use('/research', research);
app.use('/debugging', debugging);
app.use('/testing', testing);
app.use('/documentation', documentation);
app.use('/scaling', scaling);
app.use('/ethics', ethics);
app.use('/community', community);

app.get('/', (req, res) => {
  res.send('Welcome to Node.js AI Model Project!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = app;
