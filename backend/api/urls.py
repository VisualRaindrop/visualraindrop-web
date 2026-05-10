from django.urls import path
from . import views

urlpatterns = [
    path('experience/', views.experience),
    path('education/', views.education),
    path('skill/', views.skill),
    path('timeline/', views.timeline),
]