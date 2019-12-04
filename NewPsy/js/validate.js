const form = document.getElementById('form-login');

const users = [
    {
        email: 'admin@admin',
        senha: 'adminroot'
    },

    {
        email: 'lucasficr123@gmail.com',
        senha: '123456'
    },
]

form.addEventListener('submit', function (event) {
    event.preventDefault();

    //INPUTS do usuário
    var inMail = document.getElementById('inputEmail').value;
    var inSenha = document.getElementById('inputPassword').value;

    //console.log(inMail, inSenha); - teste de valores no console

    function mailCheck() {
        if (inMail != user.email) {
            Swal.fire({
                position: 'center',
                icon: 'error',
                title: 'Algo deu errado :(',
                showConfirmButton: false,
            })
        } else {
            passCheck();
        }
    }

    function passCheck() {
        if (inSenha == user.senha) {
            // exibir um alerta ok!
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Bem-vindo ao -Nome-',
                showConfirmButton: false,
            })

            let btn = document.getElementById('btn-entrar');

            btn.setAttribute('disabled', true);

            setTimeout(function () {
                // mudar a tela ok!
                window.location.href = '../home.html';
            }, 2000);
        } else {
            Swal.fire({
                position: 'center',
                icon: 'error',
                title: 'Algo deu errado :(',
                showConfirmButton: false,
            })
        }
    }

    for (user of users) {
        mailCheck();
    }
});
