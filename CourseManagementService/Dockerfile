# Use an official Node runtime as a parent image
FROM node:20-alpine

# Set the working directory in the container to /app
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the current directory contents into the container at /app
COPY . .

# Make port 4100 available to the world outside this container
EXPOSE 6300

# Define environment variable for MongoDB URI if needed
# You can set the default value or pass it during container run
ENV MONGODB_URI=mongodb+srv://chamodbandara78:bino123@cluster0.hwyhauq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0 

# Run index.js when the container launches
CMD ["node", "index.js"]
