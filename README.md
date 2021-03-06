# pairs-web-card-example
Web Front-end Team, Pairsのインターン選考の技術課題の回答例

## 技術課題
### Pairsのお相手からのいいね！のカードUIの簡易版をReactで実装してください。

### 機能要件
- スマートフォンのブラウザで動作すること
- カードにはユーザーの画像、ニックネーム、年齢が表示される
- カードの下にいいね！ボタン、スキップボタンが表示される
- いいね！ボタンをタップしたときはカードが右に流れて消えるアニメーションが実行される。その後に次のカードが表示される
- スキップボタンをタップしたときはカードが左に流れて消えるアニメーションが実行される。その後に次のカードが表示される

### Advanced Option
- スワイプジェスチャーでいいね！・スキップができる
- カードの下部をタップするとお相手の詳細画面へ遷移して表示される。カードへ戻ることができる

## サンプルコード
`create-react-app`で作成し、ejectしたサンプルコードです。

![動作](sample-movie.gif)

### 動作推奨環境
```
node v12.13.0
npm v6.12.0
```

上記環境の構築には何を用いても問題ないです。

[nodenv](https://github.com/nodenv/nodenv)や
[nodebrew](https://github.com/hokaccha/nodebrew)を
参照してください。

### ローカル起動方法
上記動作推奨環境を整えた後、
ディレクトリ直下で`npm install`をして`node_modules`をインストールした後、

`npm start`で起動して、[http://localhost:3000](http://localhost:3000)にアクセスしてください。

デスクトップでスマホ画面を再現する場合、ブラウザの開発者ツールも用いてください。

参考：[Chrome DevTools](https://developers.google.com/web/tools/chrome-devtools/?hl=ja)