from django.contrib import admin
from .models import Departments, Regions, Towns

# Register your models here.
@admin.register(Regions)
class RegionsAdmin(admin.ModelAdmin):
    list_display = [ 'id', 'code', 'capital', 'name']

@admin.register(Departments)
class DepartmentsAdmin(admin.ModelAdmin):
    list_display = ['id', 'code', 'capital', 'region', 'name']

@admin.register(Towns)
class TownsAdmin(admin.ModelAdmin):
    list_display = ['code', 'article', 'name', 'department']
