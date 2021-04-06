from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('view-tasks', views.view_tasks, name='view-tasks'),
    path('view-tasks/<int:id>/select', views.task_completer_select_view),
    path('view-tasks/<int:id>/complete', views.task_completer_complete_view),
    path('view-tasks/<pk>/class-view', views.TaskUpdate.as_view()),
    path('view-tasks/<pk>/class-view/select', views.StatusUpdate.as_view()),
    path('view-tasks/<pk>/class-view/complete', views.StatusUpdate.as_view())
]