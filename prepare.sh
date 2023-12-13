#!/bin/bash

#запуск docker
sudo systemctl enable docker
sudo systemctl start docker

#собрать контейнер
sudo docker build -t vika-project .

#файервол
sudo firewall-cmd --permanent --add-port=3666/tcp
sudo firewall-cmd --reload
