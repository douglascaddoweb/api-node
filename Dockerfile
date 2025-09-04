# Usa a imagem oficial do Node.js
FROM node:20

# Define o diretório de trabalho dentro do container
WORKDIR /app

# Copia package.json e package-lock.json
COPY package*.json ./

# Instala dependências
RUN npm install

# Copia o restante do código
COPY . .

# Expõe a porta que o servidor usa
EXPOSE 4000

# Comando para rodar a aplicação
CMD ["npm", "run", "dev"]
