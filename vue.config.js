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
  },
  publicPath: process.env.NODE_ENV === 'production'
    ? '/my-facebook/'
    : '/'
};
