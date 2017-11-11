# Create your views here.
import json
from datetime import datetime
import math
from django.core.exceptions import ValidationError
from django.core.paginator import Paginator
from django.http import HttpResponse, Http404
from apps.production.models import Machine


def nachine_list(request):
    if request.is_ajax():
        limit = int(request.GET['limit'])
        start = int(request.GET['start'])
        sort = request.GET.get('sort')
        total = Machine.objects.filter(status=True).count()
        machines = Machine.objects.filter(status=True)[start:start + limit]
        results = [ob.as_json() for ob in machines]
        context = {
            'results': results,
            'total': total
        }
        context = json.dumps(context)
        return HttpResponse(context, content_type='application/json')
    return Http404


def new_machine(request):
    if request.is_ajax():
        data = request.POST['data']
        data = json.loads(data)
        data['date'] = datetime.strptime(data.get('date'), "%Y-%m-%d")
        data['time_start'] = datetime.strptime(data.get('time_start'),
                                               "%Y-%m-%d %H:%M:%S")
        data['time_end'] = datetime.strptime(data.get('time_end'), "%Y-%m-%d %H:%M:%S")
        data.pop("id", None)
        users = data.get('users')
        data.pop('users')
        try:
            if '-' in data['rack']:
                rack = data['rack'].split('-')
                quantity = int(data['quantity'])
                min = int(rack[0])
                max = int(rack[1])
                num = max - min + 1
                while min <= max:
                    data['rack'] = min
                    if min < max:
                        data['quantity'] = math.floor(quantity / num)
                    else:
                        data['quantity'] = math.floor(quantity / num) + (quantity % num)
                    machine = Machine(**data)
                    machine.validate_unique()
                    machine.save()
                    min += 1
            elif ',' in data['rack']:
                rack = data['rack'].split(',')
                quantity = int(data['quantity'])
                tam = len(rack)
                for i, x in enumerate(rack):
                    data['rack'] = x
                    if i < tam - 1:
                        data['quantity'] = math.floor(quantity / tam)
                    else:
                        data['quantity'] = math.floor(quantity / tam) + (quantity % tam)
                    machine = Machine(**data)
                    machine.validate_unique()
                    machine.save()
            else:
                machine = Machine(**data)
                machine.validate_unique()
                machine.save()
            context = {
                'results': machine.as_json(),
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
