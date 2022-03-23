function animateNumber(finalNumber, delay, startNumber = 0, callback) {
    let currentNumber = startNumber
    const interval = window.setInterval(updateNumber, delay)

    function updateNumber() {
        if (currentNumber >= finalNumber) {
            clearInterval(interval)
        } else {
            currentNumber++
            callback(currentNumber)
        }
    }
}

document.addEventListener('DOMContentLoaded', function () {
    animateNumber(50000000, 1, 10249357, function (number) {
        const formattedNumber = number.toLocaleString()
        document.getElementById('transaction-count').innerText = formattedNumber
    })
    animateNumber(20000000, 1, 3159645, function (number) {
        const formattedNumber = number.toLocaleString()
        document.getElementById('customer-count').innerText = formattedNumber
    })
})


function animateNumber(finalNumber, delay, startNumber = 0, callback) {
    let currentNumber = startNumber
    const interval = window.setInterval(updateNumber, delay)

    function updateNumber() {
        if (currentNumber >= finalNumber) {
            clearInterval(interval)
        } else {
            currentNumber++
            callback(currentNumber)
        }
    }
}

document.addEventListener('DOMContentLoaded', function () {
    animateNumber(50000000, 1, 10249357, function (number) {
        const formattedNumber = number.toLocaleString()
        document.getElementById('transaction-count').innerText = formattedNumber
    })
    animateNumber(20000000, 1, 3159645, function (number) {
        const formattedNumber = number.toLocaleString()
        document.getElementById('customer-count').innerText = formattedNumber
    })
})

