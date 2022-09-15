from django.contrib import admin
from django.urls import path
from . import views

urlpatterns = [
    # path('admin/', admin.site.urls),
    path('', views.index, name='index'),
    path('lcbo/', views.lcbo, name='lcbo'),
    path('me/', views.me, name='me'),
    path('sdc/', views.sdc, name='sdc')
]