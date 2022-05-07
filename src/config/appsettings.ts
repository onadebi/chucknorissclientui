const appsettings = {
    baseUrl: 'https://chucknorrisapp.azurewebsites.net/api/',

    functions: {
        ToSentenceUpper(text: string) {
            return text[0].toUpperCase() + text.slice(1);
        }
    }
}

export default appsettings;