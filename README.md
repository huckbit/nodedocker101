# nodejs app dockerise

### Building your image
From the directory where the `Dockerfile` is run the following command:

```
docker build -t <your username>/node-web-app-name .
```

Your image will be listed now by Docker:

```
docker images

# Example
REPOSITORY                      TAG        ID              CREATED
node                            10         1934b0b038d1    5 days ago
<your username>/node-web-app    latest     d64d3505b0d2    1 minute ago
```

### Run the image
Running your image with -d runs the container in detached mode, leaving the container running in the background. 
The -p flag redirects a public port to a private port inside the container. 
Run the image you previously built in the previous step:

```
docker run -p 49160:8080 -d <your username>/node-web-app-name
```

Print the output of your app with `docker ps`

Check the app locally @ [http://localhost:49160](http://localhost:49160)

Find more information about Docker and Node.js on Docker in the following link: 
[Dockerising a Node.js web app](https://nodejs.org/de/docs/guides/nodejs-docker-webapp/)