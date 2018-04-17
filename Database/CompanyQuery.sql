/*(c) Write a SQL statement to retrieve a list of all project names of the projects, which involve an
employee whose last name is 'Smith' as a worker on the project, or as a manager of the
department that controls the project.
(d) Write a SQL to retrieve a list of employees and the projects they are working on, ordered by the
employee's department, and within each department ordered alphabetically by employee last
name.
(e) Write a SQL statement to retrieve the project number, project name, and the number of
employees who work on that project for each project.*/

SELECT pname FROM employee, works_on, project
WHERE (lname = "Smith" AND essn = ssn AND pno = pnumber);

SELECT fname, lname, pname FROM employee, project, works_on, department
WHERE (essn = ssn AND pno = pnumber AND dnum = dnumber)
ORDER BY dnumber, lname;

SELECT COUNT(*), pnumber, pname FROM project, works_on, employee, department
WHERE (essn = ssn AND pno = pnumber AND dnum= dnumber)
GROUP BY pnumber;


SELECT DISTINCT lname FROM employee, works_on, project
WHERE NOT EXISTS (SELECT dnumber FROM department WHERE essn = ssn AND dnumber =  5)
AND dnum = dno;

SELECT DISTINCT lname FROM employee, works_on, project
WHERE EXISTS (SELECT dnumber FROM department WHERE essn = ssn AND dnumber =  5)
AND dnum = dno;

SELECT distinct fname, lname FROM employee, department, works_on, project
WHERE (essn = ssn AND pno = pnumber AND dnum = dnumber AND dnumber = 5);


explain extended select * from employee;
explain extended select * from employee
 where SSN= 111111101;
 show indexes from employee;
 explain extended select * from employee where fname = 'Joe';
