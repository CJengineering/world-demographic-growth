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
//Initial color

// Background color

//### Important city togle
let borderTransparent =  JSON.parse(localStorage.getItem("borderToggle")) || false;
const primaryCityState = document.getElementById("primaryCityState");
const secondaryCityState = document.getElementById("secondaryCityState");
let primaryCity = JSON.parse(localStorage.getItem("primaryCity")) || false;
let secondaryCity = JSON.parse(localStorage.getItem("secondaryCity")) || false;
const borderState = document.getElementById("toggleBorder")
// Update the button states based on the retrieved values
updateButtonStates();
function toggleBorderTransparent(){
  borderTransparent= !borderTransparent
  updateButtonStates();
  saveToLocalStorage("borderToggle", borderTransparent);

}
// Function to toggle the value of primaryCity
function togglePrimaryCity() {
  primaryCity = !primaryCity;
  updateButtonStates();
  saveToLocalStorage("primaryCity", primaryCity);
}

// Function to toggle the value of secondaryCity
function toggleSecondaryCity() {
  secondaryCity = !secondaryCity;
  updateButtonStates();
  saveToLocalStorage("secondaryCity", secondaryCity);
}

// Function to update button states based on the values of primaryCity and secondaryCity
function updateButtonStates() {
  primaryCityState.innerText = primaryCity;
  secondaryCityState.innerText = secondaryCity;
  borderState.innerText = borderTransparent;
  console.log("Primary City:", primaryCity);
  console.log("Secondary City:", secondaryCity);
}

// Function to save a value to local storage
function saveToLocalStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

//### COLOR PICKER PART ####

// Function to store the background color
function storeBgColor() {
  localStorage.setItem("bg-color", document.getElementById("bg-color").value);
}
document
  .getElementById("save-bg-color")
  .addEventListener("click", storeBgColor);

// Function to store the map background color
function storeMapBgColor() {
  localStorage.setItem(
    "map-bg-color",
    document.getElementById("map-bg-color").value
  );
}
document
  .getElementById("save-map-bg-color")
  .addEventListener("click", storeMapBgColor);

// Function to store the country color
function storeCountryColor() {
  localStorage.setItem(
    "country-color",
    document.getElementById("country-color").value
  );
}
document
  .getElementById("save-country-color")
  .addEventListener("click", storeCountryColor);

// Function to store the border color
function storeBorderColor() {
  localStorage.setItem(
    "border-color",
    document.getElementById("border-color").value
  );
}
document
  .getElementById("save-border-color")
  .addEventListener("click", storeBorderColor);

// Function to store the important city center color
function storeImportantCityCenterColor() {
  localStorage.setItem(
    "important-city-center-color",
    document.getElementById("important-city-center-color").value
  );
}
document
  .getElementById("save-important-city-center-color")
  .addEventListener("click", storeImportantCityCenterColor);

// Function to store the important city bubble color
function storeImportantCityBubbleColor() {
  localStorage.setItem(
    "important-city-bubble-color",
    document.getElementById("important-city-bubble-color").value
  );
}
document
  .getElementById("save-important-city-bubble-color")
  .addEventListener("click", storeImportantCityBubbleColor);

// Function to store the secondary city center color
function storeSecondaryCityCenterColor() {
  localStorage.setItem(
    "secondary-city-center-color",
    document.getElementById("secondary-city-center-color").value
  );
}
document
  .getElementById("save-secondary-city-center-color")
  .addEventListener("click", storeSecondaryCityCenterColor);

// Function to store the secondary city bubble color
function storeSecondaryCityBubbleColor() {
  localStorage.setItem(
    "secondary-city-bubble-color",
    document.getElementById("secondary-city-bubble-color").value
  );
}
document
  .getElementById("save-secondary-city-bubble-color")
  .addEventListener("click", storeSecondaryCityBubbleColor);

// Function to store the commonwealth color
function storeCommonwealthColor() {
  localStorage.setItem(
    "commonwealth-color",
    document.getElementById("commonwealth-color").value
  );
}
document
  .getElementById("save-commonwealth-color")
  .addEventListener("click", storeCommonwealthColor);

