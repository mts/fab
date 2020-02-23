import {
  windowObjectExists,
  isRunningOnLocalHostViaDomain as isRunningOnLocalHostViaDomainDefault,
  isRunningOnGitHubPages as isRunningOnGitHubPagesDefault,
} from '../environment'

export function getAppDefaultStateFromWindow() {
  return windowObjectExists ? window.appDefaultState : {}
}

export function getAppDefaultStateFromData({ isRunningOnLocalHost, isRunningOnGitHubPages, isRunningOnHeroku }) {
  return {
    context: {
      isRunningOnLocalHost: isRunningOnLocalHost || isRunningOnLocalHostViaDomainDefault,
      isRunningOnGitHubPages: isRunningOnGitHubPages || isRunningOnGitHubPagesDefault,
      isRunningOnHeroku,
    },
    api: {
      rest: {
        dog: {
          randomImage: {
            src: 'https://via.placeholder.com/300',
            alt: 'random',
          },
        },
      },
    },
    ui: {},
  }
}
