from django.conf.urls import url, include

from apps.production import views

urlpatterns = [
  url(r'^machines/$', views.nachine_list, name='machines'),
  url(r'^new_machine/$', views.new_machine, name='new_machine'),
  # url(r'^delete_product/$', views.delete_product,
  #     name='delete_product'),
  # url(r'^update_product/$', views.update_product,
  #     name='update_product'),
]
