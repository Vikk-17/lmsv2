export function stringToArray(str) {
    if (!str) return [];
    return str
    .split(",")
    .map((s) => s.trim())
    .filter((s) => s.length > 0);
}
export function toSlug(str) {
    if (!str) return "";
    const slugPattern = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
    if (slugPattern.test(str)) return str;
    return str
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "") 
    .replace(/\s+/g, "-")     
    .replace(/-+/g, "-")     
    .replace(/^-+|-+$/g, "");  
}