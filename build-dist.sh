#!/bin/bash
git checkout master

go build
zip -r -q distrib.zip assets mobile templates katzman katzman.service

scp distrib.zip root@centrfasadov.ru:/root

