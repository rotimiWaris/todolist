from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class ToDoList(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, null=True, related_name="todolist")
    name = models.CharField(max_length=200)

    def __str__(self):
        return self.name

class Item(models.Model):
    todolist = models.ForeignKey(ToDoList, on_delete=models.CASCADE)
    added_date = models.DateTimeField(null=True)
    text = models.CharField(max_length=300)
    complete = models.BooleanField()

    class Meta:
        ordering = ['-pk', '-added_date']

    def __str__(self):
        return self.text
