using Microsoft.EntityFrameworkCore;
using SunshineBouquet.Infrastructure.Data;
using SunshineBouquet.Api.GraphQL;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddDbContext<ApplicationDbContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));

builder.Services
    .AddGraphQLServer()
    .AddQueryType<Query>()
    .AddMutationType<Mutation>()
    .AddFiltering();

var app = builder.Build();

app.MapGraphQL();

app.Run();