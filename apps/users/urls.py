from django.conf.urls import url
from apps.users import views

urlpatterns = [
 url(r'^users/$', views.user_list, name='users'),
 url(r'^new_user/$', views.new_user, name='new_user'),
 url(r'^delete_user/$', views.delete_user, name='delete_user'),
 url(r'^update_user/$', views.update_user,
     name='update_user'),
]
