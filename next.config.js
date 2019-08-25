/* eslint-disable */
const path = require('path');

module.exports = {
    webpack(config) {
        config.resolve.alias['components'] = path.join(__dirname, 'src', 'components');
        config.resolve.alias['helpers'] = path.join(__dirname, 'src', 'helpers');
        config.resolve.alias['modules'] = path.join(__dirname, 'src', 'modules');
        return config;
    },
};
