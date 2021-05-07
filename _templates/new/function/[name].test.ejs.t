---
to: src/functions/<%= h.changeCase.camel(name) %>/<%= h.changeCase.camel(name) %>.test.ts
---
import { <%= h.changeCase.camel(name) %> } from './<%= h.changeCase.camel(name) %>'
import * as t from './<%= h.changeCase.camel(name) %>.test.utils'

describe('<%= h.changeCase.camel(name) %> function', () => {
  test('should be defined', () => {
    expect(<%= h.changeCase.camel(name) %>).toBeDefined()
  })
})
