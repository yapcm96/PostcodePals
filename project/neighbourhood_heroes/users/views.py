from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view

from users.serializers import RegistrationSerializer


@api_view(['POST',])
def registration_view(request):
    if request.method == 'POST':
        serializer = RegistrationSerializer(data=request.data)
        data = {}
        if serializer.is_valid():
            users = serializer.save()
            data['response'] = "Successfully registered a new user."
            data['first name'] =users.first_name
            data['last name'] =users.last_name
            data['username'] =users.username
            data['email'] =users.email
        else:
            data = serializer.errors
        return Response(data)

