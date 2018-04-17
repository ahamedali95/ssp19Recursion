show databases;

-- show databases by show schemas --
show schemas;

use company; #some comment
#or use companyTest if your database name is companyTest

show tables;
show create table department;
desc department;

alter table department change dname dname varchar(30) default "something ";

/**/
SELECT DISTINCT PNUMBER FROM PROJECT
WHERE PNUMBER IN (SELECT PNUMBER FROM PROJECT, DEPARTMENT, EMPLOYEE
 WHERE DNUM = DNUMBER AND MGRSSN = SSN AND LNAME = 'Smith')
 
 OR
 
PNUMBER IN (SELECT PNO FROM WORKS_ON, EMPLOYEE
WHERE  ESSN = SSN AND LNAME = 'Smith');

/*Write a SQL statement to retrieve a list of all project names of the projects, which involve an
employee whose last name is 'Smith' as a worker on the project, or as a manager of the
department that controls the project.*/
SELECT DISTINCT pname FROM project, department, employee, works_on
WHERE (pno = pnumber AND ssn = essn AND lname = "smith")
OR (dnumber = dnum AND ssn = mgrssn AND lname = "smith");

select DISTINCT pnumber, pname
from project, department, employee, works_on
where (dnum = dnumber and mgrssn=ssn and lname='smith')
or (pnumber = pno and essn = ssn and lname='smith');

/*Write a SQL to retrieve a list of employees and the projects they are working on, ordered by the
employee's department, and within each department ordered alphabetically by employee last
name*/

SELECT fname, lname, pname, dnumber, dname FROM employee, department, project, works_on
WHERE (pnumber = pno AND ssn = essn AND dnumber = dnum)
ORDER BY dnumber, lname;

SELECT * FROM works_on, project, employee
WHERE (pnumber = pno AND ssn = essn AND dnum = dno);

/*Write a SQL statement to retrieve the project number, project name, and the number of
employees who work on that project for each project.
*/
SELECT COUNT(*), pnumber, pname FROM employee, department, project, works_on
WHERE (pnumber = pno AND dnumber = dnum AND ssn = essn)
GROUP BY pnumber;

/*views
*/

CREATE VIEW WORKs3
 AS SELECT FNAME, LNAME, PNAME, HOURS
FROM EMPLOYEE, PROJECT, WORKS_ON
WHERE SSN = ESSN AND PNO = PNUMBER;

SELECT * FROM WORKs3;

SELECT 
    *
FROM
    department;

SELECT 
    *
FROM
    employee
WHERE
    bdate BETWEEN '1966-10-09' AND 19881009;

SELECT 
    *
FROM
    employee
WHERE
    bdate <= '19661009' + INTERVAL '5:6' YEAR_MONTH;
    
use company;

select * from employee

where bdate <= '19661009' + interval '5-6' year_month;



SELECT 
    ssn, FNAME, LNAME, bdate
FROM
    employee
WHERE
    bdate >= DATE_ADD('1966-10-09', INTERVAL 1 YEAR);

SELECT 
    ssn, FNAME, LNAME, bdate
FROM
    employee
WHERE
    bdate >= DATE_ADD(19661009, INTERVAL 1 YEAR)
        AND lname = 'Jones';

/* PAGE 8 of chapter 4 */
/* Returns the employee John Smith's first and last name, birthdate and address*/
SELECT 
    fname, Lname, BDATE, ADDRESS
FROM
    EMPLOYEE
WHERE
    FNAME = 'John' AND MINIT = 'B'
        AND LNAME = 'Smith';

/* Returns the name, address and department of the employees who works for the hardware department*/
SELECT 
    FNAME, LNAME, ADDRESS, DNAME
FROM
    EMPLOYEE,
    DEPARTMENT
WHERE
    DNO = DNUMBER AND DNAME = 'hardware';

/* Returns the name, address, department name off all the employees*/
SELECT 
    FNAME, LNAME, ADDRESS, DNAME
FROM
    EMPLOYEE,
    DEPARTMENT
WHERE
    DNUMBER = DNO;
    
desc employee;

/* Returns the total number of employees*/
select count(*) from employee;

select * from department;

/* Returns the name, address and department number of all employees who work for department number 5*/
SELECT 
    fname, lname, address, dno
