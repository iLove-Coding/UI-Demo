const path = require('path');

function resolve(dir) {
  return path.join(__dirname, '.', dir);
}
var proxyConfig = () => {
  let rs = {};

  let pathRs = {};
  const path = [
    "/screenConfig",
    "/screenHomepage",
    "/screenCar",
    "/home",
    "/screenAlarm",
    "/screenSearch",
    "/screenPerson",
    "/screenHouse",
    "/screenDevice",
    "/video",
    "/globalCamera",
    "/extra"
  ];
  path.map(item => {
    pathRs[item] = {
      // target: "https://k3043v.add.shbt.qihoo.net",
      target: "https://screen.securecity.360.cn",
      // target: "https://screendev.securecity.360.cn",
      // target: "https://dev.screen.qihoo.net",
      changeOrigin: true //允许跨域
    };
  });

  let socketRs = {};
  const socket = ["/ws"];
  socket.map(item => {
    socketRs[item] = {
      target: "wss://screen.securecity.360.cn",
      // target: "wss://screendev.securecity.360.cn",
      // target: "ws://dev.screen.qihoo.net",
      // target: "wss://k3043v.add.shbt.qihoo.net",
      ws: true,
      changOrigin: true //允许跨域
    };
  });

  rs = Object.assign({}, pathRs, socketRs);
  return rs;
};

module.exports = {
    publicPath: "/",
    devServer: {
      open: true,
      proxy: proxyConfig(),
    },
    configureWebpack: {
      devtool: 'inline-source-map',
      resolve: {
        extensions: ['.js', '.vue', '.scss', '.json'],
        alias: {
          '@assets': '@/assets',
          '@components': '@/components',
          '@views': '@/views',
          '@utils': '@/utils',
        }
      },
    },
    css: {
      loaderOptions: {
        // 给 sass-loader 传递选项
        sass: {
          // @/ 是 src/ 的别名
          // 所以这里假设你有 `src/variables.scss` 这个文件
          data: `
          @import "@/scss/index.scss";
        `
        }
      }
    }
};