import random
from threading import Thread
from .cancellableQueue import CancellableQueue
import time

'''
class WordGetter:
    def __init__(self, fileName):
        with open(fileName, encoding='utf-8') as file:
            self.words = list(set(map(str.upper, map(lambda ln:ln[:-1], file.readlines()))))
        self.wordQueue = CancellableQueue(maxsize=50)
        self.queueFillerThread = Thread(target=self.loaderThread, name='randomWordQueueFiller')
    
    def start(self):
        self.queueFillerThread.start()

    def stop(self):
        self.wordQueue.cancel()

    def loaderThread(self):
        i = 0
        while True:
            print(f'Loading WORD {i}')
            self.wordQueue.put(random.choice(self.words))
            print(f'Finished Loading WORD {i}')
            i+=1

    def getWord(self):
        return self.wordQueue.get()
'''


class WordGetter:
    def __init__(self, fileName):
        with open(fileName, encoding='utf-8') as file:
            self.words = list(set(map(str.upper, map(lambda ln:ln[:-1], file.readlines()))))

    def getWord(self):
        return random.choice(self.words)

if __name__ == "__main__":
    print(getRandomWord())