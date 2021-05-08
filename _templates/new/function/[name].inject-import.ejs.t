---
to: src/index.ts
inject: true
after: FUNCTION
---
export { <%= h.changeCase.camel(name) %> } from './functions/<%= h.changeCase.camel(name) %>/<%= h.changeCase.camel(name) %>'<% -%>