function applyStoredColors() {
  // Apply body background color
  console.log("body tag", document.getElementById);
  document.getElementById("body").style.backgroundColor =
    localStorage.getItem("bg-color") || "black"; // Default to white if not set

  document.getElementById("map-container").style.backgroundColor =
    localStorage.getItem("map-bg-color") || "black";
}
document.getElementById("apply-colors").addEventListener("click", function () {
  applyStoredColors();
  location.reload();
});

// Apply stored colors on page load
window.onload = applyStoredColors;
function cleanStyle() {
  localStorage.clear();
  location.reload();
}
document.getElementById("clean-style").addEventListener("click", function () {
  cleanStyle();
});
const bgColor = localStorage.getItem("bg-color") || "black";
const mapBgColor = localStorage.getItem("map-bg-color") || "#ccc";
const countryColor = localStorage.getItem("country-color") || "#dcdcdc";
const borderColor = localStorage.getItem("border-color") || "#dcdcdc";
const importantCityCenter =
  localStorage.getItem("important-city-center-color") || "#e74c3c";
const importantCityBubble =
  localStorage.getItem("important-city-bubble-color") || "#3498db";
const secondaryCityCenter =
  localStorage.getItem("secondary-city-center-color") || "#e74c3c";
const secondaryCityBubble =
  localStorage.getItem("secondary-city-bubble-color") || "#e67e22";
const commonwealthColor =
  localStorage.getItem("commonwealth-color") || "#3498db";

//Initial color

// Background color
document.getElementById("bg-color").value = bgColor || "#cccc"; // Default to white

// Map background color
document.getElementById("map-bg-color").value = mapBgColor || "#ccc"; // Default to white

// Country color
document.getElementById("country-color").value = countryColor; // Default to white

// Border color
document.getElementById("border-color").value = borderColor; // Default to white

// Important city center color
document.getElementById("important-city-center-color").value =
  importantCityCenter; // Default to white

// Important city bubble color
document.getElementById("important-city-bubble-color").value =
  importantCityBubble; // Default to white

// Secondary city center color
document.getElementById("secondary-city-center-color").value =
  secondaryCityCenter; // Default to white

// Secondary city bubble color
document.getElementById("secondary-city-bubble-color").value =
  secondaryCityBubble; // Default to white

// Commonwealth color
document.getElementById("commonwealth-color").value = commonwealthColor; // Default to white

//### END PICKER COLOR PART    ####
var cityData = [
  { name: "Paris", latitude: 48, longitude: 2, size: 1 },
  { name: "Tokyo", latitude: 35, longitude: 139, size: 2 },
  { name: "Abu Dhabi", latitude: 24, longitude: 54, size: 3 },
];

