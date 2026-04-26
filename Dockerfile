# Use the official Ubuntu image as the base image
FROM nginx:latest

COPY . /usr/share/nginx/html/


CMD ["nginx", "-g", "daemon off;"]
