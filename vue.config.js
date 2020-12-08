const path = require('path');

module.exports = {
  lintOnSave: false,
  transpileDependencies: [
    'vuetify',
  ],
  css: {
    loaderOptions: {
      scss: {
        prependData: `
          @import "src/styles/_variables.scss";
        `
      }
    }
  }
};
