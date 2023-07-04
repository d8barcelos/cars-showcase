
export async function fetchCars () {
  const headers = {
    'X-RapidAPI-Key': '20cd5a87d4mshc02fc84cecfca6bp13bbf4jsn2a5f973259f5',
    'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
  }

  const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla', {
    headers: headers,
  });

  const result = await response.json();

  return result
}