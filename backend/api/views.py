from rest_framework.decorators import api_view
from rest_framework.response import Response
from api.models import Education, Experience, Skill
from api.serializers import EducationSerializer, ExperienceSerializer, SkillSerializer


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

def format_date(date):
    return date.strftime('%b %Y')