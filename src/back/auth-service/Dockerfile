# Указываем базовый образ
FROM node:18-alpine AS builder

# Устанавливаем необходимые зависимости
RUN apk add --no-cache openssl bash libc6-compat

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем файлы package.json и package-lock.json
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем исходный код приложения
COPY . .

# Генерация Prisma Client
RUN npx prisma generate

# Компиляция TypeScript в JavaScript
RUN npm run build

# Указываем второй этап для уменьшения размера образа
FROM node:18-alpine AS runtime

# Устанавливаем необходимые зависимости
RUN apk add --no-cache openssl bash libc6-compat

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем файлы сборки из предыдущего этапа
COPY --from=builder /app/dist ./dist

# Копируем зависимости
COPY --from=builder /app/node_modules ./node_modules

# Копируем файл .env и Prisma Schema
COPY .env .env
COPY prisma ./prisma


# Указываем порт, который будет использоваться
EXPOSE 3000

# Устанавливаем команду запуска приложения
CMD ["node", "dist/main"]
