import { createServer, Server } from 'miragejs'
import { authRoutes, UserModel } from './auth'

export function makeServer({ environment = 'development' } = {}) {
  return createServer({
    environment,

    models: {
      user: UserModel,
    },

    routes() {
      this.namespace = 'api'

      authRoutes(this as Server)
    },
  })
}
