from django.shortcuts import render
from django.http import HttpResponse

def index(request):
    return render(request, 'index.html')

def lcbo(request):
    return render(request, 'lcbo.html')

def me(request):
    return render(request, 'me.html')

def sdc(request):
    return render(request, 'sdc.html')

def questrade(request):
    return render(request, 'questrade.html')
