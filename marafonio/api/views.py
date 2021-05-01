from django.shortcuts import render
from rest_framework import generics, status
from .models import Marafon, Category
from .serializers import MarafonSerializer, CreateMarafonSerializer, CategorySerializer, CreateCategorySerializer, UserSerializer
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.contrib.auth.models import User

# Create your views here.
class MarafonView(generics.ListAPIView):
    queryset = Marafon.objects.all()
    serializer_class = MarafonSerializer

class CreateMarafonView(APIView):
    serializer_class = CreateMarafonSerializer
    def get(self,request, *args, **kwargs):
        id = request.query_params["id"]
        pr
    def post(self, request, format=None):
        if request.user.is_authenticated:
            if not self.request.session.exists(self.request.session.session_key):
                self.request.session.create()
            serializer = self.serializer_class(data=request.data)
            if serializer.is_valid():
                title = serializer.data.get('title')
                description = serializer.data.get('description')
                category = serializer.data.get('category')
                owner = self.request.user
                marafon = Marafon(owner=owner, title=title,description=description,category=category)
                CreateCategory(category)
                marafon.save()
            return Response(MarafonSerializer(marafon).data, status=status.HTTP_200_OK)
        else: 
            return Response({"Unregistered: cannot access anonymous"})

class CategoryView(generics.ListAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

def CreateCategory(label_create):
    if Category.objects.filter(label = label_create.strip().title()):
        return
    else:
        category = Category(label = label_create)
        category.save()


class UserCreate(APIView):
    """ 
    Creates the user. 
    """
    def post(self, request, format='json'):
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.save()
            if user:
                token = Token.objects.create(user=user)
                json = serializer.data
                json['token'] = token.key
                return Response(json, status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)