
export const SERVICE_SELECTED = 'SERVICE_SELECTED';
export const NAVBAR_SELECTED = 'NAVBAR_SELECTED';
export const FOOD_SELECTED = 'FOOD_SELECTED';
export const APP_SELECTED = 'APP_SELECTED';
export const BEVERAGE_SELECTED = 'BEVERAGE_SELECTED';
export const DESSERT_SELECTED = 'DESSERT_SELECTED';
export const MUNCHIES_SELECTED = 'MUNCHIES_SELECTED';
export const GLASSWARE_SELECTED = 'GLASSWARE_SELECTED';
export const BREAD_SELECTED = 'BREAD_SELECTED';
export const SIDES_SELECTED = 'SIDES_SELECTED';
export const SALAD_SELECTED = 'SALAD_SELECTED';
export const ENTREES_SELECTED = 'ENTREES_SELECTED';
export const CLIENT_INFO_SELECTED = 'CLIENT_INFO_SELECTED';
export const ADDITIONAL_INFO = 'ADDITIONAL_INFO';


export function selectService(service) {
  return {
    type: SERVICE_SELECTED,
    payload: service
  }
}
export function selectFood(food) {
  return {
    type: FOOD_SELECTED,
    payload: food
  }
}
export function handleCheckboxChangeApp(app) {
  return {
    type: APP_SELECTED,
    payload: app
  }
}
export function handleCheckboxChangeBeverages(beverage) {
  return {
    type: BEVERAGE_SELECTED,
    payload: beverage
  }
}
export function handleCheckboxChangeDessert(dessert) {
  return {
    type: DESSERT_SELECTED,
    payload: dessert
  }
}
export function handleCheckboxChangeMunchies(munchies) {
  return {
    type: MUNCHIES_SELECTED,
    payload: munchies
  }
}
export function handleCheckboxChangeGlassware(glassware) {
  return {
    type: GLASSWARE_SELECTED,
    payload: glassware
  }
}
export function handleCheckboxChangeBread(bread) {
  return {
    type: BREAD_SELECTED,
    payload: bread
  }
}
export function handleCheckboxChangeSalad(salad) {
  return {
    type: SALAD_SELECTED,
    payload: salad
  }
}
export function handleCheckboxChangeSides(sides) {
  return {
    type: SIDES_SELECTED,
    payload: sides
  }
}
export function handleCheckboxChangeEntrees(entrees) {
  return {
    type: ENTREES_SELECTED,
    payload: entrees
  }
}
export function selectNavbar(choice) {
  return {
    type: NAVBAR_SELECTED,
    payload: choice
  }
}
export function handleClientInfo(props) {
  return {
    type: CLIENT_INFO_SELECTED,
    payload: props
  }
}
export function handleAdditionalInfo(props) {
  return {
    type: ADDITIONAL_INFO,
    payload: props
  }
}
