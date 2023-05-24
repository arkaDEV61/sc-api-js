'use strict';

/**
 * room-checkout service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::room-checkout.room-checkout');
