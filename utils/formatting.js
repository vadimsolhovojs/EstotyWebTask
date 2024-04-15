export const trimName = (name, threshold = 10) => {
    return name.length > threshold ? `${name.substring(0, threshold)}...` : name
}