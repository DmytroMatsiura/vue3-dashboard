import { createServer } from 'miragejs'

export function makeServer({ environment = 'development' } = {}) {
  return createServer({
    environment,

    models: {},

    routes() {
      this.namespace = 'api'
    },
  })
}
