import { plant1State, changeState, feed, blueFood, hydrate, superWater, koolaid, giveLight} from "../src/plant.js";

describe ("Plant", () => {

  test('feed should increase soil value by 1', () => {
    let plant1State = {soil: 0, water: 0, light: 0 };
    expect(feed(plant1State)).toEqual({soil: 1, water: 0, light: 0})
  });

  test('blueFood should increase soil value by 5', () => {
    let plant1State = {soil: 0, water: 0, light: 0 };
    expect(blueFood(plant1State)).toEqual({soil: 5, water: 0, light: 0})
  });

  test('hydrate should increase water value by 1', () => {
    let plant1State = {soil: 0, water: 0, light: 0 };
    expect(hydrate(plant1State)).toEqual({soil: 0, water: 1, light: 0})
  });

  test('superWater should increase water value by 5', () => {
    let plant1State = {soil: 0, water: 0, light: 0 };
    expect(superWater(plant1State)).toEqual({soil: 0, water: 5, light: 0})
  });

  test('koolaid should decrease water value by 10', () => {
    let plant1State = {soil:0, water: 0, light: 0 };
    expect(koolaid(plant1State)).toEqual({soil: 0, water: -10, light: 0})
  });

  test('giveLight should increase light value by 5', () => {
    let plant1State = {soil: 0, water: 0, light:0 };
    expect(giveLight(plant1State)).toEqual({soil: 0, water: 0, light: 5});
  })
})

