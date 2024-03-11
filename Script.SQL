	create table usuario(
		id_user integer primary key, 
        nm_user varchar(50) not null,
        nm_email  varchar(70) not null,
        cd_senha varchar(40) not null
    );
    
    create table atividade(
		id_atividade integer primary key,
        ds_titulo varchar(120), 
        ds_atividade varchar(120),
        dt_limite datetime
    );
		
	create table usuario_atividade(
		id_usuario integer,
        id_atividade integer,
        dt_entrega datetime,
        nr_nota numeric(2,2),
        foreign key (id_usuario) references  atividade(id_atividade),
		foreign key (id_atividade) references atividade(id_atividade),
        primary key (id_usuario, id_atividade)
    );
