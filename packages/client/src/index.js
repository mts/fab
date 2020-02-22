/* eslint global-require: 0 */

import './index.scss'
import { windowObjectExists, isRunningOnLocalHostViaDomain, isRunningOnGitHubPages } from '../../library/src/environment'
import { getAppDefaultStateFromData } from '../../library/src/state/default'

require('@babel/register')({
  extensions: ['.js', '.jsx'],
  ignore: [],
})

if (windowObjectExists) {
  require('whatwg-fetch')

  if (isRunningOnLocalHostViaDomain || isRunningOnGitHubPages) {
    window.appDefaultState = getAppDefaultStateFromData({
      isRunningOnLocalHostViaDomain,
      isRunningOnGitHubPages,
      isRunningOnHeroku: false,
    })
  }

  require('./clientRenderApp')
}
