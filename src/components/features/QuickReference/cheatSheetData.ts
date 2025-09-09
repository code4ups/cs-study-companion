import type { ComparativeSection } from './types';

export const comparativeCheatSheetData: Record<"el" | "en", ComparativeSection[]> = {
    el: [
        {
            id: "basic-types",
            title: "Βασικοί Τύποι Δεδομένων",
            icon: "🔤",
            subsections: [
                {
                    id: "primitive-types",
                    title: "Πρωτογενείς Τύποι",
                    content: [
                        {
                            id: "integer",
                            concept: "Ακέραιος Αριθμός",
                            python: {
                                syntax: "x = 42",
                                example: "age = 25",
                                description: "Δυναμικός τύπος, απεριόριστο μέγεθος"
                            },
                            java: {
                                syntax: "int x = 42;",
                                example: "int age = 25;",
                                description: "32-bit signed integer (-2³¹ έως 2³¹-1)"
                            },
                            tags: ["basic", "numbers"],
                            notes: "Στην Python οι ακέραιοι μπορούν να είναι απεριόριστου μεγέθους"
                        },
                        {
                            id: "long-integer",
                            concept: "Μεγάλος Ακέραιος",
                            python: {
                                syntax: "x = 1000000000000000000",
                                example: "big_num = 999999999999999999",
                                description: "Αυτόματη διαχείριση μεγάλων αριθμών"
                            },
                            java: {
                                syntax: "long x = 1000000000000000000L;",
                                example: "long bigNum = 999999999999999999L;",
                                description: "64-bit signed integer με επίθημα L"
                            },
                            tags: ["basic", "numbers"]
                        },
                        {
                            id: "float",
                            concept: "Δεκαδικός Αριθμός",
                            python: {
                                syntax: "x = 3.14",
                                example: "price = 19.99",
                                description: "64-bit floating point (double precision)"
                            },
                            java: {
                                syntax: "double x = 3.14;",
                                example: "double price = 19.99;",
                                description: "64-bit floating point number"
                            },
                            tags: ["basic", "numbers"]
                        },
                        {
                            id: "float-single",
                            concept: "Μονής Ακρίβειας Δεκαδικός",
                            python: {
                                syntax: "# Δεν υπάρχει ξεχωριστός τύπος",
                                example: "import numpy as np\nx = np.float32(3.14)",
                                description: "Χρήση numpy για single precision"
                            },
                            java: {
                                syntax: "float x = 3.14f;",
                                example: "float price = 19.99f;",
                                description: "32-bit floating point με επίθημα f"
                            },
                            tags: ["basic", "numbers"]
                        },
                        {
                            id: "boolean",
                            concept: "Λογικός Τύπος",
                            python: {
                                syntax: "x = True/False",
                                example: "is_active = True",
                                description: "Κεφαλαία γράμματα True/False"
                            },
                            java: {
                                syntax: "boolean x = true/false;",
                                example: "boolean isActive = true;",
                                description: "Πεζά γράμματα true/false"
                            },
                            tags: ["basic", "logic"]
                        },
                        {
                            id: "string",
                            concept: "Συμβολοσειρά",
                            python: {
                                syntax: "x = 'text' ή \"text\"",
                                example: "name = \"Αλέξανδρος\"",
                                description: "Immutable, Unicode support"
                            },
                            java: {
                                syntax: "String x = \"text\";",
                                example: "String name = \"Αλέξανδρος\";",
                                description: "Object type, immutable"
                            },
                            tags: ["basic", "text"]
                        },
                        {
                            id: "character",
                            concept: "Χαρακτήρας",
                            python: {
                                syntax: "# Δεν υπάρχει ξεχωριστός τύπος",
                                example: "char = 'A'  # είναι string μήκους 1",
                                description: "Χαρακτήρες ως strings μήκους 1"
                            },
                            java: {
                                syntax: "char x = 'A';",
                                example: "char grade = 'A';",
                                description: "16-bit Unicode character"
                            },
                            tags: ["basic", "text"]
                        }
                    ]
                },
                {
                    id: "type-operations",
                    title: "Λειτουργίες Τύπων",
                    content: [
                        {
                            id: "type-checking",
                            concept: "Έλεγχος Τύπου",
                            python: {
                                syntax: "type(x) ή isinstance(x, type)",
                                example: "type(42) # <class 'int'>",
                                description: "Δυναμικός έλεγχος τύπου"
                            },
                            java: {
                                syntax: "x instanceof Type",
                                example: "\"hello\" instanceof String",
                                description: "Runtime type checking"
                            },
                            tags: ["types", "checking"]
                        },
                        {
                            id: "type-conversion",
                            concept: "Μετατροπή Τύπου",
                            python: {
                                syntax: "int(x), float(x), str(x)",
                                example: "int(\"42\"), float(\"3.14\")",
                                description: "Explicit type conversion"
                            },
                            java: {
                                syntax: "Integer.parseInt(), Double.parseDouble()",
                                example: "Integer.parseInt(\"42\")",
                                description: "Static methods για parsing"
                            },
                            tags: ["types", "conversion"]
                        }
                    ]
                }
            ]
        },
        {
            id: "operators",
            title: "Τελεστές",
            icon: "🔢",
            subsections: [
                {
                    id: "arithmetic",
                    title: "Αριθμητικοί Τελεστές",
                    content: [
                        {
                            id: "basic-arithmetic",
                            concept: "Βασικοί Αριθμητικοί",
                            python: {
                                syntax: "+ - * / % **",
                                example: "10 + 3, 10 - 3, 10 * 3, 10 / 3, 10 % 3, 10 ** 3",
                                description: "Πρόσθεση, αφαίρεση, πολλαπλασιασμός, διαίρεση, modulo, δύναμη"
                            },
                            java: {
                                syntax: "+ - * / %",
                                example: "10 + 3, 10 - 3, 10 * 3, 10 / 3, 10 % 3, Math.pow(10, 3)",
                                description: "Χρήση Math.pow() για δύναμη"
                            },
                            tags: ["operators", "arithmetic"]
                        },
                        {
                            id: "floor-division",
                            concept: "Ακέραια Διαίρεση",
                            python: {
                                syntax: "//",
                                example: "10 // 3  # 3",
                                description: "Floor division operator"
                            },
                            java: {
                                syntax: "/ (με int)",
                                example: "10 / 3  // 3 (αν και τα δύο int)",
                                description: "Αυτόματη ακέραια διαίρεση με int"
                            },
                            tags: ["operators", "division"]
                        }
                    ]
                },
                {
                    id: "comparison",
                    title: "Τελεστές Σύγκρισης",
                    content: [
                        {
                            id: "comparison-ops",
                            concept: "Σύγκριση",
                            python: {
                                syntax: "== != < > <= >=",
                                example: "x == 5, x != 5, x < 5, x > 5",
                                description: "Επιστρέφουν True/False"
                            },
                            java: {
                                syntax: "== != < > <= >=",
                                example: "x == 5, x != 5, x < 5, x > 5",
                                description: "Επιστρέφουν true/false"
                            },
                            tags: ["operators", "comparison"]
                        },
                        {
                            id: "string-comparison",
                            concept: "Σύγκριση Strings",
                            python: {
                                syntax: "== != < >",
                                example: "\"apple\" < \"banana\"  # True",
                                description: "Lexicographic comparison"
                            },
                            java: {
                                syntax: ".equals(), .compareTo()",
                                example: "str1.equals(str2), str1.compareTo(str2)",
                                description: "Χρήση methods για String comparison"
                            },
                            tags: ["operators", "strings"]
                        }
                    ]
                },
                {
                    id: "logical",
                    title: "Λογικοί Τελεστές",
                    content: [
                        {
                            id: "logical-ops",
                            concept: "Λογικοί Τελεστές",
                            python: {
                                syntax: "and or not",
                                example: "x > 0 and x < 10, x < 0 or x > 10, not x",
                                description: "Λογικές πράξεις με keywords"
                            },
                            java: {
                                syntax: "&& || !",
                                example: "x > 0 && x < 10, x < 0 || x > 10, !x",
                                description: "Σύμβολα για λογικές πράξεις"
                            },
                            tags: ["operators", "logical"]
                        }
                    ]
                },
                {
                    id: "assignment",
                    title: "Τελεστές Ανάθεσης",
                    content: [
                        {
                            id: "assignment-ops",
                            concept: "Σύντομη Ανάθεση",
                            python: {
                                syntax: "+= -= *= /= %= **= //=",
                                example: "x += 5, x -= 3, x *= 2, x /= 4",
                                description: "Shorthand assignment operators"
                            },
                            java: {
                                syntax: "+= -= *= /= %=",
                                example: "x += 5; x -= 3; x *= 2; x /= 4;",
                                description: "Compound assignment operators"
                            },
                            tags: ["operators", "assignment"]
                        }
                    ]
                }
            ]
        },
        {
            id: "input-output",
            title: "Είσοδος/Έξοδος",
            icon: "💬",
            subsections: [
                {
                    id: "output",
                    title: "Έξοδος",
                    content: [
                        {
                            id: "print",
                            concept: "Εκτύπωση",
                            python: {
                                syntax: "print(value)",
                                example: "print(\"Hello World\")",
                                description: "Built-in function για output"
                            },
                            java: {
                                syntax: "System.out.println(value)",
                                example: "System.out.println(\"Hello World\");",
                                description: "Static method για console output"
                            },
                            tags: ["io", "output"]
                        },
                        {
                            id: "print-multiple",
                            concept: "Πολλαπλές Τιμές",
                            python: {
                                syntax: "print(val1, val2, val3)",
                                example: "print(\"Name:\", name, \"Age:\", age)",
                                description: "Αυτόματο space separation"
                            },
                            java: {
                                syntax: "System.out.printf() ή +",
                                example: "System.out.println(\"Name: \" + name + \" Age: \" + age);",
                                description: "String concatenation ή printf"
                            },
                            tags: ["io", "output", "formatting"]
                        },
                        {
                            id: "print-formatting",
                            concept: "Μορφοποιημένη Εκτύπωση",
                            python: {
                                syntax: "f\"text {variable}\"",
                                example: "print(f\"Age: {age}, Name: {name}\")",
                                description: "F-strings για formatting"
                            },
                            java: {
                                syntax: "System.out.printf(\"format\", args)",
                                example: "System.out.printf(\"Age: %d, Name: %s%n\", age, name);",
                                description: "Printf-style formatting"
                            },
                            tags: ["io", "output", "formatting"]
                        }
                    ]
                },
                {
                    id: "input",
                    title: "Είσοδος",
                    content: [
                        {
                            id: "input-string",
                            concept: "Είσοδος String",
                            python: {
                                syntax: "input(prompt)",
                                example: "name = input(\"Enter name: \")",
                                description: "Επιστρέφει πάντα string"
                            },
                            java: {
                                syntax: "Scanner.nextLine()",
                                example: "Scanner sc = new Scanner(System.in);\nString name = sc.nextLine();",
                                description: "Χρήση Scanner class"
                            },
                            tags: ["io", "input"]
                        },
                        {
                            id: "input-number",
                            concept: "Είσοδος Αριθμού",
                            python: {
                                syntax: "int(input()), float(input())",
                                example: "age = int(input(\"Age: \"))",
                                description: "Μετατροπή από string"
                            },
                            java: {
                                syntax: "Scanner.nextInt(), nextDouble()",
                                example: "int age = sc.nextInt();",
                                description: "Direct parsing methods"
                            },
                            tags: ["io", "input", "numbers"]
                        }
                    ]
                }
            ]
        },
        {
            id: "built-in-functions",
            title: "Ενσωματωμένες Συναρτήσεις",
            icon: "🔧",
            subsections: [
                {
                    id: "type-functions",
                    title: "Συναρτήσεις Τύπων",
                    content: [
                        {
                            id: "type-func",
                            concept: "Έλεγχος Τύπου",
                            python: {
                                syntax: "type(obj)",
                                example: "type(42)  # <class 'int'>",
                                description: "Επιστρέφει τον τύπο του αντικειμένου"
                            },
                            java: {
                                syntax: "obj.getClass()",
                                example: "obj.getClass().getSimpleName()",
                                description: "Reflection για τύπο αντικειμένου"
                            },
                            tags: ["built-in", "types"]
                        },
                        {
                            id: "isinstance",
                            concept: "Έλεγχος Instance",
                            python: {
                                syntax: "isinstance(obj, type)",
                                example: "isinstance(42, int)  # True",
                                description: "Ελέγχει αν είναι instance συγκεκριμένου τύπου"
                            },
                            java: {
                                syntax: "obj instanceof Class",
                                example: "obj instanceof String",
                                description: "Operator για type checking"
                            },
                            tags: ["built-in", "types"]
                        }
                    ]
                },
                {
                    id: "math-functions",
                    title: "Μαθηματικές Συναρτήσεις",
                    content: [
                        {
                            id: "abs",
                            concept: "Απόλυτη Τιμή",
                            python: {
                                syntax: "abs(x)",
                                example: "abs(-5)  # 5",
                                description: "Built-in function"
                            },
                            java: {
                                syntax: "Math.abs(x)",
                                example: "Math.abs(-5)  // 5",
                                description: "Static method στη Math class"
                            },
                            tags: ["built-in", "math"]
                        },
                        {
                            id: "min-max",
                            concept: "Ελάχιστο/Μέγιστο",
                            python: {
                                syntax: "min(a, b, c), max(a, b, c)",
                                example: "min(3, 1, 4)  # 1",
                                description: "Δέχεται πολλαπλές τιμές"
                            },
                            java: {
                                syntax: "Math.min(a, b), Math.max(a, b)",
                                example: "Math.min(3, 1)  // 1",
                                description: "Μόνο δύο τιμές κάθε φορά"
                            },
                            tags: ["built-in", "math"]
                        },
                        {
                            id: "round",
                            concept: "Στρογγυλοποίηση",
                            python: {
                                syntax: "round(x, digits)",
                                example: "round(3.14159, 2)  # 3.14",
                                description: "Προαιρετικό digits parameter"
                            },
                            java: {
                                syntax: "Math.round(x)",
                                example: "Math.round(3.14159)  // 3",
                                description: "Στρογγυλοποίηση σε ακέραιο"
                            },
                            tags: ["built-in", "math"]
                        },
                        {
                            id: "power",
                            concept: "Δύναμη",
                            python: {
                                syntax: "pow(x, y) ή x ** y",
                                example: "pow(2, 3)  # 8",
                                description: "Built-in function ή operator"
                            },
                            java: {
                                syntax: "Math.pow(x, y)",
                                example: "Math.pow(2, 3)  // 8.0",
                                description: "Επιστρέφει double"
                            },
                            tags: ["built-in", "math"]
                        }
                    ]
                },
                {
                    id: "length-functions",
                    title: "Συναρτήσεις Μήκους",
                    content: [
                        {
                            id: "len",
                            concept: "Μήκος",
                            python: {
                                syntax: "len(obj)",
                                example: "len(\"hello\")  # 5",
                                description: "Λειτουργεί με strings, lists, tuples"
                            },
                            java: {
                                syntax: ".length() ή .length",
                                example: "\"hello\".length()  // 5",
                                description: "Method για objects, field για arrays"
                            },
                            tags: ["built-in", "length"]
                        }
                    ]
                },
                {
                    id: "conversion-functions",
                    title: "Συναρτήσεις Μετατροπής",
                    content: [
                        {
                            id: "int-conversion",
                            concept: "Μετατροπή σε Int",
                            python: {
                                syntax: "int(x)",
                                example: "int(\"42\"), int(3.14)",
                                description: "String ή float σε integer"
                            },
                            java: {
                                syntax: "Integer.parseInt(), (int)cast",
                                example: "Integer.parseInt(\"42\"), (int)3.14",
                                description: "Parsing ή casting"
                            },
                            tags: ["built-in", "conversion"]
                        },
                        {
                            id: "float-conversion",
                            concept: "Μετατροπή σε Float",
                            python: {
                                syntax: "float(x)",
                                example: "float(\"3.14\"), float(42)",
                                description: "String ή int σε float"
                            },
                            java: {
                                syntax: "Double.parseDouble(), (double)cast",
                                example: "Double.parseDouble(\"3.14\"), (double)42",
                                description: "Parsing ή casting"
                            },
                            tags: ["built-in", "conversion"]
                        },
                        {
                            id: "str-conversion",
                            concept: "Μετατροπή σε String",
                            python: {
                                syntax: "str(x)",
                                example: "str(42), str(3.14)",
                                description: "Οποιαδήποτε τιμή σε string"
                            },
                            java: {
                                syntax: "String.valueOf(), toString()",
                                example: "String.valueOf(42), obj.toString()",
                                description: "Static method ή instance method"
                            },
                            tags: ["built-in", "conversion"]
                        }
                    ]
                },
                {
                    id: "range-function",
                    title: "Συνάρτηση Range",
                    content: [
                        {
                            id: "range",
                            concept: "Δημιουργία Περιοχής",
                            python: {
                                syntax: "range(start, stop, step)",
                                example: "range(1, 10, 2)  # 1, 3, 5, 7, 9",
                                description: "Δημιουργεί ακολουθία αριθμών"
                            },
                            java: {
                                syntax: "for loop με manual increment",
                                example: "for(int i = 1; i < 10; i += 2)",
                                description: "Δεν υπάρχει built-in range"
                            },
                            tags: ["built-in", "range", "loops"]
                        }
                    ]
                }
            ]
        },
        {
            id: "control-structures",
            title: "Δομές Ελέγχου",
            icon: "🔀",
            subsections: [
                {
                    id: "conditionals",
                    title: "Δηλώσεις If",
                    content: [
                        {
                            id: "if-statement",
                            concept: "If Statement",
                            python: {
                                syntax: "if condition:\n    # code",
                                example: "if age >= 18:\n    print(\"Adult\")",
                                description: "Χρήση colon και indentation"
                            },
                            java: {
                                syntax: "if (condition) {\n    // code\n}",
                                example: "if (age >= 18) {\n    System.out.println(\"Adult\");\n}",
                                description: "Χρήση parentheses και braces"
                            },
                            tags: ["control", "conditionals"]
                        },
                        {
                            id: "if-else",
                            concept: "If-Else",
                            python: {
                                syntax: "if condition:\n    # code\nelse:\n    # code",
                                example: "if age >= 18:\n    print(\"Adult\")\nelse:\n    print(\"Minor\")",
                                description: "Else clause"
                            },
                            java: {
                                syntax: "if (condition) {\n    // code\n} else {\n    // code\n}",
                                example: "if (age >= 18) {\n    System.out.println(\"Adult\");\n} else {\n    System.out.println(\"Minor\");\n}",
                                description: "Else statement"
                            },
                            tags: ["control", "conditionals"]
                        },
                        {
                            id: "elif",
                            concept: "Multiple Conditions",
                            python: {
                                syntax: "if condition1:\n    # code\nelif condition2:\n    # code\nelse:\n    # code",
                                example: "if grade >= 90:\n    print(\"A\")\nelif grade >= 80:\n    print(\"B\")\nelse:\n    print(\"C\")",
                                description: "Χρήση elif keyword"
                            },
                            java: {
                                syntax: "if (condition1) {\n    // code\n} else if (condition2) {\n    // code\n} else {\n    // code\n}",
                                example: "if (grade >= 90) {\n    System.out.println(\"A\");\n} else if (grade >= 80) {\n    System.out.println(\"B\");\n} else {\n    System.out.println(\"C\");\n}",
                                description: "Χρήση else if"
                            },
                            tags: ["control", "conditionals"]
                        },
                        {
                            id: "ternary",
                            concept: "Τριαδικός Τελεστής",
                            python: {
                                syntax: "value_if_true if condition else value_if_false",
                                example: "status = \"Adult\" if age >= 18 else \"Minor\"",
                                description: "Inline conditional expression"
                            },
                            java: {
                                syntax: "condition ? value_if_true : value_if_false",
                                example: "String status = age >= 18 ? \"Adult\" : \"Minor\";",
                                description: "Conditional operator"
                            },
                            tags: ["control", "conditionals"]
                        }
                    ]
                },
                {
                    id: "switch-statements",
                    title: "Switch Statements",
                    content: [
                        {
                            id: "match-case",
                            concept: "Pattern Matching",
                            python: {
                                syntax: "match value:\n    case pattern1:\n        # code\n    case pattern2:\n        # code\n    case _:\n        # default",
                                example: "match day:\n    case \"Monday\":\n        print(\"Start of week\")\n    case \"Friday\":\n        print(\"TGIF\")\n    case _:\n        print(\"Regular day\")",
                                description: "Python 3.10+ match-case statement"
                            },
                            java: {
                                syntax: "switch (value) {\n    case value1:\n        // code\n        break;\n    case value2:\n        // code\n        break;\n    default:\n        // code\n}",
                                example: "switch (day) {\n    case \"Monday\":\n        System.out.println(\"Start of week\");\n        break;\n    case \"Friday\":\n        System.out.println(\"TGIF\");\n        break;\n    default:\n        System.out.println(\"Regular day\");\n}",
                                description: "Traditional switch statement"
                            },
                            tags: ["control", "switch"]
                        }
                    ]
                }
            ]
        },
        {
            id: "loops",
            title: "Βρόχοι",
            icon: "🔄",
            subsections: [
                {
                    id: "for-loops",
                    title: "For Loops",
                    content: [
                        {
                            id: "for-range",
                            concept: "For με Range",
                            python: {
                                syntax: "for i in range(n):",
                                example: "for i in range(5):\n    print(i)  # 0,1,2,3,4",
                                description: "Χρήση range() function"
                            },
                            java: {
                                syntax: "for (int i = 0; i < n; i++)",
                                example: "for (int i = 0; i < 5; i++) {\n    System.out.println(i);\n}",
                                description: "C-style for loop"
                            },
                            tags: ["loops", "for"]
                        },
                        {
                            id: "for-iterable",
                            concept: "For σε Iterable",
                            python: {
                                syntax: "for item in iterable:",
                                example: "for name in [\"Alice\", \"Bob\"]:\n    print(name)",
                                description: "Enhanced for loop"
                            },
                            java: {
                                syntax: "for (Type item : iterable)",
                                example: "for (String name : names) {\n    System.out.println(name);\n}",
                                description: "Enhanced for loop (for-each)"
                            },
                            tags: ["loops", "for", "iteration"]
                        },
                        {
                            id: "for-enumerate",
                            concept: "For με Index",
                            python: {
                                syntax: "for i, item in enumerate(iterable):",
                                example: "for i, name in enumerate([\"Alice\", \"Bob\"]):\n    print(f\"{i}: {name}\")",
                                description: "Χρήση enumerate() για index"
                            },
                            java: {
                                syntax: "for (int i = 0; i < array.length; i++)",
                                example: "for (int i = 0; i < names.length; i++) {\n    System.out.println(i + \": \" + names[i]);\n}",
                                description: "Manual indexing"
                            },
                            tags: ["loops", "for", "indexing"]
                        }
                    ]
                },
                {
                    id: "while-loops",
                    title: "While Loops",
                    content: [
                        {
                            id: "while",
                            concept: "While Loop",
                            python: {
                                syntax: "while condition:\n    # code",
                                example: "count = 0\nwhile count < 5:\n    print(count)\n    count += 1",
                                description: "Pre-condition loop"
                            },
                            java: {
                                syntax: "while (condition) {\n    // code\n}",
                                example: "int count = 0;\nwhile (count < 5) {\n    System.out.println(count);\n    count++;\n}",
                                description: "Pre-condition loop"
                            },
                            tags: ["loops", "while"]
                        },
                        {
                            id: "do-while",
                            concept: "Do-While Loop",
                            python: {
                                syntax: "# Δεν υπάρχει do-while",
                                example: "# Προσομοίωση:\nwhile True:\n    # code\n    if not condition:\n        break",
                                description: "Προσομοίωση με while True και break"
                            },
                            java: {
                                syntax: "do {\n    // code\n} while (condition);",
                                example: "int count = 0;\ndo {\n    System.out.println(count);\n    count++;\n} while (count < 5);",
                                description: "Post-condition loop - εκτελείται τουλάχιστον μία φορά"
                            },
                            tags: ["loops", "while"]
                        }
                    ]
                },
                {
                    id: "loop-control",
                    title: "Έλεγχος Βρόχων",
                    content: [
                        {
                            id: "break",
                            concept: "Break Statement",
                            python: {
                                syntax: "break",
                                example: "for i in range(10):\n    if i == 5:\n        break\n    print(i)  # 0,1,2,3,4",
                                description: "Τερματισμός βρόχου"
                            },
                            java: {
                                syntax: "break;",
                                example: "for (int i = 0; i < 10; i++) {\n    if (i == 5) {\n        break;\n    }\n    System.out.println(i);\n}",
                                description: "Τερματισμός βρόχου"
                            },
                            tags: ["loops", "control"]
                        },
                        {
                            id: "continue",
                            concept: "Continue Statement",
                            python: {
                                syntax: "continue",
                                example: "for i in range(5):\n    if i == 2:\n        continue\n    print(i)  # 0,1,3,4",
                                description: "Παράλειψη τρέχουσας επανάληψης"
                            },
                            java: {
                                syntax: "continue;",
                                example: "for (int i = 0; i < 5; i++) {\n    if (i == 2) {\n        continue;\n    }\n    System.out.println(i);\n}",
                                description: "Παράλειψη τρέχουσας επανάληψης"
                            },
                            tags: ["loops", "control"]
                        }
                    ]
                }
            ]
        },
        {
            id: "strings",
            title: "Συμβολοσειρές",
            icon: "📝",
            subsections: [
                {
                    id: "string-creation",
                    title: "Δημιουργία Strings",
                    content: [
                        {
                            id: "string-literals",
                            concept: "String Literals",
                            python: {
                                syntax: "'text' ή \"text\" ή '''multiline'''",
                                example: "name = 'Αλέξανδρος'\nmultiline = '''Γραμμή 1\nΓραμμή 2'''",
                                description: "Single, double ή triple quotes"
                            },
                            java: {
                                syntax: "\"text\"",
                                example: "String name = \"Αλέξανδρος\";\nString multiline = \"Γραμμή 1\\nΓραμμή 2\";",
                                description: "Μόνο double quotes, \\n για νέα γραμμή"
                            },
                            tags: ["strings", "literals"]
                        },
                        {
                            id: "raw-strings",
                            concept: "Raw Strings",
                            python: {
                                syntax: "r'text με \\backslashes'",
                                example: "path = r'C:\\Users\\Name\\file.txt'",
                                description: "Raw strings - δεν επεξεργάζονται escape sequences"
                            },
                            java: {
                                syntax: "# Δεν υπάρχουν raw strings",
                                example: "String path = \"C:\\\\Users\\\\Name\\\\file.txt\";",
                                description: "Χρήση double backslashes για escape"
                            },
                            tags: ["strings", "raw"]
                        }
                    ]
                },
                {
                    id: "string-methods",
                    title: "String Methods",
                    content: [
                        {
                            id: "length",
                            concept: "Μήκος String",
                            python: {
                                syntax: "len(string)",
                                example: "len(\"hello\")  # 5",
                                description: "Built-in function"
                            },
                            java: {
                                syntax: "string.length()",
                                example: "\"hello\".length()  // 5",
                                description: "Instance method"
                            },
                            tags: ["strings", "methods"]
                        },
                        {
                            id: "upper-lower",
                            concept: "Αλλαγή Κεφαλαίων",
                            python: {
                                syntax: "string.upper(), string.lower()",
                                example: "\"Hello\".upper()  # \"HELLO\"\n\"Hello\".lower()  # \"hello\"",
                                description: "Instance methods"
                            },
                            java: {
                                syntax: "string.toUpperCase(), string.toLowerCase()",
                                example: "\"Hello\".toUpperCase()  // \"HELLO\"\n\"Hello\".toLowerCase()  // \"hello\"",
                                description: "Instance methods"
                            },
                            tags: ["strings", "methods"]
                        },
                        {
                            id: "strip",
                            concept: "Αφαίρεση Κενών",
                            python: {
                                syntax: "string.strip(), string.lstrip(), string.rstrip()",
                                example: "\"  hello  \".strip()  # \"hello\"",
                                description: "Αφαίρεση whitespace από άκρα"
                            },
                            java: {
                                syntax: "string.trim()",
                                example: "\"  hello  \".trim()  // \"hello\"",
                                description: "Αφαίρεση whitespace από άκρα"
                            },
                            tags: ["strings", "methods"]
                        },
                        {
                            id: "replace",
                            concept: "Αντικατάσταση",
                            python: {
                                syntax: "string.replace(old, new)",
                                example: "\"hello world\".replace(\"world\", \"Python\")  # \"hello Python\"",
                                description: "Αντικατάσταση όλων των εμφανίσεων"
                            },
                            java: {
                                syntax: "string.replace(old, new)",
                                example: "\"hello world\".replace(\"world\", \"Java\")  // \"hello Java\"",
                                description: "Αντικατάσταση όλων των εμφανίσεων"
                            },
                            tags: ["strings", "methods"]
                        },
                        {
                            id: "split",
                            concept: "Διαχωρισμός",
                            python: {
                                syntax: "string.split(separator)",
                                example: "\"a,b,c\".split(\",\")  # ['a', 'b', 'c']",
                                description: "Επιστρέφει λίστα"
                            },
                            java: {
                                syntax: "string.split(regex)",
                                example: "\"a,b,c\".split(\",\")  // [\"a\", \"b\", \"c\"]",
                                description: "Επιστρέφει String array"
                            },
                            tags: ["strings", "methods"]
                        },
                        {
                            id: "join",
                            concept: "Ένωση",
                            python: {
                                syntax: "separator.join(iterable)",
                                example: "\",\".join([\"a\", \"b\", \"c\"])  # \"a,b,c\"",
                                description: "Ένωση στοιχείων με separator"
                            },
                            java: {
                                syntax: "String.join(separator, elements)",
                                example: "String.join(\",\", \"a\", \"b\", \"c\")  // \"a,b,c\"",
                                description: "Static method για join"
                            },
                            tags: ["strings", "methods"]
                        },
                        {
                            id: "find-index",
                            concept: "Εύρεση Θέσης",
                            python: {
                                syntax: "string.find(substring), string.index(substring)",
                                example: "\"hello\".find(\"ll\")  # 2\n\"hello\".index(\"ll\")  # 2",
                                description: "find επιστρέφει -1 αν δεν βρει, index ρίχνει exception"
                            },
                            java: {
                                syntax: "string.indexOf(substring)",
                                example: "\"hello\".indexOf(\"ll\")  // 2",
                                description: "Επιστρέφει -1 αν δεν βρει"
                            },
                            tags: ["strings", "methods"]
                        },
                        {
                            id: "startswith-endswith",
                            concept: "Έλεγχος Αρχής/Τέλους",
                            python: {
                                syntax: "string.startswith(prefix), string.endswith(suffix)",
                                example: "\"hello.py\".endswith(\".py\")  # True",
                                description: "Boolean methods"
                            },
                            java: {
                                syntax: "string.startsWith(prefix), string.endsWith(suffix)",
                                example: "\"hello.java\".endsWith(\".java\")  // true",
                                description: "Boolean methods"
                            },
                            tags: ["strings", "methods"]
                        }
                    ]
                },
                {
                    id: "string-formatting",
                    title: "Μορφοποίηση Strings",
                    content: [
                        {
                            id: "f-strings",
                            concept: "F-Strings",
                            python: {
                                syntax: "f\"text {variable}\"",
                                example: "name = \"Alice\"\nage = 25\nprint(f\"Hello {name}, age {age}\")",
                                description: "Formatted string literals (Python 3.6+)"
                            },
                            java: {
                                syntax: "# Δεν υπάρχουν f-strings",
                                example: "String name = \"Alice\";\nint age = 25;\nSystem.out.println(\"Hello \" + name + \", age \" + age);",
                                description: "String concatenation ή String.format()"
                            },
                            tags: ["strings", "formatting"]
                        },
                        {
                            id: "string-format",
                            concept: "String.format()",
                            python: {
                                syntax: "\"template {}\".format(value)",
                                example: "\"Hello {}, age {}\".format(\"Alice\", 25)",
                                description: "Παλιός τρόπος formatting"
                            },
                            java: {
                                syntax: "String.format(\"template %s\", value)",
                                example: "String.format(\"Hello %s, age %d\", \"Alice\", 25)",
                                description: "Printf-style formatting"
                            },
                            tags: ["strings", "formatting"]
                        },
                        {
                            id: "percent-formatting",
                            concept: "% Formatting",
                            python: {
                                syntax: "\"template %s\" % value",
                                example: "\"Hello %s, age %d\" % (\"Alice\", 25)",
                                description: "C-style formatting (legacy)"
                            },
                            java: {
                                syntax: "# Χρήση String.format() ή printf()",
                                example: "System.out.printf(\"Hello %s, age %d%n\", \"Alice\", 25);",
                                description: "Printf για console output"
                            },
                            tags: ["strings", "formatting"]
                        }
                    ]
                },
                {
                    id: "string-operations",
                    title: "String Operations",
                    content: [
                        {
                            id: "concatenation",
                            concept: "Συνένωση",
                            python: {
                                syntax: "string1 + string2",
                                example: "\"Hello \" + \"World\"  # \"Hello World\"",
                                description: "Operator overloading"
                            },
                            java: {
                                syntax: "string1 + string2",
                                example: "\"Hello \" + \"World\"  // \"Hello World\"",
                                description: "String concatenation operator"
                            },
                            tags: ["strings", "operations"]
                        },
                        {
                            id: "repetition",
                            concept: "Επανάληψη",
                            python: {
                                syntax: "string * n",
                                example: "\"Ha\" * 3  # \"HaHaHa\"",
                                description: "Operator overloading για repetition"
                            },
                            java: {
                                syntax: "# Δεν υπάρχει operator",
                                example: "// Χρήση StringBuilder ή loop\nString.join(\"\", Collections.nCopies(3, \"Ha\"));",
                                description: "Χρήση utility methods"
                            },
                            tags: ["strings", "operations"]
                        },
                        {
                            id: "indexing",
                            concept: "Indexing",
                            python: {
                                syntax: "string[index]",
                                example: "\"hello\"[1]  # 'e'\n\"hello\"[-1]  # 'o' (τελευταίος)",
                                description: "Υποστηρίζει negative indexing"
                            },
                            java: {
                                syntax: "string.charAt(index)",
                                example: "\"hello\".charAt(1)  // 'e'",
                                description: "Μόνο positive indices"
                            },
                            tags: ["strings", "operations"]
                        },
                        {
                            id: "slicing",
                            concept: "Slicing",
                            python: {
                                syntax: "string[start:end:step]",
                                example: "\"hello\"[1:4]  # \"ell\"\n\"hello\"[::-1]  # \"olleh\"",
                                description: "Flexible slicing με step"
                            },
                            java: {
                                syntax: "string.substring(start, end)",
                                example: "\"hello\".substring(1, 4)  // \"ell\"",
                                description: "Μόνο start και end indices"
                            },
                            tags: ["strings", "operations"]
                        }
                    ]
                }
            ]
        },
        {
            id: "lists",
            title: "Λίστες",
            icon: "📋",
            subsections: [
                {
                    id: "list-creation",
                    title: "Δημιουργία Λιστών",
                    content: [
                        {
                            id: "list-literal",
                            concept: "List Literals",
                            python: {
                                syntax: "[item1, item2, item3]",
                                example: "numbers = [1, 2, 3, 4, 5]\nnames = [\"Alice\", \"Bob\", \"Charlie\"]",
                                description: "Square brackets για δημιουργία"
                            },
                            java: {
                                syntax: "new ArrayList<>(Arrays.asList(...))",
                                example: "List<Integer> numbers = new ArrayList<>(Arrays.asList(1, 2, 3, 4, 5));\nList<String> names = new ArrayList<>(Arrays.asList(\"Alice\", \"Bob\", \"Charlie\"));",
                                description: "ArrayList με Arrays.asList()"
                            },
                            tags: ["lists", "creation"]
                        },
                        {
                            id: "empty-list",
                            concept: "Κενή Λίστα",
                            python: {
                                syntax: "[] ή list()",
                                example: "empty1 = []\nempty2 = list()",
                                description: "Δύο τρόποι δημιουργίας κενής λίστας"
                            },
                            java: {
                                syntax: "new ArrayList<>()",
                                example: "List<String> empty = new ArrayList<>();",
                                description: "Constructor για κενή λίστα"
                            },
                            tags: ["lists", "creation"]
                        },
                        {
                            id: "list-size",
                            concept: "Λίστα με Συγκεκριμένο Μέγεθος",
                            python: {
                                syntax: "[value] * n",
                                example: "[0] * 5  # [0, 0, 0, 0, 0]",
                                description: "Repetition operator"
                            },
                            java: {
                                syntax: "Collections.nCopies(n, value)",
                                example: "List<Integer> zeros = new ArrayList<>(Collections.nCopies(5, 0));",
                                description: "Utility method για repetition"
                            },
                            tags: ["lists", "creation"]
                        }
                    ]
                },
                {
                    id: "list-operations",
                    title: "Λειτουργίες Λιστών",
                    content: [
                        {
                            id: "list-length",
                            concept: "Μήκος Λίστας",
                            python: {
                                syntax: "len(list)",
                                example: "len([1, 2, 3])  # 3",
                                description: "Built-in function"
                            },
                            java: {
                                syntax: "list.size()",
                                example: "numbers.size()  // 3",
                                description: "Instance method"
                            },
                            tags: ["lists", "operations"]
                        },
                        {
                            id: "list-indexing",
                            concept: "Πρόσβαση Στοιχείων",
                            python: {
                                syntax: "list[index]",
                                example: "numbers[0]  # πρώτο\nnumbers[-1]  # τελευταίο",
                                description: "Υποστηρίζει negative indexing"
                            },
                            java: {
                                syntax: "list.get(index)",
                                example: "numbers.get(0)  // πρώτο\nnumbers.get(numbers.size()-1)  // τελευταίο",
                                description: "Method για πρόσβαση"
                            },
                            tags: ["lists", "operations"]
                        },
                        {
                            id: "list-slicing",
                            concept: "Slicing",
                            python: {
                                syntax: "list[start:end:step]",
                                example: "numbers[1:4]  # από index 1 μέχρι 3\nnumbers[::-1]  # αντίστροφη σειρά",
                                description: "Flexible slicing"
                            },
                            java: {
                                syntax: "list.subList(start, end)",
                                example: "numbers.subList(1, 4)  // από index 1 μέχρι 3",
                                description: "SubList method (δεν υποστηρίζει step)"
                            },
                            tags: ["lists", "operations"]
                        },
                        {
                            id: "list-append",
                            concept: "Προσθήκη Στοιχείου",
                            python: {
                                syntax: "list.append(item)",
                                example: "numbers.append(6)\n# [1, 2, 3, 4, 5, 6]",
                                description: "Προσθήκη στο τέλος"
                            },
                            java: {
                                syntax: "list.add(item)",
                                example: "numbers.add(6);\n// [1, 2, 3, 4, 5, 6]",
                                description: "Προσθήκη στο τέλος"
                            },
                            tags: ["lists", "operations"]
                        },
                        {
                            id: "list-insert",
                            concept: "Εισαγωγή σε Θέση",
                            python: {
                                syntax: "list.insert(index, item)",
                                example: "numbers.insert(2, 99)\n# [1, 2, 99, 3, 4, 5]",
                                description: "Εισαγωγή σε συγκεκριμένη θέση"
                            },
                            java: {
                                syntax: "list.add(index, item)",
                                example: "numbers.add(2, 99);\n// [1, 2, 99, 3, 4, 5]",
                                description: "Εισαγωγή σε συγκεκριμένη θέση"
                            },
                            tags: ["lists", "operations"]
                        },
                        {
                            id: "list-remove",
                            concept: "Αφαίρεση Στοιχείου",
                            python: {
                                syntax: "list.remove(item) ή del list[index]",
                                example: "numbers.remove(3)  # αφαιρεί πρώτη εμφάνιση\ndel numbers[0]  # αφαιρεί από index",
                                description: "remove() για value, del για index"
                            },
                            java: {
                                syntax: "list.remove(item) ή list.remove(index)",
                                example: "numbers.remove(Integer.valueOf(3));  // by value\nnumbers.remove(0);  // by index",
                                description: "Overloaded remove method"
                            },
                            tags: ["lists", "operations"]
                        },
                        {
                            id: "list-pop",
                            concept: "Pop Στοιχείο",
                            python: {
                                syntax: "list.pop() ή list.pop(index)",
                                example: "last = numbers.pop()  # αφαιρεί και επιστρέφει τελευταίο\nfirst = numbers.pop(0)  # αφαιρεί και επιστρέφει πρώτο",
                                description: "Αφαιρεί και επιστρέφει στοιχείο"
                            },
                            java: {
                                syntax: "list.remove(index)",
                                example: "Integer last = numbers.remove(numbers.size()-1);\nInteger first = numbers.remove(0);",
                                description: "Remove επιστρέφει το αφαιρεθέν στοιχείο"
                            },
                            tags: ["lists", "operations"]
                        }
                    ]
                },
                {
                    id: "list-methods",
                    title: "Μέθοδοι Λιστών",
                    content: [
                        {
                            id: "list-extend",
                            concept: "Επέκταση Λίστας",
                            python: {
                                syntax: "list.extend(iterable) ή list += other",
                                example: "numbers.extend([7, 8, 9])\n# ή numbers += [7, 8, 9]",
                                description: "Προσθήκη πολλών στοιχείων"
                            },
                            java: {
                                syntax: "list.addAll(collection)",
                                example: "numbers.addAll(Arrays.asList(7, 8, 9));",
                                description: "Προσθήκη collection"
                            },
                            tags: ["lists", "methods"]
                        },
                        {
                            id: "list-clear",
                            concept: "Καθαρισμός Λίστας",
                            python: {
                                syntax: "list.clear()",
                                example: "numbers.clear()\n# []",
                                description: "Αφαίρεση όλων των στοιχείων"
                            },
                            java: {
                                syntax: "list.clear()",
                                example: "numbers.clear();\n// []",
                                description: "Αφαίρεση όλων των στοιχείων"
                            },
                            tags: ["lists", "methods"]
                        },
                        {
                            id: "list-count",
                            concept: "Μέτρηση Εμφανίσεων",
                            python: {
                                syntax: "list.count(item)",
                                example: "[1, 2, 2, 3].count(2)  # 2",
                                description: "Πόσες φορές εμφανίζεται το στοιχείο"
                            },
                            java: {
                                syntax: "Collections.frequency(list, item)",
                                example: "Collections.frequency(numbers, 2)  // 2",
                                description: "Static method για counting"
                            },
                            tags: ["lists", "methods"]
                        },
                        {
                            id: "list-index",
                            concept: "Εύρεση Index",
                            python: {
                                syntax: "list.index(item)",
                                example: "[1, 2, 3].index(2)  # 1",
                                description: "Index πρώτης εμφάνισης"
                            },
                            java: {
                                syntax: "list.indexOf(item)",
                                example: "numbers.indexOf(2)  // 1",
                                description: "Index πρώτης εμφάνισης (-1 αν δεν βρει)"
                            },
                            tags: ["lists", "methods"]
                        },
                        {
                            id: "list-sort",
                            concept: "Ταξινόμηση",
                            python: {
                                syntax: "list.sort() ή sorted(list)",
                                example: "numbers.sort()  # in-place\nsorted_nums = sorted(numbers)  # νέα λίστα",
                                description: "In-place ή νέα λίστα"
                            },
                            java: {
                                syntax: "Collections.sort(list) ή list.sort()",
                                example: "Collections.sort(numbers);\n// ή numbers.sort(null);",
                                description: "In-place sorting"
                            },
                            tags: ["lists", "methods"]
                        },
                        {
                            id: "list-reverse",
                            concept: "Αντιστροφή",
                            python: {
                                syntax: "list.reverse() ή list[::-1]",
                                example: "numbers.reverse()  # in-place\nreversed_nums = numbers[::-1]  # νέα λίστα",
                                description: "In-place ή νέα λίστα"
                            },
                            java: {
                                syntax: "Collections.reverse(list)",
                                example: "Collections.reverse(numbers);",
                                description: "In-place reversal"
                            },
                            tags: ["lists", "methods"]
                        }
                    ]
                },
                {
                    id: "list-comprehensions",
                    title: "List Comprehensions",
                    content: [
                        {
                            id: "basic-comprehension",
                            concept: "Βασική Comprehension",
                            python: {
                                syntax: "[expression for item in iterable]",
                                example: "squares = [x**2 for x in range(5)]\n# [0, 1, 4, 9, 16]",
                                description: "Δημιουργία λίστας με έκφραση"
                            },
                            java: {
                                syntax: "streams ή traditional loop",
                                example: "List<Integer> squares = IntStream.range(0, 5)\n    .map(x -> x * x)\n    .boxed()\n    .collect(Collectors.toList());",
                                description: "Χρήση Java Streams (Java 8+)"
                            },
                            tags: ["lists", "comprehensions"]
                        },
                        {
                            id: "conditional-comprehension",
                            concept: "Conditional Comprehension",
                            python: {
                                syntax: "[expr for item in iterable if condition]",
                                example: "evens = [x for x in range(10) if x % 2 == 0]\n# [0, 2, 4, 6, 8]",
                                description: "Φιλτράρισμα με condition"
                            },
                            java: {
                                syntax: "streams με filter",
                                example: "List<Integer> evens = IntStream.range(0, 10)\n    .filter(x -> x % 2 == 0)\n    .boxed()\n    .collect(Collectors.toList());",
                                description: "Χρήση filter() method"
                            },
                            tags: ["lists", "comprehensions"]
                        }
                    ]
                }
            ]
        },
        {
            id: "functions",
            title: "Συναρτήσεις",
            icon: "⚡",
            subsections: [
                {
                    id: "function-definition",
                    title: "Ορισμός Συναρτήσεων",
                    content: [
                        {
                            id: "basic-function",
                            concept: "Βασική Συνάρτηση",
                            python: {
                                syntax: "def function_name(parameters):\n    # code\n    return value",
                                example: "def greet(name):\n    return f\"Hello, {name}!\"",
                                description: "def keyword για ορισμό"
                            },
                            java: {
                                syntax: "returnType methodName(parameters) {\n    // code\n    return value;\n}",
                                example: "public static String greet(String name) {\n    return \"Hello, \" + name + \"!\";\n}",
                                description: "Access modifier, return type, method name"
                            },
                            tags: ["functions", "definition"]
                        },
                        {
                            id: "function-no-return",
                            concept: "Συνάρτηση χωρίς Return",
                            python: {
                                syntax: "def function_name(parameters):\n    # code",
                                example: "def print_info(name, age):\n    print(f\"Name: {name}, Age: {age}\")",
                                description: "Επιστρέφει None αν δεν υπάρχει return"
                            },
                            java: {
                                syntax: "void methodName(parameters) {\n    // code\n}",
                                example: "public static void printInfo(String name, int age) {\n    System.out.println(\"Name: \" + name + \", Age: \" + age);\n}",
                                description: "void return type"
                            },
                            tags: ["functions", "definition"]
                        }
                    ]
                },
                {
                    id: "function-parameters",
                    title: "Παράμετροι Συναρτήσεων",
                    content: [
                        {
                            id: "default-parameters",
                            concept: "Default Parameters",
                            python: {
                                syntax: "def func(param1, param2=default_value):",
                                example: "def greet(name, greeting=\"Hello\"):\n    return f\"{greeting}, {name}!\"",
                                description: "Default τιμές για παραμέτρους"
                            },
                            java: {
                                syntax: "# Δεν υποστηρίζει default parameters",
                                example: "// Method overloading για προσομοίωση\npublic static String greet(String name) {\n    return greet(name, \"Hello\");\n}\npublic static String greet(String name, String greeting) {\n    return greeting + \", \" + name + \"!\";\n}",
                                description: "Method overloading για default behavior"
                            },
                            tags: ["functions", "parameters"]
                        },
                        {
                            id: "keyword-arguments",
                            concept: "Keyword Arguments",
                            python: {
                                syntax: "function(param1=value1, param2=value2)",
                                example: "greet(greeting=\"Hi\", name=\"Alice\")",
                                description: "Named parameters για ευκρίνεια"
                            },
                            java: {
                                syntax: "# Δεν υποστηρίζει keyword arguments",
                                example: "// Χρήση Builder pattern ή parameter objects\ngreet(\"Alice\", \"Hi\");  // positional only",
                                description: "Μόνο positional arguments"
                            },
                            tags: ["functions", "parameters"]
                        },
                        {
                            id: "variable-arguments",
                            concept: "Variable Arguments",
                            python: {
                                syntax: "def func(*args, **kwargs):",
                                example: "def sum_all(*numbers):\n    return sum(numbers)\n\nsum_all(1, 2, 3, 4)  # 10",
                                description: "*args για positional, **kwargs για keyword"
                            },
                            java: {
                                syntax: "returnType method(Type... args)",
                                example: "public static int sumAll(int... numbers) {\n    int sum = 0;\n    for (int num : numbers) sum += num;\n    return sum;\n}",
                                description: "Varargs με ... syntax"
                            },
                            tags: ["functions", "parameters"]
                        }
                    ]
                },
                {
                    id: "function-calling",
                    title: "Κλήση Συναρτήσεων",
                    content: [
                        {
                            id: "function-call",
                            concept: "Βασική Κλήση",
                            python: {
                                syntax: "function_name(arguments)",
                                example: "result = greet(\"Alice\")\nprint(result)  # Hello, Alice!",
                                description: "Κλήση με παράμετρους"
                            },
                            java: {
                                syntax: "methodName(arguments)",
                                example: "String result = greet(\"Alice\");\nSystem.out.println(result);  // Hello, Alice!",
                                description: "Static method call"
                            },
                            tags: ["functions", "calling"]
                        },
                        {
                            id: "return-values",
                            concept: "Return Values",
                            python: {
                                syntax: "return value ή return",
                                example: "def calculate(a, b):\n    if b == 0:\n        return None\n    return a / b",
                                description: "Επιστροφή τιμής ή None"
                            },
                            java: {
                                syntax: "return value;",
                                example: "public static Double calculate(int a, int b) {\n    if (b == 0) {\n        return null;\n    }\n    return (double) a / b;\n}",
                                description: "Typed return values"
                            },
                            tags: ["functions", "return"]
                        },
                        {
                            id: "multiple-return",
                            concept: "Multiple Return Values",
                            python: {
                                syntax: "return value1, value2",
                                example: "def get_name_age():\n    return \"Alice\", 25\n\nname, age = get_name_age()",
                                description: "Tuple unpacking για πολλαπλές τιμές"
                            },
                            java: {
                                syntax: "# Χρήση custom class ή array",
                                example: "// Return array ή custom object\npublic static String[] getNameAge() {\n    return new String[]{\"Alice\", \"25\"};\n}\n// ή Map, Pair, custom class",
                                description: "Arrays, Objects ή Collections"
                            },
                            tags: ["functions", "return"]
                        }
                    ]
                },
                {
                    id: "function-scope",
                    title: "Scope Συναρτήσεων",
                    content: [
                        {
                            id: "local-variables",
                            concept: "Τοπικές Μεταβλητές",
                            python: {
                                syntax: "# Μεταβλητές μέσα στη συνάρτηση",
                                example: "def func():\n    local_var = 10  # τοπική\n    return local_var",
                                description: "Ορατές μόνο μέσα στη συνάρτηση"
                            },
                            java: {
                                syntax: "// Μεταβλητές μέσα στη μέθοδο",
                                example: "public static int func() {\n    int localVar = 10;  // τοπική\n    return localVar;\n}",
                                description: "Block scope - ορατές στο block"
                            },
                            tags: ["functions", "scope"]
                        },
                        {
                            id: "global-variables",
                            concept: "Καθολικές Μεταβλητές",
                            python: {
                                syntax: "global variable_name",
                                example: "counter = 0  # global\n\ndef increment():\n    global counter\n    counter += 1",
                                description: "Χρήση global keyword για τροποποίηση"
                            },
                            java: {
                                syntax: "static variables",
                                example: "static int counter = 0;  // class variable\n\npublic static void increment() {\n    counter++;\n}",
                                description: "Static fields για shared state"
                            },
                            tags: ["functions", "scope"]
                        }
                    ]
                }
            ]
        },
        {
            id: "file-handling",
            title: "Διαχείριση Αρχείων",
            icon: "📁",
            subsections: [
                {
                    id: "file-opening",
                    title: "Άνοιγμα Αρχείων",
                    content: [
                        {
                            id: "open-file",
                            concept: "Άνοιγμα Αρχείου",
                            python: {
                                syntax: "open(filename, mode)",
                                example: "file = open('data.txt', 'r')  # read mode\nfile = open('output.txt', 'w')  # write mode",
                                description: "Built-in open() function"
                            },
                            java: {
                                syntax: "new FileReader/FileWriter",
                                example: "FileReader reader = new FileReader(\"data.txt\");\nFileWriter writer = new FileWriter(\"output.txt\");",
                                description: "File I/O classes"
                            },
                            tags: ["files", "opening"]
                        },
                        {
                            id: "file-modes",
                            concept: "Λειτουργίες Αρχείων",
                            python: {
                                syntax: "'r', 'w', 'a', 'r+', 'rb', 'wb'",
                                example: "open('file.txt', 'r')   # read\nopen('file.txt', 'w')   # write\nopen('file.txt', 'a')   # append",
                                description: "Διαφορετικοί τρόποι ανοίγματος"
                            },
                            java: {
                                syntax: "Different constructors",
                                example: "new FileReader(\"file.txt\");  // read\nnew FileWriter(\"file.txt\");  // write\nnew FileWriter(\"file.txt\", true);  // append",
                                description: "Constructor parameters για mode"
                            },
                            tags: ["files", "modes"]
                        }
                    ]
                },
                {
                    id: "file-reading",
                    title: "Ανάγνωση Αρχείων",
                    content: [
                        {
                            id: "read-all",
                            concept: "Ανάγνωση Όλου του Αρχείου",
                            python: {
                                syntax: "file.read()",
                                example: "with open('data.txt', 'r') as file:\n    content = file.read()\n    print(content)",
                                description: "Διαβάζει όλο το περιεχόμενο"
                            },
                            java: {
                                syntax: "Files.readAllLines() ή Scanner",
                                example: "List<String> lines = Files.readAllLines(Paths.get(\"data.txt\"));\n// ή Scanner scanner = new Scanner(new File(\"data.txt\"));",
                                description: "Java NIO ή Scanner class"
                            },
                            tags: ["files", "reading"]
                        },
                        {
                            id: "read-lines",
                            concept: "Ανάγνωση Γραμμή προς Γραμμή",
                            python: {
                                syntax: "for line in file:",
                                example: "with open('data.txt', 'r') as file:\n    for line in file:\n        print(line.strip())",
                                description: "Iterator protocol για γραμμές"
                            },
                            java: {
                                syntax: "BufferedReader.readLine()",
                                example: "try (BufferedReader reader = new BufferedReader(new FileReader(\"data.txt\"))) {\n    String line;\n    while ((line = reader.readLine()) != null) {\n        System.out.println(line);\n    }\n}",
                                description: "BufferedReader για αποδοτική ανάγνωση"
                            },
                            tags: ["files", "reading"]
                        },
                        {
                            id: "read-specific",
                            concept: "Ανάγνωση Συγκεκριμένου Μεγέθους",
                            python: {
                                syntax: "file.read(n)",
                                example: "with open('data.txt', 'r') as file:\n    chunk = file.read(100)  # πρώτοι 100 χαρακτήρες",
                                description: "Ανάγνωση n χαρακτήρων"
                            },
                            java: {
                                syntax: "read(char[] buffer)",
                                example: "char[] buffer = new char[100];\nint charsRead = reader.read(buffer);",
                                description: "Ανάγνωση σε buffer"
                            },
                            tags: ["files", "reading"]
                        }
                    ]
                },
                {
                    id: "file-writing",
                    title: "Εγγραφή Αρχείων",
                    content: [
                        {
                            id: "write-text",
                            concept: "Εγγραφή Κειμένου",
                            python: {
                                syntax: "file.write(text)",
                                example: "with open('output.txt', 'w') as file:\n    file.write('Hello World\\n')\n    file.write('Second line\\n')",
                                description: "Εγγραφή string στο αρχείο"
                            },
                            java: {
                                syntax: "writer.write(text)",
                                example: "try (FileWriter writer = new FileWriter(\"output.txt\")) {\n    writer.write(\"Hello World\\n\");\n    writer.write(\"Second line\\n\");\n}",
                                description: "FileWriter για εγγραφή"
                            },
                            tags: ["files", "writing"]
                        },
                        {
                            id: "write-lines",
                            concept: "Εγγραφή Πολλών Γραμμών",
                            python: {
                                syntax: "file.writelines(lines)",
                                example: "lines = ['Line 1\\n', 'Line 2\\n', 'Line 3\\n']\nwith open('output.txt', 'w') as file:\n    file.writelines(lines)",
                                description: "Εγγραφή λίστας γραμμών"
                            },
                            java: {
                                syntax: "Files.write() ή loop",
                                example: "List<String> lines = Arrays.asList(\"Line 1\", \"Line 2\", \"Line 3\");\nFiles.write(Paths.get(\"output.txt\"), lines);",
                                description: "Java NIO για πολλές γραμμές"
                            },
                            tags: ["files", "writing"]
                        }
                    ]
                },
                {
                    id: "file-context",
                    title: "Context Management",
                    content: [
                        {
                            id: "with-statement",
                            concept: "With Statement",
                            python: {
                                syntax: "with open(filename, mode) as file:",
                                example: "with open('data.txt', 'r') as file:\n    content = file.read()\n# Αρχείο κλείνει αυτόματα",
                                description: "Αυτόματο κλείσιμο αρχείου"
                            },
                            java: {
                                syntax: "try-with-resources",
                                example: "try (FileReader reader = new FileReader(\"data.txt\")) {\n    // χρήση reader\n} // Αρχείο κλείνει αυτόματα",
                                description: "Automatic resource management"
                            },
                            tags: ["files", "context"]
                        }
                    ]
                }
            ]
        },
        {
            id: "exceptions",
            title: "Εξαιρέσεις",
            icon: "⚠️",
            subsections: [
                {
                    id: "exception-handling",
                    title: "Χειρισμός Εξαιρέσεων",
                    content: [
                        {
                            id: "try-except",
                            concept: "Try-Except",
                            python: {
                                syntax: "try:\n    # κώδικας\nexcept ExceptionType:\n    # διαχείριση",
                                example: "try:\n    result = 10 / 0\nexcept ZeroDivisionError:\n    print(\"Cannot divide by zero!\")",
                                description: "Βασική δομή χειρισμού εξαιρέσεων"
                            },
                            java: {
                                syntax: "try {\n    // κώδικας\n} catch (ExceptionType e) {\n    // διαχείριση\n}",
                                example: "try {\n    int result = 10 / 0;\n} catch (ArithmeticException e) {\n    System.out.println(\"Cannot divide by zero!\");\n}",
                                description: "Try-catch blocks"
                            },
                            tags: ["exceptions", "handling"]
                        },
                        {
                            id: "multiple-exceptions",
                            concept: "Πολλαπλές Εξαιρέσεις",
                            python: {
                                syntax: "except (Type1, Type2):\n# ή\nexcept Type1:\nexcept Type2:",
                                example: "try:\n    # κώδικας\nexcept (ValueError, TypeError):\n    print(\"Value or Type error!\")\nexcept Exception:\n    print(\"Other error!\")",
                                description: "Χειρισμός πολλών τύπων εξαιρέσεων"
                            },
                            java: {
                                syntax: "catch (Type1 | Type2 e)\n// ή πολλά catch blocks",
                                example: "try {\n    // κώδικας\n} catch (NumberFormatException | IllegalArgumentException e) {\n    System.out.println(\"Input error!\");\n} catch (Exception e) {\n    System.out.println(\"Other error!\");\n}",
                                description: "Multi-catch ή multiple catch blocks"
                            },
                            tags: ["exceptions", "handling"]
                        },
                        {
                            id: "finally-block",
                            concept: "Finally Block",
                            python: {
                                syntax: "try:\n    # κώδικας\nexcept:\n    # διαχείριση\nfinally:\n    # καθαρισμός",
                                example: "try:\n    file = open('data.txt')\n    # εργασία με αρχείο\nexcept IOError:\n    print(\"File error!\")\nfinally:\n    file.close()  # πάντα εκτελείται",
                                description: "Κώδικας που εκτελείται πάντα"
                            },
                            java: {
                                syntax: "try {\n    // κώδικας\n} catch (Exception e) {\n    // διαχείριση\n} finally {\n    // καθαρισμός\n}",
                                example: "FileReader reader = null;\ntry {\n    reader = new FileReader(\"data.txt\");\n    // εργασία με αρχείο\n} catch (IOException e) {\n    System.out.println(\"File error!\");\n} finally {\n    if (reader != null) reader.close();\n}",
                                description: "Finally block για cleanup"
                            },
                            tags: ["exceptions", "handling"]
                        }
                    ]
                },
                {
                    id: "exception-types",
                    title: "Τύποι Εξαιρέσεων",
                    content: [
                        {
                            id: "common-exceptions",
                            concept: "Συνήθεις Εξαιρέσεις",
                            python: {
                                syntax: "ValueError, TypeError, IndexError, KeyError",
                                example: "# ValueError: int('abc')\n# TypeError: 'str' + 5\n# IndexError: list[10] (out of bounds)\n# KeyError: dict['missing_key']",
                                description: "Συχνότερες built-in εξαιρέσεις"
                            },
                            java: {
                                syntax: "IllegalArgumentException, ClassCastException, IndexOutOfBoundsException",
                                example: "// IllegalArgumentException: invalid parameter\n// ClassCastException: wrong cast\n// IndexOutOfBoundsException: array/list bounds\n// NullPointerException: null reference",
                                description: "Συχνότερες Java εξαιρέσεις"
                            },
                            tags: ["exceptions", "types"]
                        },
                        {
                            id: "custom-exceptions",
                            concept: "Προσαρμοσμένες Εξαιρέσεις",
                            python: {
                                syntax: "class CustomError(Exception):\n    pass",
                                example: "class ValidationError(Exception):\n    def __init__(self, message):\n        self.message = message\n        super().__init__(self.message)\n\nraise ValidationError(\"Invalid input!\")",
                                description: "Δημιουργία custom exception classes"
                            },
                            java: {
                                syntax: "class CustomException extends Exception",
                                example: "public class ValidationException extends Exception {\n    public ValidationException(String message) {\n        super(message);\n    }\n}\n\nthrow new ValidationException(\"Invalid input!\");",
                                description: "Custom exception classes"
                            },
                            tags: ["exceptions", "custom"]
                        }
                    ]
                },
                {
                    id: "raising-exceptions",
                    title: "Δημιουργία Εξαιρέσεων",
                    content: [
                        {
                            id: "raise-exception",
                            concept: "Raise/Throw Exception",
                            python: {
                                syntax: "raise ExceptionType(message)",
                                example: "def divide(a, b):\n    if b == 0:\n        raise ValueError(\"Cannot divide by zero!\")\n    return a / b",
                                description: "Δημιουργία εξαίρεσης με raise"
                            },
                            java: {
                                syntax: "throw new ExceptionType(message)",
                                example: "public static double divide(int a, int b) throws ArithmeticException {\n    if (b == 0) {\n        throw new ArithmeticException(\"Cannot divide by zero!\");\n    }\n    return (double) a / b;\n}",
                                description: "Δημιουργία εξαίρεσης με throw"
                            },
                            tags: ["exceptions", "raising"]
                        }
                    ]
                }
            ]
        }
    ],
    en: [
        // English version would follow the same structure
        // For brevity, adding just the basic structure
        {
            id: "basic-types",
            title: "Basic Data Types",
            icon: "🔤",
            subsections: [
                {
                    id: "primitive-types",
                    title: "Primitive Types",
                    content: [
                        {
                            id: "integer",
                            concept: "Integer Number",
                            python: {
                                syntax: "x = 42",
                                example: "age = 25",
                                description: "Dynamic type, unlimited size"
                            },
                            java: {
                                syntax: "int x = 42;",
                                example: "int age = 25;",
                                description: "32-bit signed integer (-2³¹ to 2³¹-1)"
                            },
                            tags: ["basic", "numbers"],
                            notes: "In Python, integers can be of unlimited size"
                        }
                        // ... rest of English content would follow same pattern
                    ]
                }
            ]
        }
        // ... other English sections would follow
    ]
};

// Helper function
export const getComparativeData = (lang: "el" | "en"): ComparativeSection[] => {
    return comparativeCheatSheetData[lang];
};
