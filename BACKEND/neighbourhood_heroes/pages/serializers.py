from rest_framework import serializers

from .models import Task


class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = Task
        fields = (
            'id',
            'task',
            'type_of_task',
            'location',
            'estimated_duration_mins',
            'deadline',
            'notes',
            'assigned',
            'completed',
            'task_setter',
        )
