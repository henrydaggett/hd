const app = document.getElementsByTagName('body');


var request = new XMLHttpRequest();
request.open('GET', 'http://api.openweathermap.org/data/2.5/find?q=London,uk&units=metric&APPID=530621cd4ebc82174337f0ca8b548abb', true);
request.onload = function () {

  // Begin accessing JSON data here
  var data = JSON.parse(this.response);
  if (request.status >= 200 && request.status < 400) {

      let div = document.createElement("div");

      let h1 = document.createElement("h1");
      h1.textContent = data.list.name;

      div.appendChild(h1);
      document.body.appendChild(div);

  } else {
    const errorMessage = document.createElement('marquee');
    errorMessage.textContent = `it's not working!`;
    app.appendChild(errorMessage);
  }
}

request.send();
