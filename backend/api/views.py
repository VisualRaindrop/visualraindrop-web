from django.core.mail import EmailMessage
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response

from api.forms import ContactForm
from api.models import Education, Experience, Skill
from api.serializers import EducationSerializer, ExperienceSerializer, SkillSerializer
from config import settings


@api_view(['GET'])
def education(request):
    data = Education.objects.all()
    return Response(EducationSerializer(data, many=True).data)

@api_view(['GET'])
def experience(request):
    data = Experience.objects.all()
    return Response(ExperienceSerializer(data, many=True).data)

@api_view(['GET'])
def skill(request):
    data = Skill.objects.all()
    return Response(SkillSerializer(data, many=True).data)

@api_view(['GET'])
def timeline(request):
    experiences = [{
            'type': 'experience',
            'title': exp.role,
            'organization': exp.company,
            'start_date': exp.start_date,
            'end_date': exp.end_date,
            'display_date': (f'{format_date(exp.start_date)}- Present' if exp.present
                            else f'{format_date(exp.start_date)} - {format_date(exp.end_date)}'),
            'description': exp.description,
        } for exp in Experience.objects.all()
    ]

    educations = [{
        'type': 'education',
        'title': edu.school,
        'organization': edu.degree,
        'start_date': edu.start_date,
        'end_date': edu.end_date,
        'display_date': (f'Expected {format_date(edu.end_date)}' if edu.present
                         else f'{format_date(edu.start_date)} - {format_date(edu.end_date)}'),
        'description': edu.description,
        } for edu in Education.objects.all()
    ]

    line = experiences + educations
    line.sort(key=lambda x: x['start_date'], reverse=True)

    return Response(line)

@api_view(['POST'])
def contact_form(request):
    form = ContactForm(request.data)

    if form.is_valid():
        name = form.cleaned_data['name']
        email = form.cleaned_data['email']
        message = form.cleaned_data['message']

        full_message = (f'Received a message from {name}, {email}\n'
                        f'________________________\n\n'
                        f'{message}')

        email_message = EmailMessage(
            subject=f'Received a Contact Form - {name}',
            body=full_message,
            from_email=settings.DEFAULT_FROM_EMAIL,
            to=[settings.CONTACT_EMAIL],
            reply_to=[email]
        )

        email_message.send(fail_silently=True)

        return Response({'status': 'success'}, status=status.HTTP_201_CREATED)
    return Response({'status': 'error'}, status=status.HTTP_400_BAD_REQUEST)

def format_date(date):
    return date.strftime('%b %Y')