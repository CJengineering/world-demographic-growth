{
  /*
var cityData = [
    { name: "Paris", latitude: 48, longitude: 2, size: 1 },
    { name: "Tokyo", latitude: 35, longitude: 139, size: 2 },
    { name: "Abu Dhabi", latitude: 24, longitude: 54, size: 3 }
];

function addRedPoint2(longitude, latitude) {
    // Add a red point at the specified coordinates
    svg.append("circle")
        .attr("cx", projection([longitude, latitude])[0])
        .attr("cy", projection([longitude, latitude])[1])
        .attr("r", 5) // Adjust the size of the point as needed
        .style("fill", "red");
}

var playButton = document.getElementById("playButton");

playButton.addEventListener("click", function() {
    cityData.forEach(function(city) {
        addRedPoint2(city.longitude, city.latitude);
    });
});
*/
}
var cityData = [
  { name: "Paris", latitude: 48, longitude: 2, size: 1 },
  { name: "Tokyo", latitude: 35, longitude: 139, size: 2 },
  { name: "Abu Dhabi", latitude: 24, longitude: 54, size: 3 },
];

function removeAllCircles() {
  svg.selectAll("circle").remove();
}
document.getElementById("removeButton").addEventListener("click", function () {
  removeAllCircles();
});
document.addEventListener("keydown", function(event) {
  if (event.key === "z") {
    console.log("Z key pressed");
    removeAllCircles();
  }
});
function displayCitiesForYear(year) {
  svg.selectAll("circle").remove(); // Remove existing circles

  citiesData.forEach(function (city) {
    const scaledRadius = city[year] / 1000;

    svg
      .append("circle")
      .attr("cx", projection([city.Longitude, city.Latitude])[0])
      .attr("cy", projection([city.Longitude, city.Latitude])[1])
      .attr("r", scaledRadius)
      .style("fill", "#8f00ff ")
      .style("opacity", 0.5);
  });
}

// Other code for initializing the map and buttons...

// Trigger the displayCitiesForYear function when the year selector changes
document.getElementById("yearSelector").addEventListener("change", function () {
  const selectedYear = this.value;
  console.log("Dropdown Change Event. Selected Year:", selectedYear);
  displayCitiesForYear(selectedYear);
});
function addAnimatedCircle(city) {
  svg
    .append("circle")
    .attr("cx", projection([city.Longitude, city.Latitude])[0])
    .attr("cy", projection([city.Longitude, city.Latitude])[1])
    .attr("r", 2) // Adjust the size of the red point as needed
    .style("fill", "red");

  const circle = svg
    .append("circle")
    .datum(city)
    .attr("cx", projection([city.Longitude, city.Latitude])[0])
    .attr("cy", projection([city.Longitude, city.Latitude])[1])
    .attr("r", 5) // Initial size of the circle
    .style("fill", " #8f00ff ")
    .style("opacity", 0.5);

  // Trigger the animation
  animateCircle(circle, city);
}
function animateCircle(circle, city) {
  let currentYear = 1950;
  const animationDuration = parseInt(
    document.getElementById("animationDuration").value,
    10
  );
  console.log("Animation duration:", animationDuration);
  let interval = setInterval(() => {
    if (currentYear <= 2030) {
      const scaledRadius = city[currentYear] / 1000;

      circle
        .transition()
        .duration(500) // Animation duration for each year
        .ease(d3.easeLinear)
        .attr("r", scaledRadius);

      currentYear += 5; // Incrementing by 5 years
    } else {
      clearInterval(interval); // Stop the animation when reaching 2050
    }
  }, animationDuration);
}
function displayCityEvolution(cityName) {
  // Find the selected city in the data
  const selectedCity = citiesData.find(
    (city) => city["Urban Agglomeration"] === cityName
  );

  if (!selectedCity) {
    console.error("City not found in the data");
    return;
  }

  // Clear existing circles
  svg.selectAll("circle").remove();

  // Add a fixed red point at the center of the selected city
  svg
    .append("circle")
    .attr("cx", projection([selectedCity.Longitude, selectedCity.Latitude])[0])
    .attr("cy", projection([selectedCity.Longitude, selectedCity.Latitude])[1])
    .attr("r", 3) // Adjust the size of the red point as needed
    .style("fill", "red");

  // Add the animated circle for the selected city
  const animatedCircle = svg
    .append("circle")
    .datum(selectedCity)
    .attr("cx", projection([selectedCity.Longitude, selectedCity.Latitude])[0])
    .attr("cy", projection([selectedCity.Longitude, selectedCity.Latitude])[1])
    .attr("r", 5) // Initial size of the circle
    .style("fill", "#8f00ff")
    .style("opacity", 0.5);

  // Trigger the animation for the selected city
  animateCircle(animatedCircle, selectedCity);
}
document
  .getElementById("submitCity")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const selectedCity = document.getElementById("citySelector").value;
    console.log("Submit Button Clicked. Selected City:", selectedCity);
    displayCityEvolution(selectedCity);
  });
document.addEventListener("keydown", function (event) {
  if (event.code === "Enter") {
    event.preventDefault();
    const selectedCity = document.getElementById("citySelector").value;
    console.log("Submit Button Clicked. Selected City:", selectedCity);
    displayCityEvolution(selectedCity);
  }
});
// Trigger the animation when the button is clicked
const playButtonAllCities = document.getElementById("playButtonAllCities");

playButtonAllCities.addEventListener("click", function () {
  citiesData.forEach(function (city) {
    addAnimatedCircle(city);
  });
});
document.addEventListener("keydown", function (event) {
  if (event.code === "Space") {
    citiesData.forEach(function (city) {
      addAnimatedCircle(city);
    });
  }
});
var width = 1920;
var height = 1080;

// Create an SVG element
var svg = d3
  .select("#map-container")
  .append("svg")
  .attr("width", width)
  .attr("height", height);

// Define a projection (e.g., Mercator)
var projection = d3
  .geoMercator()
  .scale(200)
  .translate([width / 2, height / 2]);

// Create a path generator using the projection
var path = d3.geoPath().projection(projection);

// Load and display the world data
d3.json("https://unpkg.com/world-atlas@1/world/110m.json").then(function (
  world
) {
  console.log(topojson.feature(world, world.objects.countries).features);
  var countries = topojson
    .feature(world, world.objects.countries)
    .features.filter(function (d) {
      return d.id !== "010";
    });

  // Draw the countries
  svg
    .selectAll("path")
    .data(countries)
    .enter()
    .append("path")
    .attr("d", path)
    .attr("fill", "#ccc")
    .attr("stroke", " #00FF41")
    .attr("stroke-width", 0.75);
});
function addRedPoint() {
  var latitude = parseFloat(document.getElementById("latitude").value);
  var longitude = parseFloat(document.getElementById("longitude").value);

  if (!isNaN(latitude) && !isNaN(longitude)) {
    // Add a red point at the specified coordinates
    svg
      .append("circle")
      .attr("cx", projection([longitude, latitude])[0])
      .attr("cy", projection([longitude, latitude])[1])
      .attr("r", 5) // Adjust the size of the point as needed
      .style("fill", "red");
  } else {
    alert("Please enter valid latitude and longitude values.");
  }
}

// Rest of your existing code for drawing the map and initial circles goes here
