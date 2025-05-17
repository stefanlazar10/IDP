FROM node:18-alpine
WORKDIR /app

# Copiem doar fișierele de dependențe + tsconfig
COPY package*.json tsconfig.json ./

# Instalăm pachetele și TypeScript global
RUN npm install
RUN npm install -g typescript

# Copiem restul codului sursă
COPY . .

# Construim proiectul
RUN npm run build

EXPOSE 3000
CMD ["node", "dist/main.js"]
