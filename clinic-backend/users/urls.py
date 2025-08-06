from django.urls import path
from .all_views.user_auth import UserRegister, UserLogin
from .all_views.dashboard import DoctorList, AppointmentList, AppointmentCreate
from rest_framework_simplejwt.views import TokenRefreshView

urlpatterns = [
    path('register/', UserRegister.as_view(), name='user-register'),
    path('login/', UserLogin.as_view(), name='user-login'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token-refresh'),
    
    path('doctors/', DoctorList.as_view(), name='doctor-list'),
    path('appointments/', AppointmentList.as_view(), name='appointment-list'),
    path('appointments/create/', AppointmentCreate.as_view(), name='appointment-create'),
]