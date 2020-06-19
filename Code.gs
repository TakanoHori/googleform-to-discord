/// Discordに投稿する
function PostToDiscord(text) {
  const url = 'https://discordapp.com/api/webhooks/723553418056171591/EH8sQkUYZElR_TGHkPNKjldnSFqQzk33YNxE7K7nSoK4vmAcf1siWywbE7MmxngcbIYa';
  const token      = 'EH8sQkUYZElR_TGHkPNKjldnSFqQzk33YNxE7K7nSoK4vmAcf1siWywbE7MmxngcbIYa';
  var channel    = '#test-bot';
  var Botname   = 'Spidey Bot';
  var parse      = 'full';

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
  PostToDiscord("テスト通知確認です");
}

function onFormSubmit(e){

  var body = "Slack通知テストフォームが来たよ！\n"; 
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
