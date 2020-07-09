from django.shortcuts import render, redirect
from django.http import HttpResponse, HttpResponseRedirect
from .models import ToDoList, Item
from .forms import CreateNewList
from django.contrib.auth import get_user

# Create your views here.
def index(response, id):
    obj = ToDoList.objects.get(id=id)

    if response.method == "POST":
    	if response.POST.get('save'):
    		for item in obj.item_set.all():
    			if response.POST.get("c" + str(item.id)) == "clicked":
    				item.complete = True
    			else:
    				item.complete = False

    			item.save()

    	elif response.POST.get("newitem"):
    		txt = response.POST.get("new")

	    	if len(txt) != 0:
	    		obj.item_set.create(text=txt, complete=False)
	    	else:
	    		print("Invalid")

    return render(response, "main/list.html", {"obj": obj})

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

# def delete(request, id):
#     name = ToDoList.objects.get(id=id)
#     for item in name.item_set.all():
#         item.delete()
    
#     return redirect("main/view.html")

