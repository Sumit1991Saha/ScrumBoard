from django.conf.urls import url
from django.views.generic import TemplateView

from .api import ListApi, CardApi

urlpatterns = [
    url(r'^lists$', ListApi.as_view()),
    url(r'^cards$', CardApi.as_view()),
    url(r'^home1$', TemplateView.as_view(template_name="scrumboard/home1.html")),
    url(r'^home2$', TemplateView.as_view(template_name="scrumboard/home2.html")),
]
