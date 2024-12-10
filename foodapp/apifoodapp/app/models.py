from django.db import models
from django.contrib.auth.models import AbstractUser


class User(AbstractUser):
    avatar = models.ImageField(upload_to='upload/%Y/%m')


# Create your models here.
class FoodCategory(models.Model):
    name = models.CharField(max_length=100, null=False, unique=True)

    def __str__(self):
        return self.name


class Food(models.Model):
    name = models.CharField(max_length=100, null=False)
    price = models.FloatField(null=False)
    description = models.TextField(null=True, blank=True)
    active = models.BooleanField(default=True)
    category = models.ForeignKey(FoodCategory, on_delete=models.SET_NULL, null=True)
    image = models.ImageField(upload_to='app/%Y/%m', default=None)

    def __str__(self):
        return self.name
