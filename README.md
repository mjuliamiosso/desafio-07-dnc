# Desafio 7 - DNC
Desafio onde temos que realizar uma migração da linguagem JavaScript para TypeScript e fazer testes junto com o Jest.

### Tecnologias usadas:
- Express
- TypeScript
- Knex
- Jest
- MySQL

```mysql
CREATE TABLE `aluno` (
	`id` INT(11) NOT NULL AUTO_INCREMENT,
	`nome` VARCHAR(255) NOT NULL COLLATE 'utf8mb4_0900_ai_ci',
	`cpf` BIGINT NOT NULL COLLATE 'utf8mb4_0900_ai_ci'
	PRIMARY KEY (`id`) USING BTREE
)
COLLATE='utf8mb4_0900_ai_ci'
ENGINE=InnoDB
AUTO_INCREMENT=5
;
```