# DeliveryProject

cd .\src\

composer update

cd ..

docker-compose up -d

docker-compose run artisan migrate

docker-compose run --rm npm run build

---

project http://localhost:8000

phpmyadmin http://localhost:8081    (USERNAME=laravel PASSWORD=password)