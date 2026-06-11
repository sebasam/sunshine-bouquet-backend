# Sunshine Bouquet - Export Orders MVP

MVP para la gestión de órdenes de exportación de flores desde LATAM hacia USA.

## Arquitectura y Stack
* **Backend:** .NET 8 con HotChocolate (GraphQL Subgraph), EF Core, SQL Server. Clean Architecture y DDD.
* **Gateway:** Apollo Gateway (Node.js) implementando federación de GraphQL.
* **Frontend:** Angular 19, Apollo Client, Bootstrap, Reactive Forms.
* **DevOps:** Docker, Docker Compose, Azure Pipelines (CI), Husky (Pre-commit hooks).

## Cómo Ejecutar
1. Clonar el repositorio.
2. Ejecutar el script `start-project.ps1` o lanzar los contenedores manualmente:
   `docker-compose up --build -d`
3. Accesos:
   * **Frontend UI:** `http://localhost:80`
   * **Apollo Gateway:** `http://localhost:4000/graphql`
   * **Backend Subgraph (Playground):** `http://localhost:5000/graphql`