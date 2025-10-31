from django.shortcuts import render
from rest_framework import generics
from .models import TodoItem
from .serializers import TodoSerializer


class TodoListCreateView(generics.ListCreateAPIView):
    queryset = TodoItem.objects.all()
    serializer_class = TodoSerializer

class TodoUpdateView(generics.RetrieveUpdateAPIView):
    queryset = TodoItem.objects.all()
    serializer_class = TodoSerializer

class TodoListReteriveView(generics.ListAPIView):
    queryset = TodoItem.objects.all()
    serializer_class = TodoSerializer

class TodoListDeleteView(generics.RetrieveDestroyAPIView):
    queryset = TodoItem.objects.all()
    serializer_class = TodoSerializer


# Create your views here.