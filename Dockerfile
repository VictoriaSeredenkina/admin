#используем node
FROM node:18

#копируем package.json и package-lock.json
COPY ./react/package*.json .

#устанавливаем node-modules
RUN npm install

#переносим само приложение
COPY ./react .

#запускаем
ENTRYPOINT ["npm","start"]
