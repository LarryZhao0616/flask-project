import time
from flask import Flask

app = Flask(__name__)

@app.route('/api/time', methods=['GET', 'POST'])
def get_current_time():
    return {'time': time.time()}
