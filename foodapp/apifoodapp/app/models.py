from tkinter.constants import CASCADE

from django.db import models
from django.contrib.auth.models import AbstractUser
from cloudinary.models import CloudinaryField


class Role(models.TextChoices):
    ADMIN = 'admin'
    CUSTOMER = 'customer'
    RES_USER = 'restaurant-user'


class User(AbstractUser):
    email = models.EmailField(unique=True)
    phone_number = models.CharField(max_length=15, blank=True, null=True)
    is_active = models.BooleanField(default=True)
    role = models.CharField(max_length=20, choices=Role.choices, default=Role.CUSTOMER)
    avatar = CloudinaryField('avatar', null=True)

    def __str__(self):
        return f'{self.first_name} {self.last_name}'


class MainCategory(models.Model):
    name = models.CharField(max_length=100, null=False, unique=True)
    image = models.ImageField(upload_to='upload/%Y/%m', null=True)
    active = models.BooleanField(default=True)

    def __str__(self):
        return self.name


class FoodCategory(models.Model):
    name = models.CharField(max_length=100, null=False, unique=True)

    def __str__(self):
        return self.name

class Restaurant(models.Model):
    name = models.CharField(max_length=100, blank=False, null=False)
    address = models.CharField(max_length=255, blank=True)
    phone_number = models.CharField(max_length=10, blank=True, null=True)
    owner = models.ForeignKey(User, on_delete=models.CASCADE, related_name="restaurants")
    star_rate = models.FloatField(null=True)
    active = models.BooleanField(default=True)
    image = models.ImageField(upload_to='upload/%Y/%m', null=True)


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
