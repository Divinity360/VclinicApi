from django.conf.urls import url, include
from django.contrib import admin
from django.conf import settings
from django.conf.urls.static import static
from django.urls import path

from doctors.views import HomeListView

urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^api/accounts/', include(('accounts.api.urls', 'accounts'), namespace='accounts_api')),
    url(r'^api/doctors/', include(('doctors.api.urls', 'doctors'), namespace='doctors_api')),
    url(r'^$', HomeListView.as_view(), name='main_home'),

    # path to djoser end points
    path('auth/', include('djoser.urls')),
    path('auth/', include('djoser.urls.jwt'))
]

urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
# urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