FROM
    employee
WHERE
    5 = dno;

-- page 8 (ch 4) --
/*Returns the name, project number, project name, department name, department number, birthdate and address of the employees who work at location Stafford.*/
SELECT 
    lname, PNUMBER, Pname, DNUM, DNAME, LNAME, BDATE, ADDRESS
FROM
    PROJECT,
    DEPARTMENT,
    EMPLOYEE
WHERE
    DNUM = DNUMBER AND MGRSSN = SSN
        AND PLOCATION = 'Stafford';

/* Returns the employees' name, address and department name who works for the reasearch department*/
SELECT 
    EMPLOYEE.FNAME, EMPLOYEE.LNAME, EMPLOYEE.ADDRESS, DNAME
FROM
    EMPLOYEE,
    DEPARTMENT
WHERE
    DNAME = 'Research'
        AND DNUMBER = DNO;

/* */
SELECT 
    E.FNAME, E.LNAME, E.ADDRESS, D.DNAME
FROM
    EMPLOYEE E,
    DEPARTMENT AS D
WHERE
    D.DNAME = 'Research'
        AND D.DNUMBER = E.DNO;

-- page 10 (ch 4)--
/*Returns project name and department name so we can which department handles which project*/
SELECT 
    P.PNAME, D.DNAME
FROM
    PROJECT AS P,
    DEPARTMENT AS D
WHERE
    P.DNUM = D.DNUMBER;

/*Returns the name, superssn of all employees*/
SELECT 
    E.FNAME, E.LNAME, e.ssn, S.ssn, S.FNAME, S.LNAME
FROM
    EMPLOYEE AS E,
    EMPLOYEE AS S
WHERE
    E.SUPERSSN = S.SSN;

/*Returns the name, ssn, superssn of the employee who has the given superssn*/
SELECT 
    ssn, fname, lname, superSSN
FROM
    EMPLOYEE
WHERE
    superSSN = '111111100';

-- page 11 --

desc employee;

SELECT 
    SALARY
FROM
    EMPLOYEE;

SELECT DISTINCT
    SALARY
FROM
    EMPLOYEE;

-- page 12 --
SELECT DISTINCT
    PNAME
FROM
    PROJECT,
    DEPARTMENT,
    EMPLOYEE,
    WORKS_ON
WHERE (DNUM = DNUMBER AND MGRSSN = SSN AND LNAME = 'Smith')
        OR (PNUMBER = PNO AND ESSN = SSN AND LNAME = 'Smith');

SELECT 
    PNAME
FROM
    PROJECT,
    DEPARTMENT,
    EMPLOYEE,
    WORKS_ON
WHERE
    (DNUM = DNUMBER AND MGRSSN = SSN
        AND LNAME = 'Smith')
        OR (PNUMBER = PNO AND ESSN = SSN
        AND LNAME = 'Smith');

SELECT 
    PNAME
FROM
    PROJECT,
    DEPARTMENT,
    EMPLOYEE
WHERE
    DNUM = DNUMBER AND MGRSSN = SSN
        AND LNAME = 'Smith' 
UNION ALL (SELECT 
    PNAME
FROM
    PROJECT,
    WORKS_ON,
    EMPLOYEE
WHERE
    PNUMBER = PNO AND ESSN = SSN
        AND LNAME = 'Smith');


SELECT 
    PNAME
FROM
    PROJECT,
    DEPARTMENT,
    EMPLOYEE
WHERE
    DNUM = DNUMBER AND MGRSSN = SSN
        AND LNAME = 'Smith' 
UNION ALL (SELECT 
    PNAME
FROM
    PROJECT,
    WORKS_ON,
    EMPLOYEE
WHERE
    PNUMBER = PNO AND ESSN = SSN
        AND LNAME = 'Smith');

SELECT 
    PNAME
FROM
    PROJECT,
    DEPARTMENT,
    EMPLOYEE
WHERE
    DNUM = DNUMBER AND MGRSSN = SSN
        AND LNAME = 'Smith';

SELECT 
    SSN, Lname
FROM
    employee,
    department
WHERE
    mgrssn = ssn AND lname = 'smith';

use company;

SELECT 
    PNAME, DNO
FROM
    PROJECT,
    EMPLOYEE,
    WORKS_ON
