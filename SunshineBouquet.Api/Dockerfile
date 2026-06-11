FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS base
WORKDIR /app
EXPOSE 8080

FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /src
COPY ["SunshineBouquet.Api/SunshineBouquet.Api.csproj", "SunshineBouquet.Api/"]
COPY ["SunshineBouquet.Infrastructure/SunshineBouquet.Infrastructure.csproj", "SunshineBouquet.Infrastructure/"]
COPY ["SunshineBouquet.Domain/SunshineBouquet.Domain.csproj", "SunshineBouquet.Domain/"]
RUN dotnet restore "SunshineBouquet.Api/SunshineBouquet.Api.csproj"
COPY . .
WORKDIR "/src/SunshineBouquet.Api"
RUN dotnet build "SunshineBouquet.Api.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "SunshineBouquet.Api.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "SunshineBouquet.Api.dll"]