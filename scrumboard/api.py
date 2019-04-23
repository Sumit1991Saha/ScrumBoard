from .serializers import ListSerializer, CardSerializer
from .models import List, Card
from rest_framework.viewsets import ModelViewSet


'''
from rest_framework.generics import ListAPIView


class ListApi(ListAPIView):
    queryset = List.objects.all()
    serializer_class = ListSerializer


class CardApi(ListAPIView):
    queryset = Card.objects.all()
    serializer_class = CardSerializer
'''

''' ListAPIView only provides the access of Get in HTTP 
ModelViewSet supports GET, PUT, POST, DELETE '''


class ListViewSet(ModelViewSet):
    queryset = List.objects.all()
    serializer_class = ListSerializer


class CardViewSet(ModelViewSet):
    queryset = Card.objects.all()
    serializer_class = CardSerializer
