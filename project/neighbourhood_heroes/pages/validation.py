from django.shortcuts import render, get_object_or_404
from django.http import HttpResponse, JsonResponse, HttpRequest
import json

from .models import Task

def validate_updating_status(request, id, str):
    object_to_update = get_object_or_404(Task, id=id)

    request_body = json.loads(request.body)
    if request_body['status'] == str:
        object_to_update.status = request_body['status']
        object_to_update.save()
        return HttpResponse(status=200)
    else:
        return HttpResponse(status=400)