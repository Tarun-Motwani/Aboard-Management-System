# Use Node image
FROM node:18

# Set working directory
WORKDIR /app

# Copy package files
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy remaining code
COPY . .

# Expose React port
EXPOSE 3000

# Start React app
CMD ["npm", "start"]