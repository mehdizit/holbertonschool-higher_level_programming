#!/usr/bin/python3
"""Defines a class-checking function."""

def is_same_class(obj, a_class):
    """checks if object is exactly an instance of a_class
    Args
       obj: object
       a_class: class
    """
    if type(obj) == a_class:
        return True
    return False

