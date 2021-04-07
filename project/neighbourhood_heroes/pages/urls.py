from django.urls import path
from . import views

urlpatterns = [
    path('', views.index),
    path('tasks', views.TaskList.as_view()),
    path('tasks/<int:pk>', views.TaskDetail.as_view()),
    path('view-tasks/<int:pk>/class-view/select', views.StatusUpdate.as_view(), name='select-a-task'),
    path('view-tasks/<int:pk>/class-view/complete', views.StatusUpdate.as_view(), name='completed-a-task'),
]