# Clean Workspace with React TS and Node TS

## Included:

- basic tsconfig, eslint and prettier configuration

<br/>

- React App (v18.2.0) with:

  - routing (v6.8.1)
  - styled components (v5.3.6) (with basic global and theme schemes)

<br/>

- Node API with:

  - express (v4.18.2)
  - cors (v2.8.5)
  - mongoose (v7.0.0)
  - dotenv (v16.0.0)
  - morgan (v1.10.0)

<br/>
<hr/>
<br/>

## Available Scripts

In the workspace directory, you can run:

### `pnpm website:dev`

Runs the website project in the development mode.

### `pnpm api:serve`

Build and serve the api project.

> notice that you need a running mongodb instance to run the api. You can use the following command to create a mongodb container:

> `docker run -d -p 27017:27017 --name mongo-db mongo`

<br>

> if you created the container with the name `mongo-db` you can use the command `docker start mongo-db` to start the container once it is stopped.
