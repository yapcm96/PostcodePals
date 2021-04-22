from django.db import models

# Create your models here.
class Task(models.Model):
    # id=models.IntegerField(primary_key=True)
    task = models.CharField(max_length=200, null = True)
    type_of_task = models.CharField(max_length=200, null = True)
    location = models.CharField(max_length=200, null = True)
    estimated_duration_mins = models.DecimalField(decimal_places = 2, max_digits = 10)
    deadline = models.CharField(max_length=200, null = True)
    notes = models.CharField(max_length=200, null = True, blank = True)
    assigned = models.BooleanField(default=False)
    completed = models.BooleanField(default=False)
    task_setter = models.CharField(max_length=200, null=True)

    def __str__(self):
        return f'{self.task} for {self.task_setter}'

        