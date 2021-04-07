from django.urls import path
from . import views

urlpatterns = [
    path('', views.index),
    path('tasks', views.TaskList.as_view()),
    path('tasks/<int:pk>', views.TaskDetail.as_view()),
    path('tasks/<int:pk>/<str:action>', views.TaskStatusUpdate.as_view(), name='status-change'),
]