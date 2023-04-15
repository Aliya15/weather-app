# Use an official Node runtime as a parent image
FROM node:16.15.0

# Set the working directory to /app
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Build the Angular app
RUN npm run build

# Use Nginx as the web server and copy the default configuration file
FROM nginx:1.21.3-alpine
COPY default.conf /etc/nginx/conf.d/default.conf

# Copy the built Angular app from the previous stage to the container
COPY --from=0 /app/dist/weatherapp /usr/share/nginx/html

# Expose port 80 to allow incoming traffic
EXPOSE 80

# Start Nginx when the container starts
CMD ["nginx", "-g", "daemon off;"]
