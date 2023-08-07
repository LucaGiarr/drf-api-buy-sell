from django.contrib import admin
from .models import Car


class CarAdmin(admin.ModelAdmin):
    list_display = ('id', 'make', 'model', 'condition', 'year',
                    'chilometers', 'fuel_type', 'price', 'created_on')
    list_display_links = ('id', 'make', 'model', 'year')
    search_fields = ('make', 'model', 'condition', 'year', 'chilometers',
                     'fuel_type',)
    list_per_page = 25


admin.site.register(Car, CarAdmin)
