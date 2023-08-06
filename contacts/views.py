from django.http import Http404
from rest_framework import status, permissions
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Contact
from .serializers import ContactSerializer
from drf_api_buy_sell.permissions import IsOwnerOrReadOnly


class ContactList(APIView):
    serializer_class = ContactSerializer
    permission_classes = [
        permissions.IsAuthenticatedOrReadOnly
    ]

    def get(self, request):
        contacts = Contact.objects.all()
        serializer = ContactSerializer(
            contacts, many=True, context={'request': request})
        return Response(serializer.data)

    def post(self, request):
        serializer = ContactSerializer(
            data=request.data, context={'request': request}
        )
        if serializer.is_valid():
            serializer.save(owner=request.user)
            return Response(
                serializer.data, status=status.HTTP_201_CREATED
            )
        return Response(
            serializer.errors, status=status.HTTP_400_BAD_REQUEST
            )
