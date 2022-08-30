export const initialPlantState = { soil: 1, water: 0, light: 0};


// This function stores our state.

export const storeState = () => {
  let currentState = {};
  return (stateChangeFunction = state => state) => {
    const newState = stateChangeFunction(currentState);
    currentState = {...newState};
    return newState;
  };
};
export const plantState = storeState(initialPlantState);
export const stateControl = storeState();

// This is a function factory. We can easily create more specific functions that alter a plant's soil, water, and light to varying degrees.

export const changeState = (prop) => {
  return (value) => {
    return (state) => ({
      ...state,
      [prop] : (state[prop] || 0) + value
    });
  };
};

//Assign plants a name property
export const nameChange = (nameProp) => {
  return (value) => {
    return (state) => ({
      ...state,
      [nameProp] : value
    });
  };
};

export const newName = nameChange("name");


// const monstera = canBloom("monstera");
// //Plant abilities
// const canBloom = (plant) => ({
//     bloom: (pedals) => {
//       return `The ${plant.name} blooms its ${pedals}.`
//     }
//   });


// const bloomingPlant = (name) => {
//   let plant = {
//     name
//   }

//   return { ...plant, ...canBloom(plant)};
// };

// We create four functions using our function factory. We could easily create many more.
export const initPlant = changeState();
export const feed = changeState("soil")(1);
export const blueFood = changeState("soil")(5);

export const hydrate = changeState("water")(1);
export const superWater = changeState("water")(5);
export const koolaid = changeState("water")(-10);

export const giveLight = changeState("light")(5);


