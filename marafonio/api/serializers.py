from rest_framework import serializers
from .models import Marafon, Category
from rest_framework.validators import UniqueValidator
from django.contrib.auth.models import User

class MarafonSerializer(serializers.ModelSerializer):
    class Meta:
        model = Marafon
        fields = ('id', 'title','description','owner',
                    'createdDateTime','category','views','imagePath')

class CreateMarafonSerializer(serializers.ModelSerializer):
    class Meta:
        model = Marafon
        fields = ('title','description','category')

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ('id', 'label')

class CreateCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ('label', )

class UserSerializer(serializers.ModelSerializer):
    email = serializers.EmailField(
            required=True,
            validators=[UniqueValidator(queryset=User.objects.all())]
            )
    username = serializers.CharField(
            max_length=32,
            validators=[UniqueValidator(queryset=User.objects.all())]
            )
    password = serializers.CharField(min_length=8, write_only=True)

    def create(self, validated_data):
        user = User.objects.create_user(validated_data['username'], validated_data['email'],
             validated_data['password'])
        return user

    class Meta:
        model = User
        fields = ('id', 'username', 'email', 'password')
