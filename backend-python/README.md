# Python backend for developer-portfolio

This small Flask app serves blog and research data and provides a CV download counting endpoint.

Quick start (macOS / zsh):

```bash
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
python app.py
```

Endpoints:
- `GET /api/blog` -> JSON list of blog articles
- `GET /api/research` -> JSON list of research projects
- `POST /api/download-cv` -> increments a CV download counter and returns the record

The frontend is updated to try these endpoints if available; the Flask app runs on port `5001` by default.
