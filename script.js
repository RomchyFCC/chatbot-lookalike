jQuery(document).ready(function(){
  jQuery('<div/>', {
    id: 'nr_integrated_cb',
    "data-pid": '123456',
    class: 'fx-cb-div'
  }).appendTo('body');
  $('#nr_integrated_cb').load("new.html");
});
