from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('see-tasks', views.TaskList.as_view(), name='see-tasks'),
    path('view-tasks', views.view_tasks, name='view-tasks'),
    path('view-new-tasks', views.NewTaskList.as_view(), name='view-new-tasks'),
    path('view-tasks/<pk>/class-view', views.TaskUpdate.as_view(), name='update-specific-task'),
    path('view-tasks/<pk>/class-view/select', views.StatusUpdate.as_view(), name='select-a-task'),
    path('view-tasks/<pk>/class-view/complete', views.StatusUpdate.as_view(), name='completed-a-task'),
    path('delete-task/<pk>', views.delete_task, name='delete-task')
]