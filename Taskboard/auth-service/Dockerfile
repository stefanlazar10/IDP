# Folosește imaginea oficială NodeJS, versiunea 18 pe Alpine pentru dimensiune redusă
FROM node:18-alpine

# Setează directorul de lucru în container
WORKDIR /app

# Copiază fișierele de dependențe și instalează-le
COPY package*.json ./
RUN npm install

# Copiază tot codul sursă și construiește aplicația
COPY . .
RUN npm run build

# Expune portul pe care rulează NestJS (3000 implicit)
EXPOSE 3000

# Comanda de start în producție
CMD ["node", "dist/main.js"]
