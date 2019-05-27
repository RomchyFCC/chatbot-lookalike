var frodx_chatBot = function (object) {
  var resultObject = {};
  resultObject.id = "nr_integrated_cb";
  resultObject.class = "fx-cb-div";
  if (!object.pid || typeof(object.pid) !== 'number' || object.pid.toString().length !== 6) {
    return;
  } else {
    resultObject["data-pid"] = object.pid;
  }
  console.log(object.name, this);
  $('<div/>', resultObject).appendTo('body');
  $("#nr_integrated_cb").load("new.html");
};

frodx_chatBot({
  pid: 457896,
  backgroundColor: "red",
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