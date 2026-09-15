const db = supabase.createClient(SUPABASE_URL, SUPABASE_KEY)
const email = document.querySelector('#email')
const password = document.querySelector('#password')
const signup = document.querySelector('#sign-up-button')

signup.addEventListener('click', () => {
    const emailValue = email.value
    const passwordValue = password.value
    // console.log(emailValue, passwordValue)
})