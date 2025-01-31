const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const DotenvWebpack = require("dotenv-webpack");

module.exports = {
  entry: "./src/app.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.[contenthash].js",
  },
  module: {
    rules: [
      //.css .js 등 서로 다른 확장자를 가진 파일을 처리할 때 어떤 규칙을 적용할지 정의
      {
        test: /\.js$/, // 어떤 파일을 대상으로 할지 정규표현식으로 작성
        exclude: /node_modules/, // node_modules 폴더는 제외
        use: {
          loader: "babel-loader", // babel-loader를 사용
        },
      },
    ],
  },
  plugins: [
    // npm install --save-dev clean-webpack-plugin
    // 클린 웨펙 플러그인 최근 빌드 파일만 남김
    new CleanWebpackPlugin(),

    // npm install --save-dev html-webpack-plugin
    // index.html에 bundle.[contenthash]알아서 넣어주는 플러그인
    new HtmlWebpackPlugin({
      template: "index.html",
      filename: "index.html",
    }),

    // npm install --save-dev dotenv-webpack
    // 환경 변수 관리
    new DotenvWebpack({
      path: `./.env.${process.env.NODE_ENV || "development"}`,
    }),
  ],

  // npm install --save-dev webpack-dev-server
  // 개발 서버 설정
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    // 포트 번호
    port: 9000,
    // 자동으로 브라우저 열기
    open: true,
    // 코드 변경 사항을 실시간으로 반영합니다(핫 모듈 리플레이스먼트). HMR
    hot: true,
  },
  mode: "development", // 없으면 warning 이 남
};
