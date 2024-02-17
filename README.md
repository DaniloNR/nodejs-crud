# NodeJS API with File-based Database

This NodeJS application is a simple API built using pure Node.js v20.10.0. It implements a file-based database and provides CRUD (Create, Read, Update, Delete) functionality for managing users.

## Features

- CRUD operations for managing users
- File-based database implementation
- Example of Node.js stream module

## Requirements

- Node.js v20.10.0

## Usage

1. Clone this repository:

```sh
git clone https://github.com/DaniloNR/nodejs-crud.git
```

2. Navigate to the project directory:

```sh
cd nodejs-crud
```

3. Run the application:

```sh
pnpm run dev
```

## Endpoints

- **GET /users**: Get all users
- **GET /users?search=**: Get all users containing the the query string
- **GET /users/{id}**: Get user by ID
- **POST /users**: Create a new user
- **PUT /users/{id}**: Update user by ID
- **DELETE /users/{id}**: Delete user by ID
