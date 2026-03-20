# Step 1: Build React App
FROM node:18 AS client-build

WORKDIR /app

COPY client ./client
RUN cd client && npm install && npm run build

# Step 2: Setup Server
FROM node:18

WORKDIR /app

# Copy server code
COPY server ./server

# Copy React build into server
COPY --from=client-build /app/client/build ./client/build


COPY server ./server
COPY server/config.env ./server/config.env
# Install server dependencies
RUN cd server && npm install


# Expose backend port
EXPOSE 8000

# Start server
CMD ["node", "server/index.js"]