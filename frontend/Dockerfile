# =====================
# Build Stage
# =====================
FROM node:20-alpine AS build

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .

RUN npm run build

ARG VITE_API_BASE
ENV VITE_API_BASE=$VITE_API_BASE


# =====================
# Production Stage
# =====================
FROM nginx:stable-alpine

COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]