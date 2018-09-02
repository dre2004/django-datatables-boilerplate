# This is an auto-generated Django model module.
# You'll have to do the following manually to clean this up:
#   * Rearrange models' order
#   * Make sure each model has one field with primary_key=True
#   * Make sure each ForeignKey has `on_delete` set to the desired behavior.
#   * Remove `managed = False` lines if you wish to allow Django to create, modify, and delete the table
# Feel free to rename the models, but don't rename db_table values or field names.
from django.db import models

class Regions(models.Model):
    id = models.AutoField(unique=True, primary_key=True)
    code = models.CharField(unique=True, max_length=4)
    capital = models.CharField(max_length=10)
    name = models.TextField(unique=True)

    class Meta:
        managed = False
        db_table = 'regions'


class Departments(models.Model):
    id = models.AutoField(unique=True, primary_key=True)
    code = models.CharField(unique=True, max_length=4)
    capital = models.CharField(unique=True, max_length=10)
    region = models.ForeignKey(Regions, on_delete=models.DO_NOTHING, db_column='region', to_field='code')
    name = models.TextField(unique=True)

    class Meta:
        managed = False
        db_table = 'departments'

class Towns(models.Model):
    id = models.AutoField(unique=True, primary_key=True)
    code = models.CharField(max_length=10)
    article = models.TextField(blank=True, null=True)
    name = models.TextField()
    department = models.ForeignKey(Departments, on_delete=models.DO_NOTHING, db_column='department', to_field='code')

    class Meta:
        managed = False
        db_table = 'towns'
        unique_together = ('code', 'department')
