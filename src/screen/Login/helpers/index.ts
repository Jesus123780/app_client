export function emailValidator(email: string) {
    const re = /\S+@\S+\.\S+/
    if (!email) return "Email no puede estar vacio."
    if (!re.test(email)) return 'Ooops! Necesitamos una direccion email.'
    return ''
}