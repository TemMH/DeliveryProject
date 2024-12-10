# Используем официальный PHP-образ с поддержкой необходимых расширений
FROM php:8.3-fpm

# Устанавливаем необходимые зависимости
RUN apt-get update && apt-get install -y \
    curl \
    git \
    unzip \
    libpq-dev \
    libzip-dev \
    zip \
    nodejs \
    npm \
    && docker-php-ext-install pdo pdo_mysql pdo_pgsql zip

# Установка Composer
COPY --from=composer:2.6 /usr/bin/composer /usr/bin/composer

# Создаем рабочую директорию
WORKDIR /var/www/html

# Копируем файлы проекта
COPY . .

# Устанавливаем зависимости PHP
RUN composer install --no-dev --optimize-autoloader

# Устанавливаем зависимости Node.js
RUN npm install && npm run build

# Устанавливаем права на запись для папок хранения и кэша
RUN chown -R www-data:www-data /var/www/html/storage /var/www/html/bootstrap/cache

# Указываем порт
EXPOSE 9000

# Команда для запуска PHP-FPM
CMD ["php-fpm"]

#docker build -t laravel-vue-app .