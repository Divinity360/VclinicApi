from django.shortcuts import render
from django.views.generic import ListView

from .models import Doctor


class HomeListView(ListView):
    queryset = Doctor.objects.all().order_by('-id')
    template_name = 'home.html'
