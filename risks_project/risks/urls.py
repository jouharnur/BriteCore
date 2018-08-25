
from django.conf.urls import url
from .views import risks_list, risk, risk_data_list,risk_data

urlpatterns = [
    url(r'^api/risks/$', risks_list, name='get_list_risks'),
    url(r'^api/risks/(?P<pk>[0-9]+)/$', risk, name='get_delete_risk'),
    url(r'^api/risksdata/$', risk_data_list, name='get_list_risks_data'),
    url(r'^api/risksdata/(?P<pk>[0-9]+)/$', risk_data, name='get_delete_risk_data'),
    
    
]
