//console.log(nasaKey);

var apod = {

  //create a random apodDate
  randomDate: function(start, end) {
    let date = new Date(
      start.getTime() + Math.random() * (end.getTime() - start.getTime())
    );

    //Format the Date
    let d = date.getDate();
    let m = date.getMonth() + 1;
    let y = date.getFullYear();

    if(m < 10){
      m = '0' + m;
}

    if(d < 10){
      d = '0' + d;
    }

    return `${y}-${m}-${d}`;
  },

buildDOM: function(){
},
$('apodTitle').text(result.title);

if(result.media_type ==='video') {
  $('#apodImg').hide();
  $('#apodVideo > iframe').attr('src', result.url).show();
}else{
  $('#apodVideo').hide();
  $('#apodImg').attr('src',result.url).attr('alt', result.title).show();
}

$('#apodCopyright').text(result.title);
$('#apodDate').text(result.date);
$('#apodDesc').text(result.explanation);

getRequest():

  //Application constructor
  init:function() {
    let_this = this;
    let date = '2013-06-06';//this.randomDate(new Date(1995, 5, 16), new Date());

    var url = "https://api.nasa.gov/planetary/apod?api_key="
    + nasaKey
    + '&date=' + date;

    $.ajax({
      url:url
    }).done(function(result){
    _this.buildDOM(result);
    }).fail(function(results){
      console.log(results);
    }
};

apod.init();

$(function(){
$('#btnRandom').on('click',function(){
    apod.getRequest();
  });
});