function removeAllCircles() {
  svg.selectAll("circle").remove();
}
function cleanYear() {
  const yearDiv = document.getElementById("arrayDisplay");
  yearDiv.innerText = "1950";
}
document.getElementById("removeButton").addEventListener("click", function () {
  removeAllCircles();
  cleanYear();
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

    g.append("circle")
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
  if (primaryCity) {
    if (city["Primary city"] === true) {
      g.append("circle")
        .attr("cx", projection([city.Longitude, city.Latitude])[0])
        .attr("cy", projection([city.Longitude, city.Latitude])[1])
        .attr("r", 2) // Adjust the size of the red point as needed
        .style(
          "fill",
          city["Primary city"] ? importantCityCenter : secondaryCityCenter
        );

      const circle = g
        .append("circle")
        .datum(city)
        .attr("cx", projection([city.Longitude, city.Latitude])[0])
        .attr("cy", projection([city.Longitude, city.Latitude])[1])
        .attr("r", 1) // Initial size of the circle
        .style(
          "fill",
          city["Primary city"] ? importantCityBubble : secondaryCityBubble
        )
        .style("opacity", 0.5);

      // Trigger the animation
      animateCircle(circle, city);
    }
  } else if (secondaryCity) {
    if (city["Primary city"] === false) {
      g.append("circle")
        .attr("cx", projection([city.Longitude, city.Latitude])[0])
        .attr("cy", projection([city.Longitude, city.Latitude])[1])
        .attr("r", 2) // Adjust the size of the red point as needed
        .style(
          "fill",
          city["Primary city"] ? importantCityCenter : secondaryCityCenter
        );

      const circle = g
        .append("circle")
        .datum(city)
        .attr("cx", projection([city.Longitude, city.Latitude])[0])
        .attr("cy", projection([city.Longitude, city.Latitude])[1])
        .attr("r", 1) // Initial size of the circle
        .style(
          "fill",
          city["Primary city"] ? importantCityBubble : secondaryCityBubble
        )
        .style("opacity", 0.5);

      // Trigger the animation
      animateCircle(circle, city);
    }
  } else if (!primaryCity && !secondaryCity) {
    g.append("circle")
      .attr("cx", projection([city.Longitude, city.Latitude])[0])
      .attr("cy", projection([city.Longitude, city.Latitude])[1])
      .attr("r", 2) // Adjust the size of the red point as needed
      .style(
        "fill",
        city["Primary city"] ? importantCityCenter : secondaryCityCenter
      );

    const circle = g
      .append("circle")
      .datum(city)
      .attr("cx", projection([city.Longitude, city.Latitude])[0])
      .attr("cy", projection([city.Longitude, city.Latitude])[1])
      .attr("r", 1) // Initial size of the circle
      .style(
        "fill",
        city["Primary city"] ? importantCityBubble : secondaryCityBubble
      )
      .style("opacity", 0.5);

    // Trigger the animation
    animateCircle(circle, city);
  }
}
{
  /** 
function animateCircle(circle, city) {
  let currentYear = 1950;
  const arrayDisplay = document.getElementById('arrayDisplay');
  const animationDuration = parseInt(
    document.getElementById("animationDuration").value,
    10
  );
  console.log("Animation duration:", animationDuration);
  let interval = setInterval(() => {
    if (currentYear <= 2050) {
     // const scaledRadius = city[currentYear] / 1000;
     const area = city[currentYear];
     const scaledRadius = (Math.sqrt(area / Math.PI))/5;
     arrayDisplay.innerHTML = currentYear
      circle
        .transition()
        .duration(1000) 
        .ease(d3.easeCubicInOut)
        .attr("r", scaledRadius);

      currentYear += 5; 
    } else {
      clearInterval(interval); 
    }
  }, animationDuration);
}*/
}
function animateCircle(circle, city) {
  let currentYear = 1950;
  const arrayDisplay = document.getElementById("arrayDisplay");
  const animationDuration = parseInt(
    document.getElementById("animationDuration").value,
    10
  );
  console.log("Animation duration:", animationDuration);

  function updateCircle() {
    if (currentYear <= 2050) {
      if (!primaryCity && !secondaryCity) {
        // Only if both primaryCity and secondaryCity are false
        const currentArea = city[currentYear];
        const nextYear = currentYear + 5;
        const nextArea = city[nextYear] || currentArea;
        const areaDifference = (nextArea - currentArea) / 5;

        let scaledRadius = Math.sqrt(currentArea / Math.PI) / 5;
        arrayDisplay.innerHTML = currentYear;

        function intermediateStep(step = 0) {
          if (step < 5) {
            const newArea = currentArea + areaDifference * step;
            scaledRadius = Math.sqrt(newArea / Math.PI) / 5;

            circle
              .transition()
              .duration(animationDuration / 5)
              .ease(d3.easeCubic)
              .attr("r", scaledRadius)
              .on("end", () => intermediateStep(step + 1));
          } else {
            currentYear += 5;
            updateCircle();
          }
        }

        intermediateStep();
      } else if (
        currentYear <= 2050 &&
        primaryCity &&
        !secondaryCity &&
        city["Primary city"] === true
      ) {
        // Only if primaryCity is true and secondaryCity is false
        const currentArea = city[currentYear];
        const nextYear = currentYear + 5;
        const nextArea = city[nextYear] || currentArea;
        const areaDifference = (nextArea - currentArea) / 5;

        let scaledRadius = Math.sqrt(currentArea / Math.PI) / 5;
        arrayDisplay.innerHTML = currentYear;

        function intermediateStep(step = 0) {
          if (step < 5) {
            const newArea = currentArea + areaDifference * step;
            scaledRadius = Math.sqrt(newArea / Math.PI) / 5;

            circle
              .transition()
              .duration(animationDuration / 5)
              .ease(d3.easeCubic)
              .attr("r", scaledRadius)
              .on("end", () => intermediateStep(step + 1));
          } else {
            currentYear += 5;
            updateCircle();
          }
        }

        intermediateStep();
      } else if (
        currentYear <= 2050 &&
        !primaryCity &&
        secondaryCity &&
        city["Primary city"] === false
      ) {
        // Only if primaryCity is false and secondaryCity is true
        const currentArea = city[currentYear];
        const nextYear = currentYear + 5;
        const nextArea = city[nextYear] || currentArea;
        const areaDifference = (nextArea - currentArea) / 5;

        let scaledRadius = Math.sqrt(currentArea / Math.PI) / 5;
        arrayDisplay.innerHTML = currentYear;

        function intermediateStep(step = 0) {
          if (step < 5) {
            const newArea = currentArea + areaDifference * step;
            scaledRadius = Math.sqrt(newArea / Math.PI) / 5;

            circle
              .transition()
              .duration(animationDuration / 5)
              .ease(d3.easeCubic)
              .attr("r", scaledRadius)
              .on("end", () => intermediateStep(step + 1));
          } else {
            currentYear += 5;
            updateCircle();
          }
        }

        intermediateStep();
      }
    }
  }

  // Start the animation
  updateCircle();
}

{
  /**function animateCircle(circle, city) {
  let currentYear = 1950;
  const arrayDisplay = document.getElementById('arrayDisplay');
  const animationDuration = parseInt(
    document.getElementById("animationDuration").value,
    10
  );
  console.log("Animation duration:", animationDuration);

  function updateCircle() {
    if (currentYear <= 2050) {
      const area = city[currentYear];
      let scaledRadius = (Math.sqrt(area / Math.PI)) / 5;
      arrayDisplay.innerHTML = currentYear;

      function intermediateStep(step = 0) {
        if (step < 100) {
          // Increase radius by 10%
          scaledRadius *= 1.001;

          circle
            .transition()
            .duration(animationDuration / 100) // divide by 5 for intermediate steps
            .ease(d3.easeCubic)
            .attr("r", scaledRadius)
            .on("end", () => intermediateStep(step + 1));
        } else {
          // After 5 intermediate steps, move to the next year
          currentYear += 5;
          updateCircle();
        }
      }

      // Start the intermediate animation steps
      intermediateStep();
    }
  }

  // Start the animation
  updateCircle();
} */
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
    .style("fill", importantCityCenter);

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
  "028",
  "036",
  "044",
  "050",
  "052",
  "084",
  "072",
  "096",
  "120",
  "124",
  "196",
  "212",
  "748",
  "242",
  "266",
  "270",
  "288",
  "308",
  "328",
  "356",
  "388",
  "404",
  "296",
  "426",
  "454",
  "458",
  "462",
  "470",
  "480",
  "508",
  "516",
  "520",
  "554",
  "566",
  "586",
  "598",
  "646",
  "659",
  "662",
  "670",
  "882",
  "690",
  "694",
  "702",
  "090",
  "710",
  "144",
  "834",
  "768",
  "776",
  "780",
  "798",
  "800",
  "826",
  "548",
  "894",
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
  console.log("COuntires", countries);
  g.selectAll("path")
    .data(countries)
    .enter()
    .append("path")
    .attr("d", path)
    .attr("stroke", function(d) {
      // Define the condition to check if the border should be removed
      if (borderTransparent) {
        return "transparent"; // or "transparent" to remove the border
      } else {
        return borderColor; // default border color
      }
    }).attr("fill", function (d) {
      // Check if the country is in the Commonwealth and set the color
      return commonwealthCountriesNumeric.includes(d.id)
        ? commonwealthColor
        : countryColor;
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
  var latitude = parseFloat(3.20);
  var longitude = parseFloat(73.22);

  if (!isNaN(latitude) && !isNaN(longitude)) {
    // Add a red point at the specified coordinates
    g
      .append("circle")
      .attr("cx", projection([longitude, latitude])[0])
      .attr("cy", projection([longitude, latitude])[1])
      .attr("r", 1) // Adjust the size of the point as needed
      .style("fill", "blue");
  } else {
    alert("Please enter valid latitude and longitude values.");
  }
}

// Rest of your existing code for drawing the map and initial circles goes here
const yearArray = Array.from({ length: 20 }, (_, index) => 1950 + index * 5);
addRedPoint()
// Function to update the content of the div with the current array element

// Call the function to start the process
