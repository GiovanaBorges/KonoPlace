## KonoPlace documentação

KonoPlace é uma plataforma de reserva de lugares do escritório da First tech . O KonoPlace permite a reserva de lugares por data.

### Problema encontrado

A quantidade de mesas nos escritórios é desigual a quantidade de funcionários da First tech . O Konoplace oferece uma solução de plataforma online onde é possível reservar seu lugar , evitando assim que o escritório fique cheio ou que pessoas não tenham lugar para ficar.

### Solução do problema

### Rotas

Rotas para o Usuário
GET "user/login" Usuário logar na conta
POST "user/" Cadastro de usuário
DELETE "user/id_user" Deletar usuário
PUT "user/id_user" Editar usuário

Rotas para Reserva
GET "/reserva" Verificar todas as reservas
GET "/reserva:data" Verificar todas as reservas por data
POST "/reserva" Registrar reservar na tabela de reservas
PUT "/reserva:id_reserva" Editar informação reserva
DELETE "/reserva:id_reserva" Deletar reserva

Rotas para Mesa
GET "/place" Verificar todas as mesas Registradas no banco
GET "/place:id_place" Verificar mesa por ID
POST "/place" Registrar mesa
PUT "/place:id_place" Editar informação sobre mesa
DELETE

### Modelagem banco

### Telas disponíveis :

tabela usuário:
idUsuario

tabela reserva:
idReserva
data
fk usuário
fk mesa

tabela mesa:
idMesa

### Paleta de cores ? , fontes , protótipo

Fonte : Poppins
Paleta de cores :

### Tecnologias usadas :

### features futuras
