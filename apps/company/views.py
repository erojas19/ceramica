import json

from django.contrib.auth.decorators import login_required
from django.core.exceptions import ValidationError
from django.http import HttpResponse, Http404

from apps.company.models import Empresa


@login_required
def list_general_date(request):
  if request.is_ajax():
    empresa = Empresa.objects.first()
    if empresa is not None:
      data = empresa.as_json()
    else:
      data = Empresa().as_json()

    context = {
      'results': data,
      'totalProperty': 1
    }
    context = json.dumps(context)
    return HttpResponse(context, content_type='application/json')
  return Http404


@login_required
def save_empresa(request):
  if request.is_ajax():
    data = request.POST['data']
    data = json.loads(data)
    id = str(data.pop("pk", None))
    try:
      if id is None or id == "" or id == 'None':
        empresa = Empresa(**data)
      else:
        empresa = Empresa.objects.get(pk=id)
        empresa.name = data.get('name')
        empresa.direction = data.get('direction')
        empresa.nit = data.get('nit')
        empresa.email = data.get('email')
        empresa.website = data.get('website')
      empresa.validate_unique()
      empresa.save()
      context = {
        'results': empresa.as_json(),
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
