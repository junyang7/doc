#!/usr/bin/env bash


#master:


### mysql
echo '
apiVersion: apps/v1
kind: Deployment
metadata:
labels:
app: mysql
name: mysql
spec:
replicas: 1
selector:
matchLabels:
app: mysql
template:
metadata:
labels:
app: mysql
spec:
containers:
- image: mysql:5.7
name: mysql
ports:
- containerPort: 3306
env:
- name: MYSQL_ROOT_PASSWORD
value: "123456"
' > mysql-deploy.yaml
kubectl apply -f mysql-deploy.yaml
kubectl get deploy
kubectl get pods
echo '
apiVersion: v1
kind: Service
metadata:
name: mysql
spec:
type: NodePort
ports:
- port: 3306
nodePort: 30002
selector:
app: mysql
' > mysql-svc.yaml
kubectl create -f mysql-svc.yaml
kubectl get svc mysql


### tomcat
echo '
apiVersion: apps/v1
kind: Deployment
metadata:
labels:
app: myweb
name: myweb
spec:
replicas: 2
selector:
matchLabels:
app: myweb
template:
metadata:
labels:
app: myweb
spec:
containers:
- image: kubeguide/tomcat-app:v1
name: myweb
ports:
- containerPort: 8080
env:
- name: MYSQL_SERVICE_HOST
value: 10.99.78.59
' > myweb-deploy.yaml
kubectl apply -f myweb-deploy.yaml


kubectl get pods
echo '
apiVersion: v1
kind: Service
metadata:
name: myweb
spec:
type: NodePort
ports:
- port: 8080
nodePort: 30001
selector:
app: myweb
' > myweb-svc.yaml
kubectl create -f myweb-svc.yaml
kubectl get svc



http://192.168.10.83:30001/demo/

