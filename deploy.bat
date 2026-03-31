@echo off
cmd /k "cd /d D:\Coding\Zuopin\portfolio && set ASTRO_BASE=/ && npm run build && scp -r dist/* root@47.102.138.151:/root/portfolio/dist/ && echo === DONE: http://47.102.138.151:8080 ==="
