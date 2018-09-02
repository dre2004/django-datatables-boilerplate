from django.db.models import Q, Count
from django.shortcuts import redirect, render
from django.urls import reverse
from django.utils.html import escape
from django.views.generic import DetailView, TemplateView
from django_datatables_view.base_datatable_view import BaseDatatableView

# From models
from .models import Departments, Regions, Towns

class RegionsJson(BaseDatatableView):
    test = Regions.objects.all()
    model = Regions
    columns = ['code', 'capital', 'name']
    order_columns = ['code', 'capital', 'name']

    def render_column(self, row, column):
        return super(RegionsJson, self).render_column(row, column)

    def filter_queryset(self, qs):
        search = self.request.GET.get(u'search[value]', None)

        if search:
            qs = qs.filter(Q(code__icontains=search)
                          |Q(capital__icontains=search)
                          |Q(name__icontains=search))
        return qs

class RegionsView(TemplateView):
    template_name = 'regions.html'
    columns = ['code', 'capital', 'name']
