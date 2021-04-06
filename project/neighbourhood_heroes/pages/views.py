from django.shortcuts import render, get_object_or_404
from django.http import HttpResponse, JsonResponse, HttpRequest
import json
from django.views.generic.edit import UpdateView
from .verification import verify_updating_status
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

    elif request.method == 'POST':
        request_body = json.loads(request.body)
        task = Task(
            task = request_body['task'],
            type_of_task = request_body['type_of_task'],
            location = request_body['location'],
            estimated_duration_mins = request_body['estimated_duration_mins'],
            deadline = request_body['deadline'],
            notes = request_body['notes'],
            status = request_body['status'],
            task_setter = request_body['task_setter'],
        )
        task.save()
        return HttpResponse(status=201)

    elif request.method == 'PUT':
        request_body = json.loads(request.body)
        required_task = Task.objects.get(id=request_body["id"])
        required_task.task=request_body['task']
        required_task.type_of_task = request_body['type_of_task']
        required_task.location = request_body['location']
        required_task.estimated_duration_mins = request_body['estimated_duration_mins']
        required_task.deadline = request_body['deadline']
        required_task.notes = request_body['notes']
        required_task.status = request_body['status']
        required_task.task_setter = request_body['task_setter']
        required_task.save()
        return HttpResponse(status=200)
        print(required_task)

# view for updating specific task by tasks setter
class TaskUpdate(UpdateView):
    model = Task
    template_name = 'placeholder_form_template.html'
    fields = [
        'task',
        'type_of_task',
        'location',
        'estimated_duration_mins',
        'deadline',
        'notes',
        'status',
        'task_setter'
        ]

    success_url = '/'
    
# view for updating the status of a task
class StatusUpdate(UpdateView):
    model = Task
    template_name = 'placeholder_form_template.html'
    fields = ['status']

    success_url = '/'
        
        
