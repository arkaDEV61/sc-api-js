'use strict';

/**
 * activation-request service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::activation-request.activation-request');
