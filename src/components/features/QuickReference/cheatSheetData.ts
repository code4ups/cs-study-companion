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
        },
        // Ενότητα 12: Πλειάδες & Σύνολα (Tuples & Sets)
        {
            id: "tuples-sets",
            title: "Πλειάδες & Σύνολα (Tuples & Sets)",
            icon: "📦",
            subsections: [
                {
                    id: "tuples-basics",
                    title: "Πλειάδες (Tuples)",
                    content: [
                        {
                            id: "tuple-creation",
                            concept: "Δημιουργία Πλειάδας (Tuple Creation)",
                            python: {
                                syntax: "t = (item1, item2, item3)",
                                example: "coords = (12, 25, 'Νίκος', True)\nempty = tuple()",
                                description: "Μη μεταλλάξιμη ακολουθία στοιχείων με παρενθέσεις"
                            },
                            java: {
                                syntax: "// Δεν υπάρχει built-in tuple",
                                example: "// Χρήση custom class ή records (Java 14+)\nrecord Coords(int x, int y, String name, boolean flag) {}",
                                description: "Χρήση records ή custom classes για tuple-like δομές"
                            },
                            tags: ["tuples", "creation"]
                        },
                        {
                            id: "tuple-single",
                            concept: "Μονοστοιχεία Πλειάδα (Single Element Tuple)",
                            python: {
                                syntax: "t = (item,)  # Κόμμα απαραίτητο!",
                                example: "single = (42,)\nprint(type(single))  # <class 'tuple'>",
                                description: "⚠️ Το κόμμα είναι απαραίτητο για single-element tuple"
                            },
                            java: {
                                syntax: "// Δεν υπάρχει αντίστοιχο",
                                example: "// Χρήση wrapper class ή array\nInteger[] single = {42};",
                                description: "Χρήση arrays ή wrapper objects"
                            },
                            tags: ["tuples", "single"]
                        },
                        {
                            id: "tuple-indexing",
                            concept: "Πρόσβαση Στοιχείων Πλειάδας (Tuple Indexing)",
                            python: {
                                syntax: "tuple[index]",
                                example: "coords = (10, 20, 'test')\nprint(coords[0])  # 10\nprint(coords[-1])  # 'test'",
                                description: "Υποστηρίζει positive και negative indexing"
                            },
                            java: {
                                syntax: "record.field() ή array[index]",
                                example: "// Με record\nCoords c = new Coords(10, 20, \"test\", true);\nSystem.out.println(c.x());  // 10",
                                description: "Πρόσβαση μέσω accessor methods ή array indexing"
                            },
                            tags: ["tuples", "indexing"]
                        },
                        {
                            id: "tuple-unpacking",
                            concept: "Αποσυσκευασία Πλειάδας (Tuple Unpacking)",
                            python: {
                                syntax: "a, b, c = tuple",
                                example: "point = (10, 20)\nx, y = point\nprint(f\"x={x}, y={y}\")",
                                description: "✅ Εύκολη ανάθεση πολλαπλών μεταβλητών ταυτόχρονα"
                            },
                            java: {
                                syntax: "// Manual assignment",
                                example: "// Χρήση accessor methods\nint x = point.x();\nint y = point.y();",
                                description: "Manual assignment για κάθε μεταβλητή"
                            },
                            tags: ["tuples", "unpacking"]
                        },
                        {
                            id: "tuple-methods",
                            concept: "Μέθοδοι Πλειάδων (Tuple Methods)",
                            python: {
                                syntax: "tuple.count(item), tuple.index(item)",
                                example: "data = (1, 2, 2, 3, 2)\nprint(data.count(2))  # 3\nprint(data.index(2))  # 1",
                                description: "🧠 Μόνο δύο μέθοδοι λόγω immutability"
                            },
                            java: {
                                syntax: "Collections.frequency(), Arrays utilities",
                                example: "List<Integer> list = Arrays.asList(1, 2, 2, 3, 2);\nint count = Collections.frequency(list, 2);  // 3",
                                description: "Χρήση Collections utilities για παρόμοια λειτουργικότητα"
                            },
                            tags: ["tuples", "methods"]
                        }
                    ]
                },
                {
                    id: "sets-basics",
                    title: "Σύνολα (Sets)",
                    content: [
                        {
                            id: "set-creation",
                            concept: "Δημιουργία Συνόλου (Set Creation)",
                            python: {
                                syntax: "s = {item1, item2} ή set(iterable)",
                                example: "numbers = {1, 2, 3, 4}\nfrom_list = set([1, 2, 2, 3])  # {1, 2, 3}\nempty = set()  # ⚠️ ΟΧΙ {}!",
                                description: "⚠️ Κενό σύνολο: set() ΟΧΙ {} (που είναι dictionary)"
                            },
                            java: {
                                syntax: "new HashSet<>(Arrays.asList(...))",
                                example: "Set<Integer> numbers = new HashSet<>(Arrays.asList(1, 2, 3, 4));\nSet<Integer> empty = new HashSet<>();",
                                description: "HashSet για unordered, LinkedHashSet για insertion order"
                            },
                            tags: ["sets", "creation"]
                        },
                        {
                            id: "set-add-remove",
                            concept: "Προσθήκη/Αφαίρεση Στοιχείων (Add/Remove Elements)",
                            python: {
                                syntax: "set.add(item), set.remove(item), set.discard(item)",
                                example: "s = {1, 2, 3}\ns.add(4)  # {1, 2, 3, 4}\ns.remove(2)  # Πετάει KeyError αν δεν υπάρχει\ns.discard(5)  # Δεν πετάει error",
                                description: "⚠️ remove() πετάει KeyError, discard() δεν πετάει"
                            },
                            java: {
                                syntax: "set.add(item), set.remove(item)",
                                example: "Set<Integer> s = new HashSet<>(Arrays.asList(1, 2, 3));\ns.add(4);\nboolean removed = s.remove(2);  // true αν υπήρχε",
                                description: "remove() επιστρέφει boolean, δεν πετάει exception"
                            },
                            tags: ["sets", "modification"]
                        },
                        {
                            id: "set-operations",
                            concept: "Πράξεις Συνόλων (Set Operations)",
                            python: {
                                syntax: "set1 | set2, set1 & set2, set1 - set2, set1 ^ set2",
                                example: "a = {1, 2, 3}\nb = {3, 4, 5}\nprint(a | b)  # {1, 2, 3, 4, 5} ένωση\nprint(a & b)  # {3} τομή\nprint(a - b)  # {1, 2} διαφορά",
                                description: "⚡ Γρήγοροι operators για μαθηματικές πράξεις συνόλων"
                            },
                            java: {
                                syntax: "Collections utilities + manual operations",
                                example: "Set<Integer> union = new HashSet<>(a);\nunion.addAll(b);  // Ένωση\nSet<Integer> intersection = new HashSet<>(a);\nintersection.retainAll(b);  // Τομή",
                                description: "Manual operations με Collections methods"
                            },
                            tags: ["sets", "operations"]
                        },
                        {
                            id: "set-methods",
                            concept: "Μέθοδοι Συνόλων (Set Methods)",
                            python: {
                                syntax: "set.union(), set.intersection(), set.difference()",
                                example: "a = {1, 2, 3}\nb = {3, 4, 5}\nprint(a.union(b))  # {1, 2, 3, 4, 5}\nprint(a.intersection(b))  # {3}\nprint(a.issubset(b))  # False",
                                description: "Εναλλακτικά των operators με method-based syntax"
                            },
                            java: {
                                syntax: "Manual implementation με Collections",
                                example: "// Custom utility methods\npublic static <T> Set<T> union(Set<T> a, Set<T> b) {\n    Set<T> result = new HashSet<>(a);\n    result.addAll(b);\n    return result;\n}",
                                description: "Απαιτείται custom implementation για set operations"
                            },
                            tags: ["sets", "methods"]
                        },
                        {
                            id: "set-comprehension",
                            concept: "Συμπερίληψη Συνόλων (Set Comprehension)",
                            python: {
                                syntax: "{expression for item in iterable if condition}",
                                example: "squares = {x**2 for x in range(10)}\neven_squares = {x**2 for x in range(10) if x % 2 == 0}\nprint(even_squares)  # {0, 4, 16, 36, 64}",
                                description: "⚡ Functional programming approach για δημιουργία συνόλων"
                            },
                            java: {
                                syntax: "Stream API",
                                example: "Set<Integer> squares = IntStream.range(0, 10)\n    .map(x -> x * x)\n    .boxed()\n    .collect(Collectors.toSet());",
                                description: "Java 8+ Stream API για παρόμοια λειτουργικότητα"
                            },
                            tags: ["sets", "comprehension"]
                        }
                    ]
                },
                {
                    id: "immutable-sets",
                    title: "Αμετάβλητα Σύνολα (Frozen Sets)",
                    content: [
                        {
                            id: "frozenset-creation",
                            concept: "Δημιουργία Frozen Set",
                            python: {
                                syntax: "frozenset(iterable)",
                                example: "fs = frozenset([1, 2, 3, 4])\nprint(type(fs))  # <class 'frozenset'>\n# fs.add(5)  # AttributeError!",
                                description: "🔒 Immutable version του set - χρήσιμο ως dictionary key"
                            },
                            java: {
                                syntax: "Set.of() (Java 9+) ή Collections.unmodifiableSet()",
                                example: "Set<Integer> immutable = Set.of(1, 2, 3, 4);\n// immutable.add(5);  // UnsupportedOperationException",
                                description: "Java 9+ Set.of() για immutable sets"
                            },
                            tags: ["sets", "immutable"],
                            notes: "Το frozenset μπορεί να χρησιμοποιηθεί ως κλειδί σε dictionary"
                        },
                        {
                            id: "frozenset-operations",
                            concept: "Πράξεις με Frozen Sets",
                            python: {
                                syntax: "Όλες οι read-only πράξεις συνόλων",
                                example: "fs1 = frozenset([1, 2, 3])\nfs2 = frozenset([3, 4, 5])\nresult = fs1 | fs2  # frozenset({1, 2, 3, 4, 5})",
                                description: "✅ Υποστηρίζει όλες τις πράξεις εκτός από τροποποιήσεις"
                            },
                            java: {
                                syntax: "Immutable set operations",
                                example: "Set<Integer> fs1 = Set.of(1, 2, 3);\n// Manual operations χωρίς τροποποίηση",
                                description: "Read-only operations με immutable collections"
                            },
                            tags: ["sets", "immutable", "operations"]
                        }
                    ]
                }
            ]
        },
        {
            id: "dictionaries-comprehensive",
            title: "Λεξικά (Dictionaries)",
            icon: "📚",
            subsections: [
                {
                    id: "dict-creation",
                    title: "Δημιουργία Λεξικών (Dictionary Creation)",
                    content: [
                        {
                            id: "dict-literals",
                            concept: "Δημιουργία με Literals",
                            python: {
                                syntax: "d = {'key': 'value', 'key2': 'value2'}",
                                example: "student = {'name': 'Αλέξανδρος', 'age': 20, 'grades': [18, 19, 17]}\nempty = {}  # Κενό λεξικό",
                                description: "Καλλυγραφικές άγκυλες {} με ζεύγη key:value"
                            },
                            java: {
                                syntax: "new HashMap<>() με put() methods",
                                example: "Map<String, Object> student = new HashMap<>();\nstudent.put(\"name\", \"Αλέξανδρος\");\nstudent.put(\"age\", 20);",
                                description: "HashMap για unordered, LinkedHashMap για insertion order"
                            },
                            tags: ["dictionaries", "creation"]
                        },
                        {
                            id: "dict-constructor",
                            concept: "Δημιουργία με Constructor",
                            python: {
                                syntax: "dict(key1=value1, key2=value2)",
                                example: "student = dict(name='Μαρία', age=19, city='Αθήνα')\nfrom_pairs = dict([('a', 1), ('b', 2)])",
                                description: "dict() constructor με keyword arguments ή tuples"
                            },
                            java: {
                                syntax: "Map.of() (Java 9+) ή constructor + put()",
                                example: "Map<String, String> student = Map.of(\n    \"name\", \"Μαρία\",\n    \"city\", \"Αθήνα\"\n);",
                                description: "Java 9+ Map.of() για immutable maps"
                            },
                            tags: ["dictionaries", "creation"]
                        },
                        {
                            id: "dict-comprehension",
                            concept: "Συμπερίληψη Λεξικών (Dict Comprehension)",
                            python: {
                                syntax: "{key_expr: value_expr for item in iterable}",
                                example: "squares = {x: x**2 for x in range(5)}\nfiltered = {k: v for k, v in data.items() if v > 10}\nprint(squares)  # {0: 0, 1: 1, 2: 4, 3: 9, 4: 16}",
                                description: "⚡ Functional approach για δημιουργία λεξικών"
                            },
                            java: {
                                syntax: "Stream API με Collectors.toMap()",
                                example: "Map<Integer, Integer> squares = IntStream.range(0, 5)\n    .boxed()\n    .collect(Collectors.toMap(\n        x -> x,\n        x -> x * x\n    ));",
                                description: "Java 8+ Streams για παρόμοια λειτουργικότητα"
                            },
                            tags: ["dictionaries", "comprehension"]
                        }
                    ]
                },
                {
                    id: "dict-access",
                    title: "Πρόσβαση σε Λεξικά (Dictionary Access)",
                    content: [
                        {
                            id: "dict-indexing",
                            concept: "Πρόσβαση με Κλειδιά (Key Access)",
                            python: {
                                syntax: "dict[key] ή dict.get(key, default)",
                                example: "student = {'name': 'Νίκος', 'age': 22}\nprint(student['name'])  # 'Νίκος'\nprint(student.get('city', 'Αθήνα'))  # 'Αθήνα' (default)",
                                description: "⚠️ [] πετάει KeyError, get() επιστρέφει default"
                            },
                            java: {
                                syntax: "map.get(key) ή map.getOrDefault(key, default)",
                                example: "Map<String, Object> student = Map.of(\"name\", \"Νίκος\", \"age\", 22);\nString name = (String) student.get(\"name\");\nString city = (String) student.getOrDefault(\"city\", \"Αθήνα\");",
                                description: "get() επιστρέφει null αν δεν υπάρχει το κλειδί"
                            },
                            tags: ["dictionaries", "access"]
                        },
                        {
                            id: "dict-modification",
                            concept: "Τροποποίηση Τιμών (Value Modification)",
                            python: {
                                syntax: "dict[key] = new_value",
                                example: "student['age'] = 23  # Ενημέρωση υπάρχοντος\nstudent['city'] = 'Θεσσαλονίκη'  # Προσθήκη νέου κλειδιού",
                                description: "Αυτόματη προσθήκη νέων κλειδιών αν δεν υπάρχουν"
                            },
                            java: {
                                syntax: "map.put(key, value)",
                                example: "Map<String, Object> student = new HashMap<>();\nstudent.put(\"age\", 23);  // Ενημέρωση\nstudent.put(\"city\", \"Θεσσαλονίκη\");  // Προσθήκη",
                                description: "put() για ενημέρωση ή προσθήκη"
                            },
                            tags: ["dictionaries", "modification"]
                        },
                        {
                            id: "dict-membership",
                            concept: "Έλεγχος Ύπαρξης (Membership Testing)",
                            python: {
                                syntax: "key in dict, key not in dict",
                                example: "if 'email' in student:\n    print(student['email'])\nelse:\n    print('Δεν υπάρχει email')",
                                description: "✅ Γρήγορος έλεγχος ύπαρξης κλειδιού"
                            },
                            java: {
                                syntax: "map.containsKey(key)",
                                example: "if (student.containsKey(\"email\")) {\n    System.out.println(student.get(\"email\"));\n} else {\n    System.out.println(\"Δεν υπάρχει email\");\n}",
                                description: "containsKey() για έλεγχο ύπαρξης κλειδιού"
                            },
                            tags: ["dictionaries", "membership"]
                        }
                    ]
                },
                {
                    id: "dict-methods",
                    title: "Μέθοδοι Λεξικών (Dictionary Methods)",
                    content: [
                        {
                            id: "dict-keys-values",
                            concept: "Κλειδιά και Τιμές (Keys and Values)",
                            python: {
                                syntax: "dict.keys(), dict.values(), dict.items()",
                                example: "student = {'name': 'Άννα', 'age': 21, 'city': 'Πάτρα'}\nprint(list(student.keys()))    # ['name', 'age', 'city']\nprint(list(student.values()))  # ['Άννα', 21, 'Πάτρα']\nprint(list(student.items()))   # [('name', 'Άννα'), ...]",
                                description: "🧠 Επιστρέφουν view objects, όχι λίστες"
                            },
                            java: {
                                syntax: "map.keySet(), map.values(), map.entrySet()",
                                example: "Set<String> keys = student.keySet();\nCollection<Object> values = student.values();\nSet<Map.Entry<String, Object>> entries = student.entrySet();",
                                description: "Set για κλειδιά, Collection για τιμές, Set για entries"
                            },
                            tags: ["dictionaries", "methods", "iteration"]
                        },
                        {
                            id: "dict-update",
                            concept: "Ενημέρωση Λεξικού (Dictionary Update)",
                            python: {
                                syntax: "dict.update(other_dict)",
                                example: "student.update({'grade': 'A', 'age': 22})\n# Ενημερώνει existing keys και προσθέτει νέα",
                                description: "Συγχωνεύει λεξικά, overwriting υπάρχοντα κλειδιά"
                            },
                            java: {
                                syntax: "map.putAll(other_map)",
                                example: "Map<String, Object> updates = Map.of(\"grade\", \"A\", \"age\", 22);\nstudent.putAll(updates);",
                                description: "putAll() για bulk updates"
                            },
                            tags: ["dictionaries", "methods", "update"]
                        },
                        {
                            id: "dict-pop",
                            concept: "Αφαίρεση με Επιστροφή (Pop Operation)",
                            python: {
                                syntax: "dict.pop(key, default), dict.popitem()",
                                example: "age = student.pop('age', 0)  # Αφαιρεί και επιστρέφει\nlast_item = student.popitem()  # Αφαιρεί τυχαίο ζεύγος\nprint(f\"Removed age: {age}\")",
                                description: "pop() για συγκεκριμένο κλειδί, popitem() για τυχαίο"
                            },
                            java: {
                                syntax: "map.remove(key)",
                                example: "Object age = student.remove(\"age\");\n// Δεν υπάρχει popitem() equivalent",
                                description: "remove() επιστρέφει την τιμή που αφαιρέθηκε"
                            },
                            tags: ["dictionaries", "methods", "removal"]
                        },
                        {
                            id: "dict-setdefault",
                            concept: "Ρύθμιση Προεπιλογής (Set Default)",
                            python: {
                                syntax: "dict.setdefault(key, default_value)",
                                example: "student.setdefault('hobbies', []).append('ποδόσφαιρο')\n# Αν δεν υπάρχει 'hobbies', δημιουργεί κενή λίστα",
                                description: "✅ Ιδιωματική Python για lazy initialization"
                            },
                            java: {
                                syntax: "map.computeIfAbsent(key, function)",
                                example: "student.computeIfAbsent(\"hobbies\", k -> new ArrayList<>());\n((List<String>) student.get(\"hobbies\")).add(\"ποδόσφαιρο\");",
                                description: "Java 8+ computeIfAbsent() για lazy initialization"
                            },
                            tags: ["dictionaries", "methods", "initialization"]
                        },
                        {
                            id: "dict-clear-copy",
                            concept: "Καθαρισμός και Αντιγραφή (Clear and Copy)",
                            python: {
                                syntax: "dict.clear(), dict.copy()",
                                example: "backup = student.copy()  # Shallow copy\nstudent.clear()  # Αδειάζει το λεξικό\nprint(len(student))  # 0",
                                description: "clear() αδειάζει, copy() δημιουργεί shallow copy"
                            },
                            java: {
                                syntax: "map.clear(), new HashMap<>(map)",
                                example: "Map<String, Object> backup = new HashMap<>(student);\nstudent.clear();",
                                description: "Constructor για copy, clear() για αδειάζι"
                            },
                            tags: ["dictionaries", "methods", "utility"]
                        }
                    ]
                },
                {
                    id: "dict-iteration",
                    title: "Επανάληψη σε Λεξικά (Dictionary Iteration)",
                    content: [
                        {
                            id: "dict-iterate-keys",
                            concept: "Επανάληψη σε Κλειδιά (Iterate Over Keys)",
                            python: {
                                syntax: "for key in dict:",
                                example: "for subject in grades:\n    print(f\"Μάθημα: {subject}\")\n# Ή ρητά: for key in grades.keys():",
                                description: "Default iteration είναι πάνω στα κλειδιά"
                            },
                            java: {
                                syntax: "for (KeyType key : map.keySet())",
                                example: "for (String subject : grades.keySet()) {\n    System.out.println(\"Μάθημα: \" + subject);\n}",
                                description: "Enhanced for loop με keySet()"
                            },
                            tags: ["dictionaries", "iteration", "keys"]
                        },
                        {
                            id: "dict-iterate-values",
                            concept: "Επανάληψη σε Τιμές (Iterate Over Values)",
                            python: {
                                syntax: "for value in dict.values():",
                                example: "for grade in grades.values():\n    print(f\"Βαθμός: {grade}\")",
                                description: "Πρόσβαση μόνο στις τιμές χωρίς τα κλειδιά"
                            },
                            java: {
                                syntax: "for (ValueType value : map.values())",
                                example: "for (Integer grade : grades.values()) {\n    System.out.println(\"Βαθμός: \" + grade);\n}",
                                description: "Enhanced for loop με values()"
                            },
                            tags: ["dictionaries", "iteration", "values"]
                        },
                        {
                            id: "dict-iterate-items",
                            concept: "Επανάληψη σε Ζεύγη (Iterate Over Key-Value Pairs)",
                            python: {
                                syntax: "for key, value in dict.items():",
                                example: "for subject, grade in grades.items():\n    print(f\"{subject}: {grade}\")",
                                description: "Πιο αποδοτικό από την ξεχωριστή πρόσβαση σε κλειδιά/τιμές"
                            },
                            java: {
                                syntax: "for (Map.Entry<K, V> entry : map.entrySet())",
                                example: "for (Map.Entry<String, Integer> entry : grades.entrySet()) {\n    System.out.println(entry.getKey() + \": \" + entry.getValue());\n}",
                                description: "Entry objects για πρόσβαση σε key-value pairs"
                            },
                            tags: ["dictionaries", "iteration", "pairs"]
                        }
                    ]
                },
                {
                    id: "advanced-dict",
                    title: "Προχωρημένα Λεξικά (Advanced Dictionary Concepts)",
                    content: [
                        {
                            id: "defaultdict",
                            concept: "DefaultDict (Collections Module)",
                            python: {
                                syntax: "from collections import defaultdict",
                                example: "from collections import defaultdict\ndd = defaultdict(list)\ndd['fruits'].append('apple')\n# Αυτόματα δημιουργεί κενή λίστα για νέα κλειδιά",
                                description: "Αυτόματη δημιουργία default values για νέα κλειδιά"
                            },
                            java: {
                                syntax: "computeIfAbsent() pattern",
                                example: "Map<String, List<String>> map = new HashMap<>();\nmap.computeIfAbsent(\"fruits\", k -> new ArrayList<>()).add(\"apple\");",
                                description: "computeIfAbsent() για παρόμοια συμπεριφορά"
                            },
                            tags: ["dictionaries", "advanced", "collections"]
                        },
                        {
                            id: "counter",
                            concept: "Counter (Collections Module)",
                            python: {
                                syntax: "from collections import Counter",
                                example: "from collections import Counter\ntext = 'hello world'\ncounter = Counter(text)\nprint(counter)  # Counter({'l': 3, 'o': 2, ...})\nprint(counter.most_common(2))  # [('l', 3), ('o', 2)]",
                                description: "Ειδικό λεξικό για μέτρηση συχνότητας στοιχείων"
                            },
                            java: {
                                syntax: "Manual counting με HashMap",
                                example: "Map<Character, Integer> counter = new HashMap<>();\nfor (char c : text.toCharArray()) {\n    counter.merge(c, 1, Integer::sum);\n}",
                                description: "merge() method για counting pattern"
                            },
                            tags: ["dictionaries", "advanced", "counting"]
                        },
                        {
                            id: "ordereddict",
                            concept: "OrderedDict (Insertion Order)",
                            python: {
                                syntax: "from collections import OrderedDict",
                                example: "from collections import OrderedDict\nod = OrderedDict([('first', 1), ('second', 2)])\n# Python 3.7+: Τα κανονικά dict διατηρούν σειρά",
                                description: "Από Python 3.7+, τα κανονικά dict διατηρούν insertion order"
                            },
                            java: {
                                syntax: "LinkedHashMap",
                                example: "Map<String, Integer> ordered = new LinkedHashMap<>();\nordered.put(\"first\", 1);\nordered.put(\"second\", 2);\n// Διατηρεί insertion order",
                                description: "LinkedHashMap για ordered dictionary behavior"
                            },
                            tags: ["dictionaries", "advanced", "ordering"]
                        }
                    ]
                }
            ]
        },
        // Ενότητα 14: Αντικειμενοστραφής Προγραμματισμός (OOP)
        {
            id: "object-oriented-programming",
            title: "Αντικειμενοστραφής Προγραμματισμός (OOP)",
            icon: "🏗️",
            subsections: [
                {
                    id: "classes-basics",
                    title: "Κλάσεις και Αντικείμενα (Classes & Objects)",
                    content: [
                        {
                            id: "class-definition",
                            concept: "Ορισμός Κλάσης (Class Definition)",
                            python: {
                                syntax: "class ClassName:\n    def __init__(self, params):\n        # constructor",
                                example: "class Student:\n    def __init__(self, name, age):\n        self.name = name\n        self.age = age\n    \n    def introduce(self):\n        return f\"Είμαι ο {self.name}\"",
                                description: "__init__ είναι ο constructor, self αναφέρεται στο instance"
                            },
                            java: {
                                syntax: "public class ClassName {\n    public ClassName(params) {\n        // constructor\n    }\n}",
                                example: "public class Student {\n    private String name;\n    private int age;\n    \n    public Student(String name, int age) {\n        this.name = name;\n        this.age = age;\n    }\n    \n    public String introduce() {\n        return \"Είμαι ο \" + name;\n    }\n}",
                                description: "Explicit access modifiers, this αναφέρεται στο instance"
                            },
                            tags: ["oop", "classes", "basic"]
                        },
                        {
                            id: "object-creation",
                            concept: "Δημιουργία Αντικειμένων (Object Creation)",
                            python: {
                                syntax: "instance = ClassName(arguments)",
                                example: "student1 = Student('Νίκος', 20)\nstudent2 = Student('Μαρία', 19)\nprint(student1.introduce())",
                                description: "Απευθείας κλήση της κλάσης για instantiation"
                            },
                            java: {
                                syntax: "ClassName instance = new ClassName(arguments)",
                                example: "Student student1 = new Student(\"Νίκος\", 20);\nStudent student2 = new Student(\"Μαρία\", 19);\nSystem.out.println(student1.introduce());",
                                description: "Χρήση new keyword για object creation"
                            },
                            tags: ["oop", "objects", "instantiation"]
                        },
                        {
                            id: "instance-variables",
                            concept: "Μεταβλητές Instanc (Instance Variables)",
                            python: {
                                syntax: "self.variable_name = value",
                                example: "class Product:\n    def __init__(self, name, price):\n        self.name = name        # public by convention\n        self._price = price     # protected (convention)\n        self.__id = 12345      # private (name mangling)",
                                description: "⚠️ Δεν υπάρχουν πραγματικά private fields - μόνο conventions"
                            },
                            java: {
                                syntax: "private Type variableName;",
                                example: "public class Product {\n    private String name;\n    protected double price;  // protected\n    public int stock;        // public\n    \n    // getters/setters\n    public String getName() { return name; }\n    public void setName(String name) { this.name = name; }\n}",
                                description: "🔒 Πραγματικά access modifiers: private, protected, public"
                            },
                            tags: ["oop", "variables", "encapsulation"]
                        },
                        {
                            id: "class-variables",
                            concept: "Μεταβλητές Κλάσης (Class Variables)",
                            python: {
                                syntax: "class ClassName:\n    class_var = value",
                                example: "class Student:\n    school_name = 'Πανεπιστήμιο Αθηνών'  # class variable\n    student_count = 0\n    \n    def __init__(self, name):\n        self.name = name\n        Student.student_count += 1",
                                description: "Κοινές μεταβλητές για όλα τα instances της κλάσης"
                            },
                            java: {
                                syntax: "static Type variableName = value;",
                                example: "public class Student {\n    public static String schoolName = \"Πανεπιστήμιο Αθηνών\";\n    private static int studentCount = 0;\n    \n    public Student(String name) {\n        this.name = name;\n        studentCount++;\n    }\n}",
                                description: "static keyword για class-level variables"
                            },
                            tags: ["oop", "static", "class-variables"]
                        }
                    ]
                },
                {
                    id: "inheritance",
                    title: "Κληρονομικότητα (Inheritance)",
                    content: [
                        {
                            id: "basic-inheritance",
                            concept: "Βασική Κληρονομικότητα (Basic Inheritance)",
                            python: {
                                syntax: "class Child(Parent):",
                                example: "class Animal:\n    def __init__(self, name):\n        self.name = name\n    def speak(self):\n        return f\"{self.name} κάνει ήχο\"\n\nclass Dog(Animal):\n    def speak(self):\n        return f\"{self.name} γαυγίζει\"",
                                description: "Η παιδική κλάση κληρονομεί όλα τα χαρακτηριστικά της γονικής"
                            },
                            java: {
                                syntax: "class Child extends Parent",
                                example: "class Animal {\n    protected String name;\n    public Animal(String name) { this.name = name; }\n    public String speak() { return name + \" κάνει ήχο\"; }\n}\n\nclass Dog extends Animal {\n    public Dog(String name) { super(name); }\n    @Override\n    public String speak() { return name + \" γαυγίζει\"; }\n}",
                                description: "extends keyword για inheritance, @Override annotation"
                            },
                            tags: ["oop", "inheritance", "basic"]
                        },
                        {
                            id: "super-method",
                            concept: "Κλήση Μεθόδων Γονικής Κλάσης (Super Method)",
                            python: {
                                syntax: "super().method_name()",
                                example: "class Employee(Person):\n    def __init__(self, name, age, salary):\n        super().__init__(name, age)  # Κλήση γονικού constructor\n        self.salary = salary\n    \n    def introduce(self):\n        return super().introduce() + f\" και εργάζομαι\"",
                                description: "super() για πρόσβαση στις μεθόδους της γονικής κλάσης"
                            },
                            java: {
                                syntax: "super.methodName()",
                                example: "class Employee extends Person {\n    private double salary;\n    \n    public Employee(String name, int age, double salary) {\n        super(name, age);  // Κλήση γονικού constructor\n        this.salary = salary;\n    }\n    \n    @Override\n    public String introduce() {\n        return super.introduce() + \" και εργάζομαι\";\n    }\n}",
                                description: "super keyword για πρόσβαση στη γονική κλάση"
                            },
                            tags: ["oop", "inheritance", "super"]
                        },
                        {
                            id: "multiple-inheritance",
                            concept: "Πολλαπλή Κληρονομικότητα (Multiple Inheritance)",
                            python: {
                                syntax: "class Child(Parent1, Parent2):",
                                example: "class Flyable:\n    def fly(self):\n        return \"Πετάω\"\n\nclass Swimmable:\n    def swim(self):\n        return \"Κολυμπάω\"\n\nclass Duck(Animal, Flyable, Swimmable):\n    def speak(self):\n        return f\"{self.name} κάνει πάπ πάπ\"",
                                description: "✅ Python υποστηρίζει πολλαπλή κληρονομικότητα - MRO (Method Resolution Order)"
                            },
                            java: {
                                syntax: "// Δεν υπάρχει πολλαπλή κληρονομικότητα",
                                example: "// Χρήση interfaces για παρόμοια λειτουργικότητα\ninterface Flyable { void fly(); }\ninterface Swimmable { void swim(); }\n\nclass Duck extends Animal implements Flyable, Swimmable {\n    public void fly() { /* implementation */ }\n    public void swim() { /* implementation */ }\n}",
                                description: "❌ Μόνο single inheritance, αλλά multiple interface implementation"
                            },
                            tags: ["oop", "inheritance", "multiple"]
                        },
                        {
                            id: "method-resolution",
                            concept: "Method Resolution Order (MRO)",
                            python: {
                                syntax: "ClassName.__mro__ ή ClassName.mro()",
                                example: "class A: pass\nclass B(A): pass\nclass C(A): pass\nclass D(B, C): pass\n\nprint(D.__mro__)\n# (<class '__main__.D'>, <class '__main__.B'>, <class '__main__.C'>, <class '__main__.A'>, <class 'object'>)",
                                description: "🧠 C3 linearization algorithm για επίλυση κληρονομικότητας"
                            },
                            java: {
                                syntax: "// Δεν εφαρμόζεται - single inheritance",
                                example: "// Με interfaces:\n// 1. Πρώτα η κλάση\n// 2. Μετά τα interfaces με τη σειρά δήλωσης\n// 3. Default methods από interfaces",
                                description: "Απλούστερη επίλυση λόγω single inheritance"
                            },
                            tags: ["oop", "inheritance", "mro"]
                        }
                    ]
                },
                {
                    id: "encapsulation",
                    title: "Ενθυλάκωση (Encapsulation)",
                    content: [
                        {
                            id: "access-modifiers",
                            concept: "Επίπεδα Πρόσβασης (Access Levels)",
                            python: {
                                syntax: "public, _protected, __private (conventions)",
                                example: "class BankAccount:\n    def __init__(self, balance):\n        self.account_number = '12345'    # public\n        self._balance = balance          # protected (convention)\n        self.__pin = 1234               # private (name mangling)\n    \n    def get_balance(self):\n        return self._balance",
                                description: "⚠️ Conventions μόνο - δεν υπάρχει αληθινή private πρόσβαση"
                            },
                            java: {
                                syntax: "public, protected, private, package-private",
                                example: "public class BankAccount {\n    public String accountNumber;     // public\n    protected double balance;        // protected\n    private int pin;                // private\n    String bankName;               // package-private\n    \n    public double getBalance() {\n        return balance;\n    }\n}",
                                description: "🔒 Αληθινοί access modifiers που επιβάλλονται από τη γλώσσα"
                            },
                            tags: ["oop", "encapsulation", "access"]
                        },
                        {
                            id: "properties",
                            concept: "Properties (Getters/Setters)",
                            python: {
                                syntax: "@property, @setter decorators",
                                example: "class Temperature:\n    def __init__(self):\n        self._celsius = 0\n    \n    @property\n    def celsius(self):\n        return self._celsius\n    \n    @celsius.setter\n    def celsius(self, value):\n        if value < -273.15:\n            raise ValueError(\"Θερμοκρασία κάτω από το απόλυτο μηδέν!\")\n        self._celsius = value",
                                description: "✅ Pythonic way για getters/setters με validation"
                            },
                            java: {
                                syntax: "public getField(), public setField()",
                                example: "public class Temperature {\n    private double celsius;\n    \n    public double getCelsius() {\n        return celsius;\n    }\n    \n    public void setCelsius(double celsius) {\n        if (celsius < -273.15) {\n            throw new IllegalArgumentException(\"Θερμοκρασία κάτω από το απόλυτο μηδέν!\");\n        }\n        this.celsius = celsius;\n    }\n}",
                                description: "Παραδοσιακό getter/setter pattern"
                            },
                            tags: ["oop", "encapsulation", "properties"]
                        }
                    ]
                },
                {
                    id: "polymorphism",
                    title: "Πολυμορφισμός (Polymorphism)",
                    content: [
                        {
                            id: "method-overriding",
                            concept: "Επικάλυψη Μεθόδων (Method Overriding)",
                            python: {
                                syntax: "Αυτόματη επικάλυψη - δεν χρειάζεται annotation",
                                example: "class Shape:\n    def area(self):\n        return 0\n\nclass Circle(Shape):\n    def __init__(self, radius):\n        self.radius = radius\n    \n    def area(self):  # Επικαλύπτει τη γονική μέθοδο\n        return 3.14159 * self.radius ** 2",
                                description: "Αυτόματη επικάλυψη - runtime binding"
                            },
                            java: {
                                syntax: "@Override annotation (προαιρετικό αλλά συνιστώμενο)",
                                example: "class Shape {\n    public double area() { return 0; }\n}\n\nclass Circle extends Shape {\n    private double radius;\n    \n    public Circle(double radius) { this.radius = radius; }\n    \n    @Override\n    public double area() {\n        return Math.PI * radius * radius;\n    }\n}",
                                description: "@Override για compile-time checking και documentation"
                            },
                            tags: ["oop", "polymorphism", "overriding"]
                        },
                        {
                            id: "duck-typing",
                            concept: "Duck Typing",
                            python: {
                                syntax: "\"If it walks like a duck and quacks like a duck...\"",
                                example: "def make_sound(animal):\n    return animal.speak()  # Δεν ελέγχει τον τύπο!\n\n# Οποιοδήποτε object με speak() method θα δουλέψει\nmake_sound(Dog(\"Rex\"))     # Δουλεύει\nmake_sound(Cat(\"Whiskers\")) # Δουλεύει επίσης",
                                description: "⚡ Structural typing - σημαντική είναι η συμπεριφορά, όχι ο τύπος"
                            },
                            java: {
                                syntax: "Απαιτείται explicit typing μέσω interfaces/inheritance",
                                example: "interface Animal {\n    String speak();\n}\n\npublic void makeSound(Animal animal) {\n    System.out.println(animal.speak());\n}\n\n// Μόνο Animal implementations θα δουλέψουν",
                                description: "🔒 Static typing - πρέπει να implement interface ή extend class"
                            },
                            tags: ["oop", "polymorphism", "duck-typing"]
                        },
                        {
                            id: "abstract-classes",
                            concept: "Αφηρημένες Κλάσεις (Abstract Classes)",
                            python: {
                                syntax: "from abc import ABC, abstractmethod",
                                example: "from abc import ABC, abstractmethod\n\nclass Vehicle(ABC):\n    @abstractmethod\n    def start_engine(self):\n        pass\n    \n    def stop_engine(self):  # Concrete method\n        print(\"Μηχανή σβησμένη\")\n\nclass Car(Vehicle):\n    def start_engine(self):\n        print(\"Μηχανή αυτοκινήτου ξεκινημένη\")",
                                description: "ABC module για abstract base classes - δεν μπορούν να instantiate"
                            },
                            java: {
                                syntax: "abstract class ClassName",
                                example: "abstract class Vehicle {\n    public abstract void startEngine();  // abstract method\n    \n    public void stopEngine() {           // concrete method\n        System.out.println(\"Μηχανή σβησμένη\");\n    }\n}\n\nclass Car extends Vehicle {\n    @Override\n    public void startEngine() {\n        System.out.println(\"Μηχανή αυτοκινήτου ξεκινημένη\");\n    }\n}",
                                description: "Built-in abstract classes - δεν μπορούν να instantiate"
                            },
                            tags: ["oop", "abstract", "inheritance"]
                        }
                    ]
                },
                {
                    id: "magic-methods",
                    title: "Μαγικές Μέθοδοι (Magic Methods)",
                    content: [
                        {
                            id: "string-representation",
                            concept: "String Representation",
                            python: {
                                syntax: "__str__(self), __repr__(self)",
                                example: "class Point:\n    def __init__(self, x, y):\n        self.x = x\n        self.y = y\n    \n    def __str__(self):   # Για τους χρήστες\n        return f\"({self.x}, {self.y})\"\n    \n    def __repr__(self):  # Για developers\n        return f\"Point({self.x}, {self.y})\"",
                                description: "__str__ για user-friendly, __repr__ για debugging"
                            },
                            java: {
                                syntax: "toString() method",
                                example: "public class Point {\n    private int x, y;\n    \n    public Point(int x, int y) {\n        this.x = x; this.y = y;\n    }\n    \n    @Override\n    public String toString() {\n        return \"(\" + x + \", \" + y + \")\";\n    }\n}",
                                description: "Override του toString() method από Object class"
                            },
                            tags: ["oop", "magic-methods", "string"]
                        },
                        {
                            id: "comparison-methods",
                            concept: "Σύγκριση Αντικειμένων (Object Comparison)",
                            python: {
                                syntax: "__eq__, __lt__, __gt__, __le__, __ge__",
                                example: "class Student:\n    def __init__(self, name, grade):\n        self.name = name\n        self.grade = grade\n    \n    def __eq__(self, other):\n        return self.grade == other.grade\n    \n    def __lt__(self, other):\n        return self.grade < other.grade",
                                description: "Επιτρέπει χρήση των ==, <, >, <=, >= operators"
                            },
                            java: {
                                syntax: "equals(), compareTo(), Comparable interface",
                                example: "public class Student implements Comparable<Student> {\n    private String name;\n    private int grade;\n    \n    @Override\n    public boolean equals(Object obj) {\n        if (obj instanceof Student) {\n            return this.grade == ((Student) obj).grade;\n        }\n        return false;\n    }\n    \n    @Override\n    public int compareTo(Student other) {\n        return Integer.compare(this.grade, other.grade);\n    }\n}",
                                description: "equals() και Comparable interface για comparisons"
                            },
                            tags: ["oop", "magic-methods", "comparison"]
                        }
                    ]
                }
            ]
        },
        // Ενότητα 15: Προχωρημένες Συναρτήσεις (Advanced Functions)
        {
            id: "advanced-functions",
            title: "Προχωρημένες Συναρτήσεις (Advanced Functions)",
            icon: "⚡",
            subsections: [
                {
                    id: "lambda-functions",
                    title: "Συναρτήσεις Ανώνυμες (Lambda Functions)",
                    content: [
                        {
                            id: "lambda-basics",
                            concept: "Βασικές Lambda Συναρτήσεις (Basic Lambda Functions)",
                            python: {
                                syntax: "lambda parameters: expression",
                                example: "square = lambda x: x**2\nprint(square(5))  # 25\n\nadd = lambda x, y: x + y\nprint(add(3, 4))  # 7",
                                description: "⚡ Σύντομος τρόπος για απλές συναρτήσεις μίας γραμμής"
                            },
                            java: {
                                syntax: "(parameters) -> expression",
                                example: "Function<Integer, Integer> square = x -> x * x;\nSystem.out.println(square.apply(5));  // 25\n\nBinaryOperator<Integer> add = (x, y) -> x + y;\nSystem.out.println(add.apply(3, 4));  // 7",
                                description: "Java 8+ lambda expressions με functional interfaces"
                            },
                            tags: ["functions", "lambda", "anonymous"]
                        },
                        {
                            id: "lambda-with-functions",
                            concept: "Lambda με Built-in Συναρτήσεις (Lambda with Built-ins)",
                            python: {
                                syntax: "map(), filter(), sorted() με lambda",
                                example: "numbers = [1, 2, 3, 4, 5]\nsquares = list(map(lambda x: x**2, numbers))\nevens = list(filter(lambda x: x % 2 == 0, numbers))\nsorted_desc = sorted(numbers, key=lambda x: -x)",
                                description: "✅ Συνηθισμένη χρήση με functional programming patterns"
                            },
                            java: {
                                syntax: "Stream API με lambda expressions",
                                example: "List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5);\nList<Integer> squares = numbers.stream()\n    .map(x -> x * x)\n    .collect(Collectors.toList());\nList<Integer> evens = numbers.stream()\n    .filter(x -> x % 2 == 0)\n    .collect(Collectors.toList());",
                                description: "Stream API για functional operations"
                            },
                            tags: ["functions", "lambda", "functional"]
                        },
                        {
                            id: "lambda-limitations",
                            concept: "Περιορισμοί Lambda (Lambda Limitations)",
                            python: {
                                syntax: "Μόνο expressions, όχι statements",
                                example: "# ✅ Δουλεύει\nvalid = lambda x: x if x > 0 else -x\n\n# ❌ Δεν δουλεύει\n# invalid = lambda x: print(x); return x**2",
                                description: "⚠️ Δεν μπορούν να περιέχουν statements (print, assignments, κλπ)"
                            },
                            java: {
                                syntax: "Περιορισμένες σε single expressions",
                                example: "// ✅ Δουλεύει\nFunction<Integer, Integer> abs = x -> x > 0 ? x : -x;\n\n// ❌ Για πολύπλοκη λογική χρειάζεται method reference\n// ή anonymous class",
                                description: "Single expression ή block με explicit return"
                            },
                            tags: ["functions", "lambda", "limitations"]
                        }
                    ]
                },
                {
                    id: "decorators",
                    title: "Διακοσμητές (Decorators)",
                    content: [
                        {
                            id: "basic-decorators",
                            concept: "Βασικοί Διακοσμητές (Basic Decorators)",
                            python: {
                                syntax: "@decorator_name",
                                example: "def timing_decorator(func):\n    import time\n    def wrapper(*args, **kwargs):\n        start = time.time()\n        result = func(*args, **kwargs)\n        print(f\"Χρόνος: {time.time() - start:.2f}s\")\n        return result\n    return wrapper\n\n@timing_decorator\ndef slow_function():\n    import time\n    time.sleep(1)\n    return \"Done\"",
                                description: "🧠 Higher-order functions που τροποποιούν άλλες συναρτήσεις"
                            },
                            java: {
                                syntax: "Δεν υπάρχουν built-in decorators",
                                example: "// Χρήση annotations (metadata μόνο)\n@Override\npublic String toString() { ... }\n\n// Για decorator pattern: Wrapper classes\npublic class TimingWrapper {\n    private final Runnable target;\n    \n    public void execute() {\n        long start = System.currentTimeMillis();\n        target.run();\n        System.out.println(\"Χρόνος: \" + \n            (System.currentTimeMillis() - start) + \"ms\");\n    }\n}",
                                description: "Annotations για metadata, Wrapper pattern για decoration"
                            },
                            tags: ["functions", "decorators", "metaprogramming"]
                        },
                        {
                            id: "decorator-with-params",
                            concept: "Διακοσμητές με Παραμέτρους (Parameterized Decorators)",
                            python: {
                                syntax: "@decorator(params)",
                                example: "def repeat(times):\n    def decorator(func):\n        def wrapper(*args, **kwargs):\n            for i in range(times):\n                result = func(*args, **kwargs)\n            return result\n        return wrapper\n    return decorator\n\n@repeat(3)\ndef greet(name):\n    print(f\"Γεια σου {name}!\")",
                                description: "Decorators που δέχονται παραμέτρους - 3 επίπεδα functions"
                            },
                            java: {
                                syntax: "Annotation με parameters",
                                example: "// Annotations με parameters (compile-time μόνο)\n@Entity(name = \"Student\")\n@Table(name = \"students\")\npublic class Student { ... }\n\n// Runtime decoration με Proxy pattern\nObject decorated = Proxy.newProxyInstance(\n    target.getClass().getClassLoader(),\n    target.getClass().getInterfaces(),\n    (proxy, method, args) -> {\n        // Pre-processing\n        Object result = method.invoke(target, args);\n        // Post-processing\n        return result;\n    }\n);",
                                description: "Annotations για metadata, Proxy για runtime decoration"
                            },
                            tags: ["functions", "decorators", "parameters"]
                        },
                        {
                            id: "builtin-decorators",
                            concept: "Ενσωματωμένοι Διακοσμητές (Built-in Decorators)",
                            python: {
                                syntax: "@staticmethod, @classmethod, @property",
                                example: "class MathUtils:\n    @staticmethod\n    def add(x, y):  # Δεν χρειάζεται instance\n        return x + y\n    \n    @classmethod\n    def from_string(cls, text):  # Δέχεται την κλάση\n        return cls(int(text))\n    \n    @property\n    def value(self):  # Getter\n        return self._value",
                                description: "Ειδικοί decorators για κλάσεις και properties"
                            },
                            java: {
                                syntax: "static methods, factory methods",
                                example: "public class MathUtils {\n    public static int add(int x, int y) {\n        return x + y;\n    }\n    \n    // Factory method\n    public static MathUtils fromString(String text) {\n        return new MathUtils(Integer.parseInt(text));\n    }\n    \n    // Getter method\n    public int getValue() {\n        return this.value;\n    }\n}",
                                description: "Static methods, factory patterns, getters/setters"
                            },
                            tags: ["functions", "decorators", "builtin"]
                        }
                    ]
                },
                {
                    id: "generators",
                    title: "Γεννήτριες (Generators)",
                    content: [
                        {
                            id: "basic-generators",
                            concept: "Βασικές Γεννήτριες (Basic Generators)",
                            python: {
                                syntax: "def generator_func(): yield value",
                                example: "def count_up_to(max_count):\n    count = 1\n    while count <= max_count:\n        yield count\n        count += 1\n\ncounter = count_up_to(3)\nfor num in counter:\n    print(num)  # 1, 2, 3",
                                description: "⚡ Memory-efficient - παράγουν values on-demand"
                            },
                            java: {
                                syntax: "Δεν υπάρχουν built-in generators",
                                example: "// Χρήση Iterator pattern\npublic class CountIterator implements Iterator<Integer> {\n    private int current = 1;\n    private final int max;\n    \n    public CountIterator(int max) { this.max = max; }\n    \n    public boolean hasNext() { return current <= max; }\n    \n    public Integer next() {\n        return current++;\n    }\n}\n\n// Χρήση: new CountIterator(3)",
                                description: "Iterator interface για παρόμοια λειτουργικότητα"
                            },
                            tags: ["functions", "generators", "iterators"]
                        },
                        {
                            id: "generator-expressions",
                            concept: "Εκφράσεις Γεννητριών (Generator Expressions)",
                            python: {
                                syntax: "(expression for item in iterable)",
                                example: "# Generator expression\nsquares_gen = (x**2 for x in range(5))\nprint(list(squares_gen))  # [0, 1, 4, 9, 16]\n\n# Σύγκριση με list comprehension\nsquares_list = [x**2 for x in range(5)]  # Φορτώνει όλα στη μνήμη",
                                description: "🧠 Παρενθέσεις αντί αγκυλών - lazy evaluation"
                            },
                            java: {
                                syntax: "Stream API (lazy evaluation)",
                                example: "// Stream - lazy evaluation\nStream<Integer> squares = IntStream.range(0, 5)\n    .map(x -> x * x)\n    .boxed();\n\n// Μόνο όταν καλέσουμε terminal operation εκτελείται\nList<Integer> result = squares.collect(Collectors.toList());",
                                description: "Streams παρέχουν lazy evaluation παρόμοια με generators"
                            },
                            tags: ["functions", "generators", "expressions"]
                        },
                        {
                            id: "yield-from",
                            concept: "Yield From (Generator Composition)",
                            python: {
                                syntax: "yield from iterable",
                                example: "def generator1():\n    yield 1\n    yield 2\n\ndef generator2():\n    yield 3\n    yield 4\n\ndef combined():\n    yield from generator1()\n    yield from generator2()\n    yield 5\n\nprint(list(combined()))  # [1, 2, 3, 4, 5]",
                                description: "Σύνθεση πολλαπλών generators σε έναν"
                            },
                            java: {
                                syntax: "Stream concatenation",
                                example: "Stream<Integer> stream1 = Stream.of(1, 2);\nStream<Integer> stream2 = Stream.of(3, 4);\nStream<Integer> stream3 = Stream.of(5);\n\nStream<Integer> combined = Stream.concat(\n    Stream.concat(stream1, stream2),\n    stream3\n);\n\nList<Integer> result = combined.collect(Collectors.toList());",
                                description: "Stream.concat() για σύνθεση streams"
                            },
                            tags: ["functions", "generators", "composition"]
                        }
                    ]
                },
                {
                    id: "higher-order-functions",
                    title: "Συναρτήσεις Ανώτερης Τάξης (Higher-Order Functions)",
                    content: [
                        {
                            id: "map-filter-reduce",
                            concept: "Map, Filter, Reduce",
                            python: {
                                syntax: "map(), filter(), functools.reduce()",
                                example: "from functools import reduce\n\nnumbers = [1, 2, 3, 4, 5]\n\n# Map - εφαρμόζει συνάρτηση σε όλα τα στοιχεία\nsquares = list(map(lambda x: x**2, numbers))\n\n# Filter - φιλτράρει στοιχεία\nevens = list(filter(lambda x: x % 2 == 0, numbers))\n\n# Reduce - συγκεντρώνει σε μία τιμή\nsum_all = reduce(lambda x, y: x + y, numbers)",
                                description: "🔄 Functional programming τριάδα για data transformation"
                            },
                            java: {
                                syntax: "Stream.map(), filter(), reduce()",
                                example: "List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5);\n\n// Map\nList<Integer> squares = numbers.stream()\n    .map(x -> x * x)\n    .collect(Collectors.toList());\n\n// Filter\nList<Integer> evens = numbers.stream()\n    .filter(x -> x % 2 == 0)\n    .collect(Collectors.toList());\n\n// Reduce\nint sum = numbers.stream()\n    .reduce(0, (x, y) -> x + y);",
                                description: "Stream API για functional operations"
                            },
                            tags: ["functions", "higher-order", "functional"]
                        },
                        {
                            id: "function-as-argument",
                            concept: "Συνάρτηση ως Παράμετρος (Function as Argument)",
                            python: {
                                syntax: "def func(callback): callback(args)",
                                example: "def process_data(data, transformer):\n    return [transformer(item) for item in data]\n\n# Χρήση\nnumbers = [1, 2, 3]\ndoubled = process_data(numbers, lambda x: x * 2)\nsquared = process_data(numbers, lambda x: x**2)",
                                description: "Functions are first-class objects στην Python"
                            },
                            java: {
                                syntax: "Functional interfaces as parameters",
                                example: "public static <T, R> List<R> processData(\n        List<T> data, \n        Function<T, R> transformer) {\n    return data.stream()\n        .map(transformer)\n        .collect(Collectors.toList());\n}\n\n// Χρήση\nList<Integer> numbers = Arrays.asList(1, 2, 3);\nList<Integer> doubled = processData(numbers, x -> x * 2);",
                                description: "Functional interfaces για passing functions"
                            },
                            tags: ["functions", "higher-order", "parameters"]
                        },
                        {
                            id: "closures",
                            concept: "Κλειστότητες (Closures)",
                            python: {
                                syntax: "Nested functions with access to outer scope",
                                example: "def multiplier(factor):\n    def multiply(number):\n        return number * factor  # Πρόσβαση στο 'factor'\n    return multiply\n\n# Δημιουργία closures\ndouble = multiplier(2)\ntriple = multiplier(3)\n\nprint(double(5))  # 10\nprint(triple(5))  # 15",
                                description: "Inner functions διατηρούν πρόσβαση στο outer scope"
                            },
                            java: {
                                syntax: "Lambda με final/effectively final variables",
                                example: "public static Function<Integer, Integer> multiplier(int factor) {\n    return number -> number * factor;  // 'factor' είναι effectively final\n}\n\n// Χρήση\nFunction<Integer, Integer> double = multiplier(2);\nFunction<Integer, Integer> triple = multiplier(3);\n\nSystem.out.println(double.apply(5));  // 10",
                                description: "Lambda expressions μπορούν να capture effectively final variables"
                            },
                            tags: ["functions", "closures", "scope"]
                        }
                    ]
                }
            ]
        },
        // Ενότητα 16: Μονάδες & Βιβλιοθήκες (Modules & Libraries)
        {
            id: "modules-libraries",
            title: "Μονάδες & Βιβλιοθήκες (Modules & Libraries)",
            icon: "📦",
            subsections: [
                {
                    id: "import-systems",
                    title: "Συστήματα Εισαγωγής (Import Systems)",
                    content: [
                        {
                            id: "basic-import",
                            concept: "Βασική Εισαγωγή Μονάδων (Basic Module Import)",
                            python: {
                                syntax: "import module_name",
                                example: "import math\nimport os\nimport sys\n\nprint(math.pi)  # 3.141592653589793\nprint(os.getcwd())  # Τρέχων φάκελος",
                                description: "Εισαγωγή ολόκληρης της μονάδας - πρόσβαση με module_name.function"
                            },
                            java: {
                                syntax: "import package.ClassName;",
                                example: "import java.util.List;\nimport java.util.ArrayList;\nimport java.io.File;\n\nList<String> list = new ArrayList<>();\nFile file = new File(\"data.txt\");",
                                description: "Import specific classes από packages"
                            },
                            tags: ["modules", "import", "basic"]
                        },
                        {
                            id: "from-import",
                            concept: "Επιλεκτική Εισαγωγή (Selective Import)",
                            python: {
                                syntax: "from module import function",
                                example: "from math import pi, sqrt, sin\nfrom os import getcwd, listdir\n\nprint(pi)  # Απευθείας χρήση χωρίς math.\nprint(sqrt(16))  # 4.0",
                                description: "Εισαγωγή συγκεκριμένων functions/variables από μονάδα"
                            },
                            java: {
                                syntax: "import static για static members",
                                example: "import static java.lang.Math.PI;\nimport static java.lang.Math.sqrt;\nimport static java.lang.Math.sin;\n\nSystem.out.println(PI);  // Απευθείας χρήση\nSystem.out.println(sqrt(16));",
                                description: "Static imports για απευθείας πρόσβαση σε static members"
                            },
                            tags: ["modules", "import", "selective"]
                        },
                        {
                            id: "import-alias",
                            concept: "Ψευδώνυμα Εισαγωγής (Import Aliases)",
                            python: {
                                syntax: "import module as alias",
                                example: "import numpy as np\nimport pandas as pd\nimport matplotlib.pyplot as plt\n\n# Σύντομα ψευδώνυμα για μεγάλα ονόματα\ndata = np.array([1, 2, 3, 4])",
                                description: "Συντομεύσεις για μακριά ονόματα μονάδων - standard practice"
                            },
                            java: {
                                syntax: "Δεν υπάρχουν aliases",
                                example: "// Χρήση πλήρους ονόματος ή import\nimport java.util.concurrent.ExecutorService;\n\n// Ή local variable για σύντομη αναφορά\nExecutorService executor = ...; // σύντομη αναφορά",
                                description: "Δεν υπάρχουν built-in aliases - χρήση local variables"
                            },
                            tags: ["modules", "import", "aliases"]
                        },
                        {
                            id: "wildcard-import",
                            concept: "Εισαγωγή Όλων (Wildcard Import)",
                            python: {
                                syntax: "from module import *",
                                example: "from math import *\n# Τώρα όλες οι functions του math είναι διαθέσιμες\nprint(sin(pi/2))  # 1.0\n\n# ⚠️ ΜΗ το κάνετε αυτό σε production code!",
                                description: "⚠️ ΠΡΟΣΟΧΗ: Μπορεί να προκαλέσει namespace pollution"
                            },
                            java: {
                                syntax: "import package.*;",
                                example: "import java.util.*;\n\nList<String> list = new ArrayList<>();  // Από java.util\nMap<String, Integer> map = new HashMap<>();",
                                description: "Import όλων των classes από package (compile-time μόνο)"
                            },
                            tags: ["modules", "import", "wildcard"],
                            notes: "Python: Αποφύγετε το * import - δημιουργεί προβλήματα namespace"
                        }
                    ]
                },
                {
                    id: "standard-library",
                    title: "Βασικές Βιβλιοθήκες (Standard Library Essentials)",
                    content: [
                        {
                            id: "json-handling",
                            concept: "Διαχείριση JSON (JSON Handling)",
                            python: {
                                syntax: "import json",
                                example: "import json\n\n# Python dict -> JSON string\ndata = {'name': 'Νίκος', 'age': 25}\njson_str = json.dumps(data, ensure_ascii=False)\n\n# JSON string -> Python dict\nparsed = json.loads(json_str)\nprint(parsed['name'])  # Νίκος",
                                description: "json.dumps() για serialization, json.loads() για parsing"
                            },
                            java: {
                                syntax: "Χρήση Jackson, Gson ή java.util.JsonObject (Java 11+)",
                                example: "// Με Jackson ObjectMapper\nObjectMapper mapper = new ObjectMapper();\n\n// Java object -> JSON\nString jsonStr = mapper.writeValueAsString(student);\n\n// JSON -> Java object\nStudent parsed = mapper.readValue(jsonStr, Student.class);",
                                description: "Χρειάζεται external library (Jackson/Gson) για JSON processing"
                            },
                            tags: ["modules", "json", "serialization"]
                        },
                        {
                            id: "datetime-handling",
                            concept: "Διαχείριση Ημερομηνιών (DateTime Handling)",
                            python: {
                                syntax: "import datetime",
                                example: "import datetime\n\n# Τρέχουσα ημερομηνία/ώρα\nnow = datetime.datetime.now()\ntoday = datetime.date.today()\n\n# Δημιουργία συγκεκριμένης ημερομηνίας\nbirthday = datetime.date(1990, 5, 15)\n\n# Formatting\nformatted = now.strftime('%Y-%m-%d %H:%M:%S')",
                                description: "datetime module για dates, times, timestamps και formatting"
                            },
                            java: {
                                syntax: "java.time package (Java 8+)",
                                example: "import java.time.*;\nimport java.time.format.DateTimeFormatter;\n\n// Τρέχουσα ημερομηνία/ώρα\nLocalDateTime now = LocalDateTime.now();\nLocalDate today = LocalDate.now();\n\n// Δημιουργία συγκεκριμένης ημερομηνίας\nLocalDate birthday = LocalDate.of(1990, 5, 15);\n\n// Formatting\nString formatted = now.format(DateTimeFormatter.ofPattern(\"yyyy-MM-dd HH:mm:ss\"));",
                                description: "java.time API - modern, immutable date/time handling"
                            },
                            tags: ["modules", "datetime", "formatting"]
                        },
                        {
                            id: "regex-patterns",
                            concept: "Κανονικές Εκφράσεις (Regular Expressions)",
                            python: {
                                syntax: "import re",
                                example: "import re\n\n# Pattern matching\npattern = r'\\d{3}-\\d{2}-\\d{4}'\ntext = 'Τηλ: 210-12-3456'\nmatch = re.search(pattern, text)\nif match:\n    print(f\"Βρέθηκε: {match.group()}\")  # 210-12-3456\n\n# Find all matches\nall_numbers = re.findall(r'\\d+', text)",
                                description: "re module για pattern matching, searching και replacing"
                            },
                            java: {
                                syntax: "java.util.regex package",
                                example: "import java.util.regex.*;\n\n// Pattern matching\nString pattern = \"\\\\d{3}-\\\\d{2}-\\\\d{4}\";\nString text = \"Τηλ: 210-12-3456\";\nPattern p = Pattern.compile(pattern);\nMatcher m = p.matcher(text);\n\nif (m.find()) {\n    System.out.println(\"Βρέθηκε: \" + m.group());\n}",
                                description: "Pattern και Matcher classes για regex operations"
                            },
                            tags: ["modules", "regex", "patterns"]
                        },
                        {
                            id: "file-path-operations",
                            concept: "Διαχείριση Μονοπατιών (Path Operations)",
                            python: {
                                syntax: "from pathlib import Path",
                                example: "from pathlib import Path\n\n# Modern path handling\nfile_path = Path('data') / 'files' / 'document.txt'\nprint(file_path.exists())\nprint(file_path.suffix)  # .txt\nprint(file_path.stem)    # document\n\n# Cross-platform paths\nhome = Path.home()\nconfig = home / '.config' / 'app.conf'",
                                description: "pathlib για modern, object-oriented path handling"
                            },
                            java: {
                                syntax: "java.nio.file package",
                                example: "import java.nio.file.*;\n\n// Modern path handling (Java 7+)\nPath filePath = Paths.get(\"data\", \"files\", \"document.txt\");\nSystem.out.println(Files.exists(filePath));\n\n// Cross-platform paths\nPath home = Paths.get(System.getProperty(\"user.home\"));\nPath config = home.resolve(\".config\").resolve(\"app.conf\");",
                                description: "java.nio.file για modern file system operations"
                            },
                            tags: ["modules", "filesystem", "paths"]
                        }
                    ]
                },
                {
                    id: "package-management",
                    title: "Διαχείριση Πακέτων (Package Management)",
                    content: [
                        {
                            id: "pip-management",
                            concept: "Διαχείριση με pip (Package Management with pip)",
                            python: {
                                syntax: "pip install package_name",
                                example: "# Εγκατάσταση πακέτου\npip install requests numpy pandas\n\n# Εγκατάσταση συγκεκριμένης έκδοσης\npip install django==3.2.0\n\n# Εγκατάσταση από requirements.txt\npip install -r requirements.txt\n\n# Λίστα εγκατεστημένων\npip list",
                                description: "pip: Python package installer για PyPI packages"
                            },
                            java: {
                                syntax: "Maven, Gradle build tools",
                                example: "<!-- Maven pom.xml -->\n<dependency>\n    <groupId>com.fasterxml.jackson.core</groupId>\n    <artifactId>jackson-core</artifactId>\n    <version>2.13.0</version>\n</dependency>\n\n// Gradle build.gradle\ndependencies {\n    implementation 'com.fasterxml.jackson.core:jackson-core:2.13.0'\n}",
                                description: "Maven/Gradle για dependency management και build automation"
                            },
                            tags: ["modules", "packages", "management"]
                        },
                        {
                            id: "virtual-environments",
                            concept: "Εικονικά Περιβάλλοντα (Virtual Environments)",
                            python: {
                                syntax: "python -m venv env_name",
                                example: "# Δημιουργία virtual environment\npython -m venv myproject_env\n\n# Ενεργοποίηση (Windows)\nmyproject_env\\Scripts\\activate\n\n# Ενεργοποίηση (Linux/Mac)\nsource myproject_env/bin/activate\n\n# Απενεργοποίηση\ndeactivate",
                                description: "Απομόνωση dependencies per project - αποφυγή conflicts"
                            },
                            java: {
                                syntax: "Project-based dependency isolation",
                                example: "// Maven projects απομονώνουν dependencies αυτόματα\n// Κάθε project έχει το δικό του classpath\n\n// Για runtime isolation:\n// - Docker containers\n// - Application servers (Tomcat, etc.)\n// - Module system (Java 9+)",
                                description: "Project-based isolation με build tools, modules ή containers"
                            },
                            tags: ["modules", "environments", "isolation"]
                        },
                        {
                            id: "requirements-management",
                            concept: "Διαχείριση Απαιτήσεων (Requirements Management)",
                            python: {
                                syntax: "requirements.txt file",
                                example: "# requirements.txt\nrequests==2.28.1\nflask>=2.0.0,<3.0.0\nnumpy\npandas==1.4.3\n\n# Παραγωγή requirements.txt\npip freeze > requirements.txt\n\n# Εγκατάσταση από requirements\npip install -r requirements.txt",
                                description: "requirements.txt για reproducible environments"
                            },
                            java: {
                                syntax: "pom.xml (Maven) ή build.gradle (Gradle)",
                                example: "<!-- Maven dependency management -->\n<dependencyManagement>\n    <dependencies>\n        <dependency>\n            <groupId>org.springframework</groupId>\n            <artifactId>spring-framework-bom</artifactId>\n            <version>5.3.21</version>\n            <type>pom</type>\n            <scope>import</scope>\n        </dependency>\n    </dependencies>\n</dependencyManagement>",
                                description: "pom.xml ή build.gradle για declarative dependency management"
                            },
                            tags: ["modules", "dependencies", "build-tools"]
                        }
                    ]
                },
                {
                    id: "creating-modules",
                    title: "Δημιουργία Μονάδων (Creating Modules)",
                    content: [
                        {
                            id: "python-module-structure",
                            concept: "Δομή Python Module",
                            python: {
                                syntax: "__init__.py files για packages",
                                example: "# mypackage/__init__.py\nfrom .module1 import function1\nfrom .module2 import Class2\n\n__version__ = \"1.0.0\"\n__all__ = ['function1', 'Class2']  # Τι εξάγεται με import *",
                                description: "__init__.py κάνει directory σε package - μπορεί να είναι κενό ή να περιέχει initialization code"
                            },
                            java: {
                                syntax: "package declarations",
                                example: "// mypackage/Module1.java\npackage mypackage;\n\npublic class Module1 {\n    public static void function1() {\n        // implementation\n    }\n}\n\n// module-info.java (Java 9+)\nmodule mymodule {\n    exports mypackage;\n}",
                                description: "package keyword για namespace, module-info.java για module system"
                            },
                            tags: ["modules", "creation", "structure"]
                        },
                        {
                            id: "documentation",
                            concept: "Τεκμηρίωση Μονάδων (Module Documentation)",
                            python: {
                                syntax: "Docstrings για modules και functions",
                                example: "\"\"\"\nMyPackage - Utility functions for data processing.\n\nThis module provides functions for:\n- Data cleaning\n- Statistical analysis  \n- Visualization helpers\n\nExample:\n    >>> from mypackage import clean_data\n    >>> result = clean_data(raw_data)\n\"\"\"\n\ndef process_data(data):\n    \"\"\"\n    Process raw data and return cleaned version.\n    \n    Args:\n        data (list): Raw data to process\n    \n    Returns:\n        list: Cleaned and processed data\n    \"\"\"\n    return processed_data",
                                description: "Triple-quoted strings για module και function documentation"
                            },
                            java: {
                                syntax: "Javadoc comments με /** */",
                                example: "/**\n * MyPackage - Utility classes for data processing.\n * \n * <p>This package provides classes for:\n * <ul>\n *   <li>Data cleaning</li>\n *   <li>Statistical analysis</li>\n *   <li>Visualization helpers</li>\n * </ul>\n * \n * @author Your Name\n * @version 1.0\n * @since 2023\n */\npackage mypackage;\n\n/**\n * Process raw data and return cleaned version.\n * \n * @param data Raw data to process\n * @return Cleaned and processed data\n */\npublic static List<String> processData(List<String> data) {\n    return processedData;\n}",
                                description: "Javadoc για HTML documentation generation"
                            },
                            tags: ["modules", "documentation", "docstrings"]
                        }
                    ]
                }
            ]
        },
        // Ενότητα 17: Προχωρημένες Δομές Δεδομένων (Advanced Data Structures)
        {
            id: "advanced-data-structures",
            title: "Προχωρημένες Δομές Δεδομένων (Advanced Data Structures)",
            icon: "🔧",
            subsections: [
                {
                    id: "iterators-iterables",
                    title: "Επαναλήπτες και Επαναλήψιμα (Iterators & Iterables)",
                    content: [
                        {
                            id: "iterator-protocol",
                            concept: "Πρωτόκολλο Επαναλήπτη (Iterator Protocol)",
                            python: {
                                syntax: "__iter__() και __next__() methods",
                                example: "class CountDown:\n    def __init__(self, start):\n        self.start = start\n    \n    def __iter__(self):\n        return self\n    \n    def __next__(self):\n        if self.start <= 0:\n            raise StopIteration\n        self.start -= 1\n        return self.start + 1\n\n# Χρήση\nfor num in CountDown(3):\n    print(num)  # 3, 2, 1",
                                description: "__iter__ επιστρέφει iterator object, __next__ επιστρέφει επόμενο στοιχείο"
                            },
                            java: {
                                syntax: "Iterator interface implementation",
                                example: "public class CountDown implements Iterator<Integer> {\n    private int current;\n    \n    public CountDown(int start) {\n        this.current = start;\n    }\n    \n    @Override\n    public boolean hasNext() {\n        return current > 0;\n    }\n    \n    @Override\n    public Integer next() {\n        if (!hasNext()) {\n            throw new NoSuchElementException();\n        }\n        return current--;\n    }\n}",
                                description: "Iterator interface με hasNext() και next() methods"
                            },
                            tags: ["iterators", "protocol", "custom"]
                        },
                        {
                            id: "iterable-objects",
                            concept: "Επαναλήψιμα Αντικείμενα (Iterable Objects)",
                            python: {
                                syntax: "Οποιοδήποτε object με __iter__() method",
                                example: "class NumberSequence:\n    def __init__(self, numbers):\n        self.numbers = numbers\n    \n    def __iter__(self):\n        return iter(self.numbers)  # Delegate στη λίστα\n\n# Χρήση\nseq = NumberSequence([1, 2, 3, 4])\nfor num in seq:\n    print(num)\n\n# Δουλεύει με list(), tuple(), sum() κλπ\nresult = list(seq)",
                                description: "Iterable objects μπορούν να χρησιμοποιηθούν σε for loops και built-ins"
                            },
                            java: {
                                syntax: "Iterable interface implementation",
                                example: "public class NumberSequence implements Iterable<Integer> {\n    private List<Integer> numbers;\n    \n    public NumberSequence(List<Integer> numbers) {\n        this.numbers = new ArrayList<>(numbers);\n    }\n    \n    @Override\n    public Iterator<Integer> iterator() {\n        return numbers.iterator();\n    }\n}\n\n// Χρήση με enhanced for loop\nfor (Integer num : new NumberSequence(Arrays.asList(1, 2, 3))) {\n    System.out.println(num);\n}",
                                description: "Iterable interface επιτρέπει enhanced for loop usage"
                            },
                            tags: ["iterators", "iterable", "collections"]
                        }
                    ]
                },
                {
                    id: "context-managers",
                    title: "Διαχειριστές Περιβάλλοντος (Context Managers)",
                    content: [
                        {
                            id: "with-statement",
                            concept: "With Statement Pattern",
                            python: {
                                syntax: "with context_manager as variable:",
                                example: "# Built-in context manager\nwith open('file.txt', 'r') as f:\n    content = f.read()\n# Αρχείο κλείνει αυτόματα\n\n# Custom context manager\nclass Timer:\n    def __enter__(self):\n        self.start = time.time()\n        return self\n    \n    def __exit__(self, exc_type, exc_val, exc_tb):\n        print(f\"Χρόνος: {time.time() - self.start:.2f}s\")\n\nwith Timer():\n    time.sleep(1)  # Μετράει χρόνο αυτόματα",
                                description: "__enter__ για setup, __exit__ για cleanup - εγγυημένος cleanup"
                            },
                            java: {
                                syntax: "try-with-resources statement",
                                example: "// Με AutoCloseable resources\ntry (FileReader reader = new FileReader(\"file.txt\");\n     BufferedReader buffered = new BufferedReader(reader)) {\n    \n    String line = buffered.readLine();\n    // Resources κλείνουν αυτόματα\n} catch (IOException e) {\n    e.printStackTrace();\n}\n\n// Custom AutoCloseable\npublic class Timer implements AutoCloseable {\n    private long start = System.currentTimeMillis();\n    \n    @Override\n    public void close() {\n        System.out.println(\"Χρόνος: \" + \n            (System.currentTimeMillis() - start) + \"ms\");\n    }\n}",
                                description: "try-with-resources για automatic resource management"
                            },
                            tags: ["context-managers", "resources", "cleanup"]
                        },
                        {
                            id: "contextlib-decorators",
                            concept: "Contextlib Decorators",
                            python: {
                                syntax: "@contextmanager decorator",
                                example: "from contextlib import contextmanager\nimport tempfile\nimport os\n\n@contextmanager\ndef temp_directory():\n    \"\"\"Temporary directory context manager.\"\"\"\n    temp_dir = tempfile.mkdtemp()\n    try:\n        yield temp_dir  # Επιστρέφει το directory\n    finally:\n        # Cleanup - διαγράφει το directory\n        import shutil\n        shutil.rmtree(temp_dir)\n\n# Χρήση\nwith temp_directory() as tmp_dir:\n    file_path = os.path.join(tmp_dir, 'test.txt')\n    with open(file_path, 'w') as f:\n        f.write('test')\n# Directory διαγράφηκε αυτόματα",
                                description: "Decorator που μετατρέπει generator function σε context manager"
                            },
                            java: {
                                syntax: "Functional interfaces για similar patterns",
                                example: "// Functional approach για resource management\npublic static <T> void withResource(\n        Supplier<T> resourceSupplier,\n        Consumer<T> action) {\n    \n    T resource = resourceSupplier.get();\n    try {\n        action.accept(resource);\n    } finally {\n        if (resource instanceof AutoCloseable) {\n            try {\n                ((AutoCloseable) resource).close();\n            } catch (Exception e) {\n                e.printStackTrace();\n            }\n        }\n    }\n}\n\n// Χρήση\nwithResource(\n    () -> new FileInputStream(\"file.txt\"),\n    stream -> { /* process stream */ }\n);",
                                description: "Higher-order functions για resource management patterns"
                            },
                            tags: ["context-managers", "decorators", "generators"]
                        }
                    ]
                },
                {
                    id: "advanced-comprehensions",
                    title: "Προχωρημένες Συμπεριλήψεις (Advanced Comprehensions)",
                    content: [
                        {
                            id: "nested-comprehensions",
                            concept: "Εμφωλευμένες Συμπεριλήψεις (Nested Comprehensions)",
                            python: {
                                syntax: "Multi-level comprehensions",
                                example: "# 2D λίστα flatten\nmatrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]\nflattened = [num for row in matrix for num in row]\nprint(flattened)  # [1, 2, 3, 4, 5, 6, 7, 8, 9]\n\n# Nested με conditions\neven_squares = [x**2 for x in range(10) \n                if x % 2 == 0 if x > 2]\nprint(even_squares)  # [16, 36, 64]\n\n# Dict comprehension με nested logic\nword_lengths = {word: len(word) \n                for sentence in sentences \n                for word in sentence.split() \n                if len(word) > 3}",
                                description: "Multiple for clauses και conditions για πολύπλοκες transformations"
                            },
                            java: {
                                syntax: "Nested Stream operations",
                                example: "// 2D λίστα flatten\nList<List<Integer>> matrix = Arrays.asList(\n    Arrays.asList(1, 2, 3),\n    Arrays.asList(4, 5, 6),\n    Arrays.asList(7, 8, 9)\n);\n\nList<Integer> flattened = matrix.stream()\n    .flatMap(Collection::stream)\n    .collect(Collectors.toList());\n\n// Nested με conditions\nList<Integer> evenSquares = IntStream.range(0, 10)\n    .filter(x -> x % 2 == 0)\n    .filter(x -> x > 2)\n    .map(x -> x * x)\n    .boxed()\n    .collect(Collectors.toList());",
                                description: "flatMap() για flattening, chained operations για complex logic"
                            },
                            tags: ["comprehensions", "nested", "advanced"]
                        },
                        {
                            id: "conditional-expressions",
                            concept: "Conditional Expressions σε Comprehensions",
                            python: {
                                syntax: "Ternary operator μέσα σε comprehensions",
                                example: "# Conditional transformation\nnumbers = [-3, -2, -1, 0, 1, 2, 3]\nprocessed = [x if x >= 0 else -x for x in numbers]\nprint(processed)  # [3, 2, 1, 0, 1, 2, 3] - absolute values\n\n# Complex conditional logic\ngrades = [85, 92, 78, 96, 88]\nletters = [('A' if g >= 90 else \n           'B' if g >= 80 else \n           'C' if g >= 70 else 'F') for g in grades]\nprint(letters)  # ['B', 'A', 'C', 'A', 'B']\n\n# Dict με conditional values\nstudent_status = {name: ('Pass' if grade >= 70 else 'Fail') \n                  for name, grade in zip(names, grades)}",
                                description: "Ternary expressions για conditional transformations μέσα σε comprehensions"
                            },
                            java: {
                                syntax: "Conditional mapping με ternary operator",
                                example: "List<Integer> numbers = Arrays.asList(-3, -2, -1, 0, 1, 2, 3);\n\n// Conditional transformation\nList<Integer> processed = numbers.stream()\n    .map(x -> x >= 0 ? x : -x)  // absolute values\n    .collect(Collectors.toList());\n\n// Complex conditional με method reference\nList<Integer> grades = Arrays.asList(85, 92, 78, 96, 88);\nList<String> letters = grades.stream()\n    .map(g -> g >= 90 ? \"A\" : \n              g >= 80 ? \"B\" : \n              g >= 70 ? \"C\" : \"F\")\n    .collect(Collectors.toList());",
                                description: "Ternary operator στο map() για conditional transformations"
                            },
                            tags: ["comprehensions", "conditionals", "ternary"]
                        }
                    ]
                },
                {
                    id: "memory-efficiency",
                    title: "Αποδοτικότητα Μνήμης (Memory Efficiency)",
                    content: [
                        {
                            id: "generator-vs-list",
                            concept: "Generators vs Lists Performance",
                            python: {
                                syntax: "Memory και performance comparison",
                                example: "import sys\n\n# List comprehension - φορτώνει όλα στη μνήμη\nlarge_list = [x**2 for x in range(1000000)]\nprint(f\"List μνήμη: {sys.getsizeof(large_list)} bytes\")\n\n# Generator - lazy evaluation\nlarge_gen = (x**2 for x in range(1000000))\nprint(f\"Generator μνήμη: {sys.getsizeof(large_gen)} bytes\")\n\n# Generator function\ndef squares(n):\n    for x in range(n):\n        yield x**2\n\n# Χρήση μόνο όσων χρειάζονται\nfirst_ten = list(itertools.islice(squares(1000000), 10))",
                                description: "Generators χρησιμοποιούν σταθερή μνήμη, lists αυξάνονται γραμμικά"
                            },
                            java: {
                                syntax: "Stream lazy evaluation vs Collections",
                                example: "// Stream - lazy evaluation\nStream<Integer> largeStream = IntStream.range(0, 1000000)\n    .map(x -> x * x)\n    .boxed();\n\n// Μόνο όταν καλέσουμε terminal operation εκτελείται\nList<Integer> firstTen = largeStream\n    .limit(10)\n    .collect(Collectors.toList());\n\n// Collection - eager evaluation\nList<Integer> largeList = IntStream.range(0, 1000000)\n    .map(x -> x * x)\n    .boxed()\n    .collect(Collectors.toList());  // Φορτώνει όλα στη μνήμη",
                                description: "Streams παρέχουν lazy evaluation παρόμοια με Python generators"
                            },
                            tags: ["memory", "performance", "lazy-evaluation"],
                            notes: "Generators εξοικονομούν μνήμη αλλά μπορούν να χρησιμοποιηθούν μόνο μία φορά"
                        },
                        {
                            id: "slots-optimization",
                            concept: "Memory Optimization με __slots__",
                            python: {
                                syntax: "__slots__ για memory optimization",
                                example: "# Κανονική κλάση - χρησιμοποιεί dict για attributes\nclass RegularPoint:\n    def __init__(self, x, y):\n        self.x = x\n        self.y = y\n\n# Optimized κλάση - χρησιμοποιεί __slots__\nclass OptimizedPoint:\n    __slots__ = ['x', 'y']  # Περιορίζει attributes\n    \n    def __init__(self, x, y):\n        self.x = x\n        self.y = y\n\n# Memory comparison\nimport sys\nreg = RegularPoint(1, 2)\nopt = OptimizedPoint(1, 2)\nprint(f\"Regular: {sys.getsizeof(reg.__dict__)}\")\nprint(f\"Slots: {sys.getsizeof(opt)}\")",
                                description: "__slots__ μειώνει memory footprint και βελτιώνει attribute access speed"
                            },
                            java: {
                                syntax: "Records για memory-efficient data classes",
                                example: "// Traditional class\npublic class RegularPoint {\n    private final int x, y;\n    \n    public RegularPoint(int x, int y) {\n        this.x = x; this.y = y;\n    }\n    \n    // getters, equals, hashCode, toString...\n}\n\n// Record (Java 14+) - automatically optimized\npublic record OptimizedPoint(int x, int y) {\n    // Compiler generates constructor, getters, equals, hashCode, toString\n    // Memory efficient representation\n}\n\n// Value classes (future Java) will provide even better optimization",
                                description: "Records παρέχουν memory-efficient immutable data classes"
                            },
                            tags: ["memory", "optimization", "slots"]
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
