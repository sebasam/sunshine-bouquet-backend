# Sunshine Bouquet - Export Orders MVP

A full-stack MVP application for managing flower export orders from LATAM to the USA, demonstrating modern architectural patterns and best practices.

## Architecture & Tech Stack

This monorepo is structured into three main services orchestrated via Docker Compose:

- **`/sunshine-bouquet-backend`**: A .NET 8 GraphQL API built with HotChocolate (configured as a Federation Subgraph). Implements Clean Architecture, Domain-Driven Design (DDD) principles, and uses Entity Framework Core with SQL Server.

- **`/sunshine-bouquet-gateway`**: An Apollo Gateway built with Node.js, implementing GraphQL Federation to route and compose schemas.

- **`/sunshine-bouquet-frontend`**: A scalable Angular 19 SPA featuring Apollo Client, Reactive Forms, and Bootstrap for a responsive UI.

## Prerequisites

Before running the application, ensure you have the following installed:

- Docker and Docker Compose
- .NET 8 SDK
- EF Core Tools (for local database migrations)

Make sure the following local ports are available:

- `80` – Frontend
- `4000` – Gateway
- `5000` – Backend API
- `1433` – SQL Server

## Quick Start (One-Click Setup)

1. Clone the repository.

2. Build and run all containers in detached mode:

```bash
docker-compose up --build -d
```

## Database Migrations

Apply the database migrations from the repository root:

```bash
dotnet ef database update \
  --project sunshine-bouquet-backend/SunshineBouquet.Infrastructure \
  --startup-project sunshine-bouquet-backend/SunshineBouquet.Api
```

## Endpoints & Access

### Frontend Application

```
http://localhost:80
```

### Apollo Gateway

```
http://localhost:4000/graphql
```

### Backend Playground (Banana Cake Pop)

```
http://localhost:5000/graphql
```

## Testing & Quality Assurance

### Frontend

The frontend includes:

- Unit tests.
- Strict linting rules.
- Husky pre-commit hooks.

Run the frontend tests using:

```bash
ng test
```

### Backend

The backend contains Domain layer unit tests using xUnit.

Run the backend tests with:

```bash
dotnet test
```

## API Testing

A Postman collection named `postman_collection.json` is included in the root directory to quickly test Gateway endpoints and GraphQL operations.

Import the collection into Postman and execute the predefined requests to validate the application's behavior.