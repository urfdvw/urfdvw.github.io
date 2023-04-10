import os
from urllib.parse import quote
from pathlib import Path

def find_markdown_files(directory, relative_path=''):
    md_files = []
    for entry in os.scandir(directory):
        if entry.is_file() and entry.name.endswith('.md'):
            md_files.append(os.path.join(relative_path, entry.name))
        elif entry.is_dir():
            subdir_md_files = find_markdown_files(
                entry.path,
                os.path.join(relative_path, entry.name)
            )
            if subdir_md_files:
                md_files.append((entry.name, subdir_md_files))
    return md_files

def generate_md_tree(md_files, level=0):
    md_tree = ''
    for entry in md_files:
        if isinstance(entry, tuple):
            subdir_name, subdir_files = entry
            md_tree += f"{'  ' * level}- {subdir_name}\n"
            md_tree += generate_md_tree(subdir_files, level + 1)
        else:
            file_name_without_ext = Path(entry).stem
            md_tree += f"{'  ' * level}- [{file_name_without_ext}]({quote(entry)})\n"
    return md_tree

def main():
    md_files = find_markdown_files('.')
    md_tree = generate_md_tree(md_files)

    with open('directory_tree.md', 'w') as f:
        f.write(md_tree)

if __name__ == '__main__':
    main()
