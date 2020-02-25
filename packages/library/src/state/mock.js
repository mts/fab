import { dogRandomImage, catRandomImage } from '../../../client/src/pattern/atom/Image/__tests__/Image.int.render'

export const mockAppState = {
  context: {
    isRunningOnLocalHost: true,
    isRunningOnGitHubPages: false,
    isRunningOnHeroku: false,
  },
  api: {
    rest: {
      dog: {
        randomImage: {
          src: dogRandomImage.src,
          alt: dogRandomImage.alt,
          breed: dogRandomImage.breed,
        },
      },
      cat: {
        randomImage: {
          src: catRandomImage.src,
          alt: catRandomImage.alt,
          breed: catRandomImage.breed,
        },
      },
    },
  },
  ui: {},
}
