CREATE TABLE Student(
id int PRIMARY KEY,
name varchar(20),
age int DEFAULT 18
)
use localhost;
ALTER TABLE Student
ADD Email varchar(50);

SELECT * FROM Student;

INSERT INTO Student VALUES(1,'shrey',21,'shrey.trivedi@aimdek.com')
select * from Student;
INSERT INTO Student VALUES(2,'jay',20,'jay.savariya@aimdek.com')
INSERT INTO Student VALUES(3,'dhairya',21,'dhairya.bakhai@aimdek.com')
select * from Student;

select * from Student
where age=19 AND age=18;

select * from Student
where email LIKE '%aimdek.com';

select count(*), age from Student
group by age

select distinct age from Student
select * from Student

INSERT INTO Student VALUES(4,'shreyansh',22,'shreyansh.prajapati@aimdek.com')

INSERT INTO Student VALUES(5,'sheldon',22,'sheldon.cooper@aimdek.com')

select * from Student

select * from Student order by age;

select * from Student where age = 21 or id=3;
update Student set name = 'cooper' where name = 'sheldon';
delete from Student where name='shreyansh';

select * from Student