WHERE
    PNUMBER = PNO AND ESSN = SSN
        AND LNAME = 'Smith';

SELECT 
    pname, dname
FROM
    project,
    department
WHERE
    project.dnum = department.dnumber;

SELECT 
    PNAME, LNAME
FROM
    PROJECT,
    EMPLOYEE,
    WORKS_ON
WHERE
    PNUMBER = PNO AND ESSN = SSN
        AND LNAME = 'Smith';
/* start from here ........

*/

SELECT 
    FNAME, LNAME, address
FROM
    EMPLOYEE
WHERE
    ADDRESS LIKE '%Houston, TX%';

-- page 13 (ch 4) --

SELECT 
    FNAME, LNAME, BDATE
FROM
    EMPLOYEE
WHERE
    BDATE LIKE '__5_______';


SELECT 
    E.FNAME, E.LNAME, 1.1 * E.SALARY
FROM
    EMPLOYEE AS E,
    WORKS_ON AS W,
    PROJECT AS P
WHERE
    E.SSN = W.ESSN AND W.PNO = P.PNUMBER
        AND P.PNAME = 'ProductX';

SELECT 
    E.FNAME,
    E.LNAME,
    ROUND((1.1 * E.SALARY), 2) AS raised_salary
FROM
    EMPLOYEE AS E,
    WORKS_ON AS W,
    PROJECT AS P
WHERE
    E.SSN = W.ESSN AND W.PNO = P.PNUMBER
        AND P.PNAME = 'ProductX';
        
/*  March 6 */
SELECT 
    E.FNAME,
    E.LNAME,
    FORMAT(ROUND(1.1 * E.SALARY), 2) AS raised_salary
FROM
    EMPLOYEE AS E,
    WORKS_ON AS W,
    PROJECT AS P
WHERE
    E.SSN = W.ESSN AND W.PNO = P.PNUMBER
        AND P.PNAME = 'ProductX';

SELECT 
    SSN, DNO, DNAME, CONCAT('$',FORMAT(Salary, 2)) AS $US_currency
FROM
    EMPLOYEE,
    DEPARTMENT
WHERE
    (SALARY BETWEEN 30000 AND 40000)
        AND DNUMBER = DNO
        AND DNO = 5;

SELECT 
    SSN, Dname
FROM
    employee,
    department;/* 45 * 6 tuples */

SELECT 
    DNAME, LNAME, FNAME, PNAME
FROM
    DEPARTMENT,
    EMPLOYEE,
    WORKS_ON,
    PROJECT
WHERE
    DNUMBER = DNO AND SSN = ESSN
        AND PNO = PNUMBER
ORDER BY DNAME DESC , LNAME;

desc employee;

select * from department;

INSERT INTO  	EMPLOYEE
	VALUE ('Richard','K','Marini', 653298653, '1962-12-30',
	'98 Oak Forest Drive, TX', 'M', 37000,'333445555', 5 ) ;

INSERT INTO  	EMPLOYEE
	VALUES ('Richard','K','Marini', '653298653', '1962-12-30',
	'98 Oak Forest Drive, TX', 'M', 37000,'333445555', 77) ;

DELETE FROM EMPLOYEE 
WHERE
    SSN = '653298653';

INSERT INTO  	EMPLOYEE
	VALUES ('Bob','K','Schneider', '666779999', '1962-12-30',
	'98 Oak Forest,Katy,TX', 'M', 37000,'987654321', 77 ) ;

DELETE FROM employee 
WHERE
    SSN = '653298653';

desc employee;

SELECT 
    lname, CONCAT(',', fname)
FROM
    employee;

SELECT 
    lname, minit, fname
FROM
    employee
WHERE
    lname = 'Brown';

INSERT INTO EMPLOYEE 
	VALUES ('Joe','K','Montana', '666009999', '1962-12-30','98 Oak Forest,Katy,CA', 'M', 37000,null, 5 ), 
    ('Dan','K','Marino', '666119999', '1962-12-30','98 Oak Forest,Katy,FL', 'M', 37000,null, 5 );

DELETE FROM employee 
WHERE
    SSN = '666009999';


