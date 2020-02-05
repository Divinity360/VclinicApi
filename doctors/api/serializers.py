from rest_framework.serializers import (
    ModelSerializer,
    HyperlinkedIdentityField,
    SerializerMethodField,
    )

from django.urls import reverse
from django.conf import settings

from doctors.models import Doctor


class DoctorsSerializer(ModelSerializer):
    detail_url = HyperlinkedIdentityField(
        view_name='doctors_api:detail_api',
        lookup_field='slug',
    )
    category_url = HyperlinkedIdentityField(
        view_name='doctors_api:category_api',
        lookup_field='category',
    )
    category = SerializerMethodField(read_only=True)

    class Meta:
        model = Doctor
        fields = [
            'id',
            'detail_url',
            'category_url',
            'category',
            'name',
            'price',
            'discount',
            'phone',
            'number_of_sales',
            'number_of_views',
            'avg_rate',
            'description',
            # 'image',
            'slug',
            'added',
            'updated',
        ]

    def get_category(self, obj):
        return str(obj.category)


class DoctorDetailSerializer(ModelSerializer):
    category = SerializerMethodField(read_only=True)
    all_doctor_url = SerializerMethodField()

    class Meta:
        model = Doctor
        fields = [
            'all_doctor_url',
            'id',
            'category',
            'name',
            'price',
            'discount',
            'phone',
            'number_of_sales',
            'number_of_views',
            'avg_rate',
            'description',
            # 'image',
            'avg_rate',
            'slug',
            'added',
            'updated',
        ]

    def get_category(self, obj):
        return str(obj.category)

    def get_all_doctors_url(self, obj):
        return settings.BASE_URL + reverse('doctor_api:all_api')


class DoctorSerializer(ModelSerializer):

    class Meta:
        model = Doctor
        fields = [
            'id',
            'category',
            'name',
            'price',
            'discount',
            'phone',
            'description',
            'added',
            'updated',
            # 'image',
        ]
