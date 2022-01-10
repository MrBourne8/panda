<?php
require "db.php";
// include 'func.php';
?>

<!DOCTYPE html>
<html lang="ru">

<head>
    <meta charset="UTF-8">
    <title>ЭЛЕКТРОННЫЙ КОЛЛЕДЖ Главная</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="icon" href="images/favicon.ico">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
    <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.9.0/css/all.css">
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="css/app.min.css">
</head>

<body>
    <header>
        <div class="container">
            <!-- Логотип и название  -->
            <?php
            include 'includes/title.php';
            ?>
            <!-- Логотип и название  -->
            <div class="header__wellcome">
                <?php
                if (isset($_SESSION['logged_user'])) : ?>
                <!-- Приветствие авторизованного пользователя -->
                <?php
                    include 'includes/wellcome.php';
                    ?>
                <!-- Приветствие авторизованного пользователя -->
            </div>
        </div>
    </header>

    <section class="main-section">
        <div class="container">
            <img src="images/dest/main_img.svg" alt="Главная страница" class="main_img">
        </div>
    </section>

    <?php
    include 'includes/footer.php';
    ?>

    <?php else : ?>
    <?php
    include 'includes/not_autorise.php';
    ?>
    <?php endif; ?>


    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"
        integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous">
    </script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
        integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous">
    </script>
    <!-- <script src="js/app.min.js"></script> -->
    <script src="js/drop.js"></script>
    <script>
    var __REPLAIN_ = '7d2c69e9-5e6c-42af-a50b-47dbec7f8564';
    (function(u) {
        var s = document.createElement('script');
        s.type = 'text/javascript';
        s.async = true;
        s.src = u;
        var x = document.getElementsByTagName('script')[0];
        x.parentNode.insertBefore(s, x);
    })('https://widget.replain.cc/dist/client.js');
    </script>

</body>

</html>