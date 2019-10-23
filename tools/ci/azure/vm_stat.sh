#!/bin/bash

# print every minute loop for at most 2 hours
seq 120 | while read n; do
    echo "vm_stat:"
    vm_stat | sed 's/^/> /'
    sleep 60
done
