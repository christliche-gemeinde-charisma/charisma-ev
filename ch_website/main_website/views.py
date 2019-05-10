from django.shortcuts import render

'''
Here you can use the same views but replace the templates with those of your own church
'''

# Homepage
def index(request):
    return render(request, 'main_website/index.html')

# Legal notice
def legal_notice(request):
    return render(request, 'main_website/pages/impressum.html')

# Church Service
def worship(request):
    return render(request, 'main_website/pages/lobpreis.html')
def sunday_school(request):
    return render(request, 'main_website/pages/supergemeinde.html')
def translation(request):
    return render(request, 'main_website/pages/uebersetzung.html')

# Events (TODO: create app)
def calendar(request):
    return render(request, 'main_website/pages/kalender.html')
def event(request):
    return render(request, 'main_website/pages/event.html')

# For You
def home_cells(request):
    return render(request, 'main_website/pages/fg.html')
def youth_group(request):
    return render(request, 'main_website/pages/ng.html')
def teen_group(request):
    return render(request, 'main_website/pages/cloeoeb.html')

# About Us
def history(request):
    return render(request, 'main_website/pages/geschichte.html')
def pastors(request):
    return render(request, 'main_website/pages/pastoren.html')
def vision(request):
    return render(request, 'main_website/pages/vision.html')

# More
def cafeteria(request):
    return render(request, 'main_website/pages/cafeteria.html')
def bookstore(request):
    return render(request, 'main_website/pages/buechertisch.html')
def music_school(request):
    return render(request, 'main_website/pages/musikschule.html')
