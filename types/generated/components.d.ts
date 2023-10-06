import type { Schema, Attribute } from '@strapi/strapi';

export interface EmailEmail extends Schema.Component {
  collectionName: 'components_email_emails';
  info: {
    displayName: 'email';
  };
  attributes: {
    email: Attribute.Email;
  };
}

export interface FreeDayFreeDay extends Schema.Component {
  collectionName: 'components_free_day_free_days';
  info: {
    displayName: 'FreeDay';
  };
  attributes: {
    title: Attribute.String;
    date: Attribute.Date;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'email.email': EmailEmail;
      'free-day.free-day': FreeDayFreeDay;
    }
  }
}
