from django.contrib import admin
# Register your models here.
from apps.production.models import PhaseProduction, Machine


class PhaseProductionAdmin(admin.ModelAdmin):
    list_display = ('phase', 'status', 'created_at', 'updated_at',)


admin.site.register(PhaseProduction, PhaseProductionAdmin)
admin.site.register(Machine)
