import 'whatwg-fetch'
import faker from 'faker'
import fetchMock from 'fetch-mock'

const COLLECTION_MAX = 5
export const COLLECTION_ENDPOINT = 'collection_endpoint'
export const ITEM_ENDPOINT = 'item_endpoint'
export const COLLECTION_ITEM_ENDPOINT = 'collection'

export const getHash = () => Math.floor(Math.random() * 1e10)
export const getCollectionEndpoint = () => `/api/collection${getHash()}`
export const getItemEndpoint = () => `/api/item${getHash()}`

export const generateItem = () => ({
  id: faker.random.uuid(),
  firstName: faker.name.firstName(),
  lastName: faker.name.lastName(),
  description: faker.lorem.paragraph(),
})

export const generateCollection = () =>
  Array(Math.ceil(Math.random() * COLLECTION_MAX))
    .fill(null)
    .map(generateItem)

export class MockApi {
  state = generateItem()

  constructor(options = {}) {
    let { isCollection = true } = options

    if (isCollection) {
      this.state = generateCollection()
    }
  }

  get = () => this.state

  post = payload => ({
    id: faker.random.uuid(),
    ...payload,
  })

  patch = payload => payload

  put = payload => payload

  delete = payload => undefined

  reduce = (action, payload) => {}
}
