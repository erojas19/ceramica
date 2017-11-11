from django.contrib import admin
# Register your models here.
from .models import Menu


class MenuAdmin(admin.ModelAdmin):
    list_display = ('id', 'text', 'icon_cls', 'class_name', 'status', 'parent_id',)
    fields = ('text', 'icon_cls', 'class_name', 'status', 'parent')
    raw_id_fields = ('parent',)


admin.site.register(Menu, MenuAdmin)
