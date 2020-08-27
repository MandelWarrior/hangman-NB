from threading import Event
from queue import Queue


class CancellableQueue(Queue):
    

    def __init__(self, **kwargs):
        super().__init__(**kwargs)
        self.canceller = Event()

    def put(self, item):
        if not self.canceller.is_set():
            super().put(item)

    def cancel(self):
        if self.full() and not self.empty():
            self.get_nowait()
        self.canceller.set()