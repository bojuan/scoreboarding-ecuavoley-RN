export function getInitialCharacters(text: string) {
    return text
        .split(/\s+/) 
        .map(word => word.charAt(0).toUpperCase())
        .join(''); 
}

