
const SERVICE_SELECTED = 'SERVICE_SELECTED';
const FOOD_SELECTED = 'FOOD_SELECTED'

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
