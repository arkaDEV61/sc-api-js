'use strict';

/**
 * support-email service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::support-email.support-email');
