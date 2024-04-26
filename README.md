# Desafio 7 - DNC
Desafio: Aplique testes de integração para um API utilizando TypeScript.

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