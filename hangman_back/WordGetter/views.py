from django.shortcuts import render
from django.http import HttpResponse

from .wordGetter import WordGetter

import os

module_dir = os.path.dirname(__file__)


#wordGetter = WordGetter(os.path.join(module_dir, 'words_2.txt', encoding='latin-1'))
wordGetter = WordGetter(os.path.join(module_dir, 'words.txt'), encoding='utf-8')

# Create your views here.
def getWord(request):
    if request.method == 'GET':
        return HttpResponse(wordGetter.getWord(), content_type="text/plain", charset='latin-1')