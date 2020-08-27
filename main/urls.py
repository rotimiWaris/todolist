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

    # GAMES
    path("rpg/", views.rpg, name="rpg"),
    path("whack-a-mole/", views.whack_a_mole, name="whack-a-mole"),
    path("connect-four/", views.connect_four, name="connect-four"),
]
