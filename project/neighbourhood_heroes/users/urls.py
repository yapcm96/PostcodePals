from django.urls import path
from users.views import (
    registration_view
)

app_name = 'users'
urlpatterns = [
    path('register/', registration_view, name='register'),
]