from django.contrib import messages
from django.shortcuts import render, redirect
from django.http import HttpResponse, HttpResponseRedirect
from .models import ToDoList, Item
from .forms import CreateNewList
from django.contrib.auth import get_user

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

		return render(request, "main/list.html", {"obj": obj})

	messages.warning(request, "You're not the owner of that!")
	return redirect('/')


def home(response):
	#Gonna modernize this place later
	new = get_user

	return render(response, "main/home.html", {"new": new})

def create(response):
    if response.method == "POST":
        form = CreateNewList(response.POST)

        if form.is_valid():
        	new = form.cleaned_data['name']
        	obj = ToDoList(name=new)
        	obj.save()
        	response.user.todolist.add(obj)

        return HttpResponseRedirect(f"/{obj.id}")

    else:
        form = CreateNewList()

    return render(response, "main/create.html", {"form": form})

def view(response):
	return render(response, "main/view.html", {})


def delete(request, id):
    ToDoList.objects.get(id=id).delete()
    return redirect("/view/")
