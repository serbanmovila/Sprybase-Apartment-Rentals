function showDetailedListing(item) {
    location.replace("html/item.html#" + item.className.split(' ')[1]);
}

function showListings() {
    var api = 'http://localhost/php/listAll.php';
    fetch(api)
        .then(result => result.json())
        .then(data => {
            if (data['responseCode'] == 200) {
                cleanPage();
                populate(data['listings']);
            } else alert("Unknown error occured!");


        });

}

function populate(items) {
    console.log(items);
    var k = 0;
    items.forEach(item => {
        k++;
        var row =
            '<div class="item ' + item[0] + '" onclick="showDetailedListing(this)"><img src="img/' + item[7].split(',')[0] + '" alt="photo" class="photo"><div class="itemName"><h1>' + item[1] +
            '</h1><h4>' + item[2] + '</h4><h2>€' + item[5] + '/month</h2></div></div>';
        console.log(row);
        document.getElementById("listings").insertAdjacentHTML('beforeend', row);

    })
}

function cleanPage() {
    var elementsToBeDeleted = document.getElementsByClassName("item");
    while (elementsToBeDeleted.length > 0) {
        elementsToBeDeleted[0].parentNode.removeChild(elementsToBeDeleted[0]);
    }
}

if (window.location.pathname == "/index.html")
    showListings();