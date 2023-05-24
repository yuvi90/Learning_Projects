from django.urls import path
from .views import HomePageView, PostDetailView, AddNewPostView

app_name = 'feed'

urlpatterns = [
    path('', HomePageView.as_view(), name='index'),
    path('detail/<int:pk>', PostDetailView.as_view(), name='detail'),
    path('post/', AddNewPostView.as_view(), name='post')
]