use ecostoremysql;
create table Usuario(
idUsuario  int not null auto_increment,
nombre varchar(45),
apellido varchar(45),
email varchar(45),
contrasena varchar(100),
primary key(idUsuario)
);
create table ProductoFav(
idProductoFav int not null auto_increment,
idProducto_productoFav int,
idUsusario_productoFav int,
primary key(idProductoFav)
);
create table Carrito(
idCarrito int not null auto_increment,
subtotal double,
total double,
estado boolean,
idUsuario_carrito int,
primary key(idCarrito)
);
drop table Carrito;
create table ProductoCar(
idProductoCar int  not null auto_increment,
idProducto_productoCar int,
cantidadProducto int,
idCarrito_productoCar int,
primary key(idProductoCar)
);
insert into Usuario (nombre,apellido,email,contrasena) values ('Sergio','Baron','sergio@gmail.com', 'sergio123');
insert into ProductoFav (idProducto_productoFav,idUsusario_productoFav)values(1,1),(2,1),(3,1),(4,2),(5,2),(6,2),(7,3),(8,3),(9,3);
insert into Carrito (subtotal, total, estado,idUsuario_carrito )values(10,11,true,1),(11,12,true,1),(13,14,false,1),(15,16,true,2),(17,18,true,2),(19,20,false,2),(21,22,true,3),(23,12,true,3),(24,14,false,3);
insert into ProductoCar (idProducto_productoCar,cantidadProducto,idCarrito_productoCar)
values(1,2,1),(2,3,1),(3,4,1),
(5,2,2),(13,3,2),(21,4,2),
(6,2,3),(14,3,3),(22,4,3),
(7,2,4),(15,3,4),(23,4,4),
(8,2,5),(16,3,5),(24,4,5),
(9,2,6),(17,3,6),(25,4,6),
(10,2,7),(18,3,7),(1,4,7),
(11,2,8),(19,3,8),(2,4,8),
(12,2,9),(20,3,9),(3,4,9);
select idCarrito from Carrito, Usuario

where estado=false
and idUsuario_carrito=idUsuario
and idUsuario=1
;


