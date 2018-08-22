from django.shortcuts import render
from .models import RiskType, RiskValue, FieldType, FieldOptions
from .serializer import RiskSerializer, FieldTypeSerializer
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status


@api_view(['GET'])
def risks_list(request):
    if request.method == 'GET':
        risks = RiskType.objects.all()
        serializer = RiskSerializer(risks, many=True)
        return Response(serializer.data)


@api_view(['GET', 'DELETE'])
def risk(request, pk):
    try:
        risk = RiskType.objects.get(pk=pk)
    except:
        return Response(status=status.HTTP_404_NOT_FOUND)
    if request.method == 'GET':
        fieldtypes = FieldType.objects.filter(risktype=risk)
        serializer = FieldTypeSerializer(fieldtypes, many=True)
        return Response(serializer.data)
    if request.method == 'DELETE':
        risk.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
