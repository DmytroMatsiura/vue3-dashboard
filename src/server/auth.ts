import { Model, Response, type Registry, Server } from 'miragejs'
import type { ModelDefinition } from 'miragejs/-types'
import type Schema from 'miragejs/orm/schema'

import type { User } from '@/types/base/user'
import type { EmptyObject } from '@/types/primary'

export const UserModel: ModelDefinition<User> = Model.extend({})

type AppRegistry = Registry<
  {
    user: typeof UserModel
  },
  EmptyObject
>
type AppSchema = Schema<AppRegistry>

const namespace = '/auth'

export function authRoutes(server: Server) {
  server.post(`${namespace}/login`, (schema: AppSchema, request) => {
    console.log('authRoutes - login')
    const data = JSON.parse(request.requestBody)
    const { email } = data
    const user = schema.db.users.findBy({ email })

    if (user) {
      return { user, token: '123' }
    } else {
      return new Response(401, {}, { error: 'Invalid email or password' })
    }
  })

  server.post(`${namespace}/signup`, (schema: AppSchema, request) => {
    const data = JSON.parse(request.requestBody)
    const { email } = data
    const existingUser = schema.db.users.findBy({ email })

    if (existingUser) {
      return new Response(400, {}, { error: 'Email already exists' })
    } else {
      const user = schema.create('user', { attrs: { email } })
      return { user, token: '123' }
    }
  })

  server.post(`${namespace}/reset-password`, (schema: AppSchema, request) => {
    const data = JSON.parse(request.requestBody)
    const { email } = data
    const user = schema.db.users.findBy({ email })

    if (user) {
      // Simulate password reset
      return { message: 'Password reset link sent to your email' }
    } else {
      return new Response(404, {}, { error: 'Email not found' })
    }
  })
}
