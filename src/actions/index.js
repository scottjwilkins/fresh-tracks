
export const SERVICE_SELECTED = 'SERVICE_SELECTED';
export const FOOD_SELECTED = 'FOOD_SELECTED'

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
