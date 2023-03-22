#!/usr/bin/env python

# concatenate all the .js files in the src directory, minify them,
# and write them to the dist directory

import datetime
import os
import sys
import subprocess

SRC = "./src"
DIST = "./dist"


def main():
    files = [os.path.join(SRC, f)
             for f in os.listdir(SRC) if f.endswith('.js')]
    files.sort()

    # concatenate all the files
    with open(os.path.join(DIST, 'build.js'), 'w') as outfile:
        for fname in files:
            with open(fname) as infile:
                outfile.write(infile.read())

    # replace the version number in the concatenated file with a timestamp
    with open(os.path.join(DIST, 'build.js'), 'r') as infile:
        data = infile.read()
        stamp = datetime.datetime.now().isoformat()
        data = data.replace(
            '@version XXX',
            f'@version {stamp}'
        )
        with open(os.path.join(DIST, 'build.js'), 'w') as outfile:
            outfile.write(data)

    # check if uglifyjs is installed
    try:
        subprocess.call(['uglifyjs', '-V'])
    except OSError:
        print(
            "uglifyjs not found. Please install uglifyjs. (e.g. npm install -g uglify-js)")
        sys.exit(1)

    # minify the concatenated file
    subprocess.call([
        'uglifyjs',
        '--comments', '"//"',
        '-o', os.path.join(DIST,
                    'build.min.js'), os.path.join(DIST, 'build.js')])


if __name__ == '__main__':
    main()
