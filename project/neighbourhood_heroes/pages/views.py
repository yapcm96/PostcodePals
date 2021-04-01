from django.shortcuts import render
from django.http import HttpResponse, JsonResponse

from .models import Task

# Create your views here.
def index(req):
    return HttpResponse("Hello World!")

def view_tasks(request):
    if request.method == 'GET':
        tasks = [
            {
                'Task': task.task,
                'Type of task': task.type_of_task,
                'Location': task.location,
                'Estimated Duration (Mins)': task.estimated_duration_mins,
                'Deadline': task.deadline,
                'Notes': task.notes,
                'Status': task.status,
                'Setter': task.task_setter,
            }
            for task in Task.objects.all()
        ]

        return JsonResponse(tasks, safe = False)