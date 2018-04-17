DROP TABLE IF EXISTS department;

CREATE TABLE department (
  dname        varchar(25) not null unique,
  dnumber      integer(4),
  mgrssn       char(9) not null, 
  mgrstartdate date,
  primary key (dnumber),
  foreign key (mgrssn) references employee(ssn)
) engine = InnoDB;
