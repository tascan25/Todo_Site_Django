from django.urls import path
from .views import TodoListCreateView, TodoUpdateView, TodoListReteriveView, TodoListDeleteView

urlpatterns = [
    path('todo/create',TodoListCreateView.as_view(),name='todo-create'),
    path('todo/all',TodoListReteriveView.as_view(),name='todo-all'),
    path('todo/update/<int:pk>',TodoUpdateView.as_view(),name='todo-update'),
    path('todo/delete/<int:pk>',TodoListDeleteView.as_view(),name='todo-delete'),
]
