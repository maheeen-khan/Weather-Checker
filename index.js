var season = prompt("ENTER CURRENT WEATHER : \n\n e.g. \n\nHot, \nCold, \nFall, \nRainy\nCloudy\n ");


if (season == "Hot" || season == "hot") {
    document.write("<div class='card ownClass mx-auto' style='width: 18rem'>" + " <img src='./images/summer.gif'> " + " <div class='card-body'>" + " <h5 class='card-title hot'>It's HOT Today</h5> " + "  <p class='card-text'>Avoid midday sun and Wear sunscreen. Stay hydrated and cool indoors.🌞🏖️</p> " + "  </div> " + " </div> ");
}
else if (season == "Cold" || season == "cold") {

    document.write("<div class='card ownClass mx-auto' style='width: 18rem'>" + " <img src='./images/winter.gif' class='card-img-top'> " + " <div class='card-body'>" + " <h5 class='card-title cold'>It's COLD Today</h5> " + "  <p class='card-text'>Protect your skin, moisturize. Stay active to keep warm and layer up!❄️☃️</p> " + "  </div> " + " </div> ");
}
else if (season == "Fall" || season == "fall") {
    document.write("<div class='card ownClass mx-auto' style='width: 18rem'>" + " <img src='./images/autumn.gif' class='card-img-top'> " + " <div class='card-body'>" + " <h5 class='card-title fall'>It's FALL</h5> " + "  <p class='card-text'>Perfect time for boots and scarves. Layer up for cozy comfort🍁🧣</p> " + "  </div> " + " </div> ");
}
else if (season == "Rainy" || season == "rainy") {
    document.write("<div class='card ownClass mx-auto' style='width: 18rem'>" + " <img src='./images/rainy.gif' class='card-img-top'> " + " <div class='card-body'>" + " <h5 class='card-title rainy'>It's Raining</h5> " + "  <p class='card-text'>Embrace the coziness of rainy days; it’s a great time for reflection and relaxation.⛈️☔</p> " + "  </div> " + " </div> ");
}
else if (season == "Cloudy" || season == "cloudy") {
    document.write("<div class='card ownClass mx-auto' style='width: 18rem'>" + " <img src='./images/cloudy.gif' class='card-img-top'> " + " <div class='card-body'>" + " <h5 class='card-title cloudy'>It's CLOUDY Today</h5> " + "  <p class='card-text'>Go for a walk, or bike ride; the cooler temperatures can make for a pleasant outing.☁️⛈️ </p> " + "  </div> " + " </div> ");
}
else {
    document.write("Please do input from given examples!");
}
document.write("<br>");


