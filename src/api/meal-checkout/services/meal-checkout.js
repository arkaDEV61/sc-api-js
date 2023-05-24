'use strict';

/**
 * meal-checkout service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::meal-checkout.meal-checkout');
