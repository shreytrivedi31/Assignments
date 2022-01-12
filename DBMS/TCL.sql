use localhost

select * from Student;
begin transaction
insert into Student values(6,'kabir',21,'kabir.vora@aimdek.com')
rollback

select * from Student;
begin transaction
insert into Student values(6,'kabir',21,'kabir.vora@aimdek.com')
commit

select * from Student;
begin transaction
insert into Student values(6,'kabir',21,'kabir.vora@aimdek.com')



