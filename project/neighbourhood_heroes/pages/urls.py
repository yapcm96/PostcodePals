from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('view-tasks', views.view_tasks, name='view-tasks'),
    path('view-tasks/<pk>/class-view', views.TaskUpdate.as_view(), name='update-specific-task'),
    path('view-tasks/<pk>/class-view/select', views.StatusUpdate.as_view(), name='select-a-task'),
    path('view-tasks/<pk>/class-view/complete', views.StatusUpdate.as_view(), name='completed-a-task'),
]