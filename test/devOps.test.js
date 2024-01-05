const request = require('supertest');
const express = require('express');
const devOpsRouter = require('../src/devOps');

const app = express();
app.use('/devOps', devOpsRouter);

describe('DevOps Routes', () => {
  it('should handle CI/CD Pipelines request', async () => {
    const res = await request(app).get('/devOps/ci-cd-pipelines');
    expect(res.statusCode).toEqual(200);
  });

  it('should handle Continuous Integration request', async () => {
    const res = await request(app).get('/devOps/continuous-integration');
    expect(res.statusCode).toEqual(200);
  });

  it('should handle API Key Integration request', async () => {
    const res = await request(app).get('/devOps/api-key-integration');
    expect(res.statusCode).toEqual(200);
  });

  it('should handle Automated Testing request', async () => {
    const res = await request(app).get('/devOps/automated-testing');
    expect(res.statusCode).toEqual(200);
  });

  it('should handle Version Control request', async () => {
    const res = await request(app).get('/devOps/version-control');
    expect(res.statusCode).toEqual(200);
  });

  it('should handle Deployment Pipelines request', async () => {
    const res = await request(app).get('/devOps/deployment-pipelines');
    expect(res.statusCode).toEqual(200);
  });

  it('should handle Monitoring request', async () => {
    const res = await request(app).get('/devOps/monitoring');
    expect(res.statusCode).toEqual(200);
  });

  it('should handle Scaling request', async () => {
    const res = await request(app).get('/devOps/scaling');
    expect(res.statusCode).toEqual(200);
  });

  it('should handle Error Handling request', async () => {
    const res = await request(app).get('/devOps/error-handling');
    expect(res.statusCode).toEqual(200);
  });

  it('should handle Best Practices request', async () => {
    const res = await request(app).get('/devOps/best-practices');
    expect(res.statusCode).toEqual(200);
  });
});
