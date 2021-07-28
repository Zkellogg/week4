const menuDiv = document.getElementById("menuDiv");
const fullMenuButton = document.getElementById("fullMenuButton");
const startersDiv = document.getElementById("startersDiv")
const entreesDiv = document.getElementById("entreesDiv")
const desertsDiv = document.getElementById("desertsDiv")


// Function to populate full menue from given array #menuDiv
    const menuItems = dishes.map(function (dish) {
    const menuItem = `
        
        <div> 
        <b>${dish.title}</b>
        <ul>
                <li><img src="${dish.imageURL}" id="foodPic"></li>
                <li>${dish.description}</li>
                <li> Price in dollars: ${dish.price}</li>  
            </ul>
            </div>
        `;
    return menuItem;
  });
// Pushes HTML format to page 
  menuDiv.innerHTML = menuItems.join("");

  // function to filter starter items from dishes array

  const starterItemsArray = dishes.filter(function(dish){
    if(dish.course == "Starters"){
        return dish 
    }
  })
 // function to pop starter items to html div #startersDiv 
const starterItems = starterItemsArray.map(function(dish){
    const starterItem = `
    <div> 
    <b>${dish.title}</b>
    <ul>
            <li><img src="${dish.imageURL}" id="foodPic"></li>
            <li>${dish.description}</li>
            <li> Price in dollars: ${dish.price}</li>  
        </ul>
        </div>
    `
    return starterItem
})

startersDiv.innerHTML = starterItems.join("")

  // function to filter entree items from dishes array

  const entreeItemsArray = dishes.filter(function(dish){
    if(dish.course == "Entrees"){
        return dish 
    }
  })
 // function to pop entree items to html div #entreesDiv 
const entreeItems = entreeItemsArray.map(function(dish){
    const entreeItem = `
    <div> 
    <b>${dish.title}</b>
    <ul>
            <li><img src="${dish.imageURL}" id="foodPic"></li>
            <li>${dish.description}</li>
            <li> Price in dollars: ${dish.price}</li>  
        </ul>
        </div>
    `
    return entreeItem
})

entreesDiv.innerHTML = entreeItems.join("")

  // function to filter desert items from dishes array

  const desertItemsArray = dishes.filter(function(dish){
    if(dish.course == "Desserts"){
        return dish 
    }
  })
 // function to pop entree items to html div #entreesDiv 
const desertItems = desertItemsArray.map(function(dish){
    const desertItem = `
    <div> 
    <b>${dish.title}</b>
    <ul>
            <li><img src="${dish.imageURL}" id="foodPic"></li>
            <li>${dish.description}</li>
            <li> Price in dollars: ${dish.price}</li>  
        </ul>
        </div>
    `
    return desertItem
})

desertsDiv.innerHTML = desertItems.join("")





// console.log(menuItems);
// const title = dish.title
// const description = dish.description
// const course = dish.course
// const id = dish.id
// const price = dish.price
