#!/usr/bin/env bash
set -euo pipefail

ROOT="$(pwd)"
BASE="$ROOT/src/content"

# Έλεγχος ότι υπάρχουν τα language roots
for LANG in en el; do
  if [[ ! -d "$BASE/$LANG" ]]; then
    echo "❌ Λείπει ο φάκελος: $BASE/$LANG"
    echo "   Δημιούργησέ τον και ξανατρέξε το script."
    exit 1
  fi
done

# Συνάρτηση ασφαλούς δημιουργίας φακέλου
mkd() {
  local dir="$1"
  if [[ -d "$dir" ]]; then
    echo "⏩ υπάρχει ήδη: ${dir#$ROOT/}"
  else
    echo "📁 δημιουργία: ${dir#$ROOT/}"
    mkdir -p "$dir"
  fi
}

# Ορισμοί θεματικών & υποενοτήτων (με παύλα)
# A1: 1-1..1-4
A1=(1-1 1-2 1-3 1-4)
# A2: 2-1..2-4  (ΘΑ ΣΚΙΠΑΡΟΥΜΕ την 2-1 γιατί είπες ότι υπάρχει ήδη)
A2=(2-1 2-2 2-3 2-4)
# A3: 3-1..3-4
A3=(3-1 3-2 3-3 3-4)
# A4: 4-1..4-4
A4=(4-1 4-2 4-3 4-4)

# B1: 1-1
B1=(1-1)
# B2: 2-1..2-5
B2=(2-1 2-2 2-3 2-4 2-5)
# B3: 3-1..3-2
B3=(3-1 3-2)
# B4: 4-1
B4=(4-1)

for LANG in en el; do
  # Εισαγωγή — υπάρχει ήδη, δεν τη δημιουργούμε
  # mkd "$BASE/$LANG/introduction"  # ΣΚΙΠ

  # A1
  mkd "$BASE/$LANG/a1"
  for s in "${A1[@]}"; do mkd "$BASE/$LANG/a1/$s"; done

  # A2 (σκίπάρουμε μόνο την 2-1)
  mkd "$BASE/$LANG/a2"
  for s in "${A2[@]}"; do
    if [[ "$s" == "2-1" ]]; then
      echo "⏩ skip (υπάρχει ήδη κατά δήλωσή σου): $LANG/a2/$s"
      continue
    fi
    mkd "$BASE/$LANG/a2/$s"
  done

  # A3
  mkd "$BASE/$LANG/a3"
  for s in "${A3[@]}"; do mkd "$BASE/$LANG/a3/$s"; done

  # A4
  mkd "$BASE/$LANG/a4"
  for s in "${A4[@]}"; do mkd "$BASE/$LANG/a4/$s"; done

  # B1
  mkd "$BASE/$LANG/b1"
  for s in "${B1[@]}"; do mkd "$BASE/$LANG/b1/$s"; done

  # B2
  mkd "$BASE/$LANG/b2"
  for s in "${B2[@]}"; do mkd "$BASE/$LANG/b2/$s"; done

  # B3
  mkd "$BASE/$LANG/b3"
  for s in "${B3[@]}"; do mkd "$BASE/$LANG/b3/$s"; done

  # B4
  mkd "$BASE/$LANG/b4"
  for s in "${B4[@]}"; do mkd "$BASE/$LANG/b4/$s"; done
done

echo "✅ Ολοκληρώθηκε η δημιουργία φακέλων."