INSERT INTO EMPLOYEE 
	VALUES ('Joe','K','Montana', '000000099', '1962-12-30','98 Oak Forest,Katy,CA', 'M', 37000,null, 5 );

DELETE FROM employee 
WHERE
    SSN = '000000099';


desc employee;

INSERT INTO EMPLOYEE (SSN, BDATE, Address, Sex, Salary, SuperSSN, Dno)
	VALUES ('000000199', '1962-12-30','98 Oak Forest,Katy,CA', 'M', 37000,null, 5 );

INSERT INTO EMPLOYEE (Fname, Lname, SSN)
	VALUES ('Jimmy', 'Brown', '000000199');
    
DELETE FROM employee 
WHERE
    SSN = '000000199';

    
SELECT 
    *
FROM
    employee
WHERE
    SSN = '000000199';

alter table employee change dno dno int(4) default 888;

alter table employee change fname fname varchar(15) default 'fname';

desc employee;

SELECT 
    *
FROM
    employee
WHERE
    SSN = 666335555;

UPDATE employee 
SET 
    address = '126 Kings Blvd, CA'
WHERE
    SSN = '666009999';

SELECT 
    *
FROM
    employee
WHERE
    SSN = '666009999';

DELETE FROM employee 
WHERE
    SSN = '666009999' OR SSN = '666119999';

-- additional queries from ch 4 (and from ch 5)--
use company;

SELECT 
    FNAME, LNAME, superssn
FROM
    EMPLOYEE
WHERE
    SUPERSSN IS NULL;

desc department;

select * from department where dnumber = 5;

SELECT 
    Fname, Lname, Address
FROM
    EMPLOYEE,
    DEPARTMENT
WHERE
    Dname = 'Research Dept' AND Dnumber = Dno;

SELECT 
    Fname, Lname, Address
FROM
    EMPLOYEE
WHERE
    Dno IN (SELECT 
            Dnumber
        FROM
            DEPARTMENT
        WHERE
            DNAME = 'Research');

SELECT DISTINCT
   #ESSN
   ESSN, PNO, HOURS
FROM
    WORKS_ON
WHERE
    (PNO , HOURS) IN (SELECT 
            PNO, HOURS
        FROM
            WORKS_ON
        WHERE
            ESSN = '123456789');

SELECT DISTINCT
    ESSN, PNO, HOURS
FROM
    WORKS_ON
WHERE
    (PNO) IN (SELECT 
            PNO
        FROM
            WORKS_ON
        WHERE
            ESSN = '123456789');

SELECT DISTINCT
    ESSN, PNO, HOURS
FROM
    WORKS_ON
WHERE
    (PNO) IN (SELECT DISTINCT
            PNO
        FROM
            WORKS_ON
        WHERE
            ESSN = '123456789');

-- p 15 (ch 4) --

drop table if exists works_on_info;

CREATE TABLE IF NOT EXISTS WORKS_ON_INFO (
    EMP_NAME VARCHAR(25),
    PROJ_NAME VARCHAR(25),
    HOURS_PER_WEEK DECIMAL(4 , 2 )
);

INSERT INTO	WORKS_ON_INFO (EMP_NAME, PROJ_NAME, HOURS_PER_WEEK)
		SELECT	E.LNAME, P.PNAME, W.HOURS
		FROM		EMPLOYEE  E, PROJECT P, WORKS_ON W
		WHERE	E.SSN=W.ESSN AND W.PNO=P.PNUMBER ;

SELECT 
    *
FROM
    works_on_info;








/*

chapter 5


*/

SELECT 1 IS TRUE, 0 IS FALSE, NULL IS UNKNOWN;

SELECT 2 < 2;

SELECT TRUE, TRUE, FALSE, FALSE;

SELECT NULL IS NOT NULL;

SELECT NULL IS UNKNOWN;

SELECT NOT NULL;

SELECT 1 IS NOT UNKNOWN, 0 IS NOT UNKNOWN, NULL IS NOT UNKNOWN;


SELECT IF(0, 'Ttrue', 'false');



-- page 3 (ch 5) --
use company;

SELECT 
    LNAME, FNAME, SALARY, dno
FROM
    EMPLOYEE
WHERE
    SALARY = ANY (SELECT 
            SALARY
        FROM
            EMPLOYEE
        WHERE
            DNO = 5);

