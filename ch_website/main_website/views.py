from django.shortcuts import render

# Create your views here.
def index(request):
    return render(request, 'main_website/index.html')

def vision(request):
    return render(request, 'main_website/pages/vision.html')
