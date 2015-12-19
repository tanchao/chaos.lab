# -*- coding: utf-8 -*-
# author: tanchao
# date: 2014-05-29

import sys

def fizz_buzz(file_name):
    with open(file_name, 'r') as test_file:
        cases = test_file.readlines()
        for case in cases:
            if len(case.split(' ')) != 3:
                print 'input error this line'
            else:

if __name__ == '__main__':
    args = sys.argv
    if len(args) == 2:
        fizz_buzz(args[1])
    else:
        print 'please run file like "python fizz.buzz.py test.file"'
