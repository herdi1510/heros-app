/*****************************
 * environment.js
 * path: '/environment.js' (root of your project)
 ******************************/

import * as Updates from 'expo-updates'
import { useContext } from 'react'
import Configuration from './src/ui/context/configuration'

const getEnvVars = (env = Updates.releaseChannel) => {
  const configuration = useContext(Configuration.Context)

  console.log('configuration', configuration)

  if (env === 'production' || env === 'staging') {
    return {
      GRAPHQL_URL: 'https://enatega-multivendor.up.railway.app/graphql',
      WS_GRAPHQL_URL: 'wss://enatega-multivendor.up.railway.app/graphql',
      SENTRY_DSN: configuration.restaurantAppSentryUrl,
      PRIMERY_COLOR: configuration.primaryColor,
      SECONDARY_COLOR: configuration.secondaryColor,
      TERTIARY_COLOR: configuration.tertiaryColor
    }
  }
  return {
    GRAPHQL_URL: 'http://10.97.37.78:8001/graphql',
    WS_GRAPHQL_URL: 'ws://10.97.37.78:8001/graphql',
    SENTRY_DSN: configuration.restaurantAppSentryUrl,
    PRIMERY_COLOR: configuration.primaryColor,
    SECONDARY_COLOR: configuration.secondaryColor,
    TERTIARY_COLOR: configuration.tertiaryColor
    // SENTRY_DSN:
    //   'https://91b55f514a2c4708845789d6e79abf10@o1103026.ingest.sentry.io/6131933'
  }
}

export default getEnvVars
