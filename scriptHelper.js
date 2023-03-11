const { listenerCount } = require('jsdom/lib/jsdom/virtual-console');

// Write your helper functions here!
function validateInput(testInput){
    if (testInput === "") {
        return "Empty";
}   else if (!isNaN(testInput)){
        return "is a number";
} else if (isNaN(testInput)){
        return "Not a Number";
}
require('isomorphic-fetch');
}

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   let missionTarget = document.getElementById("missionTarget");
    missionTarget.innerHTML = `
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${name}</li>
                    <li>Diameter: ${diameter}</li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: ${distance}</li>
                    <li>Number of Moons: ${moons}</li>
                </ol>
                <img src="${imageUrl}">
            `;
}

 {
   
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    let pilotName = document.getElementById("pilotName");
    let pilotStatus = document.getElementById("pilotStatus");
    let copilotName = document.getElementById("copilotName");
    let copilotStatus = document.getElementById("copilotStatus");
    let fuelLevel = Number(document.getElementById("fuelStatus"));
    let cargoLevel = Number(document.getElementById("cargoStatus"));

    // Updates pilotStatus and copilotStatus to "Ready" if the input is valid.
    if (validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" || validateInput(fuelLevel) === "Empty" || validateInput(cargoLevel) === "Empty") {
        alert("All fields are required!");
    } else if (validateInput(pilot) === "is a number" || validateInput(copilot) === "is a number" || validateInput(fuelLevel) === "not a number" || validateInput(cargoLevel) === "not a number"){
        alert("Make sure to enter valid information for each field!") 
    } else {
    // Updates pilotStatus and copilotStatus to include the pilot's and co-pilot's names.        
        list.style.visibility = "visible";
        pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
        copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
        let launchStatus = document.getElementById("launchStatus");
    }
 
    // If the user submits a fuel level that is too low (less than 10,000 gallons), change the list to visible with an updated fuel status stating that there is not enough fuel for the journey.
    // If the user submits a cargo mass that is too heavy (more than 10,000 kilograms), change the list to visible with an updated cargo status stating that there is too much mass for the shuttle to take off.
    // If the user submits a cargo mass that is too heavy (more than 10,000 kilograms), change the list to visible with an updated cargo status stating that there is too much mass for the shuttle to take off.
    // If the shuttle is ready for launch, update the launch status stating that the shuttle is ready for launch.
    if (fuelLevel < 10000 && cargoLevel <= 10000) {
        fuelLevel.innerHTML = "There is not enough fuel for the journey.";
        cargoLevel.innerHTML = "Cargo mass exceeds limits.";
        launchStatus.innerHTML = "Shuttle not ready for launch";
        launcStatus.style.color = "red";
    } else if (cargoLevel > 10000) {
        cargoLevel.innerHTML = "There is too much mass for the shuttle to take off.";
        document.getElementById("launchStatus").innerHTML = "Shuttle not ready for launch";
        document.getElementById("launchStatus").style.color = "red";
    } else if (fuelLevel > 10000 && cargoLevel < 10000) {
        document.getElementById("launchStatus").innerHTML = "Shuttle is ready for launch";
        document.getElementById("launchStatus").style.color = "green";
    } else {
        fuelLevel.innerHTML = "Fuel level sufficient for launch.";
        cargoLevel.innerHTML = "Cargo mass sufficient for launch.";
        launchStatus.innerHTML = "Shuttle is ready for launch";
        launchStatus.style.color = "green";
    }
    
}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        return response.json();
        });

    return planetsReturned;
}

function pickPlanet(planets) {
    let randomPlanet = Math.floor(Math.random() * planets.length);
    return planets[randomPlanet];
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
