from django.urls import path
from . import views

urlpatterns = [
    # Homepage
    path('', views.index, name='index'),

    # Legal notice
    path('impressum', views.legal_notice, name='impressum'),

    # Church Service
    path('worship', views.worship, name='worship'),
    path('supergemeinde', views.sunday_school, name='sunday_school'),
    path('uebersetzung', views.translation, name='translation'),

    # Events (TODO: create app)
    path('kalender', views.calendar, name='calendar'),
    path('event', views.event, name='event'),

    # For You
    path('fg', views.home_cells, name='family_groups'),
    path('ng', views.youth_group, name='youth_group'),
    path('cloob', views.teen_group, name='teen_group'),

    # About Us
    path('geschichte', views.history, name='history'),
    path('pastoren', views.pastors, name='pastors'),
    path('vision', views.vision, name='vision'),

    # More
    path('cafeteria', views.cafeteria, name='cafeteria'),
    path('buecher', views.bookstore, name='bookstore'),
    path('musikschule', views.music_school, name='music_school'),
]
