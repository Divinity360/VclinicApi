from rest_framework.generics import (
    RetrieveAPIView,
    ListAPIView,
    CreateAPIView,
    RetrieveUpdateAPIView,
    DestroyAPIView,
)
from rest_framework.response import Response
from rest_framework.status import HTTP_200_OK, HTTP_400_BAD_REQUEST
from rest_framework.views import APIView
from rest_framework.permissions import AllowAny

from doctors.api.serializers import DoctorsSerializer
from doctors.models import Doctor
from .serializers import (
    RegisterSerializer,
    LoginSerializer,
)


class RegisterAPIView(CreateAPIView):
    serializer_class = RegisterSerializer
    permission_classes = [AllowAny, ]


class AllDoctorsAPIView(ListAPIView):
    serializer_class = DoctorsSerializer
    permission_classes = [AllowAny, ]

    def get_queryset(self, *args, **kwargs):
        queryset = Doctor.objects.all().order_by('-id')
        return queryset


class LoginAPIView(APIView):
    serializer_class = LoginSerializer
    permission_classes = [AllowAny, ]

    def post(self, request):
        serializer = LoginSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            new_data = serializer.data
            return Response(new_data, status=HTTP_200_OK)
        return Response(serializer.errors, status=HTTP_400_BAD_REQUEST)