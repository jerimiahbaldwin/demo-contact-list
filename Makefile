migrate:
	docker-compose exec app /app/node_modules/.bin/sequelize db:migrate

mysql-shell:
	docker-compose exec db sh -c 'mysql -u"$$MYSQL_USER" -p"$$MYSQL_PASSWORD" $$MYSQL_DATABASE'

app-shell:
	docker-compose exec app sh

db-shell:
	docker-compose exec db sh

recreate:
	docker-compose down && docker-compose up --force-recreate -d

logs:
	docker-compose logs -f --tail 100

up:
	docker-compose up -d

down:
	docker-compose down
