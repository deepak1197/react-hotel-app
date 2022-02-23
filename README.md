
### `Global dependencies`

Install node v14+

Install json server
npm install -g json-server

npx json-server --port 3001 --watch db/db.json  

### `App Architecure`
Containers : Statefull container Components 
Components : Reusable stateless components

Classes named using BEM (Block element modifier) naming convention

sass
    base
    -base:  css declarations like css reset.
    _typography: partial containing css rules for text / typography.

    abstract
    _variables: Partial containing variables.

    components
    Partials containing css for UI components.

