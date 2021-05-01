from django.urls import path
from .views import index

urlpatterns = [
    path('', index),
    path('Marafons',index),
    path('SignUp',index),
    path('SignIn',index),
    path('Marafons/Marafon',index)
]
