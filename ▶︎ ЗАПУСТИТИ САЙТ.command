#!/bin/bash
cd "$(dirname "$0")"
echo "──────────────────────────────────────────────"
echo "  Svit Academy — локальний перегляд сайту"
echo "  Не закривай це вікно, поки дивишся сайт."
echo "  Щоб зупинити — натисни Control+C або закрий вікно."
echo "──────────────────────────────────────────────"
python3 -m http.server 8000 >/dev/null 2>&1 &
SRV=$!
sleep 1
open "http://localhost:8000"
trap "kill $SRV 2>/dev/null" EXIT
wait $SRV
