var frodx_chatBot = function (object) {
  var resultObject = {};
  resultObject.id = "nr_integrated_cb";
  resultObject.class = "fx-cb-div";
  var hexPattern = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/
  if (!object.pid || typeof(object.pid) !== 'number' || object.pid.toString().length !== 6) {
    return;
  } else {
    resultObject["data-pid"] = object.pid;
  }
  if (!hexPattern.test(object.backgroundColor)) {
    console.log('error with background color')
  } else {
    resultObject["backgroundColor"] = object.backgroundColor;
  }
  if (object.autoOpen === true) {
    resultObject["auto-open"] = true;
  } else {
    resultObject["auto-open"] = false;
    console.log('error with auto open')
  }
  console.log(object.name, this);
  $('<div/>', resultObject).appendTo('body');
  $("#nr_integrated_cb").load("new.html");
};

frodx_chatBot({
  pid: 457896,
  backgroundColor: "#f0f",
  autoOpen: true,
  borderColor: "#fff",
  borderWidth: 2,
  chatBotName: "Roman's chatbot",
  personName: ["Roman", "David", "Andrej"],
  iconColor: "#000",
  textColor: "#123",
  imageUrl: "https://www.romanstruna.com/public/roman-struna-thumbnail.jpg",
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
  chatSize: "small"
})