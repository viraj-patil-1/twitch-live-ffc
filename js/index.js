var channels=["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas","shroud"];

function getApi(name,type){
  return 'https://wind-bow.gomix.me/twitch-api/' + type + '/' + name + '?callback=?';

}
/*function getJson(channel){
  
  $.getJSON(getApi(channel,'stream'),function(data) {
  console.log(data);
});
   $.getJSON(getApi(channel,'channels'),function(data) {
  console.log(data);
});
}*/
function getInfo(){
      channels.forEach(function(channel){
                  $.getJSON(getApi(channel,'streams'),function(data){
      var game,
          status;
      if (data.stream === null) {
        game = "Offline";
        status = "offline";
      } else if (data.stream === undefined) {
        game = "Account Closed";
        status = "offline";
      } else {
        game = data.stream.game;
        status = "online";
      };  
                          $.getJSON(getApi(channel,'channels'),function     (data) {
      var logo = data.logo != null ? data.logo : "https://dummyimage.com/50x50/ecf0e7/5c5457.jpg&text=0x3F",
          name = data.display_name != null ? data.display_name : channel,
          description = status === "online" ? ': ' + data.status : "";
          html = '<div class="row ' + 
          status + '"><div class="col-xs-2 col-sm-1" id="icon"><img src="' + 
          logo + '" class="logo"></div><div class="col-xs-10 col-sm-3" id="name"><a href="' + 
          data.url + '" target="_blank">' + 
          name + '</a></div><div class="col-xs-10 col-sm-8" id="streaming">'+ 
          game + '<span class="hidden-xs">' + 
          description + '</span></div></div>';
          status === "online" ? $("#displayon").prepend(html) : $("#displayalll").append(html);
           status != "online" ? $("#displayoff").prepend(html):$("#displayalll").append(html);;   
     $("#displayall").append(html);                       
    });
                  });
      });
  }     
  
$(document).ready(function() {
  getInfo();
  
});
