from django.http import JsonResponse

def home(request):
    return JsonResponse({
        "message": "Smart EV Locator API is running successfully"
    })
