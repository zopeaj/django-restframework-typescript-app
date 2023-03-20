from django.urls import path
from students.views import StudentAPIView


urlpatterns = [
    path("", StudentAPIView.as_view(), namespace="student-list-view"),
]

