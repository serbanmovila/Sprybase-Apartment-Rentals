function addAd() {

    var length = document.getElementById("photos").files.length;
    if (length < 2) {
        alert("You need to upload at least 2 photos!");
        return;
    }

    var api = 'http://localhost/php/addAd.php?title=';

    var title = document.getElementById("title").value;
    var description = document.getElementById("description").value;
    var type = document.getElementById("type").value;
    var address = document.getElementById("address").value;
    var price = document.getElementById("price").value;
    var phone = document.getElementById("phone").value;

    api = api.concat(title, "&description=", description, "&type=", type,
        "&address=", address, "&price=", price, "&phone=", phone, "&photos=");

    for (i = 0; i < length - 1; i++) {
        api = api.concat(document.getElementById("photos").files[i]["name"], ",");
    }
    api = api.concat(document.getElementById("photos").files[length - 1]["name"]);

    console.log(api);

    fetch(api)
        .then(response => response.json())
        .then(data => {
            if (data['responseCode'] == 400)
                alert("Fields cannot be empty!");
            else if (data['responseCode'] == 401)
                alert("Unknown error occured!");
            else {
                alert("Listing successfully added!");
                location.reload();
            }
        });
}