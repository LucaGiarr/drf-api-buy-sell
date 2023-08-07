from rest_framework import generics, permissions
from .models import Car
from .serializers import CarSerializer
from drf_api_buy_sell.permissions import IsOwnerOrReadOnly


class CarList(generics.ListCreateAPIView):
    serializer_class = CarSerializer
    permission_classes = [
        permissions.IsAuthenticatedOrReadOnly
    ]
    queryset = Car.objects.all()

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)


class CarDetail(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = CarSerializer
    permission_classes = [IsOwnerOrReadOnly]
    queryset = Car.objects.all()
