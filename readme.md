# Django datatables boilerplate

This project is an example of using Django and the django-datatables-view plugin, it can be used as a boiler plate or just to get a better understanding of how to use this great plugin.

In this sample project I will demonstrate how to get up and running django-datatables-view as well as moving past that with some additional technologies which are popular at the moment and how to combine them all to make a working Django site. 

In this example I have used two separate databases, the first for the Django admin and authentication and the other is a read only database which could be a real life scenario when you first want to start working with Django.

The sample database used is the the French Towns and Communes from [pgfoundry.org](http://pgfoundry.org/projects/dbsamples/). 

I have only tested this project with Python 3.x (specifically 3.7.0b3), running on Linux Mint 19 Tara and Postgres SQL 10.5. In theory you should be able to use whatever database you have access to (SQLlite should also work).

## Getting Started

1. Clone this repository
```
git clone git@github.com:dre2004/django-datatables-boilerplate.git
```
2. Install Django and other requirements
```
pip install -r requirements.txt
```
3. Download sample database (French towns) from [pgfoundry.org](http://pgfoundry.org/projects/dbsamples/). If you're using Postgres the following instructions should get you up and running.
```
$ tar zxvf french-towns-communes-francaises-1.0.tar.gz
$ psql -U <INSERT YOUR DB USERNAME> -W postgres

postgres=# create database towns;
CREATE DATABASE
postgres=# create user readonly with password 'securepass123!';
postgres=# \c towns
You are now connected to database "towns" as user "postgres"
towns=# grant select on all tables in schema public to readonly;
GRANT
postgres=#\q
```
The commands above will need to be run as the postgres root user (typically postgres as seen in the example) or a user with the relevant privileges.

### Prerequisites

What things you need to install the software and how to install them

1. [Python 3.x+](https://www.python.org/) - See Python site for platform specific instructions.
2. A working database server, my personal preference is [Postgresql](https://www.postgresql.org/).
3. Time and patients - This is a prerequisite for most things in life :).

## Deployment

This code isn't production ready, so deploy at your own risk. As a guide the minimum you will need to do to get this production ready will be to add authentication / authorization to the admin app and review and harden the settings.py.

## Built With

* [Django 2.1.1](https://www.djangoproject.com/) - Python web framework
* [django-datatables-view](https://bitbucket.org/pigletto/django-datatables-view/src/master/)
* [bootstrap 4.1.1](https://getbootstrap.com/) - HTML, CSS and Javascript library
* [requirejs 2.3.5](https://requirejs.org/) - Javascript file and module loader

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/dre2004/django-datatables-boilerplate/tags). 

## Authors

* *Initial work* - [DRE2004](https://github.com/dre2004)

See also the list of [contributors](https://github.com/dre2004/django-datatables-boilerplate/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](license.md) file for details
