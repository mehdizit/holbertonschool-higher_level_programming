#!/usr/bin/python3
'''find peak of unsorted list of ints'''


def find_peak(list_of_integers):
    """fc"""

    if list_of_integers == []:
        return None
    for i in range(1, (len(list_of_integers) - 1)):
        if list_of_integers[i - 1] < list_of_integers[i]\
        and list_of_integers[i + 1] < list_of_integers[i]:
            return list_of_integers[i]
    return (max(list_of_integers[0], list_of_integers[-1]))
