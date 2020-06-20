# googleform-to-discord
Googleフォームに記入した内容をdiscordに発信するボットを紹介します。  
## Webhookを作成する  
（注）チャンネルを作成する工程は割愛  
* 「チャンネルの編集」->「ウェブフック」を選択  
<img src="https://github.com/TakanoHori/googleform-to-discord/blob/images/make-webhook.png" width="480px">  
* 「ウェブフックを作成」を選択  
* 生成されたWebhookのURLをコピー（取り扱いに注意）  
<img src="https://github.com/TakanoHori/googleform-to-discord/blob/images/edit-webhook.png" width="480px">  
* 「保存」することで作成が完了する  
<img src="https://github.com/TakanoHori/googleform-to-discord/blob/images/done-webhook.png" width="480px">

## GoogleAppsScriptをかく
（注1）詳しくは[Code.gs](https://github.com/TakanoHori/googleform-to-discord/blob/master/Code.gs)を参照  
（注2）GoogleAppsScriptを以下、GASと呼ぶ

### PostToDiscord()
* Discordに投稿する関数
* Webhookに関する情報を各変数に入れる  
    * text: onFormSubmitからくる投稿内容
    * url: 取得したWebhookのURL  
    * token: Webhookに関するtoken  
    * channel: 投稿先チャンネル名  
    * Botname: ボット名  

### test()
* ボットに投稿できるかテストする関数  
* 以下のような投稿がされる  
<img src="https://github.com/TakanoHori/googleform-to-discord/blob/images/review.png">  

### onFormSubmit()
* フォームの内容を受け取り、投稿内容としてまとめる関数  
* `PostToDiscord(bodyPublic);`でDiscordに発信

## トリガーを設定する
* 「編集」->「現在のプロジェクトのトリガー」を選択  
* 新規作成の場合は、右下「トリガーを追加」を選択  
* 以下のような設定にすると、フォームが送信されたときにボットが動く  
<img src="https://github.com/TakanoHori/googleform-to-discord/blob/images/trigger.png" width="480px">  

フォームが送信されると、Discordに通知が届く  
<img src="https://github.com/TakanoHori/googleform-to-discord/blob/images/review2.png">  

## 参照  
* [Googleformからのslack通知設定方法](https://qiita.com/pchan52/items/574e930a3cc42cf7f8b9)  
* [GSSとGASとDiscordで遊んじゃおう](https://kuzunoha-ne.hateblo.jp/entry/2018/07/20/204556#Discord%E3%81%AEWebhook%E3%82%92%E8%B5%B7%E5%8B%95)