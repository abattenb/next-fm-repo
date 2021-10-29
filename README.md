# Federated Module React -> NextJS issue

```bash
// For Next Host App
// localhost:3000
cd ./next
npm i
npm run start
```

```bash
// For React Remote App
// localhost:3002
cd ./react
npm i
npm run dev
```

Importing a standard button works just fine.
Importing a button with a React Hook errors out.

_Can you import a React app into a NextJS app via Federated Modules, and does it need the `withFederatedSidecar()`?_