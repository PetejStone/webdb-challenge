1. Explain the difference between `RDBMS` and `SQL`.
   Relational Dabase is a system of how you use data tables and managing their data.
    Sql is how you interact with those data tables (i.e. joining) 
1. Why do tables need a `primary key`?
    Tables need a primary key as reference.  It makes it easier for foreign keys to relate to 
    other tables through their PK.  It's like a reference number for the entire column.
1. What is the name given to a table column that references the primary key on another table.
    This is called a foreign key
1. What do we need in order to have a _many to many_ relationship between two tables.
     In order to have a many to many relationship, you build a third table where one column
    points to one table, and the other column points to the other table.
