from django.shortcuts import render
from rest_framework.response import Response
from rest_framework import status
from students.serializers import StudentSerializers
from students.models import Students
from rest_framework.views import APIView
# Create your views here.



class StudentAPIView(APIView):
    def get(self, id, request):
        pass

    def post(self, id, request):
        pass

    def put(self, id, request):
        pass

    def delete(self, id, request):
        pass


