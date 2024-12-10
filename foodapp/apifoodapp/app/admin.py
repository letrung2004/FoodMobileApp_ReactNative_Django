from django.contrib import admin
from django.utils.html import mark_safe
from .models import FoodCategory, Food


# Register your models here
class FoodAdmin(admin.ModelAdmin):
    list_display = ["id", "name", "price", "category"]
    search_fields = ["name", "price", "category__name"]
    readonly_fields = ['image_food']

    def image_food(self, food):
        return mark_safe(f"<img src='/static/{food.image.name}' width='200' />")


class FoodCategoryAdmin(admin.ModelAdmin):
    list_display = ["id", "name"]
    search_fields = ["name"]


class FoodAppAdminSite(admin.AdminSite):
    site_header = 'FOOD SALE APP'


admin_site = FoodAppAdminSite('myfoodapp')
admin_site.register(Food, FoodAdmin)
admin_site.register(FoodCategory, FoodCategoryAdmin)
