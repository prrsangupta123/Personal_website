var dict = {};
if (typeof (Storage) !== "undefined") {
    for (var key in localStorage) {
        try {
            var data = JSON.parse(localStorage.getItem(key));
            if (data.check === "ThisIsFormData") {
                $("#toInsert").append(
                    '<tr><th scope="row">' + key + '</th><td>' + data.skill + '</td><td>' + data.level + '</td><td>' + data.years + '</td></tr>');
            }
        }
        catch (err) {
            ;
        }
    }
}

function validateForm() {
    var x = document.forms["skillForm"]["firstName"].value;
    if (x == "") {
        alert("Name must be filled out");
        return false;
    }
    x = document.forms["skillForm"]["lastName"].value;
    if (x == "") {
        alert("Name must be filled out");
        return false;
    }
    x = document.forms["skillForm"]["skillName"].value;
    if (x == "") {
        alert("Skill must be filled out");
        return false;
    }
    var e = document.getElementById("time");
    x = e.options[e.selectedIndex].value;
    if (x == "") {
        alert("Year must be selected");
        return false;
    }
    addData();
    reset();
    alert("Your feedback has been recorded");
    return false;
}

function addData() {
    var name = document.forms["skillForm"]["firstName"].value;
    name += " ";
    name += document.forms["skillForm"]["lastName"].value;
    var skill = document.forms["skillForm"]["skillName"].value;
    var level = document.querySelector('input[name="gridRadios"]:checked').value;
    var e = document.getElementById("time");
    var years = e.options[e.selectedIndex].value;
    var check = "ThisIsFormData";
    dict[name] = { skill, level, years, check };
    if (typeof (Storage) !== "undefined") {
        localStorage.setItem(name, JSON.stringify(dict[name]));
    }
    $("#toInsert").append(
        '<tr><th scope="row">' + name + '</th><td>' + skill + '</td><td>' + level + '</td><td>' + years + '</td></tr>');
}

function reset() {
    document.getElementById("firstName").value = "";
    document.getElementById("lastName").value = "";
    document.getElementById("skillName").value = "";
    document.getElementById("gridRadios1").checked = true;
    document.getElementById("time").selectedIndex = "0";
}
function clickCounter() {
  if (typeof(Storage) !== "undefined") {
    if (sessionStorage.clickcount) {
      sessionStorage.clickcount = Number(sessionStorage.clickcount)+1;
    } else {
      sessionStorage.clickcount = 1;
    }
    document.getElementById("result").innerHTML = "No of likes: " + sessionStorage.clickcount;
document.getElementById("result").style.background="white";
  } else {
    document.getElementById("result").innerHTML = "Sorry, your browser does not support web storage...";
document.getElementById("result").style.background="white";
  }
}


