from django.http import HttpResponse
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.generics import ListAPIView
from rest_framework.filters import OrderingFilter

from .models import Task
from .serializers import TaskSerializer

# Create your views here.
def index(req):
    return HttpResponse("Hello World!")

class TaskList(APIView):
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

class TaskDetail(APIView):
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
    
class TaskStatusUpdate(APIView):
    """
    Update assigned or completed fields.
    """
    def get_object(self, pk):
        try:
            return Task.objects.get(pk=pk)
        except Task.DoesNotExist:
            raise Http404

    def put(self, request, pk, action, format=None):
        task = self.get_object(pk)
        if action == "select":
            task.assigned = True
            task.save()
            serializer = TaskSerializer(task)
            return Response(serializer.data)
        elif action == "complete":
            task.completed = True
            task.save()
            serializer = TaskSerializer(task)
            return Response(serializer.data)
        else:
            return Response(status=status.HTTP_400_BAD_REQUEST)

class NewTaskList(ListAPIView):
    serializer_class = TaskSerializer
    filter_backends = [OrderingFilter]
    ordering_fields = ['task', 'estimated_duration_mins', 'task_setter']  # Without this, you can order on any variable
    
    def get_queryset(self):
        queryset = Task.objects.all()
        task_setter = self.request.query_params.get('task_setter')
        if task_setter is not None:
            queryset = queryset.filter(task_setter = task_setter)
        return queryset