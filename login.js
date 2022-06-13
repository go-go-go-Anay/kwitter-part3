function adduser()
{
    var username = document.getElementById("user_Name").value;

    localStorage.setItem("user_Name", username);

    window.location = "kwitter.html";
}