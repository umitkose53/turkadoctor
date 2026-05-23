#!/usr/bin/env bash
# Tüm dış (https://) URL'leri data ve component dosyalarından çıkarır ve
# her birini HEAD/GET ile test eder. Kırık URL kalmamasını garanti eder.
#
# Kullanım:
#   bash scripts/check-links.sh
#
# Çıktı: Her URL için OK/FAIL ve toplam kırık sayısı.
# Kırık varsa exit kodu 1 olur (CI'da kullanılabilir).

set -uo pipefail

UA="Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.4 Safari/605.1.15"

# Kontrol edilecek dizinler
DIRS=("src/data" "src/lib" "src/app" "src/components")

# URL'leri çıkar; site-içi (turkadoctor.com) ve teknik (schema.org / fontlar) hariç tut
TMP=$(mktemp)
grep -roh 'https://[^"]*' "${DIRS[@]}" 2>/dev/null \
  | sort -u \
  | grep -vE "schema\.org|fonts\.googleapis|fonts\.gstatic|next-svg|turkadoctor\.com" \
  > "$TMP"

TOTAL=$(wc -l < "$TMP" | tr -d ' ')
echo "Toplam unik dış URL: $TOTAL"
echo "---"

broken=0
while IFS= read -r url; do
  code=$(curl -sLo /dev/null -w "%{http_code}" --max-time 12 -A "$UA" "$url")
  mark="OK"
  if [[ "$code" != "200" && "$code" != "301" && "$code" != "302" ]]; then
    mark="FAIL"
    broken=$((broken+1))
  fi
  printf "%-6s %s  %s\n" "$mark" "$code" "$url"
done < "$TMP"

rm -f "$TMP"

echo "---"
echo "Toplam kırık: $broken"

if [[ $broken -gt 0 ]]; then
  echo ""
  echo "Kırık link tespit edildi. Düzeltmeden commit etme."
  exit 1
fi
