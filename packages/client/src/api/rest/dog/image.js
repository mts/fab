import { windowObjectExists } from '../../../../../library/src/environment'

export const getRandomDogImageByBreed = async breed => {
  const url = `https://dog.ceo/api/breed/${breed}/images/random`

  if (windowObjectExists) {
    const response = await window.fetch(url)
    return response.json()
  }

  return []
}
