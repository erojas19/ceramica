from django.conf.urls import url
from apps.product import views

urlpatterns = [
	url(r'^products/$', views.product_list, name='products'),
	url(r'^new_product/$', views.new_product, name='new_product'),
	url(r'^delete_product/$', views.delete_product,
	name='delete_product'),
	url(r'^update_product/$', views.update_product,
	name='update_product'),
]
