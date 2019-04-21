from .serializers import ListSerializer, CardSerializer
from .models import List, Card
from rest_framework.generics import ListAPIView


class ListApi(ListAPIView):
    queryset = List.objects.all()
    serializer_class = ListSerializer


class CardApi(ListAPIView):
    queryset = Card.objects.all()
    serializer_class = CardSerializer
