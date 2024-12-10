# Указываем базовый образ
FROM node:18-alpine AS builder

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем файлы package.json и package-lock.json
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем исходный код приложения
COPY . .

# Компилируем TypeScript в JavaScript
RUN npm run build

# Указываем второй этап для уменьшения размера образа
FROM node:18-alpine AS runtime

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем файлы сборки из предыдущего этапа
COPY --from=builder /app/dist ./dist

# Копируем зависимости (для работы приложения в продакшене)
COPY --from=builder /app/node_modules ./node_modules

# Копируем файл .env
COPY .env .env

# Указываем порт, который будет использоваться
EXPOSE 3001

# Устанавливаем команду запуска приложения
CMD ["node", "dist/main"]
