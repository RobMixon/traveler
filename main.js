import travelerDom from "./scripts/travelerDom.js"

console.log("working imports")

const travelObj = {
    name: "yellowstone",
    description: "awesome",
    cost:"$1000"
}

const travelArray = [
    {
        name:"Florida",
        description:"beaches",
        cost: "200"
    },
    {
        name:"Mexico",
        description:"jugnle",
        cost: "1000"
    },
    {
        name:"Europe",
        description:"castles",
        cost: "4000"
    },
]



const container = document.querySelector("#travelerContainer");


travelArray.forEach(traveler => container.innerHTML+= travelerDom(traveler));

