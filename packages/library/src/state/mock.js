import { placeholderURL } from '../client/constant'

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
          src: placeholderURL,
          alt: 'random',
        },
      },
      cat: {
        randomImage: {
          src: placeholderURL,
          alt: 'random',
        },
      },
    },
  },
  ui: {},
}
