from rest_framework import serializers
from . models import User, Doctor, Appointment
from django.utils import timezone


class UserSerializer(serializers.ModelSerializer):
    class Meta :
        model = User
        fields = ['id','username','email','password']

class DoctorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Doctor
        fields = '__all__'

class AppointmentSerializer(serializers.ModelSerializer):
    doctor_name = serializers.CharField(source='doctor.full_name', read_only=True)
    speciality = serializers.CharField(source='doctor.speciality', read_only=True)
    class Meta:
        model = Appointment
        fields = ['id', 'patient_name', 'age', 'appointment_date','doctor','doctor_name', 'speciality']

        extra_kwargs = {
            'doctor': {'write_only': True}
        }

    def validate_appointment_date(self, value):
        if value < timezone.now():
            raise serializers.ValidationError("Appointment date cannot be in the past!")
        return value
