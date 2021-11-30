function loadDoc(value) {
    const xhttp = new XMLHttpRequest();
      xhttp.onload = function() {
      document.getElementById("textswitch").innerHTML = this.responseText;
      }
      switch (value) {
          case "bold":
              xhttp.open("GET", "bold.txt", true);
          break;
          case "normal":
              xhttp.open("GET", "normal.txt", true);
          break;
          case "italic":
              xhttp.open("GET", "italic.txt", true);
          break;
          default:
              xhttp.open("GET", "normal.txt", true);
      }
      xhttp.send(); 
  }
  function dictionary() {
      const xhr = new XMLHttpRequest();
      xhr.onload = function() {dict(this)};
      xhr.open("GET", "dictionary.xml", true);
      xhr.send();
  }
  function dict(xml) {
      const xmlDoc = xml.responseXML;
      const x = xmlDoc.getElementsByTagName("CONJ");
      let table=`<tr><th>Plain</th><th>Negative</th><th>Past</th><th>て-Form</th></tr>`;
      for (let i = 0; i <x.length; i++) {
      table += `<tr><td>` +
      x[i].getElementsByTagName("PLAIN")[0].childNodes[0].nodeValue +
      `</td><td>` +
      x[i].getElementsByTagName("NEGATIVE")[0].childNodes[0].nodeValue +
      `</td><td>` +
      x[i].getElementsByTagName("PAST")[0].childNodes[0].nodeValue +
      `</td><td>` +
      x[i].getElementsByTagName("TE")[0].childNodes[0].nodeValue +
      `</td></tr>`;
      }
      document.getElementById("dicto").innerHTML = table;
  }

function dictjson1() {
    const dbParam = JSON.stringify({table:"customers",limit:20});
    const xmlhttp = new XMLHttpRequest();
    xmlhttp.onload = function() {
      myObj = JSON.parse(this.responseText);
      let text = "<table border='1'>"
      for (let x in myObj) {
        text += "<tr><td>" + myObj[x].name + "</td></tr>";
      }
      text += "</table>"
      document.getElementById("jtable").innerHTML = text;
    }
    xmlhttp.open("POST", "dictionary.json");
    xmlhttp.send("x=" + dbParam);
}