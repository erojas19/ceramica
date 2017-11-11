from django.conf.urls import url

from apps.home import views

urlpatterns = [
    url(r'^$', views.index, name='index'),
]
