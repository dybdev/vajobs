from django.urls import path, include

urlpatterns = [
    path('', include('jobs.urls')),        # Jobs API
]
