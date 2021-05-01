from django.urls import path, include, re_path
from .views import MarafonView, CreateMarafonView, UserCreate

urlpatterns = [
    path('marafon/', MarafonView.as_view()),
    path('marafon-create/', CreateMarafonView.as_view()),
    re_path(r'users/', UserCreate.as_view(), name='account-create'),
]
