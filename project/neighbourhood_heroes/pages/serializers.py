from rest_framework import serializers

from .models import Task

class TaskSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Task
        fields = (
            'task',
            'type_of_task',
            'location',
            'estimated_duration_mins',
            'deadline',
            'notes',
            'status',
            'task_setter',
        )