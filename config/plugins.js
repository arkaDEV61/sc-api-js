module.exports = ({ env }) => ({
  // ...
  email: {
    config: {
      provider: 'nodemailer',
      providerOptions: {
        host: env('SMTP_HOST', 'smtp.example.com'),
        port: env('SMTP_PORT', 587),
        secureConnection: false,
        auth: {
          user: env('SMTP_USERNAME'),
          pass: env('SMTP_PASSWORD'),
        },
        tls: {
          ciphers:'SSLv3'
        }
      },
      settings: {
        defaultFrom: env('DEFAULT_EMAIL'),
        defaultReplyTo: env('DEFAULT_EMAIL'),
      },
    },
  },
  // ...
});
