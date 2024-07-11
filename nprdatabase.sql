show databases;
create database nprDB;
use nprDB;
show tables;

create table users
(id int(50), 
Name varchar(100), 
age int(50), 
mobileNo bigint(50), 
Place varchar(100));

desc users;

-- (id,Name,age,mobileNo,Place)

-- drop table users;

# drop database nprdb;

-- CRUD OPERATIONS
-- CREATE
insert into users values(1, "Sagar", 25, 9865784578, "Virar");

insert into users values(2, "Soham", 21, 7845986512, "Andheri");

insert into users values
(3, "Sameer", 20, 8523697412, "Thane"),
(4, "Anish", 20, 9632014785, "Mumbai"),
(5, "Avinash", 20, 9874103258, "Sion");

insert into users values
(7, "Mahesh", 17, 9632014785, "Mumbai"),
(8, "Suresh", 19, 9874103258, "Mumbai");

insert into users(id, Name, age) 
values(4, "Siddhi", 22);


-- READ
select * from users; 

select * from users where Name="Sagar";

select Name,mobileNo from users where Name="Sagar";

select Name,mobileNo as Mobile_No from users  
where Name="Sagar";

-- update
update users set Place="Borivali" where Name="Siddhi";

-- delete
delete from users where id=4;


-- conditional Operation =  <=  >=  <  >
select * from users where age = 20;

select * from users where age <=20;

select * from users where age >= 20;

-- logical operator and or not
select * from users where age > 20 and Name="Soham";

select * from users where age >= 20 AND Place="Mumbai";

select * from users where age > 20 OR Place="Mumbai";

select * from users where not age = 20;

select * from users where NOT Place="Mumbai";


select * from users;


