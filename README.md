# nginx-load-balancing-node

Simple example to load balance a bunch of node processes with nginx. Uses nginx
in Docker but in production you should not wrap nginx inside a container (NAT
costs).

![load-balance](load-balance.gif)

Build:
```
docker-compose build
```

Run:
```
docker-compose up
```

Then go to `http://localhost`. If you refresh a bunch of times the message should change.
