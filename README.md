# NextJS + Apollo Graphql

- NextJS
- Apollo Graphql
- REST Data Source (apollo-datasource-rest)

```
.
└── src
    ├── apollo // graphql schemas, operations etc... 
    │   ├── client.js
    │   ├── resolvers.js
    │   ├── schema.js
    │   └── type-defs.js
    ├── components // all react components
    │   ├── games-list
    │   │   ├── games-list.js
    │   │   └── indes.js
    │   └── search
    │       ├── search.js
    │       └── index.js
    ├── data-sources
    │   └── index.js // rest apis
    └── pages
        ├── api
        │   └── graphql.js // graphql server (like a BFF)
        ├── [slug].js
        └── index.js
```

# How to use

Install it and run:

```bash
yarn
yarn dev
```

App: [http://localhost:5000](http://localhost:5000)

Graphql client [http://localhost:5000/api/graphql](http://localhost:5000/api/graphql)