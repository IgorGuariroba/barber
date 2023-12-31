# Pull from the official Docker image for Node.js
FROM node:18.17.1

# Set the working directory in the Docker container
WORKDIR /usr/src/app

# Update npm to the latest version
RUN npm install -g npm@latest

# Change to non-root user
USER node

# Copy the desired files from your project to the current directory in the container
COPY --chown=node:node . .

# Install dependencies
RUN npm install

EXPOSE 3000

CMD ["npm","run", "dev"]