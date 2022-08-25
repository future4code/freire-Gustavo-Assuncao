<!-- 1) OK

CREATE TABLE Actor (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR (255) NOT NULL,
    salary FLOAT NOT NULL,
    birth_date DATE NOT NULL,
    gender VARCHAR(6) NOT NULL
);

a) 
id VARCHAR - limitando os caracters em 255 com key obrigatoria e n se repete 
name VARCHAR  - limitando os caracters em 255 e não pode ser vazio 
salary float  - para numeros não inteiros e não pode ser vazio 
birth DATE - converter para data e não pode ser vazio 
gender - limitando caracters em 6 e não pode ser vazio 

b) show database - mostra as sções do host user 
show tables - mostra as tabelas dentro do meu host user

c)  DESCRIBE Actor - mostra a tabela com as informações contidas.  -->

<!-- 2) 

a) ok 
b) não pode ser adicionado pois possui a mesma key e a key não pode se repetir 
c) a coluna não está correta, está faltando dados 
d) o nome está vazio e não pode, pois a soliciação é NOT NULL 
E) a data está errada pois tem que vir como string 
f) ok 

3) ok tbbbbbbbb -->
