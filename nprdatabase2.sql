-- constrains Aggregation 
-- order by  distinct like limit offset in

show databases;

create table employee(
id int(50) not null auto_increment, 
Name varchar(100), 
dept varchar(100), 
Email varchar(100) not null unique,
age int(50) check (age >= 18),
place varchar(100),
primary key(id));
-- default(0)

desc employee;

insert into employee(Name,dept,Email,age,place) 
values("Lavesh", "software", "Lavesh@12gmail.com",24,"Thane");


insert into employee(Name,dept,Email,age,place) 
values("Rohidas", "QA", "Rohidas@12gmail.com",19,"Andheri"),
("Rushi", "QA", "Rushi@33gmail.com",31,"Mumbai");

select * from employee order by Name ASC; 
select * from employee order by Name DESC; 

select distinct place from employee order by place ASC;

select distinct dept from employee order by dept DESC;

select * from employee order by Name ASC;
select * from employee order by Name ASC limit 2;


select * from employee limit 2 offset 0;

select * from employee limit 2 offset 2;

select * from employee limit 2 offset 4;

select * from employee limit 2 offset 6;

select * from employee where age=20 or age=31 or age=24; 

select * from employee where age in(20,31,24); 

select * from employee;
select * from employee where place in("Andheri","Thane"); 


select * from employee where Name like "ro%";

select * from employee where Name like "%K";

select count(place) from employee where place="Andheri";

select count(age) from employee where age>20;

select min(age) from employee where age>20;

select max(age) from employee where age>20;

select avg(age) from employee where age>20;

select sum(age) from employee;
