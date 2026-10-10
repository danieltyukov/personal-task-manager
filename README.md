# Personal Task Manager
Personal Web Based Task Manager on MongoDB

## Running locally

The backend expects MongoDB on `mongodb://localhost:27017/`.

Backend (FastAPI, Python 3.10 or newer):

```
cd backend
python -m venv .venv
.venv/bin/pip install -r requirements.txt
.venv/bin/uvicorn main:app --port 8000
```

Frontend (React on Vite, Node 22.12 or newer):

```
cd frontend
npm ci
npm start        # dev server on http://localhost:3000
npm run build    # production build in frontend/build
npm test         # unit tests (Vitest)
```
