from django.db import models
from django.contrib.auth.models import User


class Contact(models.Model):
    name = models.CharField(max_length=100)
    surname = models.CharField(max_length=100, blank=True)
    car_id = models.IntegerField()
    car_title = models.CharField(max_length=255)
    phone = models.CharField(max_length=100, blank=True)
    message = models.TextField(blank=True)
    created_on = models.DateTimeField(auto_now_add=True)
    owner = models.ForeignKey(User, on_delete=models.CASCADE)

    def __str__(self):
        return self.email
