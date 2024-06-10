document.getElementById("submit-form").onsubmit = function (e) {
  e.preventDefault();
  var xhr = new XMLHttpRequest();
  xhr.open("POST", this.action, true);
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      alert("Form submitted successfully");
    }
  };
  var formData = new FormData(this);
  var encodedData = [];
  for (var pair of formData.entries()) {
    encodedData.push(
      encodeURIComponent(pair[0]) + "=" + encodeURIComponent(pair[1])
    );
  }
  xhr.send(encodedData.join("&"));
};
