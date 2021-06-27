docker run --rm \
-p 9001:80 \
-e  PORT=80 \
-v $PWD:/app \
-w /app \
node:14-alpine npm start