from django.shortcuts import render, get_object_or_404
from django.http import HttpResponse, JsonResponse, HttpRequest
import json

from .models import Task

def verify_updating_status(request, id, str):
    object_to_select = get_object_or_404(Task, id=id)

    request_body = json.loads(request.body)
    if request_body['status'] == str:
        object_to_select.status = request_body['status']
        object_to_select.save()
        return HttpResponse(status=200)
    else:
        return HttpResponse(status=400)