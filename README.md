# Api-AcademiaTreino
Projeto Modulo 4 - Resilia
A Api-AcademiaTreino disponibiliza uma API REST que permite o acesso ao cadastro a fichas de treino de alunos, instrutor, serie e exercícios.
_______________________________________________________

## Pré-Requisitos
+ Node.js "^17.0.21"
+ NPM v.8.3.1

## Pacotes utilizados
+ Express "^4.17.3"
+ Nodemon "^2.0.15"
+ SQLite "^4.0.25"

## Métodos
Requisições para a API seguem os padrões:
| Método | Descrição |
|---|---|
| `GET` | Retorna informações de um ou mais registros. |
| `POST` | Utilizado para criar um novo registro. |
| `PUT` | Atualiza dados de um registro ou altera sua situação. |
| `DELETE` | Remove um registro do sistema. |


## Respostas

| Código | Descrição |
|---|---|
| `200` | Requisição executada com sucesso (success).|
| `400` | Erros de validação ou os campos informados não existem no sistema.|
| `401` | Dados de acesso inválidos.|
| `404` | Registro pesquisado não encontrado (Not found).|
| `405` | Método não implementado.|
| `410` | Registro pesquisado foi apagado do sistema e não esta mais disponível.|
| `422` | Dados informados estão fora do escopo definido para o campo.|
| `429` | Número máximo de requisições atingido. (*aguarde alguns segundos e tente novamente*)|


