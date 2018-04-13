module.exports = {
  apps: [{
    name: 'hello',
    script: 'app.js',
    instances: 1,
    max_memory_restart: '200M',
    env: {
      COMMON_VARIABLE: 'true'
    },
    env_production: {
      NODE_ENV: 'production'
    }
  }, ],
};
