var images;
var imageIndex = 0;

function getListings() {

    var api = 'http://localhost/php/listAll.php';
    fetch(api)
        .then(result => result.json())
        .then(data => {
            if (data['responseCode'] == 200) {
                for (var i = 0; i < data['listings'].length; i++)
                    if (data['listings'][i][0] == window.location.hash.split('#')[1]) {
                        images = data['listings'][i][7].split(',');
                        populate(data['listings'][i]);
                    }
            } else alert("Unknown error occured!");


        });
}

function populate(item) {
    var row =
        '<div class="item"><div class="photos"><img src="../img/' + item[7].split(',')[0] + '" alt="photo" class="photo" id="photo">' +
        '<div class="buttons"><button type="button" onclick="changeImage(-1)">&lt;</button><button type="button" onclick="changeImage(1)">&gt;</button></div></div><div class="specs"><h1>' + item[1] +
        '</h1><h4>' + item[2] + '</h4><h4>Number of rooms: ' + item[3] + '</h4><h4>Address: ' + item[4] +
        '</h4><h4>Price (€/month): ' + item[5] + '</h4><h4>Phone number: ' + item[6] + '</h4></div></div>';
    console.log(row);
    document.getElementById("menu").insertAdjacentHTML('afterend', row);
}



function changeImage(direction) {
    console.log(images);
    console.log(imageIndex);
    if (imageIndex == 0 && direction == -1)
        imageIndex = images.length - 1;
    else if (imageIndex == images.length - 1 && direction == 1)
        imageIndex = 0;
    else
        imageIndex += direction;
    document.getElementById("photo").src = "../img/" + images[imageIndex];
}

getListings();