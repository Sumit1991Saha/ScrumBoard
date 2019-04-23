from .api import ListViewSet, CardViewSet
from rest_framework.routers import DefaultRouter

'''
from .api import ListApi, CardApi
from django.conf.urls import url
from django.views.generic import TemplateView

urlpatterns = [
    url(r'^lists$', ListApi.as_view()),
    url(r'^cards$', CardApi.as_view()),
    url(r'^home1$', TemplateView.as_view(template_name="scrumboard/home1.html")),
    url(r'^home2$', TemplateView.as_view(template_name="scrumboard/home2.html")),
]'''

router = DefaultRouter()
router.register(r'lists', ListViewSet)
router.register(r'cards', CardViewSet)
urlpatterns = router.urls
