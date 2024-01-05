const request = require('supertest');
const express = require('express');
const governance = require('../src/governance');

const app = express();
app.use('/governance', governance);

describe('Governance API Endpoints', () => {
  it('should get AI Model Governance Frameworks', async () => {
    const res = await request(app).get('/governance/governance-frameworks');
    expect(res.statusCode).toEqual(200);
  });

  it('should get AI Model Compliance with Regulations', async () => {
    const res = await request(app).get('/governance/compliance-regulations');
    expect(res.statusCode).toEqual(200);
  });

  it('should get API Key Integration for AI Model Governance', async () => {
    const res = await request(app).get('/governance/api-key-integration');
    expect(res.statusCode).toEqual(200);
  });

  it('should get Ethical AI Model Development', async () => {
    const res = await request(app).get('/governance/ethical-development');
    expect(res.statusCode).toEqual(200);
  });

  it('should get AI Model Fairness and Bias Mitigation', async () => {
    const res = await request(app).get('/governance/fairness-bias-mitigation');
    expect(res.statusCode).toEqual(200);
  });

  it('should get Auditing AI Models for Compliance', async () => {
    const res = await request(app).get('/governance/auditing-compliance');
    expect(res.statusCode).toEqual(200);
  });

  it('should get Responsible AI in Node.js Development', async () => {
    const res = await request(app).get('/governance/responsible-ai');
    expect(res.statusCode).toEqual(200);
  });

  it('should get AI Model Ethics Training', async () => {
    const res = await request(app).get('/governance/ethics-training');
    expect(res.statusCode).toEqual(200);
  });

  it('should get AI Model Governance Reporting', async () => {
    const res = await request(app).get('/governance/governance-reporting');
    expect(res.statusCode).toEqual(200);
  });

  it('should get AI Model Accountability Measures', async () => {
    const res = await request(app).get('/governance/accountability-measures');
    expect(res.statusCode).toEqual(200);
  });
});
