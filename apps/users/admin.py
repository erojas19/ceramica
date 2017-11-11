from django.contrib import admin

# Register your models here.

from apps.users.models import User

# class UserAdmin(UserAdmin):
#     fieldsets = (
#         ('User', {'fields': ('username', 'password',)}),
#         ('Persona Info', {'fields': ('first_name', 'second_name', 'third_name',)}),
#         ('Permisos',
#          {'fields': ('is_active', 'is_staff', 'is_superuser', 'groups', 'user_permissions',)})
#     )


admin.site.register(User)
