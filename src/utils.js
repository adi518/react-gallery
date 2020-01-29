import { useEffect, useCallback } from 'react'
import { useSelector, shallowEqual } from 'react-redux'

export const mapDispatchToUseCallback = (dispatch, actions) =>
  Object.entries(actions).reduce(
    (accumulator, [name, action]) => ({
      [name]: useCallback(() => dispatch(action), [dispatch]),
      ...accumulator
    }),
    {}
  )

export const useShallowSelector = selector =>
  useSelector(selector, shallowEqual)

export const useEffectSafe = (
  effect,
  afterEffect,
  { cleanup = () => {}, deps = undefined } = {}
) => {
  let isMounted = false
  useEffect(() => {
    isMounted = true
    ;(async () => {
      await effect()
      if (isMounted) afterEffect()
    })()
    return () => {
      isMounted = false
      cleanup()
    }
  }, deps)
}

export const useEffectOnceSafe = (...args) => {
  const options = { ...args[2], ...{ deps: [] } }
  useEffectSafe.call(this, ...args, options)
}

export const getDeferredPromise = () => {
  const deferred = {}
  const promise = new Promise((resolve, reject) => {
    deferred.resolve = resolve
    deferred.reject = reject
  })
  return { ...deferred, promise }
}

export const loadImage = async (src, { delay = 1000 } = {}) => {
  const image = new Image()
  const wait = new Promise(resolve => setTimeout(resolve, delay))
  const { resolve, promise: onLoad } = getDeferredPromise()
  image.onload = resolve
  image.src = src
  return Promise.all([wait, onLoad])
}
