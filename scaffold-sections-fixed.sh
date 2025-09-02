#!/bin/bash

# scaffold-sections-fixed.sh
# Script για δημιουργία ενοτήτων (sections) κάτω από subtopics

if [ $# -lt 4 ]; then
    echo "Χρήση: $0 <lang> <theme> <subtopic> <section1> [section2] [...]"
    echo "Παράδειγμα: $0 el a2 2-1 'A2.1.1:Σκοπός και χαρακτηριστικά των δικτύων' 'A2.1.2:Ψηφιακές υποδομές'"
    exit 1
fi

LANG=$1
THEME=$2
SUBTOPIC=$3
shift 3
SECTIONS=("$@")

BASE_PATH="src/content/${LANG}/${THEME}/${SUBTOPIC}"

if [ ! -d "$BASE_PATH" ]; then
    echo "Σφάλμα: Ο φάκελος $BASE_PATH δεν υπάρχει!"
    exit 1
fi

for SECTION_INFO in "${SECTIONS[@]}"; do
    # Διαχωρισμός του string με IFS
    IFS=':' read -ra PARTS <<< "$SECTION_INFO"
    SECTION_ID="${PARTS[0]}"
    SECTION_TITLE="${PARTS[1]}"
    IS_AHL="${PARTS[2]:-}"

    # Μετατροπή από A2.1.1 σε 2-1-1
    SECTION_PARTS=(${SECTION_ID//./ })
    if [ ${#SECTION_PARTS[@]} -ne 3 ]; then
        echo "Σφάλμα: Λάθος μορφή section ID: $SECTION_ID"
        continue
    fi

    # Από A2.1.1 -> theme="A2", topic="1", section="1"
    THEME_NUM=${SECTION_PARTS[0]:1}  # "A2" -> "2"
    TOPIC_NUM=${SECTION_PARTS[1]}    # "1"
    SECTION_NUM=${SECTION_PARTS[2]}  # "1"

    SECTION_FOLDER="${THEME_NUM}-${TOPIC_NUM}-${SECTION_NUM}"
    SECTION_PATH="${BASE_PATH}/${SECTION_FOLDER}"

    # Δημιουργία φακέλου
    mkdir -p "$SECTION_PATH"

    # Δημιουργία index.mdx με καθαρό τρόπο
    cat > "${SECTION_PATH}/index.mdx" << 'TEMPLATE'
---
title: "SECTION_ID_PLACEHOLDER SECTION_TITLE_PLACEHOLDER"
description: "Περιγραφή για SECTION_TITLE_PLACEHOLDER"
features: ['key-term', 'practice-question']
type: 'section'
parent: 'THEME_PLACEHOLDER/SUBTOPIC_PLACEHOLDER'
syllabus_id: 'SECTION_ID_PLACEHOLDER'AHL_PLACEHOLDER
---

import { KeyTerm, PracticeQuestion } from '../../../../../components/mdx';

<article className="prose prose-lg prose-slate max-w-none">

# SECTION_ID_PLACEHOLDER SECTION_TITLE_PLACEHOLDER

<nav className="mb-6 text-sm">
  <a href="/LANG_PLACEHOLDER/THEME_PLACEHOLDER/SUBTOPIC_PLACEHOLDER" className="text-indigo-600 hover:text-indigo-800">← Επιστροφή στο BACK_TITLE_PLACEHOLDER</a>
</nav>

## Περιεχόμενο

<!-- Προσθέστε εδώ το περιεχόμενο της ενότητας -->

<KeyTerm lang="LANG_PLACEHOLDER">
**Όρος**: Περιγραφή όρου
</KeyTerm>

<PracticeQuestion lang="LANG_PLACEHOLDER">
1. Ερώτηση 1
2. Ερώτηση 2
</PracticeQuestion>

<nav className="mt-8 flex justify-between">
  <a href="/LANG_PLACEHOLDER/THEME_PLACEHOLDER/SUBTOPIC_PLACEHOLDER" className="text-indigo-600 hover:text-indigo-800">← Επιστροφή</a>
  <a href="#" className="text-indigo-600 hover:text-indigo-800">Επόμενη ενότητα →</a>
</nav>

</article>
TEMPLATE

    # Αντικατάσταση placeholders
    sed -i.bak "s/SECTION_ID_PLACEHOLDER/${SECTION_ID}/g" "${SECTION_PATH}/index.mdx"
    sed -i.bak "s/SECTION_TITLE_PLACEHOLDER/${SECTION_TITLE}/g" "${SECTION_PATH}/index.mdx"
    sed -i.bak "s/THEME_PLACEHOLDER/${THEME}/g" "${SECTION_PATH}/index.mdx"
    sed -i.bak "s/SUBTOPIC_PLACEHOLDER/${SUBTOPIC}/g" "${SECTION_PATH}/index.mdx"
    sed -i.bak "s/LANG_PLACEHOLDER/${LANG}/g" "${SECTION_PATH}/index.mdx"

    # Δημιουργία του back title
    THEME_UPPER=$(echo "$THEME" | tr '[:lower:]' '[:upper:]')
    SUBTOPIC_CLEAN=$(echo "$SUBTOPIC" | cut -d'-' -f2)
    BACK_TITLE="${THEME_UPPER}.${SUBTOPIC_CLEAN}"
    sed -i.bak "s/BACK_TITLE_PLACEHOLDER/${BACK_TITLE}/g" "${SECTION_PATH}/index.mdx"

    # AHL handling
    if [ "$IS_AHL" = "AHL" ]; then
        sed -i.bak "s/AHL_PLACEHOLDER/\nahl: true/g" "${SECTION_PATH}/index.mdx"
    else
        sed -i.bak "s/AHL_PLACEHOLDER//g" "${SECTION_PATH}/index.mdx"
    fi

    # Καθαρισμός backup files
    rm "${SECTION_PATH}/index.mdx.bak" 2>/dev/null || true

    echo "Δημιουργήθηκε: ${SECTION_PATH}/index.mdx"
done

echo "Ολοκληρώθηκε η δημιουργία των ενοτήτων!"