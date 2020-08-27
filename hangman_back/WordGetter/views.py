from django.shortcuts import render
from django.http import HttpResponse

from .wordGetter import WordGetter

import os

module_dir = os.path.dirname(__file__)


wordGetter = WordGetter(os.path.join(module_dir, 'words.txt'))
#wordGetter.start()

# Create your views here.
def getWord(request):
    if request.method == 'GET':
        return HttpResponse(wordGetter.getWord(), content_type="text/plain")