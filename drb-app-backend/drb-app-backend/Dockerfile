#See https://aka.ms/containerfastmode to understand how Visual Studio uses this Dockerfile to build your images for faster debugging.

FROM mcr.microsoft.com/dotnet/aspnet:6.0 AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/sdk:6.0 AS build
WORKDIR /src
COPY ["drb-app-backend/drb-app-backend.csproj", "drb-app-backend/"]
RUN dotnet restore "drb-app-backend/drb-app-backend.csproj"
COPY . .
WORKDIR "/src/drb-app-backend"
RUN dotnet build "drb-app-backend.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "drb-app-backend.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "drb-app-backend.dll"]