"""
replace place holder 
[<!-- input -->](./path/to/a/markdown/file)
with actual file content
"""

import os
import shutil
import re

def remove_contents(folder):
    for item in os.listdir(folder):
        item_path = os.path.join(folder, item)
        if os.path.isfile(item_path):
            os.remove(item_path)
        elif os.path.isdir(item_path):
            shutil.rmtree(item_path)

def copy_directory(src, dest):
    try:
        shutil.copytree(src, dest, dirs_exist_ok=True)
    except TypeError:
        # For Python versions < 3.8, fall back to manual directory traversal and copying
        if not os.path.exists(dest):
            os.makedirs(dest)
        for item in os.listdir(src):
            src_item = os.path.join(src, item)
            dest_item = os.path.join(dest, item)
            if os.path.isdir(src_item):
                copy_directory(src_item, dest_item)
            else:
                shutil.copy2(src_item, dest_item)


def replace_placeholders(folder):
    for root, dirs, files in os.walk(folder):
        for file in files:
            if file.endswith('.md'):
                file_path = os.path.join(root, file)
                with open(file_path, 'r', encoding='utf-8') as f:
                    file_contents = f.read()
                
                placeholders = re.findall(r'\[<!-- input -->\]\((.+?)\)', file_contents)
                if placeholders:
                    for placeholder in placeholders:
                        target_file = os.path.join(folder, placeholder)
                        if os.path.isfile(target_file):
                            with open(target_file, 'r', encoding='utf-8') as target:
                                target_contents = target.read()
                            file_contents = file_contents.replace(f'[<!-- input -->]({placeholder})', target_contents)
                        else:
                            print(f"Warning: Target file {target_file} not found.")
                            
                    with open(file_path, 'w', encoding='utf-8') as f:
                        f.write(file_contents)

src_folder = 'src'
docs_folder = 'docs'

# Remove contents of docs folder
remove_contents(docs_folder)

# Copy contents of src folder to docs folder
copy_directory(src_folder, docs_folder)

# Replace placeholders in markdown files in docs folder
replace_placeholders(docs_folder)

print("Task completed successfully.")
