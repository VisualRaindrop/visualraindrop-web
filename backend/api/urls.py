from django.urls import path
from . import views

urlpatterns = [
    path('experience/', views.experience),
    path('education/', views.education),
    path('skill/', views.skill),
    path('timeline/', views.timeline),
    path('contact_form/', views.contact_form, name="contact_form"),
]