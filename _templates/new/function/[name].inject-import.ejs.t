---
to: src/index.ts
inject: true
append: true
---
export { <%= h.changeCase.camel(name) %> } from './functions/<%= h.changeCase.camel(name) %>/<%= h.changeCase.camel(name) %>'<% -%>
