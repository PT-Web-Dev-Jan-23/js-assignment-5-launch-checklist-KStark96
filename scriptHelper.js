const { listenerCount } = require('jsdom/lib/jsdom/virtual-console');

// Write your helper functions here!
validateInput(userInput){
    if (userInput == "") {
        return "Empty";
}   else if (typeof userInput == Number){
        return "is a number";
} else if (isNaN(userInput)){
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

function validateInput(testInput) {
   
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    let pilotName = document.getElementById("pilotName");
    let pilotStatus = document.getElementById("pilotStatus");
    let copilotName = document.getElementById("copilotName");
    let copilotStatus = document.getElementById("copilotStatus");
    let fuelLevel = Number(document.getElementById("fuelLevel"));
    let cargoLevel = Number(document.getElementById("cargoLevel"));
    // Update pilotStatus and copilotStatus to include the pilot's and co-pilot's names.
    pilotStatus = (`Pilot ${pilotName} is ready for launch`);
    copilotStatus = (`Co-pilot ${copilotName} is ready for launch`);
    //
    // If the user submits a fuel level that is too low (less than 10,000 gallons), change the list to visible with an updated fuel status stating that there is not enough fuel for the journey.
    if (fuelLevel < 10000) {
        document.getElementById("faultyItems").style.visibility = "visible";
        document.getElementById("fuelStatus").innerHTML = "There is not enough fuel for the journey.";
        document.getElementById("launchStatus").innerHTML = "Shuttle not ready for launch";
        document.getElementById("launchStatus").style.color = "red";
    }
    // If the user submits a cargo mass that is too heavy (more than 10,000 kilograms), change the list to visible with an updated cargo status stating that there is too much mass for the shuttle to take off.
    if (cargoLevel > 10000) {
        document.getElementById("faultyItems").style.visibility = "visible";
        document.getElementById("cargoStatus").innerHTML = "There is too much mass for the shuttle to take off.";
        document.getElementById("launchStatus").innerHTML = "Shuttle not ready for launch";
        document.getElementById("launchStatus").style.color = "red";
    }
    // If the shuttle is ready for launch, update the launch status stating that the shuttle is ready for launch.
    if (fuelLevel > 10000 && cargoLevel < 10000) {
        document.getElementById("launchStatus").innerHTML = "Shuttle is ready for launch";
        document.getElementById("launchStatus").style.color = "green";
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
    let randomPlanet = planets[Math.floor(Math.random() * planets.length)];
    return randomPlanet;
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
