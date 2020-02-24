export const getRandomCatImageByBreed = async breed => {
  const url = `https://api.thecatapi.com/v1/images/search?breed_ids=${breed}&api_key=${process.env.CAT_API_KEY}`
  const response = await window.fetch(url)

  return response.json()
}
