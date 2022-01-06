from django.urls import path
from . import views

urlpatterns = [
    path("",views.login,name="login"),
    path("user_login/", views.user_login,name="user_login"),
    path("user_login/upload/", views.file_upload_view, name='upload_view'),
    #path("user_login/documents/contracts", views.download, name='download'),
]