SELECT 
    LNAME, FNAME, SALARY
FROM
    EMPLOYEE
WHERE
    SALARY IN (SELECT 
            SALARY
        FROM
            EMPLOYEE
        WHERE
            DNO = 5);

SELECT 
    LNAME, FNAME, SALARY
FROM
    EMPLOYEE
WHERE
    SALARY > ALL (SELECT 
            SALARY
        FROM
            EMPLOYEE
        WHERE
            DNO = 5);

SELECT 
    LNAME, FNAME, SALARY
FROM
    EMPLOYEE
WHERE
    SALARY > SOME (SELECT 
            SALARY
        FROM
            EMPLOYEE
        WHERE
            DNO = 5);

SELECT 
    E.FNAME, E.LNAME
FROM
    EMPLOYEE AS E
WHERE
    E.SSN IN (SELECT 
            ESSN
        FROM
            DEPENDENT AS D
        WHERE
            E.FNAME = D.DEPENDENT_NAME
                AND E.SEX = D.SEX);

insert into dependent
 values('888665555', 'James', 'M', '1977-12-12', 'son');

SELECT 
    E.FNAME, E.LNAME
FROM
    EMPLOYEE AS E
WHERE
    E.SSN IN (SELECT 
            D.ESSN
        FROM
            DEPENDENT AS D
        WHERE
            E.FNAME = D.DEPENDENT_NAME
                AND E.SEX = D.SEX);

DELETE FROM dependent 
WHERE
    essn = '888665555';

SELECT 
    E.FNAME, E.LNAME
FROM
    EMPLOYEE E,
    DEPENDENT D
WHERE
    E.SSN = D.ESSN
        AND E.FNAME = D.DEPENDENT_NAME
        AND E.SEX = D.SEX;


-- page 5 (ch 5) --

SELECT 
    M.FNAME, M.LNAME
FROM
    EMPLOYEE AS M
WHERE
    EXISTS( SELECT 
            *
        FROM
            DEPENDENT
        WHERE
            M.SSN = ESSN)
        AND EXISTS( SELECT 
            *
        FROM
            DEPARTMENT
        WHERE
            M.SSN = MGRSSN);

SELECT 
    E.FNAME, E.LNAME
FROM
    EMPLOYEE E
WHERE
    NOT EXISTS( SELECT 
            *
        FROM
            DEPENDENT D
        WHERE
            E.SSN = D.ESSN);







/** ---------------------------------    **/

use company;

SELECT 
    pnumber
FROM
    project,
    department
WHERE
    project.dnum = department.dnumber
        AND department.dnumber = 5;

SELECT 
    essn
FROM
    works_on
WHERE
    pno IN (1 , 2, 3);

SELECT 
    pno
FROM
    works_on
WHERE
    essn = '123456789';

insert into works_on values ('123456789', 1, 20.0), ('123456789', 2, 20.0), ('123456789', 3, 20.0);

DELETE FROM works_on 
WHERE
    essn = '123456789';

use company;

SELECT 
    FNAME, LNAME, SSN, Pno
FROM
    employee,
    works_on
WHERE
    ssn = essn AND essn = '123456789';
    

use company;

SELECT 
    FNAME, LNAME, SSN
FROM
    EMPLOYEE
WHERE
    NOT EXISTS( SELECT 
            *
        FROM
            WORKS_ON B
        WHERE
            (B.PNO IN (SELECT 
                    PNUMBER
                FROM
                    PROJECT
                WHERE
                    DNUM = 5)
                AND NOT EXISTS( SELECT 
                    *
                FROM
                    WORKS_ON C
                WHERE
                    C.ESSN = SSN AND C.PNO = B.PNO)));

SELECT 
    FNAME, LNAME
FROM
    EMPLOYEE
WHERE
    EXISTS( SELECT 
            *
        FROM
            WORKS_ON B
        WHERE
            (B.PNO IN (SELECT 
                    PNUMBER
                FROM
                    PROJECT
                WHERE
                    DNUM = 5)
                AND EXISTS( SELECT 
                    *
                FROM
                    WORKS_ON C
                WHERE
                    C.ESSN = SSN AND C.PNO = B.PNO)));

SELECT 
    Fname, Lname
FROM
    employee E
