# Usar imagem oficial do Nginx
FROM nginx:alpine

# Remover arquivos padrão do Nginx
RUN rm -rf /usr/share/nginx/html/*

# Copiar seu site para o container
COPY . /usr/share/nginx/html

# Expor a porta 80
EXPOSE 80

# Rodar o servidor Nginx
CMD ["nginx", "-g", "daemon off;"]