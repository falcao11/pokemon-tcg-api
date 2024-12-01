# Pokémon TCG API

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technologies](#technologies)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Application](#running-the-application)
- [API Documentation](#api-documentation)
- [Database Migrations](#database-migrations)
- [Environment Variables](#environment-variables)
- [Contributing](#contributing)
- [License](#license)

## Overview

This API is built using **NestJS** with **TypeScript** for a scalable and maintainable architecture. **Prisma ORM** is used for database management, and **Swagger** is integrated for API documentation.

## Features

- Modular architecture with NestJS.
- Database management using Prisma.
- Automatically generated API documentation with Swagger.
- CRUD operations for entities.
- Environment-based configuration.

---

## Technologies

- [NestJS](https://nestjs.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [Prisma](https://www.prisma.io/)
- [Swagger](https://swagger.io/)
- [PostgreSQL](https://www.postgresql.org/)
- [Docker](https://www.docker.com/)

## Getting Started

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (>= 16.x)
- [npm](https://www.npmjs.com/) (or [yarn](https://yarnpkg.com/))
- [Docker](https://www.docker.com/) (for running PostgreSQL)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/falcao11/pokemon-tcg-api.git
   cd pokemon-tcg-api
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

### Running the Application

1. Configure your `.env` file (see [Environment Variables](#environment-variables)).

   ```bash
   DATABASE_URL="postgresql://{USER}:{PASSWORD}@localhost:{PORT}/{DATABASE_NAME}"
   POSTGRES_DB="{DATABSE_NAME}"
   POSTGRES_USER="{USER}"
   POSTGRES_PASSWORD="{PASSWORD}"
   ```

2. Apply migrations:

   ```bash
   npx prisma generate
   ```

3. Start the database:

   ```bash
   docker-compose up -d
   ```

4. Run the application:

   ```bash
   npm run start:dev
   # or

   yarn start:dev
   ```

5. Connect your PGAdmin

   1. Register a new server
   2. In general, set the name for the server
   3. In Connection set "localhost" to "Hostname/address"
   4. Port, Username and Password the same that you put in .env

   Now you are able to see the database in your PostgreSQL

## API Documentation

Swagger is available for exploring and testing the API endpoints.

- URL: `http://localhost:3333/api/`

<img src=".github/swagger.png"></img>

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.
