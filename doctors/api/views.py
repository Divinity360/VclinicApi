from rest_framework.generics import (
    RetrieveAPIView,
    ListAPIView,
    CreateAPIView,
    RetrieveUpdateAPIView,
    DestroyAPIView,
)
from rest_framework.views import APIView

from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from django.http import response, HttpResponse, JsonResponse
from rest_framework.status import HTTP_200_OK, HTTP_400_BAD_REQUEST, HTTP_201_CREATED
import json

from .serializers import (
    DoctorsSerializer,
    DoctorDetailSerializer,
    DoctorSerializer,
)
from doctors.models import Doctor


class AddDoctorAPIView(CreateAPIView):
    serializer_class = DoctorSerializer
    permission_classes = [AllowAny, ]


class UpdateDoctorsAPIView(RetrieveUpdateAPIView):
    serializer_class = DoctorSerializer
    lookup_field = 'id'
    lookup_url_kwarg = 'id'
    permission_classes = [AllowAny, ]

    def get_queryset(self, *args, **kwargs):
        queryset = Doctor.objects.filter(id=self.kwargs['id'])
        return queryset


class DeleteDoctorsAPIView(DestroyAPIView):
    lookup_field = 'id'
    lookup_url_kwarg = 'id'
    permission_classes = [AllowAny, ]

    def get_queryset(self, *args, **kwargs):
        queryset = Doctor.objects.filter(id=self.kwargs['id'])
        return queryset


class AllDoctorsAPIView(ListAPIView):
    serializer_class = DoctorsSerializer
    permission_classes = [AllowAny, ]

    def get_queryset(self, *args, **kwargs):
        queryset = Doctor.objects.all().order_by('-id')
        return queryset


class DoctorDetailAPIView(RetrieveAPIView):
    serializer_class = DoctorDetailSerializer
    lookup_field = 'slug'
    permission_classes = [AllowAny, ]

    def get_queryset(self, *args, **kwargs):
        queryset = Doctor.objects.filter(slug__iexact=self.kwargs['slug'])
        return queryset


class CategoryAPIView(ListAPIView):
    serializer_class = DoctorsSerializer
    permission_classes = [AllowAny, ]

    def get_queryset(self, *args, **kwargs):
        queryset = Doctor.objects.filter(category=self.kwargs['category']).order_by('-id')
        return queryset
