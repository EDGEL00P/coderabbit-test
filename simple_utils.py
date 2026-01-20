# simple_utils.py - A tiny utility library

def reverse_string(text):
    """
    Reverses the characters in a string.
    
    Returns:
        reversed_text (str): The input string with characters in reverse order.
    """
    return text[::-1]

def count_words(sentence):
    """
    Count words in a sentence.
    
    Splits the input on any whitespace and counts the resulting tokens.
    
    Parameters:
        sentence (str): The text whose words will be counted.
    
    Returns:
        int: The number of words in `sentence`.
    """
    return len(sentence.split())

def celsius_to_fahrenheit(celsius):
    """
    Convert a temperature from Celsius to Fahrenheit.
    
    Parameters:
        celsius (float): Temperature in degrees Celsius.
    
    Returns:
        float: Temperature in degrees Fahrenheit.
    """
    return (celsius * 9/5) + 32