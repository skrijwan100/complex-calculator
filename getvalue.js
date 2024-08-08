let user1 = document.getElementById("user1")

        let user2 = document.getElementById("user2")

        let btn = document.getElementById("btn")
        let output = document.getElementById("output")
        function display() {
            let a = user1.value
            a = Number.parseInt(a)
            let b = user2.value
            b = Number.parseInt(b)
            output.innerHTML = "the sum of two number is :" + (a + b)
        }
        btn.addEventListener('click', display)
