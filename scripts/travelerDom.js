
import travelerObject from "./travelerFactory.js"

const travelerDom = (obj) => {
  const DOMString =
          `        
     <div id="name" class="name">
          <h3>${obj.name}</h3>
      </div>
      <div id="description" class="description">
          <p>${obj.description}</p>
      </div>
      <div id="cost" class="cost">
          <p>${obj.cost}</p>
      </div>      
`
  return DOMString;
}

export default travelerDom;