function shortcut(str1, str2) {
    // Check if both strings are not empty
    if (str1.length > 0 && str2.length > 0) {
        // Use array and join method to concatenate initial letters
        return [str1.charAt(0).toUpperCase(), str2.charAt(0).toLowerCase()].join('');
    } else {
        // Return an empty string if either of the strings is empty
        return '';
    }
}

// Examples
console.log(shortcut("Amnesty", "International")); // 'AI'
console.log(shortcut("Hello", "world")); // 'Hw'
console.log(shortcut("", "International")); // ''
console.log(shortcut("Amnesty", "")); // ''
