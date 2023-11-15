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


//### COLOR PICKER PART ####

function storeColors() {
  localStorage.setItem("bg-color", document.getElementById("bg-color").value);
  localStorage.setItem(
    "map-bg-color",
    document.getElementById("map-bg-color").value
  );
  localStorage.setItem(
    "country-color",
    document.getElementById("country-color").value
  );
  localStorage.setItem(
    "border-color",
    document.getElementById("border-color").value
  );
  localStorage.setItem(
    "important-city-center-color",
    document.getElementById("important-city-center-color").value
  );
  localStorage.setItem(
    "important-city-bubble-color",
    document.getElementById("important-city-bubble-color").value
  );
  localStorage.setItem(
    "secondary-city-center-color",
    document.getElementById("secondary-city-center-color").value
  );
  localStorage.setItem(
    "secondary-city-bubble-color",
    document.getElementById("secondary-city-bubble-color").value
  );
  localStorage.setItem("commonwealth-color", document.getElementById("commonwealth-color").value)
}

function applyStoredColors() {
  // Apply body background color
  console.log('body tag', document.getElementById)
  document.getElementById("body").style.backgroundColor =
    localStorage.getItem("bg-color") || "black"; // Default to white if not set

  document.getElementById("map-container").style.backgroundColor =
    localStorage.getItem("map-bg-color") || "black";

}
document.getElementById("apply-colors").addEventListener("click", function () {
  storeColors();
  applyStoredColors();
  location.reload();
});

// Apply stored colors on page load
window.onload = applyStoredColors;
function cleanStyle(){
  localStorage.clear();
  location.reload();
}
document.getElementById("clean-style").addEventListener("click", function(){
  cleanStyle()
})
const countryColor = localStorage.getItem("country-color")
const borderColor = localStorage.getItem("border-color")
const importantCityCenter = localStorage.getItem("important-city-center-color")||"red"
const importantCityBubble = localStorage.getItem("important-city-bubble-color") || "blue"
const secondaryCityCenter = localStorage.getItem("secondary-city-center-color")||"red"
const secondaryCityBubble = localStorage.getItem("secondary-city-bubble-color") || "orange"
const commonwealthColor = localStorage.getItem("commonwealth-color") || "yellow"                     
//### END PICKER COLOR PART    ####
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
document.addEventListener("keydown", function (event) {
  if (event.key === "z") {
    console.log("Z key pressed");
    removeAllCircles();
  }
});
function displayCitiesForYear(year) {
  svg.selectAll("circle").remove(); // Remove existing circles

  citiesData.forEach(function (city) {
    const scaledRadius = city[year] / 1000;

    g
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
  g.append("circle")
    .attr("cx", projection([city.Longitude, city.Latitude])[0])
    .attr("cy", projection([city.Longitude, city.Latitude])[1])
    .attr("r", 2) // Adjust the size of the red point as needed
    .style("fill", city["Primary city"] ? importantCityCenter : secondaryCityCenter);

  const circle = g
    .append("circle")
    .datum(city)
    .attr("cx", projection([city.Longitude, city.Latitude])[0])
    .attr("cy", projection([city.Longitude, city.Latitude])[1])
    .attr("r", 1) // Initial size of the circle
    .style("fill", city["Primary city"] ? importantCityBubble : secondaryCityBubble)
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
     // const scaledRadius = city[currentYear] / 1000;
     const area = city[currentYear];
     const scaledRadius = (Math.sqrt(area / Math.PI))/5;

      circle
        .transition()
        .duration(500) // Animation duration for each year
        .ease(d3.easeCubic)
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
  g.selectAll("circle").remove();

  // Add a fixed red point at the center of the selected city
  g.append("circle")
    .attr("cx", projection([selectedCity.Longitude, selectedCity.Latitude])[0])
    .attr("cy", projection([selectedCity.Longitude, selectedCity.Latitude])[1])
    .attr("r", 3) // Adjust the size of the red point as needed
    .style("fill", importantCityCenter)

  // Add the animated circle for the selected city
  const animatedCircle = g
    .append("circle")
    .datum(selectedCity)
    .attr("cx", projection([selectedCity.Longitude, selectedCity.Latitude])[0])
    .attr("cy", projection([selectedCity.Longitude, selectedCity.Latitude])[1])
    .attr("r", 5) // Initial size of the circle
    .style("fill", importantCityBubble)
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
// Define the zoom behavior
var zoom = d3.zoom().scaleExtent([1, 8]).on("zoom", zoomed);

// Apply the zoom behavior to the SVG
svg.call(zoom);
// Group to hold the map features
var g = svg.append("g");
//TEST ###
const commonwealthCountriesNumeric = [
  "028", "036", "044", "050", "052", "084", "072", "096", "120", "124", 
  "196", "212", "748", "242", "266", "270", "288", "308", "328", "356", 
  "388", "404", "296", "426", "454", "458", "462", "470", "480", "508", 
  "516", "520", "554", "566", "586", "598", "646", "659", "662", "670", 
  "882", "690", "694", "702", "090", "710", "144", "834", "768", "776", 
  "780", "798", "800", "826", "548", "894"
];

// Load and display the world data
d3.json("https://unpkg.com/world-atlas@1/world/110m.json").then(function (
  world
) {
  var countries = topojson
    .feature(world, world.objects.countries)
    .features.filter(function (d) {
      return d.id !== "010";
    });
    console.log("COuntires", countries)
  g.selectAll("path")
    .data(countries)
    .enter()
    .append("path")
    .attr("d", path)
    .attr("stroke", borderColor)
    .attr("fill", function(d) {
      // Check if the country is in the Commonwealth and set the color
      return commonwealthCountriesNumeric.includes(d.id) ? commonwealthColor : "lightgray";
  });
});
// Load and display the world data
{
  /** d3.json("https://unpkg.com/world-atlas@1/world/110m.json").then(function (
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
});*/
}

function zoomed(event) {
  g.attr("transform", event.transform);
}

// Zoom control functions
function zoomIn() {
  svg.transition().call(zoom.scaleBy, 1.3);
  console.log("zoom in");
}

function zoomOut() {
  svg.transition().call(zoom.scaleBy, 0.7);
}

// Attach zoom control functions to buttons
d3.select("#zoom-in").on("click", zoomIn);
d3.select("#zoom-out").on("click", zoomOut);
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
