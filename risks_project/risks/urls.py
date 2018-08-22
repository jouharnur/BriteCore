
from django.conf.urls import url
from .views import risks_list, risk

urlpatterns = [
    url(r'^api/risks/$', risks_list, name='get_list_risks'),
    url(r'^api/risks/(?P<pk>[0-9]+)/$', risk, name='get_delete_risk'),
]
