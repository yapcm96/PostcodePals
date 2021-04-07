from django.shortcuts import render, get_object_or_404
from django.http import HttpRequest, HttpResponse, JsonResponse, Http404
from django.views.generic import View, ListView, DetailView
from django.views.generic.edit import UpdateView
from django.core import serializers
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
import json

from .models import Task
from .serializers import TaskSerializer

# Create your views here.
def index(req):
    return HttpResponse("Hello World!")

class NewTaskList(APIView):
    """
    List all tasks, or create a new task.
    """
    def get(self, request, format=None):
        tasks = Task.objects.all()
        serializer = TaskSerializer(tasks, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        serializer = TaskSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class NewTaskDetail(APIView):
    """
    Retrieve, update or delete a task instance.
    """
    # Simplify using get_object_or_404?
    def get_object(self, pk):
        try:
            return Task.objects.get(pk=pk)
        except Task.DoesNotExist:
            raise Http404
    
    def get(self, request, pk, format=None):
        task = self.get_object(pk)
        serializer = TaskSerializer(task)
        return Response(serializer.data)

    # Does NOT make new instance if instance not found
    def put(self, request, pk, format=None):
        task = self.get_object(pk)
        serializer = TaskSerializer(task, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk, format=None):
        task = self.get_object(pk)
        task.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

class TaskList(ListView):
    model = Task

    # GET request overrides standard ListView GET functionality
    def get(self, requests, *args, **kwargs):
        queryset = self.get_queryset()
        response = serializers.serialize("json", queryset)
        return JsonResponse(data=response, status=200, safe=False)

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

# Delete request
def delete_task(request, pk):
    Task.objects.get(id=pk).delete()
    return HttpResponse('ok')