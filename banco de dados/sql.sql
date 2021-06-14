use mydb;

/*drop table prato;
drop table restaurante;
drop table usuario;*/

select * from restaurante;
select * from prato;
select * from usuario;

insert into restaurante values(1,'restaurante 1','pratos mineiros','34xxx5555', 'rua teste1');
insert into restaurante values(2,'restaurante 2','pratos bahianos','34xxx9999', 'rua teste2');
insert into restaurante values(3,'restaurante bom de boca','pratos tipícos e churrasco','55xxxx4444', 'rua testando');

insert into restaurante values(4,'restaurante 4','pratos mineiros','34xxx5555', 'rua teste4');
insert into restaurante values(5,'restaurante 5','pratos bahianos','34xxx9999', 'rua teste5');
insert into restaurante values(6,'restaurante 6','pratos tipícos e churrasco','55xxxx4444', 'rua testando 6');
insert into restaurante values(7,'restaurante 7','pratos mineiros','34xxx5555', 'rua teste7');
insert into restaurante values(8,'restaurante 8','pratos bahianos','34xxx9999', 'rua teste8');
insert into restaurante values(9,'restaurante 9','pratos tipícos e churrasco','55xxxx4444', 'rua testando9');
insert into restaurante values(10,'restaurante 10','pratos tipícos e churrasco','55xxxx4444', 'rua testando10');

insert into prato values(1,3,'batata frita','essa batata é muito gostosa!', 5.90);
insert into prato values(2,3,'arroz e feijão','top', 9.90);
insert into prato values(3,3,'frango assado ao molho','muito gostoso esse frango', 12.99);
insert into prato values(4,3,'macarrão ao molho','massa suave e gostosa', 8.90);

insert into prato values(5,5,'hamburguer','melhor lanche da cidade!', 9.99);
insert into prato values(6,5,'Sorvete sundae','gostoso demais', 12);

# senha -> 123Fred
# hash dessa senha usando md5 abaixo
insert into usuario values(1,'fred@graodireto.com.br','adc8f4e59b36b4bfdea83974d52c211f')

# query certa abaixo
SELECT * FROM restaurante inner join prato on (prato.restaurante_idrestaurante = restaurante.idrestaurante) WHERE idrestaurante = 3

SELECT * FROM usuario WHERE email = 'fred@graodireto.com.br' AND senha = 'adc8f4e59b36b4bfdea83974d5sdsdsdsds2c211f'

SELECT * FROM prato WHERE restaurante_idrestaurante = 3