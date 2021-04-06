from django.shortcuts import render, get_object_or_404
from django.http import HttpResponse, JsonResponse, HttpRequest
import json

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

# view for updating specific task
def update_task_view(request, id):
    if request.method == 'PUT':
        object_to_update = get_object_or_404(Task, id=id)
        print(object_to_update)
        request_body = json.loads(request.body)
        object_to_update.task=request_body['task']
        object_to_update.type_of_task = request_body['type_of_task']
        object_to_update.location = request_body['location']
        object_to_update.estimated_duration_mins = request_body['estimated_duration_mins']
        object_to_update.deadline = request_body['deadline']
        object_to_update.notes = request_body['notes']
        object_to_update.status = request_body['status']
        object_to_update.task_setter = request_body['task_setter']

        object_to_update.save()

        print(object_to_update)
        return HttpResponse(status=200)