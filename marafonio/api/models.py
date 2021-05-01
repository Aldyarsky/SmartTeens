from django.db import models
from django.contrib.auth.models import User
from django.utils import timezone

class Category(models.Model):
    id = models.AutoField(primary_key=True)
    label = models.CharField(max_length=100)
class Marafon(models.Model):
    id = models.AutoField(primary_key=True)
    title = models.CharField(max_length=200)
    description = models.CharField(max_length=500)
    owner = models.ForeignKey(User, on_delete=models.CASCADE, null=False)
    createdDateTime = models.DateTimeField(auto_now_add = True)
    category = models.CharField(max_length=100)
    views = models.IntegerField(default = 0)
    imagePath = models.CharField(max_length=500, default="")

class MarafonParticipant(models.Model):
    id = models.AutoField(primary_key=True)
    user = models.ForeignKey(User, verbose_name=("Participant"), on_delete=models.CASCADE)
    marafon = models.ForeignKey(Marafon, verbose_name=("Marafon"), on_delete=models.CASCADE)
# Create your models here.
