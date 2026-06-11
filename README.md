# Sunshine Bouquet - Export Orders MVP (Backend)

MVP para la gestión de órdenes de exportación de flores desde LATAM hacia USA.

## Arquitectura y Decisiones Técnicas
* **Clean Architecture & DDD Básico:** Se separó la lógica de negocio (`Domain`) de los detalles de implementación (`Infrastructure` y `Api`). Las transiciones de estado están encapsuladas en la entidad `Order` para evitar modelos anémicos y cumplir con el principio Open/Closed (SOLID).
* **GraphQL (HotChocolate):** Elegido por su integración nativa y limpia con .NET y EF Core. Se expone un único endpoint flexible para el cliente Angular.
* **EF Core:** Utilizado como ORM con un enfoque Code-First.

## Cómo Ejecutar (Local)
1. Levantar la base de datos SQL Server mediante Docker:
   `docker-compose up -d sqlserver`
2. Aplicar migraciones (requiere EF Tools):
   `dotnet ef migrations add InitialCreate --project SunshineBouquet.Infrastructure --startup-project SunshineBouquet.Api`
   `dotnet ef database update --project SunshineBouquet.Infrastructure --startup-project SunshineBouquet.Api`
3. Ejecutar la API:
   `dotnet run --project SunshineBouquet.Api`
4. Navegar a `http://localhost:5000/graphql` para acceder al Playground (Banana Cake Pop).

## Mejoras Futuras
* Implementar Patrón Repository completo si la lógica de acceso a datos se vuelve más compleja.
* Añadir un Apollo Gateway real en Node.js si la arquitectura migra a microservicios/subgrafos (Federation).
* Integrar autenticación y autorización (JWT) en los endpoints de mutación.
