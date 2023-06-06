'use strict';

/**
 * free-day service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::free-day.free-day');
