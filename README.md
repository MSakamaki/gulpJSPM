jspmプロジェクト雛形
----

JSフレームワーク非依存のプロジェクトテンプレート

### Get Started

```sh

# jspmをグローバルインストール
npm install -g jspm

npm install
jspm install

```


### gulp tasks

 + **Develop**
    + [x] `serve` : サーバ起動
    + [x] `default` : `gulp serve`のalias
 + **TEST**
    + [x] `gulp test` : karmaの実行
    + [ ] `test:e2e` : End to End Test
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
 + [React Webapp Starter kit](https://github.com/kriasoft/react-starter-kit)
 + [react-jspm](https://github.com/tinkertrain/jspm-react)


```sh
# nodeのes6対応調べるコマンド
nodebrew exec v0.11.14 node --v8-options | grep harmony
  --harmony_typeof (enable harmony semantics for typeof)
  --harmony_scoping (enable harmony block scoping)
  --harmony_modules (enable harmony modules (implies block scoping))
  --harmony_symbols (enable harmony symbols (a.k.a. private names))
  --harmony_proxies (enable harmony proxies)
  --harmony_collections (enable harmony collections (sets, maps))
  --harmony_generators (enable harmony generators)
  --harmony_iteration (enable harmony iteration (for-of))
  --harmony_numeric_literals (enable harmony numeric literals (0o77, 0b11))
  --harmony_strings (enable harmony string)
  --harmony_arrays (enable harmony arrays)
  --harmony_maths (enable harmony math functions)
  --harmony_promises ((dummy flag, has no effect))
  --harmony (enable all harmony features (except typeof))


#ES6ベースのnode v.0.11.*を使う場合(例：nodebrewを使用する場合)
nodebrew exec v0.11.14 node --harmony node_modules/.bin/gulp
```