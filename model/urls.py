from django.contrib import admin
from django.urls import path
from .views import (RegionsJson, RegionsView)

urlpatterns = [
    path('RegionsJson/', RegionsJson.as_view(), name='RegionsJson'),
    path('regions/', RegionsView.as_view(), name='RegionsView')

]
