const express = require('express');
const router = express.Router();
const Joi = require('joi');

const validateRequest = require('_middleware/validate-request');
const authorize = require('_middleware/authorize')
const jobService = require('./job.service');

// routes
router.get('/getAll', getAll);

module.exports = router;

function getAll(req, res, next) {
    jobService.getAll()
        .then(jobs => res.json(jobs))
        .catch(next);
}