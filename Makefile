up:
	@docker-compose up

build:
	@docker-compose build

sh:
	@docker-compose exec metropolitan-api bash

migrate:
	@docker-compose exec metropolitan-api bash -c "npm run typeorm migration:run -- -d ./ormconfig.ts"