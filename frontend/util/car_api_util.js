export const getAllCars = () => {
  return $.ajax({url: "/api/cars", method: 'GET'})
}

export const getCar = (id) => {
  return $.ajax({url: `api/cars/${id}`, method: 'GET'})
}

export const getSearchCars = (search) => {
  return $.ajax({url: "/api/cars-search", method: 'GET', data: search})
}

export const postFavoriteCar = (id) => {
  return $.ajax({url: '/api/cars', method: 'POST', data: {car_id: id}})
}

export const deleteFavoriteCar = (id) => {
  return $.ajax({url: `api/cars/${id}`, method: 'DELETE', data: {car_id: id}})
}
