// Visitor Count
function incrementVisitorCount() {
    if (localStorage.getItem('visitorCount')) {
      var count = parseInt(localStorage.getItem('visitorCount')) + 1;
      localStorage.setItem('visitorCount', count);
      if (count >= 1000) {
        // If count is 1000 or greater, round up to nearest 1000 and append 'K' suffix
        var roundedCount = Math.ceil(count/1000)*1000;
        document.getElementById('visitor-count').innerHTML = (roundedCount/1000).toFixed(1) + 'K';
      } else {
        document.getElementById('visitor-count').innerHTML = count;
      }
    } else {
      localStorage.setItem('visitorCount', 1);
      document.getElementById('visitor-count').innerHTML = 1;
    }
  }
  
incrementVisitorCount();

// Display current Date and Time
function displaytime(){
    var session = "";
    var month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var daylist = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    var today = new Date();
    var day = today.getDay();
    var date = today.getFullYear() + "/" + (today.getMonth()+1) + "/" + today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

    if(today.getHours() >= 12){
        session = "PM";
    }else{
        session = "AM";
    }

    var word = "Time:";
    var dword = "Date:";
    document.getElementById("displayDate").innerHTML = dword + " " + daylist[day] + ", " + month[today.getMonth()] + " " + today.getDate();
    document.getElementById("displayTime").innerHTML = word + " " + time + " " + session;

}
setInterval(displaytime, 10);


//Display Location
function displayLocation() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://ipapi.co/json/', true);
    xhr.onload = function() {
      if (xhr.status === 200) {
        var locationData = JSON.parse(xhr.responseText);
        var state = locationData.region;
        var country = locationData.country_name;
        document.getElementById("displayLocation").innerHTML = "Location: " + state + ", " + country;
      }
    };
    xhr.send();
  }
setInterval(displayLocation, 10);
  
