# Sunshine Bouquet - Export Orders MVP

MVP for managing flower export orders from LATAM to the USA, demonstrating Clean Architecture, SOLID principles, and a modern tech stack.

## Architecture & Tech Stack
* **Backend:** .NET 8, HotChocolate (GraphQL), EF Core, SQL Server. Built with Clean Architecture principles.
* **Frontend:** Angular 19, Apollo Client, Bootstrap, Reactive Forms.
* **DevOps:** Docker, Docker Compose, Azure Pipelines (CI), Husky (Pre-commit hooks).

## How to Run (Docker Compose)
Prerequisites: Docker and Docker Compose installed on your machine.

1. Clone the repository.
2. Open a terminal in the root directory.
3. Run the following command to build and start the Database, Backend, and Frontend containers:
   `docker-compose up --build -d`
4. Access the applications:
   * **Frontend UI:** `http://localhost:80`
   * **Backend GraphQL API / Playground:** `http://localhost:5000/graphql`

## Technical Decisions & Future Improvements
* **GraphQL Implementation:** Used HotChocolate natively in .NET for seamless EF Core integration. A dedicated Apollo Gateway (Node.js) can be implemented in the future if the architecture transitions to a federated microservices model.
* **Domain Driven Design:** Order status transitions are encapsulated within the Domain Entity to protect business invariants and avoid anemic models.
* **Future scope:** Add JWT Authentication/Authorization and expand E2E test coverage.