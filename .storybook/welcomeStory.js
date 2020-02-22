import React from 'react'
import { storiesOf } from '@storybook/react'
import { version } from '../lerna.json'

storiesOf('FAB', module).add(`v${version} 🎉`, () => <h1>Welcome to {`FAB v${version}`}</h1>)
