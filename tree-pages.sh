#!/bin/bash

echo "cengizhan-dogan.com/"
echo "├── app/"
echo "│   ├── page.tsx (Home)"
echo "│   ├── layout.tsx"
echo "│   ├── globals.css"
echo "│   ├── blog/"
echo "│   │   ├── page.tsx"
echo "│   │   └── [slug]/"
echo "│   │       └── page.tsx"
echo "│   ├── projects/"
echo "│   │   ├── page.tsx"
echo "│   │   └── [slug]/"
echo "│   │       └── page.tsx"
echo "│   └── publications/"
echo "│       └── page.tsx"
echo "├── components/"
find components -type f -name "*.tsx" -o -name "*.ts" | sort | while read file; do
    basename=$(basename "$file")
    echo "│   ├── $basename"
done
echo "├── lib/"
find lib -type f | sort | while read file; do
    basename=$(basename "$file")
    echo "│   └── $basename"
done
echo "├── public/"
find public -maxdepth 1 -type f | sort | while read file; do
    basename=$(basename "$file")
    echo "│   ├── $basename"
done
echo "├── styles/"
find styles -type f | sort | while read file; do
    basename=$(basename "$file")
    echo "│   └── $basename"
done
echo "├── package.json"
echo "├── tsconfig.json"
echo "├── next.config.mjs"
echo "└── README.md"
