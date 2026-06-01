from flask import Flask, jsonify, request
from flask_cors import CORS
import json
import os
from datetime import datetime

app = Flask(__name__)
CORS(app)

BASE_DIR = os.path.dirname(__file__)
DATA_DIR = os.path.join(BASE_DIR, 'data')
DOWNLOADS_FILE = os.path.join(BASE_DIR, 'downloads.json')


def load_json(filename):
    path = os.path.join(DATA_DIR, filename)
    if not os.path.exists(path):
        return []
    with open(path, 'r', encoding='utf-8') as f:
        return json.load(f)


@app.route('/api/blog')
def blog_api():
    data = load_json('blog.json')
    return jsonify({
        'ok': True,
        'count': len(data),
        'data': data
    })


@app.route('/api/research')
def research_api():
    data = load_json('research.json')
    return jsonify({
        'ok': True,
        'count': len(data),
        'data': data
    })


@app.route('/api/download-cv', methods=['POST'])
def download_cv():
    # Simple counter + log for CV downloads
    downloads = {}
    if os.path.exists(DOWNLOADS_FILE):
        with open(DOWNLOADS_FILE, 'r', encoding='utf-8') as f:
            try:
                downloads = json.load(f)
            except Exception:
                downloads = {}

    key = 'cv_downloads'
    record = downloads.get(key, {'count': 0, 'last': None})
    record['count'] = record.get('count', 0) + 1
    record['last'] = datetime.utcnow().isoformat() + 'Z'
    downloads[key] = record

    with open(DOWNLOADS_FILE, 'w', encoding='utf-8') as f:
        json.dump(downloads, f, indent=2)

    return jsonify({'ok': True, 'data': record})


if __name__ == '__main__':
    app.run(port=5001, debug=True)
