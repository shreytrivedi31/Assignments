use localhost
create table product(
id int PRIMARY KEY,
name varchar(20),
price int,
)
alter table product
add category varchar(20)

select * from product

INSERT INTO product VALUES(1,'air-jordan 1 low',21000,'shoes')
INSERT INTO product VALUES(2,'adidas',15000,'shoes')
INSERT INTO product VALUES(3,'polo',999,'cloths')
INSERT INTO product VALUES(4,'raybun',1500,'sunglasses')
INSERT INTO product VALUES(5,'g-shock',9000,'watch')

select * from product

create table customer(
customer_id int primary key,
name varchar(20),
order_id int foreign key references orders(order_id)
)

insert into customer

values(
1,
'shrey',
1
),
(
2,
'jay',
2
),
(
3,
'dhairya',
3
),
(
4,
'yash',
4
),
(
5,
'shreyansh',
5
)

select * from customer

create table orders(
order_id int primary key,
order_address varchar(100),
order_amount int 
)

insert into orders(
order_id,
order_address,
order_amount
)
values(
1,
'blahblahblah',
15000
),
(
2,
'blahblahblah',
20000
),
(
3,
'blahblahblah',
30000
),
(
4,
'blahblahblah',
50000
)

select * from orders

INSERT INTO customer VALUES(5,'kabir')
select * from customer

INSERT INTO orders VALUES(5,'blahblahblah',10000)
select * from orders

alter table customer
add id int

select * from customer
select * from orders
select * from product

drop table customer

alter table orders
add product_id int foreign key references product(id)

update orders set product_id = 5 where order_id=5;

select customer.name, orders.order_amount from customer left join orders on customer.order_id=orders.order_id
select customer.name, orders.order_amount, product.name from customer left join orders on customer.order_id=orders.order_id left join product on product.id=orders.product_id

select customer.name, orders.order_amount, product.name from customer right join orders on customer.order_id=orders.order_id right join product on product.id=orders.product_id

select customer.name, orders.order_amount, product.name from customer inner join orders on customer.order_id=orders.order_id inner join product on product.id=orders.product_id

select customer.name, orders.order_amount, product.name from customer full outer join orders on customer.order_id=orders.order_id full outer join product on product.id=orders.product_id

alter procedure spGetAllCustomers
as 
begin
select * from customer;
select * from product;
end
exec spGetAllCustomers;

alter procedure spGetAllCustomers
@name varchar(20)
as 
begin
select * from customer where name=@name;
end
exec spGetAllCustomers 'shrey';

alter procedure spGetAllCustomers
@name varchar(20) , @customer_id int output
as 
begin
select @customer_id= customer_id from customer where name=@name;
end

declare @returnvalue int;
exec spGetAllCustomers 'shrey',@returnvalue output;
select @returnvalue as 'cutomer id is '

create view tempCustomer as select * from customer where name ='shrey';

select * from tempCustomer;