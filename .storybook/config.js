import React from 'react'
import { configure, addDecorator } from '@storybook/react'
import { RouterContext } from 'next/dist/next-server/lib/router-context'
import { action } from '@storybook/addon-actions'

addDecorator((storyFn) => (
  <RouterContext.Provider
    value={{
      pathname: '/',
      basePath: '',
      push: (url, as) => {
        action('push')()
        return Promise.resolve(true)
      },
      replace: (url, as) => {
        action('replace')()
        return Promise.resolve(true)
      },
      reload: () => {
        return Promise.resolve(true)
      },
      prefetch: () => {
        return Promise.resolve(true)
      },
    }}
  >
    {storyFn()}
  </RouterContext.Provider>
))

// automatically import all files ending in *.stories.js
// const req = require.context('../stories', true, /.stories.js$/)

// the first argument can be an array too, so if you want to load from different locations or
// different extensions, you can do it like this: configure([req1, req2], module)
// configure(req, module)
