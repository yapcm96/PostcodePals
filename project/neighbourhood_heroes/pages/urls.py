from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('view-tasks', views.view_tasks, name='view-tasks'),
]