from django.contrib import messages
from django.shortcuts import render, redirect
from django.http import HttpResponse, HttpResponseRedirect
from .models import ToDoList, Item
from .forms import CreateNewList
from django.contrib.auth.decorators import login_required


# Create your views here.
def index(request, id):
    obj = ToDoList.objects.get(id=id)
    if obj in request.user.todolist.all():

        if request.method == "POST":
            if request.POST.get('save'):
                for item in obj.item_set.all():
                    if request.POST.get("c" + str(item.id)) == "clicked":
                        item.complete = True
                    else:
                        item.complete = False
                    item.save()

            elif request.POST.get("newitem"):
                txt = request.POST.get("new")

                if len(txt) != 0:
                    obj.item_set.create(text=txt, complete=False)
                else:
                    print("Invalid")

        return render(request, "list.html", {"obj": obj})

    # messages.warning(request, "You're not the owner of that!")
    return redirect('/')


def home(response):
    # Gonna modernize this place later
    return render(response, "home.html", {})


def create(request):
    if request.method == "POST":
        form = CreateNewList(request.POST)

        if form.is_valid():
            new = form.cleaned_data['name']
            obj = ToDoList(name=new)
            obj.save()
            request.user.todolist.add(obj)

        return redirect(f"/{obj.id}")

    else:
        form = CreateNewList()

    return render(request, "create.html", {"form": form})


def view(request):
    return render(request, "view.html", {})


def delete(request, id):
    ToDoList.objects.get(id=id).delete()
    return redirect("/view/")

# GAMES
@login_required
def rpg(request):
    return render(request, "games/rpg.html", {})

@login_required
def whack_a_mole(request):
    return render(request, "games/whack-a-mole.html", {})
