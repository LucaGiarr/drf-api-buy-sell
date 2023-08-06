from rest_framework import generics, permissions
from .models import Contact
from .serializers import ContactSerializer
from drf_api_buy_sell.permissions import IsOwnerOrReadOnly


class ContactList(generics.ListCreateAPIView):
    serializer_class = ContactSerializer
    permission_classes = [
        permissions.IsAuthenticatedOrReadOnly
    ]
    queryset = Contact.objects.all()

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)


class ContactDetail(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = ContactSerializer
    permission_classes = [IsOwnerOrReadOnly]
    queryset = Contact.objects.all()
