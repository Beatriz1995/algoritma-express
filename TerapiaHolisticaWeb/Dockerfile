# Etapa 1: Construcción de la aplicación Angular
FROM node:22-alpine AS build
WORKDIR /app

# Copiar archivos de dependencias
COPY package*.json ./

# Instalar dependencias limpias
RUN npm ci

# Copiar el resto del código fuente
COPY . .

# Compilar usando npx para evitar problemas de permisos con el binario local
RUN npx ng build --configuration production

# Etapa 2: Servir con Nginx
FROM nginx:alpine
COPY --from=build /app/dist/TerapiaHolisticaWeb/browser /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]