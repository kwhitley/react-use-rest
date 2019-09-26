import 'whatwg-fetch'
import fetchMock from 'fetch-mock'
import { act } from '@testing-library/react-hooks'
import { extractHook, example, type, defaults, setup } from '../lib'

export const autoload = () =>
  describe('autoload' + type('boolean') + defaults('true'), () => {
    it('loads data from endpoint immediately with default of { autoload: true }', async () => {
      const { useCollection, collection } = setup()
      const { hook, compare, pause } = extractHook(() => useCollection())
      await pause()
      compare('data', collection)
    })

    it('does not autoload if { autoload: false }', async () => {
      const { useCollection } = setup()
      const { hook, compare, pause } = extractHook(() => useCollection({ autoload: false }))
      compare('isLoading', false)
    })
  })
