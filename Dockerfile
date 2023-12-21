FROM node:18-alpine
RUN mkdir -p /app
WORKDIR /var/app
COPY . .
RUN npm uninstall bcrypt
RUN npm install bcrypt
RUN npm install
ENV TZ=Asia/Seoul
RUN npm run build
EXPOSE 3030
CMD npx prisma migrate dev; npm run start;