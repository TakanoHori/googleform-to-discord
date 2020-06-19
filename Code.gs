// Discordに投稿する
function PostToDiscord(text) {
  const url = 'WebhookのURL';
  const token = 'token';
  var channel = 'チャンネル名';
  var Botname = 'ボット名';
  var parse = 'full';

  var payload = {
        'token'      : token,
        'channel'    : channel,
        "content"    : text,
        'username'   : Botname,
        'parse'      : parse,
    };
  
  var params = {
    'method': 'POST',
    'muteHttpExceptions': true,
    'payload': payload
  };

  UrlFetchApp.fetch(url, params);
}

function test() {
  PostToDiscord("テスト投稿");
}

function onFormSubmit(e){

  var body = "回答\n"; 
  var applicant = "";
  var itemResponse = e.response.getItemResponses();

  for (var j = 0; j < itemResponse.length; j++){    
    var formData = itemResponse[j];
    var title = formData.getItem().getTitle();
    var response = formData.getResponse();

    switch (title) {
      case "回答日":
        date = response;
        break;
      case "名前":
        name = response;
        break;
      case "年齢":
        age = response;
        break;
      case "性別":
        type = response;
        break;
      case "連絡先":
        address = response;
        break;
      case "感想":
        reflection = response;
        break;
      default:
        break;
    }
  }
  var bodyPublic =  body + "回答日:" + date + "\n名前:" + name + "\n性別:" + type + "\n連絡先:" + address + "\n感想:" + reflection ;
  PostToDiscord(bodyPublic);
}
