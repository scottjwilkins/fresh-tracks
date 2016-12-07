
export const SERVICE_SELECTED = 'SERVICE_SELECTED';
export const FOOD_SELECTED = 'FOOD_SELECTED';
export const APP_SELECTED = 'APP_SELECTED';
export const BUFFET_SELECTED = 'BUFFET_SELECTED';
export const BEVERAGE_SELECTED = 'BEVERAGE_SELECTED';

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
export function handleCheckboxChangeBuffet(buffet) {
  return {
    type: BUFFET_SELECTED,
    payload: buffet
  }
}
export function handleCheckboxChangeBeverages(beverage) {
  return {
    type: BEVERAGE_SELECTED,
    payload: beverage
  }
}
