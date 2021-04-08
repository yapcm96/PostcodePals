from rest_framework.exceptions import APIException

class TaskNotAssigned(APIException):
    status_code = 400
    default_detail = "You cannot complete a task which has not been assigned"
    default_code = "task_not_assigned"