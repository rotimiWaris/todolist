from django.contrib import admin

# Register your models here.
from django.contrib import admin
from .models import ToDoList, Item
# Register your models here.
admin.site.register(ToDoList)
admin.site.register(Item)