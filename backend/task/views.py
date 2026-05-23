from django.shortcuts import render
from rest_framework import viewsets
from .serializers import TaskSerializer
from .models import Task

# Create your views here.

class TaskViewSet(viewsets.ModelViewSet):
    queryset = Task.objects.all().order_by('id')
    serializer_class = TaskSerializer