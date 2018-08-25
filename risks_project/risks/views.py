from django.shortcuts import render
from .models import RiskType, RiskValue, FieldType, FieldOptions, RiskHeader
from .serializer import RiskSerializer, FieldTypeSerializer,RiskHeaderSerializer
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status


@api_view(['GET'])
def risks_list(request):
    if request.method == 'GET':
        risks = RiskType.objects.all()
        serializer = RiskSerializer(risks, many=True)
        return Response(serializer.data)


@api_view(['GET', 'DELETE','PUT'])
def risk(request, pk):
    try:
        
        risk = RiskType.objects.get(pk=pk)
    except:
        return Response(status=status.HTTP_404_NOT_FOUND)
    if request.method == 'GET':
        fieldtypes = FieldType.objects.select_related().filter(risktype=risk)
        serializer = FieldTypeSerializer(fieldtypes, many=True)
        return Response(serializer.data)
    elif request.method == 'PUT':
        newfield = FieldType.objects.create(
            field_label=request.data.get('label'),
            field_type=request.data.get('type'),
            risktype=risk)
        newfield.save()
        serializer = FieldTypeSerializer(newfield)
        return Response(serializer.data)

@api_view(['GET', 'DELETE'])
def risk_data_list(request):
    if request.method == 'GET':
        risks_data = RiskHeader.objects.all()
        serializer = RiskHeaderSerializer(risks_data, many=True)
        return Response(serializer.data)

@api_view(['GET', 'DELETE'])
def risk_data(request, pk):
    try:
        
        risks_data = RiskHeader.objects.get(pk=pk)
    except:
        return Response(status=status.HTTP_404_NOT_FOUND)
    if request.method == 'GET':
        serializer = RiskHeaderSerializer(risks_data)
        return Response(serializer.data)



