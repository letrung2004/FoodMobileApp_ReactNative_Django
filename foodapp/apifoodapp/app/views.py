from django.shortcuts import render
from django.http import HttpResponse
from rest_framework import viewsets, permissions, status, generics
from rest_framework.permissions import AllowAny
from rest_framework.response import Response

from .models import Restaurant, MainCategory, User
from .serializers import RestaurantSerializer, MainCategorySerializer, UserSerializer
from rest_framework.decorators import action
from rest_framework.parsers import MultiPartParser

class UserViewSet(viewsets.ViewSet, generics.CreateAPIView,
                  generics.RetrieveAPIView):
    queryset = User.objects.filter(is_active=True)
    serializer_class = UserSerializer
    parser_classes = [MultiPartParser]
    permission_classes = [AllowAny]

class MainCategoryViewSet(viewsets.ModelViewSet):
    queryset = MainCategory.objects.filter(active=True)
    serializer_class = MainCategorySerializer

    @action(methods=['post'], detail=True, url_path='inactive-main-category', url_name='inactive-main-category')
    def inactive(self, request, pk):
        try:
            c = MainCategory.objects.get(pk=pk)
            c.active = False
            c.save()
        except MainCategory.DoesNotExist:
            return Response(status=status.HTTP_400_BAD_REQUEST)

        return Response(data=MainCategorySerializer(c, context={'request': request}).data,
                        status=status.HTTP_200_OK)


class RestaurantViewSet(viewsets.ModelViewSet):
    queryset = Restaurant.objects.filter(active=True)
    serializer_class = RestaurantSerializer

    @action(methods=['post'], detail=True, url_path='inactive-restaurant', url_name='inactive-restaurant')
    # /restaurants/{pk}/inactive-restaurant <- url_path
    def inactive(self, request, pk):
        try:
            r = Restaurant.objects.get(pk=pk)
            r.active = False
            r.save()
        except Restaurant.DoesNotExist:
            return Response(status=status.HTTP_400_BAD_REQUEST)

        return Response(data=RestaurantSerializer(r, context={'request': request}).data,
                        status=status.HTTP_200_OK)


    # def get_permissions(self):
    #     if self.action == 'list':
    #         return [permissions.AllowAny()]
    #     return [permissions.IsAuthenticated()]



def index(request):
    return HttpResponse("e-food app")
