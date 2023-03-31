const x = new XMLHttpRequest();
const method = "GET";

x.open(method,url,true);
x.onreadystatechange = function(){
  if(this.readyState == 4 && this.status == 200){
    var data = JSON.parse(x.responseText);
    var rand = Math.floor(Math.random()*data.length);
    var result = data[rand].img;
    var web = `<img src="${result}" height="${height}px">`;
    document.getElementById(output).innerHTML = web;
  }
};
x.send();