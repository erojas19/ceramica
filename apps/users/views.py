import json
from django.core.exceptions import ValidationError, NON_FIELD_ERRORS
from django.core.paginator import Paginator
from django.http import Http404, HttpResponse
# Create your views here.
from apps.users.models import User


def user_list(request):
    if request.is_ajax():
        limit = int(request.GET['limit'])
        page = int(request.GET['page'])
        user = User.objects.filter(is_superuser=False, is_active=True)
        paginator = Paginator(user, limit)
        users = paginator.page(page)
        results = [ob.as_json() for ob in users]
        context = {
            'results': results,
            'totalProperty': paginator.count
        }
        context = json.dumps(context)
        return HttpResponse(context, content_type='application/json')
    return Http404


def new_user(request):
    if request.is_ajax():
        data = request.POST['data']
        data = json.loads(data)
        data.pop("id", None)
        data['is_active'] = True
        data['is_superuser'] = False
        data['password'] = '12345678'
        try:
            user = User(**data)
            user.validate_unique()
            user.save()
            context = {
                'results': user.as_json(),
                'totalProperty': 0,
                'success': True
            }
        except ValidationError as e:
            non_field_errors = e.messages
            context = {
                'msg': non_field_errors,
                'results': [],
                'totalProperty': 0,
                'success': False
            }

        context = json.dumps(context)
        return HttpResponse(context, content_type='application/json')
    return Http404


def update_user(request):
    if request.is_ajax():
        data = request.POST['data']
        data = json.loads(data)
        user = User.objects.get(id=data.get('id'))
        user.first_name = data['first_name']
        user.second_name = data['second_name']
        user.third_name = data['third_name']
        user.ci = data['ci']
        try:
            user.save()
            context = {
                'results': user.as_json(),
                'totalProperty': 0,
                'success': True
            }
        except ValidationError as e:
            non_field_errors = e.messages
            context = {
                'msg': non_field_errors,
                'results': [],
                'totalProperty': 0,
                'success': False
            }

        context = json.dumps(context)
        return HttpResponse(context, content_type='application/json')
    return Http404


def delete_user(request):
    if request.is_ajax():
        data = request.POST['data']
        data = json.loads(data)
        user = User.objects.get(id=data.get('id'))
        user.is_active = False
        try:
            user.save()
            context = {
                'results': user.as_json(),
                'totalProperty': 0,
                'success': True
            }
        except ValidationError as e:
            non_field_errors = e.messages
            context = {
                'msg': non_field_errors,
                'results': [],
                'totalProperty': 0,
                'success': False
            }

        context = json.dumps(context)
        return HttpResponse(context, content_type='application/json')
    return Http404
