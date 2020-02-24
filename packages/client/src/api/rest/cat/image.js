export const getRandomCatImageByBreed = async breed => {
  const url = `https://api.thecatapi.com/v1/images/search?breed_ids=${breed}`

  const response = await window.fetch(url)
  return response.json()
}
