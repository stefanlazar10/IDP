# Stage 1: Build React App
FROM node:20-alpine AS build-stage

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

COPY . .

RUN npm run build

# Stage 2: Serve Build with Nginx
FROM nginx:stable-alpine

# Copiază build-ul din etapa anterioară în directorul Nginx
COPY --from=build-stage /app/build /usr/share/nginx/html

# Expune portul HTTP standard
EXPOSE 80

# Pornește serverul web Nginx
CMD ["nginx", "-g", "daemon off;"]