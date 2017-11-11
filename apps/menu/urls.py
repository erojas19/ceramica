from django.conf.urls import url
# router.register(r'menu_list', views.MenuList.as_view())
from apps.menu import views

urlpatterns = [
	# url(r'^menus/$', views.MenuList.as_view(), name='menu'),
	url(r'^menus/$', views.menu_list, name='menu'),
	# url(r'^', include(router.urls)),
]