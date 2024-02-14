FROM node:18-alpine
WORKDIR /app
COPY package.json .
COPY package-lock.json .
RUN npm install
RUN npm install serve
COPY . .
RUN npm run build
EXPOSE 5173
CMD npx serve dist -p 5173