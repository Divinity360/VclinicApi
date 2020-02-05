from django.conf.urls import url
from .views import (
    AllDoctorsAPIView,
    DoctorDetailAPIView,
    CategoryAPIView,
    AddDoctorAPIView,
    UpdateDoctorsAPIView,
    DeleteDoctorsAPIView,
)

urlpatterns = [
    url(r'^category/(?P<category>[a-zA-Z0-9].*)/$', CategoryAPIView.as_view(), name='category_api'),
    url(r'^all/$', AllDoctorsAPIView.as_view(), name='all_api'),
    url(r'^add/$', AddDoctorAPIView.as_view(), name='add_api'),
    url(r'^update/(?P<id>\d+)/$', UpdateDoctorsAPIView.as_view(), name='update_api'),
    url(r'^delete/(?P<id>\d+)/$', DeleteDoctorsAPIView.as_view(), name='delete_api'),
    url(r'^(?P<slug>[\w-]+)/$', DoctorDetailAPIView.as_view(), name='detail_api'),
]
