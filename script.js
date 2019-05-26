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
  autoOpen: true
})