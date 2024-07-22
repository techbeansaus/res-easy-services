module.exports = {
    apps: [
      {
        name: 'tenantAndRestaurantService',
        script: './services/service1/tenantAndRestaurantService.js',
        env: {
          NODE_ENV: 'development',
          PORT: 6000,
        },
        env_production: {
            NODE_ENV: 'production',
            PORT: 6001,
          }
      }
      // Add more services as needed
    ],
  };
  