WHERE
    EXISTS( SELECT 
            W.essn
        FROM
            works_on W,
            project P
        WHERE
            P.Pnumber = W.Pno AND W.essn = E.ssn
                AND P.dnum = 5);

SELECT 
    SSN
FROM
    employee;

SELECT 
    FNAME, LNAME
FROM
    EMPLOYEE
WHERE
    NOT EXISTS( SELECT 
            *
        FROM
            WORKS_ON B
        WHERE
            (B.PNO IN (SELECT 
                    PNUMBER
                FROM
                    PROJECT
                WHERE
                    DNUM = 5)
                AND EXISTS( SELECT 
                    *
                FROM
                    WORKS_ON C
                WHERE
                    C.ESSN = SSN AND C.PNO = B.PNO)));

SELECT 
    Fname, Lname
FROM
    employee E
WHERE
    NOT EXISTS( SELECT 
            W.essn
        FROM
            works_on W,
            project P
        WHERE
            P.Pnumber = W.Pno AND W.essn = E.ssn
                AND P.dnum = 5);

select count(*) from employee;
SELECT 
    FNAME, LNAME
FROM
    EMPLOYEE
WHERE
    EXISTS( SELECT 
            *
        FROM
            WORKS_ON B
        WHERE
            (B.PNO IN (SELECT 
                    PNUMBER
                FROM
                    PROJECT
                WHERE
                    DNUM = 5)
                AND NOT EXISTS( SELECT 
                    *
                FROM
                    WORKS_ON C
                WHERE
                    C.ESSN = SSN AND C.PNO = B.PNO)));


use company;

SELECT 
    *
FROM
    works_on;

SELECT 
    *
FROM
    project;

use company;

drop table if exists temp1, temp2;
create temporary table temp1 (pname varchar(25));
create temporary table temp2 (pname varchar(25));

drop table temp1;
drop table temp2;

SELECT 
    *
FROM
    temp1;
SELECT 
    *
FROM
    temp2;

insert into temp1(pname)
SELECT 	PNAME
		FROM		PROJECT, DEPARTMENT, EMPLOYEE
		WHERE	DNUM=DNUMBER AND MGRSSN=SSN AND LNAME='Smith';
        
insert into temp2(pname)
SELECT  	PNAME
		FROM		PROJECT, WORKS_ON, EMPLOYEE
		WHERE	PNUMBER=PNO AND 
					       ESSN=SSN AND LNAME='Smith';

SELECT 
    *
FROM
    temp1;
SELECT 
    *
FROM
    temp2;

                        
SELECT 
    pname
FROM
    temp2
WHERE
    pname IN (SELECT 
            pname
        FROM
            temp1);

SELECT 
    pname
FROM
    temp2
WHERE
    pname NOT IN (SELECT 
            pname
        FROM
            temp1);

show tables;

--  ---- chapter 5 examples ------------
use company;

SELECT 
    FNAME, LNAME
FROM
    EMPLOYEE
WHERE
    SUPERSSN IS NULL;

SELECT 
    FNAME, LNAME, SSN
FROM
    EMPLOYEE
WHERE
    SUPERSSN = 'NULL';

SELECT 
    fname, lname, superssn
FROM
    employee
WHERE
    superssn = 'NULL';

SELECT 
    fname, lname, superssn
FROM
    employee
WHERE
    superssn IS NULL;

UPDATE employee 
SET 
    superssn = NULL
WHERE
    ssn = '111111100';

SELECT 
    fname, lname, superssn
FROM
    employee
WHERE
    superssn IS NULL;

SELECT 
    fname, lname, superssn
FROM
    employee
WHERE
    superssn IS UNKNOWN;

SELECT 
    E.FNAME, E.LNAME, D.DNAME
FROM
    DEPARTMENT  D,
    EMPLOYEE AS E
WHERE
    D.DNAME = 'research dept'
        AND D.DNUMBER = E.DNO;


SELECT 
    E.FNAME, E.LNAME, D.DNAME
FROM
    (DEPARTMENT AS D
    JOIN EMPLOYEE AS E ON D.DNUMBER = E.DNO)
WHERE
    DNAME = 'research dept';

SELECT 
    DNAME, DLOCATION
FROM
    Department
        NATURAL JOIN
    Dept_locations
