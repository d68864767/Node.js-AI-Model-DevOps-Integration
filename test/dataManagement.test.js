const request = require('supertest');
const express = require('express');
const dataManagement = require('../src/dataManagement');

const app = express();
app.use('/', dataManagement);

describe('Data Management Routes', () => {
  it('Data Collection for AI Models in Node.js', async () => {
    const res = await request(app).get('/data-collection');
    expect(res.statusCode).toEqual(200);
  });

  it('Data Preprocessing for Node.js AI Models', async () => {
    const res = await request(app).get('/data-preprocessing');
    expect(res.statusCode).toEqual(200);
  });

  it('Data Augmentation Techniques in Node.js', async () => {
    const res = await request(app).get('/data-augmentation');
    expect(res.statusCode).toEqual(200);
  });

  it('API Key for Data Integration in Node.js AI', async () => {
    const res = await request(app).get('/api-key-integration');
    expect(res.statusCode).toEqual(200);
  });

  it('Data Privacy and Security for AI Models in Node.js', async () => {
    const res = await request(app).get('/data-privacy-security');
    expect(res.statusCode).toEqual(200);
  });

  it('Data Labeling and Annotation in Node.js', async () => {
    const res = await request(app).get('/data-labeling-annotation');
    expect(res.statusCode).toEqual(200);
  });

  it('Node.js AI Model Data Pipelines', async () => {
    const res = await request(app).get('/data-pipelines');
    expect(res.statusCode).toEqual(200);
  });

  it('Data Versioning for AI Models in Node.js', async () => {
    const res = await request(app).get('/data-versioning');
    expect(res.statusCode).toEqual(200);
  });

  it('Data Bias Mitigation with API Key in Node.js', async () => {
    const res = await request(app).get('/data-bias-mitigation');
    expect(res.statusCode).toEqual(200);
  });

  it('Data Ethics in Node.js AI Model Development', async () => {
    const res = await request(app).get('/data-ethics');
    expect(res.statusCode).toEqual(200);
  });
});
