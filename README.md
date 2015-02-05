jspmプロジェクト雛形
----

JSフレームワーク非依存のプロジェクトテンプレート

### Get Started

```sh

# jspmをグローバルインストール
npm install -g jspm

git clone https://github.com/MSakamaki/gulpJSPM
cd gulpJSPM

npm install
jspm install

```


### gulp tasks

 + **Develop**
    + [x] `serve` : サーバ起動
    + [x] `default` : `gulp serve`のalias
 + **TEST**
    + [x] `test` : karmaの実行
    + [x] `test:e2e` : End to End Test(option `gulp test --case=e2e`)
    + [ ] `test:accept` : 受け入れ(シナリオ)テスト
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


### その他

 + [ ] altJS対応
 + [ ] cssプリプロセッサ系(sass/less)


## 参考資料

 + [jspm公式ページ](http://jspm.io/)
 + [BrowserSync](http://www.browsersync.io/)
 + [React Webapp Starter kit](https://github.com/kriasoft/react-starter-kit)
 + [react-jspm](https://github.com/tinkertrain/jspm-react)
 + [JSファイル以外のimport](https://github.com/systemjs/systemjs)
 + [coverage](https://github.com/Workiva/karma-jspm/issues/22)
 + [Aurelia Skeleton](https://github.com/aurelia/skeleton-navigation)

```sh
# nodeのes6対応調べるコマンド
nodebrew exec v0.11.14 node --v8-options | grep harmony

#ES6ベースのnode v.0.11.*を使う場合(例：nodebrewを使用する場合)
nodebrew exec v0.11.14 node --harmony node_modules/.bin/gulp
```