WHERE
    DNAME = 'research dept';

use company;

SELECT 
    D.DNAME, E.FNAME, E.LNAME
FROM
    (DEPARTMENT AS D
    LEFT OUTER JOIN EMPLOYEE AS E ON D.DNUMBER = E.DNO);

SELECT 
    D.DNAME, E.FNAME, E.LNAME
FROM
    (DEPARTMENT AS D
    RIGHT OUTER JOIN EMPLOYEE AS E ON D.DNUMBER = E.DNO);

/* aggregate functions **/

SELECT 
    SUM(SALARY),
    MAX(Salary),
    MIN(Salary),
    CONCAT('$', FORMAT(AVG(salary), 2)) AS averageSalary
FROM
    EMPLOYEE;

SELECT 
    SUM(SALARY), MAX(Salary), MIN(Salary), AVG(SALARY)
FROM
    EMPLOYEE
        JOIN
    DEPARTMENT ON DNO = DNUMBER
WHERE
    DNAME = 'research dept';

SELECT 
    COUNT(superssn)
FROM
    EMPLOYEE;

SELECT 
    COUNT(*)
FROM
    EMPLOYEE AS E,
    DEPARTMENT AS D
WHERE
    E.DNO = D.DNUMBER
        AND D.DNAME = 'research dept';

SELECT 
    COUNT(DISTINCT Salary)
FROM
    EMPLOYEE;

SELECT 
    LNAME, FNAME
FROM
    EMPLOYEE
WHERE
    (SELECT 
            COUNT(*)
        FROM
            DEPENDENT
        WHERE
            SSN = ESSN) >= 2;
            
select dno, ssn from employee;

SELECT 
    DNO, COUNT(*), AVG(SALARY)
FROM
    EMPLOYEE
GROUP BY DNO;

/* non standard allowed in MySQL **/

SELECT 
    DNO, COUNT(*), AVG(SALARY)
FROM
    EMPLOYEE
GROUP BY SAlary;

-- pp 11 of ch 5 --

SELECT 
    P.PNUMBER, P.PNAME, COUNT(*)
FROM
    PROJECT AS P,
    WORKS_ON AS W
WHERE
    P.PNUMBER = W.PNO
GROUP BY P.PNUMBER , P.PNAME;


SELECT 
    PNUMBER, PNAME, COUNT(*)
FROM
    PROJECT,
    WORKS_ON
WHERE
    PNUMBER = PNO
GROUP BY PNUMBER , PNAME
HAVING COUNT(*) > 2;

SELECT 
    PNUMBER, PNAME, COUNT(*)
FROM
    PROJECT,
    WORKS_ON
WHERE
    PNUMBER = PNO
GROUP BY PNUMBER , PNAME
HAVING COUNT(*) > 2
ORDER BY PNAME, PNUMBER;

SELECT 
    PNUMBER, PNAME, COUNT(*)
FROM
    PROJECT,
    WORKS_ON
WHERE
    PNUMBER = PNO
GROUP BY PNUMBER , PNAME
HAVING COUNT(*) > 2
ORDER BY PNAME , PNUMBER
LIMIT 0 , 3;

-- views pp. 14 of ch 5-----

drop view if exists works_on1;

CREATE VIEW WORKS_ON1 AS
    SELECT 
        FNAME, LNAME, PNAME, HOURS
    FROM
        EMPLOYEE,
        PROJECT,
        WORKS_ON
    WHERE
        SSN = ESSN AND PNO = PNUMBER;

SELECT 
    *
FROM
    works_on1;

drop view if exists works_on2;

CREATE 
    ALGORITHM = TEMPTABLE 
VIEW WORKS_ON2 AS
    SELECT 
        FNAME, LNAME, PNAME, HOURS
    FROM
        EMPLOYEE,
        PROJECT,
        WORKS_ON
    WHERE
        SSN = ESSN AND PNO = PNUMBER;

SELECT 
    *
FROM
    works_on2;

drop view emp1;

select ssn, lname, superssn, ssn
 from employee
 where superssn is NULL;

create view emp1(
ssn, lname, superssn, dno)
as select ssn, lname, superssn, dno from employee
where superssn is NULL with CHECK OPTION;

select * from emp1;