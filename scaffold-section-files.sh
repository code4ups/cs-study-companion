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

SECTIONS=(a1 a2 a3 a4 b1 b2 b3 b4)

create_file_if_missing() {
  local path="$1"
  local content="$2"
  if [[ -f "$path" ]]; then
    echo "⏩ υπάρχει ήδη: ${path#$ROOT/}"
  else
    echo "📝 δημιουργία: ${path#$ROOT/}"
    printf "%s" "$content" > "$path"
  fi
}

for LANG in en el; do
  for SECTION in "${SECTIONS[@]}"; do
    SEC_DIR="$BASE/$LANG/$SECTION"
    if [[ ! -d "$SEC_DIR" ]]; then
      echo "📁 δημιουργία φακέλου: ${SEC_DIR#$ROOT/}"
      mkdir -p "$SEC_DIR"
    fi

    SEC_UPPER="$(echo "$SECTION" | tr '[:lower:]' '[:upper:]')"
    INTRO_PATH="$SEC_DIR/index.mdx"
    EOTQ_PATH="$SEC_DIR/${SECTION}-end-of-topic-questions.mdx"

    if [[ "$LANG" == "en" ]]; then
      INTRO_CONTENT="---
title: \"Section ${SEC_UPPER} – Overview\"
description: \"Overview and navigation for ${SEC_UPPER}\"
---

> _This page introduces **${SEC_UPPER}** and links to its sub‑topics._

"
      EOTQ_CONTENT="---
title: \"Section ${SEC_UPPER} – End‑of‑topic Questions\"
description: \"Practice and exam‑style questions for ${SEC_UPPER}\"
---

### End‑of‑topic Questions – ${SEC_UPPER}

> Add your question sets here.

1. …
2. …
"
    else
      INTRO_CONTENT="---
title: \"Ενότητα ${SEC_UPPER} – Επισκόπηση\"
description: \"Εισαγωγή και πλοήγηση για την ${SEC_UPPER}\"
---

> _Η σελίδα αυτή εισάγει την **${SEC_UPPER}** και οδηγεί στα υποθέματα._

"
      EOTQ_CONTENT="---
title: \"Ενότητα ${SEC_UPPER} – Ερωτήσεις τέλους ενότητας\"
description: \"Ασκήσεις και θέματα εξέτασης για την ${SEC_UPPER}\"
---

### Ερωτήσεις τέλους ενότητας – ${SEC_UPPER}

> Προσθέστε εδώ τα σετ ερωτήσεων.

1. …
2. …
"
    fi

    create_file_if_missing "$INTRO_PATH" "$INTRO_CONTENT"
    create_file_if_missing "$EOTQ_PATH" "$EOTQ_CONTENT"
  done
done

echo "✅ Ολοκληρώθηκε η δημιουργία των index.mdx & *-end-of-topic-questions.mdx για όλες τις κύριες ενότητες (EN/EL)."
