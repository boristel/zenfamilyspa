module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '229d1ba6ae8e74bc4e167cabe361e5e7'),
  },
});
