function generatePassword() {
  const length = document.getElementById('length').value;
  const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+";
  let password = "";

  for (let i = 0; i < length; i++) {
    const random = Math.floor(Math.random() * charset.length);
    password += charset[random];
  }

  document.getElementById('output').value = password;
}
