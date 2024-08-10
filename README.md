
# Restaurant Management API

This is a RESTful API for managing restaurants, cities, tags, and comments. The API is built using Node.js, Express.js, and Sequelize with a PostgreSQL database.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
  - [Clone the Repository](#clone-the-repository)
  - [Install Dependencies](#install-dependencies)
  - [Environment Configuration](#environment-configuration)
- [Database Setup](#database-setup)
  - [Running Migrations](#running-migrations)
  - [Running Seeders](#running-seeders)
- [Docker Setup](#docker-setup)
- [Starting the Application](#starting-the-application)
- [API Endpoints](#api-endpoints)
- [License](#license)

## Prerequisites

Before you begin, ensure you have the following installed on your local machine:

- **Node.js** (version 14 or higher)
- **npm** (comes with Node.js)
- **PostgreSQL** (version 10 or higher)
- **Docker** (optional, but recommended for ease of setup)

## Getting Started

### Clone the Repository

First, clone the repository to your local machine:

```bash
git clone https://github.com/your-username/restaurant-api.git
cd restaurant-api
```

### Install Dependencies

Install the necessary Node.js dependencies:

```bash
npm install
```

### Environment Configuration

Create a `.env` file in the root directory of your project to configure your environment variables. Here is an example of what your `.env` file should look like:

```env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=root
DB_NAME=restaurant-api
DB_PORT=5432
```

Update the values as needed for your PostgreSQL setup.

## Database Setup

### Running Migrations

To set up the database schema, you'll need to run the migrations. Sequelize migrations are used to create and manage your database tables.

```bash
npx sequelize-cli db:migrate
```

This command will create the necessary tables in your PostgreSQL database based on the migration files.

### Running Seeders

After running the migrations, you can seed the database with initial data:

```bash
npx sequelize-cli db:seed:all
```

This will populate the database with predefined cities, restaurants, tags, and comments.

## Docker Setup

If you prefer to use Docker for easier setup and deployment, follow these steps:

1. **Create a \`docker-compose.yml\` file**:

   Your `docker-compose.yml` contains the postgres configuration.
2. **Build and start the containers**:

   Run the following command to build and start your containers:

   ```bash
   docker-compose up
   ```

   This will set up both the PostgreSQL database and the Node.js application in Docker containers.

3. **Run Migrations and Seeders**:

   Inside the project, can run the migrations and seeders as described above.

     ```bash
     npx sequelize-cli db:migrate
     npx sequelize-cli db:seed:all
     ```

## Starting the Application

To start the application in development mode, simply run:

```bash
npm run dev
```

This will start the Express server on \`http://localhost:3000\`.

## API Endpoints

The following endpoints are available:

### Restaurants

- `GET /restaurants`: Get all restaurants.
- `GET /restaurants/:id`: Get a specific restaurant by ID.
- `POST /restaurants`: Create a new restaurant (with optional tags and comments).
- `PUT /restaurants/:id`: Update a specific restaurant by ID (with optional tags and comments).
- `DELETE /restaurants/:id`: Delete a specific restaurant by ID.

### Cities

- `GET /cities`: Get all cities.
- `GET /cities/:id`: Get a specific city by ID.
- `POST /cities`: Create a new city.
- `PUT /cities/:id`: Update a specific city by ID.
- `DELETE /cities/:id`: Delete a specific city by ID.

### Tags

- `GET /tags`: Get all tags.
- `GET /tags/:id`: Get a specific tag by ID.
- `POST /tags`: Create a new tag.
- `PUT /tags/:id`: Update a specific tag by ID.
- `DELETE /tags/:id`: Delete a specific tag by ID.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
