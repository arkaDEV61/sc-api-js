'use strict';

/**
 * monthly-report service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::monthly-report.monthly-report');
