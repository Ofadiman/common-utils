---
to: src/functions/<%= h.changeCase.camel(name) %>/<%= h.changeCase.camel(name) %>.ts
---
import { Args, Result } from './<%= h.changeCase.camel(name) %>.types'

export const <%= h.changeCase.camel(name) %> = (args: Args): Result => {}
