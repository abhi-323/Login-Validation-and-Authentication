from django.urls import path
from .views import RegisterUserAPIView


urlpatterns = [
    path('', RegisterUserAPIView.as_view(), name='Sign_Up'),
]
