jspmプロジェクト雛形
----

フレームワーク非依存のプロジェクト雛形

## 参考資料

 + [jspm公式ページ](http://jspm.io/)
 + [React Webapp Starter kit](https://github.com/kriasoft/react-starter-kit)
 + [react-jspm](https://github.com/tinkertrain/jspm-react)

### Get Started


```sh

# jspmをグローバルインストール
npm install -g jspm

npm install
jspm install

```


### gulp tasks

 + **Develop**
    + `serve` : サーバ起動
    + `default` : `gulp serve`のalias
 + **TEST**
    + `gulp test` : karmaの実行

#### 追加予定
 
 + **TEST**
    + `test:e2e` : End to End Test
    + `test:accept` : 受け入れ(シナリオ)テスト
 + **REPORT**
    + `report:make` : レポート生成
    + `report:view` : レポートを見る
    + `report:ci` : XMLレポートを生成
 + **BUILD**
    + `build` : ビルド
 + **OPTION**
   + `env`デフォルトunit
     + `--env=unit` 単体テスト用の設定ファイルを使う
     + `--env=it` 結合テスト用の設定ファイルを使う
     + `--env=releace` リリース用の設定ファイルを使う
   + `ci` デフォルトfalse、レポート等のアウトプットがCI連携用の処理になる
     + `--ci=true` CI環境用の処理を行う

