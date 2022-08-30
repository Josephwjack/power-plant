export const initialMonsteraState = { soil: 1, water: 0, light: 0};


// This function stores our state.

  const storeState = () => {
  let currentState = {};
  return (stateChangeFunction = state => state) => {
    const newState = stateChangeFunction(currentState);
    currentState = {...newState};
    return newState;
  }
}
export const monsteraState = storeState(initialMonsteraState);
export const stateControl = storeState();

// This is a function factory. We can easily create more specific functions that alter a plant's soil, water, and light to varying degrees.

export const changeState = (prop) => {
  return (value) => {
    return (state) => ({
      ...state,
      [prop] : (state[prop] || 0) + value
    })
  }
}

//Assign plants a name property
export const nameChange = (nameProp) => {
  return (value) => {
    return (state) => ({
      ...state,
      [nameProp] : value
    })
  }
}


const monstera = canEat("monstera")
//Plant abilities
const canEat = function(creature) {
  const obj = {
    eat: function(food) {
      return `The ${creature} eats the ${food}.`
    }
  }
  return obj;
}

// We create four functions using our function factory. We could easily create many more.

export const feed = changeState("soil")(1);
export const blueFood = changeState("soil")(5);

export const hydrate = changeState("water")(1);
export const superWater = changeState("water")(5);
export const koolaid = changeState("water")(-10);

export const giveLight = changeState("light")(5);


