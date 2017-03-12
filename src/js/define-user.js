var CURRENT_USER = {}

var CHAT_CHANNEL = "global";
location.search.slice(1).split("&").forEach(function(item){
    var param = item.split("=")[0];
    if (param == "name" || param == "uid") {
        CURRENT_USER[param] = item.split("=")[1];
    } else if (param == "channel") {
        CHAT_CHANNEL = item.split("=")[1];
    }
});
if (CURRENT_USER.name === undefined || CURRENT_USER.uid === undefined) {
    CURRENT_USER = undefined;
}

export {CHAT_CHANNEL, CURRENT_USER}