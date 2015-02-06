jspmプロジェクト雛形
----

JSフレームワーク非依存のプロジェクトテンプレート

| Project | status |
| ------ | ------ |
| Build Status | [![Build Status](https://travis-ci.org/MSakamaki/gulpJSPM.svg?branch=master)](https://travis-ci.org/MSakamaki/gulpJSPM) |
| Code Climate | [![Code Climate](https://codeclimate.com/github/MSakamaki/gulpJSPM/badges/gpa.svg)](https://codeclimate.com/github/MSakamaki/gulpJSPM) |
| Dependency Status | [![Dependency Status](https://gemnasium.com/MSakamaki/gulpJSPM.svg)](https://gemnasium.com/MSakamaki/gulpJSPM) |
| Coverage | [![Coverage Status](https://coveralls.io/repos/MSakamaki/gulpJSPM/badge.svg)](https://coveralls.io/r/MSakamaki/gulpJSPM) |

### Get Started

```sh

# jspmをグローバルインストール
npm install -g jspm

git clone https://github.com/MSakamaki/gulpJSPM
cd gulpJSPM

npm install
jspm install

```

### es6 transpiler use switching

```sh
jspm dl-loader --6to5
# or
jspm dl-loader --traceur
```

### gulp tasks

 + **Develop**
    + [x] `serve` : サーバ起動
    + [x] `default` : `gulp serve`のalias
 + **TEST**
    + [x] `test` : 全テストの実行
    + [x] `test:unit` : karmaの実行
    + [x] `test:e2e` : End to End Test
    + [ ] `test:accept` : 受け入れ(シナリオ)テスト
    + [ ] `test:api` : apiに対するテスト
 + **REPORT**
    + [ ] `report:make` : レポート生成
    + [ ] `report:view` : レポートを見る
    + [ ] `report:ci` : XMLレポートを生成
 + **BUILD**
    + [ ] `build` : ビルド
 + **OPTION**
   + `env`デフォルトunit
     + [ ] `--env=unit` 単体テスト用の設定ファイルを使う
     + [ ] `--env=it` 結合テスト用の設定ファイルを使う
     + [ ] `--env=releace` リリース用の設定ファイルを使う
   + [ ] `ci` デフォルトfalse、レポート等のアウトプットがCI連携用の処理になる
     + [ ] `--ci=true` CI環境用の処理を行う


### Roadmap

 + [ ] Firefox OS アプリ対応
 + [ ] altJS対応
 + [ ] cssプリプロセッサ系(sass/less)
 + [ ] Cordova対応
 + [ ] [covorage report optimization](https://github.com/Workiva/karma-jspm/issues/22)


## 参考資料

 + [jspm公式ページ](http://jspm.io/)
 + [BrowserSync](http://www.browsersync.io/)
 + [React Webapp Starter kit](https://github.com/kriasoft/react-starter-kit)
 + [react-jspm](https://github.com/tinkertrain/jspm-react)
 + [JSファイル以外のimport](https://github.com/systemjs/systemjs)
 + [coverage](https://github.com/Workiva/karma-jspm/issues/22)
 + [Aurelia Skeleton](https://github.com/aurelia/skeleton-navigation)
 + gulp
   + [Gulp Delete files and folders](https://github.com/gulpjs/gulp/blob/master/docs/recipes/delete-files-folder.md)
 + ES6
   + [SublimeText ES6 Syntax](https://packagecontrol.io/packages/JavaScriptNext%20-%20ES6%20Syntax)
   + [6to5 Features](https://6to5.org/docs/learn-es6/)
   + [traceur Features](https://github.com/google/traceur-compiler/wiki/LanguageFeatures)

```sh
# nodeのes6対応調べるコマンド
nodebrew exec v0.11.14 node --v8-options | grep harmony

#ES6ベースのnode v.0.11.*を使う場合(例：nodebrewを使用する場合)
nodebrew exec v0.11.14 node --harmony node_modules/.bin/gulp
```