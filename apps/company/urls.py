from django.conf.urls import url

from apps.company import views

urlpatterns = [
  url(r'^empresa/show_empresa/$', views.list_general_date, name='show_empresa'),
  url(r'^empresa/save_empresa/$', views.save_empresa, name='save_empresa'),
]
