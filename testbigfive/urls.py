from django.urls import path
from django.contrib import admin
from . import views

urlpatterns = [
    # path("polls/", views.index, name="index"),
    path('', views.questionnaire, name = 'questionnaire'),
    path('results', views.results, name = 'results')
    # path("", '', name = "item")
]