document.getElementById('login-button')
    .addEventListener('click', function (event) {
        event.preventDefault()
        const accountNumber = document.getElementById('account-number').value;
        const pin = document.getElementById('pin').value;
        const convertedPin = parseInt(pin)
        if(accountNumber.length == 11){
            if(convertedPin === 1234){
                window.location.href = 'second.html'
            }else {
                alert('enter a valid pin')
            }
        }else{
            alert('Enter Mobile Number properly')
        }
    })