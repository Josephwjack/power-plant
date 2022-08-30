import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { plantState, hydrate, blueFood, giveLight} from "./plant.js";

$(document).ready(function() {

  // This function has side effects because we are using jQuery. Manipulating the DOM will always be a side effect. Note that we only use one of our functions to alter soil. You can easily add more.
  
    $('#feed').click(function() {
      const newState = plantState(blueFood);
      console.log(newState.soil);
      $('#soil-value').text(`Soil: ${newState.soil}`);
    });
  
  // This function doesn't actually do anything useful in this application — it just demonstrates how we can "look" at the current state (which the DOM is holding anyway). However, students often do need the ability to see the current state without changing it so it's included here for reference.
  
    $('#show-state').click(function() {
      // We just need to call stateControl() without arguments to see our current state.
      const currentState = plantState();
      $('#soil-value').text(`Soil: ${currentState.soil}`);
      $('#water-value').text(`Water: ${currentState.water}`);
    });

    $('#hydrate').click(function() {
      const newState = plantState(hydrate);
      $('#water-value').text(`Water: ${newState.water}`);
    });

    $('#give-light').click(function() {
      const newState = plantState(giveLight);
      $('#light-value').text(`Light: ${newState.light}`);
    });
  
    $('#newPlant').click(function(){
      let newPlant = {}
      const plantState = storeState(newPlant);
    });

  });
