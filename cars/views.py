from rest_framework import generics, permissions, filters
from django_filters.rest_framework import DjangoFilterBackend
from .models import Car
from .serializers import CarSerializer
from drf_api_buy_sell.permissions import IsOwnerOrReadOnly


class CarList(generics.ListCreateAPIView):
    serializer_class = CarSerializer
    permission_classes = [
        permissions.IsAuthenticatedOrReadOnly
    ]
    queryset = Car.objects.all()

    filter_backends = [
        filters.OrderingFilter,
        filters.SearchFilter,
        DjangoFilterBackend,
    ]

    filterset_fields = [
        'owner__profile',
    ]

    search_fields = [
        'car_title',
        'make',
        'model',
        'year',
        'condition',
        'transmission',
        'body_style',
        'fuel_type',
        'owner__username',
    ]

    ordering_fields = [
        'make',
        'model',
        'condition',
        'transmission',
        'body_style',
        'fuel_type',
        'owner__username',
    ]

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)


class CarDetail(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = CarSerializer
    permission_classes = [IsOwnerOrReadOnly]
    queryset = Car.objects.all()
