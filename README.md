# fungi

Это монорепозиторий, содержащий весь код Fungi.

**Содержит в себе пакеты:**

- `./backend/api` (`@fungi/api`) - tRPC процедуры
- `./backend/db` (`@fungi/db`) - Инициализация БД
- `./backend/server` (`@fungi/server`) - Бэкенд сервер
- `./tooling/tunnel-dev` (`@fungi/tunnel-dev`) - Проброс бэкенд сервера для доступа из приложения
- `./frontend` (`@fungi/app`) - RN + Expo приложение

## Начало работы

1. Склонируйте репозиторий и зайдите в папку с ним
2. Установите зависимости - `npm i`
3. (опционально) Если хотите запустить бэкенд, то обязательно нужно инициализировать БД: `npm run init-db`

- Запустить только приложение: `npm run dev:app`
- Запустить только сервер: `npm run dev:server`
- Запустить приложение и сервер одновременно: `npm run dev`

### Бэкенд

> ⚠️ Перед работой с бэкендом нужно инициализировать БД: `npm run init-db`

Вся бэкенд часть хранится в папке `backend`.

- `./backend/api` (`@fungi/api`) - Содержит в себе процедуры tRPC, выполняемые сервером, и типы запросов/ответов, используемые для типобезопасности фронтенда

- `./backend/db` (`@fungi/db`) - Настроенный инстанс Prisma, используемый в `@fungi/api` для операций с БД

- `./backend/server` (`@fungi/server`) - Express-сервер, который принимает и обрабатывает запросы tRPC (`@fungi/api`)

#### Сборка:

1. Инициализируйте БД (`npm run init-db`)

2. Запустите сборку (`npm run build:server`)

> Артефакт будет находиться в `./backend/server/dist`. Он самостоятельный, включает в себя все библиотеки и код, необходимый для работы сервера.

3. (опционально) Запустить сервер можно, перейдя в папку сборки `./backend/server/dist` и запустив файл `index.js` (`node index.js`)

### Фронтенд (`@fungi/app`)

React Native + Expo приложение. Используется клиент tRPC для React (на основе React Query)