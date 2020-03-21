#Docker
#Create .dockerignore file
#Create Dockerfile with following steps:
FROM cypress/base:12.1.0
RUN mkdir /app
WORKDIR /app
COPY . /app
RUN npm install
RUN $(npm bin)/cypress verify
RUN ["npm", "run", "cy:run"]

#Run build with follwoing command: 
#docker build -t cypressbuild .