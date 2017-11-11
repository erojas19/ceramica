# Create your views here.
#
# from .models import Menu
#
#
import json

from django.http import HttpResponse, Http404

from apps.menu.models import Menu


def menu_list(request):
    if request.is_ajax():
        # limit = int(request.GET['limit'])
        # offset = int(request.GET['page'])
        total = Menu.objects.order_by('parent').count()
        menu_parent = Menu.objects.filter(parent=None)
        menu_res = []
        for item in menu_parent:
            menu = Menu.objects.filter(parent_id=item.id)
            results = [ob.as_json() for ob in menu]
            menu_res.append(dict(id=item.id,
                                 text=item.text,
                                 status=item.status,
                                 class_name=item.class_name,
                                 require_text=item.require_text,
                                 require_source=item.require_source,
                                 items=results))
        context = {
            'results': menu_res,
            'totalProperty': total
        }
        context = json.dumps(context)
        return HttpResponse(context, content_type='application/json')
    return Http404
