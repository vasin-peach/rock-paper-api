docker-compose up -d --no-deps --build
docker rmi $(docker images -f dangling=true -q)
