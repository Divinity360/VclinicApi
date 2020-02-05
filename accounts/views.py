from django.contrib.auth import get_user_model
from django.shortcuts import render

from rest_framework.generics import (
    RetrieveAPIView,
    ListAPIView,
    CreateAPIView,
    RetrieveUpdateAPIView,
    DestroyAPIView,
)
from rest_framework.permissions import AllowAny

from .api.serializers import (
    RegisterSerializer,
    LoginSerializer
)


# Create your views here.

class CreateRegisterView(CreateAPIView):
    model = get_user_model()
    permission_classes = (AllowAny,)
    serializer_class = RegisterSerializer()

