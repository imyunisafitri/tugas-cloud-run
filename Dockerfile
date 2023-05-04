# Use an official Node.js runtime as a parent image
FROM node:14.17.0-alpine3.13

# Set the working directory to /app
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy the remaining application files to the container
COPY . .

# Set environment variable for PORT
ENV PORT 8080

# Build the React app
RUN npm run build

# Start the server
CMD [ "npm", "start" ]
