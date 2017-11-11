# this login required decorator is to not allow to any
# view without authenticating
from django.contrib.auth.decorators import login_required
from django.http import HttpResponse
from django.shortcuts import render
from django.views.decorators.csrf import ensure_csrf_cookie
from apps.menu.models import Menu

@ensure_csrf_cookie
@login_required(login_url='/accounts/login/')
def index(request):
    return render(request, 'home/index.html')
