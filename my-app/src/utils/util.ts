export function stripHtmlTags(str: string) {
    return str.replace(/<[^>]*>/g, '');
}