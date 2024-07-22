docker build  .
sleep 1
docker tag ui-service-kx-api:latest uicity.azurecr.io/ui-service-kx-api:latest
echo "Image built and tagged as uicity.azurecr.io/ui-service-kx-api:latest"