import random
from threading import Thread
from .cancellableQueue import CancellableQueue
import time


class WordGetter:
    def __init__(self, fileName, encoding='utf-8'):
        with open(fileName, encoding=encoding) as file:
            self.words = list(set(map(str.upper, map(lambda ln:ln[:-1], file.readlines()))))

    def getWord(self):
        return random.choice(self.words)
