FROM node:current-alpine
EXPOSE 3000

COPY src /app
ADD https://github.com/ufoscout/docker-compose-wait/releases/download/2.7.3/wait /wait
RUN chmod +x /wait
RUN chown 1000:1000 -R /app

USER 1000:1000
WORKDIR /app

RUN npm install --production

# CMD tail -f /dev/null
CMD ["node", "app"]
