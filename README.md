# MercadonaFront

Front End of the project to develop an online catalog as part of a certifying evaluation for the STUDI school.

This project is developed with the MercadonaBack project. These 2 projects are complementary to operate the Mercadona online catalog.

## Get started

### Prerequisites

To run the program, the following dependencies must be installed :
- npm
- NodeJS
- Angular CLI

### Installation

#### Clone the repository

```shell
git clone https://github.com/OphelieThomas33/mercadonaFront.git
cd mercadonaFront
```

#### Install npm packages

```shell
  npm install
```

## Environment Variables

To run this project, you will need to add the following environment variables to your environment.ts and environment.prod.ts file in src/environments folder

### environment.ts

Code to copy into your file and change localhost port if you don't use 8000 for your django project

```typescript
export const environment = {
  production: false,
  apiUrl: 'http://localhost:8000' # default port use for django project
};
```

### environment.prod.ts

Code to copy into your file and add your `apiUrl`

```typescript
export const environment = {
  production: true,
  apiUrl: ''
};
```
## Use

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma].
The command will automatically tell you the code coverage status.

## Deploy

### Build

Run `ng build --configuration=production` to build the project with environment.prod.ts file. 
The build artifacts will be stored in the `dist/` directory.

## Instructions for use

A “manuel-utilisation-site-mercadona” file written in French is attached to this project to help you manage the front office and back office of this site.
