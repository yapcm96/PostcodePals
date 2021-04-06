from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('view-tasks', views.view_tasks, name='view-tasks'),
    path('view-tasks/<int:id>', views.update_task_view),
]