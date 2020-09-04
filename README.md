# Project Structure

frontend: reactjs + umijs

server: python flask

deploy: docker + nginx

database: not yet decided


# Environment

node（version: 10 or 12）

```
brew install node
node -v
npm install yarn -g
```

python3 flask： （https://flask.palletsprojects.com/en/1.1.x/installation/#install-flask）

```
cd server
python3 -m venv venv
. venv/bin/activate
pip install flask python-dotenv
```

docker: https://docs.docker.com/get-docker/

# Run

at current terminal:

```
npm run start-server
```

open another terminal and run 

```
npm run start-client
```
