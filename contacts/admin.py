from django.contrib import admin
from .models import Contact


class ContactAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'surname', 'car_title', 'created_on')
    list_display_links = ('id', 'name')
    search_fields = ('name', 'surname', 'car_title')
    list_per_page = 25


admin.site.register(Contact, ContactAdmin)
