---
to: src/index.ts
inject: true
after: ENUM
---
export { <%= h.changeCase.pascal(name) %> } from './enums/<%= h.changeCase.pascal(name) %>.enum'<% -%>
