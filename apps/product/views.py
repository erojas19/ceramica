import json

from django.core.exceptions import ValidationError
from django.http import Http404, HttpResponse

# Create your views here.
from apps.product.models import Product


def product_list(request):
    if request.is_ajax():
        # limit = int(request.GET['limit'])
        # page = int(request.GET['page'])
        product = Product.objects.filter(status=True)
        # paginator = Paginator(product, limit)
        # users = paginator.page(page)
        results = [ob.as_json() for ob in product]
        context = {
            'results': results,
            'totalProperty': Product.objects.filter(status=True).count()
        }
        context = json.dumps(context)
        return HttpResponse(context, content_type='application/json')
    return Http404


def new_product(request):
    if request.is_ajax():
        data = request.POST['data']
        data = json.loads(data)
        data.pop("id", None)
        data['status'] = True
        try:
            product = Product(**data)
            product.validate_unique()
            product.save()
            context = {
                'results': product.as_json(),
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


def update_product(request):
    if request.is_ajax():
        data = request.POST['data']
        data = json.loads(data)
        product = Product.objects.get(id=data.get('id'))
        product.name = data['name']
        product.description = data['description']
        try:
            product.save()
            context = {
                'results': product.as_json(),
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


def delete_product(request):
    if request.is_ajax():
        data = request.POST['data']
        data = json.loads(data)
        product = Product.objects.get(id=data.get('id'))
        product.status = False
        try:
            product.save()
            context = {
                'results': product.as_json(),
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
