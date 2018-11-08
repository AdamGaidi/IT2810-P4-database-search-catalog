# Pokédex

> Gruppe 1 - Project 4 - IT2810 Webutvikling H18

<img src="design-sketches/pokedex.png" alt="Design mockup showing initial design of our Pokédex"/>

## Getting started

Running the backend of this project requires [docker](https://docs.docker.com/install/linux/docker-ce/ubuntu/#install-docker-ce) and [docker-compose](https://docs.docker.com/compose/install/), so go ahead and install those if you want to run the project locally.

### Setting up

Clone the project and install dependencies as such:

```sh
$ git clone git@gitlab.stud.idi.ntnu.no:it2810-h18/prosjekt3/gruppe01.git
# or if not using ssh $ git clone https://gitlab.stud.idi.ntnu.no/it2810-h18/prosjekt3/gruppe01.git
$ cd gruppe01
$ yarn # install the project dependencies
$ cd database && docker-compose up -d # Sets up and hosts the database at http://localhost:4466/
$ yarn server:dev # You need to run the backend to be able to populate the database with our script
$ node populate_database.js # Populates the database
```

Then you can run project with `yarn server:dev` in one tab and `yarn start` in the other and go to [localhost:3000](http://localhost:3000) to view the app.

### Useful scripts

In the project directory, you can run:

#### `yarn start`

> If you get an error mentioning that a module cannot be found, use the following command instead:
> `NODE_PATH=src/ && yarn start`
> This error happens because on some machines the configuration that gives us absolute imports is not being set correctly, and you need to manually set the config in your terminal. You usually only need to do this once.

Runs the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits. You will also see any lint errors in the console.

#### `yarn test`

Launches the test runner in the interactive watch mode. Runs all the `Jest` tests.

#### `yarn server:dev`

Run the GraphQL development server. To see the interactive API (the playground), go to [http://localhost:4000/graphql](http://localhost:4000/graphql). There you can see the documentation for the API and interact with it.

#### `yarn build`

Builds the app for production to the `build` folder. It correctly bundles React in production mode and optimizes the build for the best performance.

#### `yarn cypress:open`

Opens the cypress window where you can select a cypress tests to run.

#### `graphql playground --port=3500`

This command requires that you have `graphql-cli` installed globally on your computer, but allows you to see the playground
of both the database API and our project api in the same window,
which can be useful in development. The port flag is only used due to it running by default on port 3000, which clashes with the frontend, so this flag is only needed if running both.

```sh
$ npm install -g graphql-cli
```

#### `prisma deploy`

If making changes to the database model in `database/datamodel.prisma`, you need to run this command afterwards. This requires that `prisma` is globally installed
on your computer. After deploying the new model, it automatically
updates the schema that is used by our server for database queries.

```sh
$ npm install -g prisma
```

#### `prisma reset`

Reset/Empty the database. This requires that `prisma` is globally installed on your computer.

```sh
$ npm install -g prisma
```

## What our site does

Pokedex, search for type or name of pokemon.

## Teamwork

Lorem ipsum ...

### Git

Issues... Assigning, user stories, sub tasks, labelling, referencing issues.

In our previous project we tried using a dev branch to replace our master branch
until we were ready to hand it, but we decided against it for this project.
This was due to the findings that while it might be useful in a bigger project,
and we wanted to try it out, it was rather a small hindrance in such a small
project, and due to not having several releases of our app, were not able to
take advantage of it's good points.

## This project was built with...

Built using React, Redux, Relay(?) (or Apollo client), Express, Node, MySQL.
Use of pagination.

What happens when you search...

### Project structure

We’ve split our child components into the folders “components” and “containers”, following the pattern suggested here:  
[Dan Abramov on smart & dumb components](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0)

### Content of app

We got our data for the database of the pokedex from ...

### React

Lorem ipsum ...

### Redux

Lorem ipsum ...

### AJAX

We have used the Fetch API with async/await that comes with ES7 to handle asynchronous fetching. The data is saved in Redux ...

### Express

Lorem ipsum ... What is Express used for...

### GraphQL

Lorem ipsum ...
[https://www.apollographql.com/](https://www.apollographql.com/)

#### GraphQL client (frontend)

Lorem ipsum ...

[https://www.apollographql.com/client](https://www.apollographql.com/client)
and [apollo react](https://www.apollographql.com/docs/react/)

#### GraphQL server (backend)

Lorem ipsum ...
[apollo-server docs](https://www.apollographql.com/docs/apollo-server/)
and [apollo-server-express](https://www.apollographql.com/docs/apollo-server/servers/express.html)

### Fontawesome's official React component for icons

[Read how to get started with using Fontawesome icons with React here](https://fontawesome.com/how-to-use/on-the-web/using-with/react)

## Testing

In this project we tested in several ways using `Jest`, `Cypress` and manual testing.

### Jest

Lorem ipsum ...

### Cypress

Lorem ipsum ...

### Manual testing

Lorem ipsum ...
