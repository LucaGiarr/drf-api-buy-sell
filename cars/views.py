from rest_framework import generics, permissions, filters, viewsets
from django_filters.rest_framework import DjangoFilterBackend
from .models import Car, Message
from .serializers import CarSerializer, MessageSerializer
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

class MessageViewSet(viewsets.ModelViewSet):
    serializer_class = MessageSerializer

    def get_queryset(self):
        car_id = self.request.query_params.get('car_id')
        sender = self.request.query_params.get('sender')
        receiver = self.request.query_params.get('receiver')

        queryset = Message.objects.all()

        if car_id:
            queryset = queryset.filter(car_id=car_id)

        if sender:
            queryset = queryset.filter(sender=sender)

        if receiver:
            queryset = queryset.filter(receiver=receiver)

        return queryset

