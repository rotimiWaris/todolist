from django.urls import path

from . import views

app_name = 'core'

urlpatterns = [
    path("<int:id>/", views.index, name="index"),
    path("", views.home, name="home"),
    path("home/", views.home, name="home"),
    path("create/", views.create, name="create"),
    path("view/", views.view, name="view"),
    path("delete/<int:id>/", views.delete, name="delete"),
]
