<?php
require "../func101.php";
require "../func_base.php";
require "../db.php";
?>

<!DOCTYPE html>
<html lang="ru">

<head>
    <meta charset="UTF-8">
    <title>Отчет классного руководителя 101 группа</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="icon" href="../images/favicon.ico">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous">
    <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.9.0/css/all.css">
    <link rel="stylesheet" href="../css/app.min.css">
</head>

<body>

    <header>
        <div class="container">
            <?php
            include '../includes/title.php';
            ?>
            <div class="header__wellcome">
                <?php
                if (isset($_SESSION['logged_user'])) : ?>
                <!-- Приветствие авторизованного пользователя -->
                <?php
                    include '../includes/wellcome.php';
                    ?>
                <!-- Приветствие авторизованного пользователя -->
            </div>
        </div>
    </header>

    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <h4 class="page__title">Отчет классного руководителя 101 группы
                    <?php foreach ($result_group101 as $value) { ?>
                    <br> <?= $value['mentor_name'] ?>
                    <?php } ?>
                </h4>
                <?= $success ?>
                <button class="btn btn-success mb-1" data-toggle="modal" data-target="#Modal"><i class="fa fa-user-plus"
                        title="Добавить студента"></i></button>
                <table class="table shadow table__report" id="myTable" style="border-collapse: collapse;">
                    <thead class="thead-dark">
                        <tr height="50">
                            <th style="font-weight: 200;">№</th>
                            <th style="font-weight: 200;">Студент</th>
                            <?php foreach ($result_base_predmet_101 as $value) { ?>
                            <th title="<?= $value['predmets_name'] ?>" value="<?= $value['controle_variant'] ?>">
                                <p class="predmet__title"><?= $value['predmets_name'] ?><span class="controle_variant"
                                        hidden><?= $value['controle_variant'] ?></span></p>
                            </th>
                            <?php } ?>
                            <th style="font-weight: 200;">Действия</th>
                        </tr>
                    </thead>
                    <tbody data-name="a">
                        <?php foreach ($result as $value) { ?>
                        <tr>
                            <td id="nuber__students"></td>
                            <td class="table__students"><?= $value['students'] ?></td>
                            <td class="note" hidden><?= $value['pred_01'] ?></td>
                            <td class="note" hidden><?= $value['pred_02'] ?></td>
                            <td class="note" hidden><?= $value['pred_03'] ?></td>
                            <td class="note" hidden><?= $value['pred_04'] ?></td>
                            <td class="note" hidden><?= $value['pred_05'] ?></td>
                            <td class="note" hidden><?= $value['pred_06'] ?></td>
                            <td class="note" hidden><?= $value['pred_07'] ?></td>
                            <td class="note" hidden><?= $value['pred_08'] ?></td>
                            <td class="note" hidden><?= $value['pred_09'] ?></td>
                            <td class="note" hidden><?= $value['pred_10'] ?></td>
                            <td class="note" hidden><?= $value['pred_11'] ?></td>
                            <td class="note" hidden><?= $value['pred_12'] ?></td>
                            <td class="note" hidden><?= $value['pred_13'] ?></td>
                            <td class="note" hidden><?= $value['pred_14'] ?></td>
                            <td class="note" hidden><?= $value['pred_15'] ?></td>
                            <td class="note" hidden><?= $value['pred_16'] ?></td>
                            <td class="note" hidden><?= $value['pred_17'] ?></td>
                            <td class="note" hidden><?= $value['pred_18'] ?></td>
                            <td class="note" hidden><?= $value['pred_19'] ?></td>
                            <td class="note" hidden><?= $value['pred_20'] ?></td>
                            <td class="note" hidden><?= $value['pred_21'] ?></td>
                            <td class="note" hidden><?= $value['pred_22'] ?></td>
                            <td class="note" hidden><?= $value['pred_23'] ?></td>
                            <td class="note" hidden><?= $value['pred_24'] ?></td>
                            <td class="note" hidden><?= $value['pred_25'] ?></td>
                            <td>
                                <a href="?edit=<?= $value['id'] ?>" class="btn btn-success btn-sm btn_ed"
                                    title="Редактировать" data-toggle="modal"
                                    data-target="#editModal<?= $value['id'] ?>"><i class="fa fa-edit"></i></a>
                                <a href="?delete=<?= $value['id'] ?>" class="btn btn-danger btn-sm" title="Удалить"
                                    data-toggle="modal" data-target="#deleteModal<?= $value['id'] ?>"><i
                                        class="fa fa-trash"></i></a>
                            </td>
                        </tr>

                        <!-- Modal Edit-->
                        <div class="modal fade" id="editModal<?= $value['id'] ?>" tabindex="-1" role="dialog"
                            aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog modal-dialog-centered" role="document">
                                <div class="modal-content shadow">
                                    <div class="modal-header">
                                        <h5 class="modal-title" id="exampleModalLabel">Редактировать данные студента
                                            <?= $value['predmet'] ?></h5>
                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div class="modal-body">
                                        <form action="?id=<?= $value['id'] ?>" method="post" id="qw">
                                            <div class="form-group">
                                                <p class="edit__name" name="edit_students"
                                                    value="<?= $value['students'] ?>"><?= $value['students'] ?></p>
                                                <input type="text" class="form-control edit__pred" hidden
                                                    name="edit_students" value="<?= $value['students'] ?>">
                                            </div>
                                            <div class="form-group edit__notes" id="edit__note_01">
                                                <p>Русский язык</p>
                                                <select class="edit__note__digit" name="edit_pred_01"
                                                    value="<?= $value['pred_01'] ?>" id="">
                                                    <option value="<?= $value['pred_01'] ?>" selected hidden>
                                                        <?= $value['pred_01'] ?></option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                    <option value="4">4</option>
                                                    <option value="5">5</option>
                                                    <option value=""></option>
                                                </select>
                                            </div>
                                            <div class="form-group edit__notes" id="edit__note_02">
                                                <p>Литература</p>
                                                <select class="edit__note__digit" name="edit_pred_02"
                                                    value="<?= $value['pred_02'] ?>" id="">
                                                    <option value="<?= $value['pred_02'] ?>" selected hidden>
                                                        <?= $value['pred_02'] ?></option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                    <option value="4">4</option>
                                                    <option value="5">5</option>
                                                    <option value=""></option>
                                                </select>
                                            </div>
                                            <div class="form-group edit__notes" id="edit__note_03">
                                                <p>Иностранный язык</p>
                                                <select class="edit__note__digit" name="edit_pred_03"
                                                    value="<?= $value['pred_03'] ?>" id="">
                                                    <option value="<?= $value['pred_03'] ?>" selected hidden>
                                                        <?= $value['pred_03'] ?></option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                    <option value="4">4</option>
                                                    <option value="5">5</option>
                                                    <option value=""></option>
                                                </select>
                                            </div>
                                            <div class="form-group edit__notes" id="edit__note_04">
                                                <p>Математика</p>
                                                <select class="edit__note__digit" name="edit_pred_04"
                                                    value="<?= $value['pred_04'] ?>" id="">
                                                    <option value="<?= $value['pred_04'] ?>" selected hidden>
                                                        <?= $value['pred_04'] ?></option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                    <option value="4">4</option>
                                                    <option value="5">5</option>
                                                    <option value=""></option>
                                                </select>
                                            </div>
                                            <div class="form-group edit__notes" id="edit__note_05">
                                                <p>История</p>
                                                <select class="edit__note__digit" name="edit_pred_05"
                                                    value="<?= $value['pred_05'] ?>" id="">
                                                    <option value="<?= $value['pred_05'] ?>" selected hidden>
                                                        <?= $value['pred_05'] ?></option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                    <option value="4">4</option>
                                                    <option value="5">5</option>
                                                    <option value=""></option>
                                                </select>
                                            </div>
                                            <div class="form-group edit__notes" id="edit__note_06">
                                                <p>Физическая культура</p>
                                                <select class="edit__note__digit" name="edit_pred_06"
                                                    value="<?= $value['pred_06'] ?>" id="">
                                                    <option value="<?= $value['pred_06'] ?>" selected hidden>
                                                        <?= $value['pred_06'] ?></option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                    <option value="4">4</option>
                                                    <option value="5">5</option>
                                                    <option value=""></option>
                                                </select>
                                            </div>
                                            <div class="form-group edit__notes" id="edit__note_07">
                                                <p>Основы безопасности жизнедеятельности</p>
                                                <select class="edit__note__digit" name="edit_pred_07"
                                                    value="<?= $value['pred_07'] ?>" id="">
                                                    <option value="<?= $value['pred_07'] ?>" selected hidden>
                                                        <?= $value['pred_07'] ?></option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                    <option value="4">4</option>
                                                    <option value="5">5</option>
                                                    <option value=""></option>
                                                </select>
                                            </div>
                                            <div class="form-group edit__notes" id="edit__note_08">
                                                <p>Астрономия</p>
                                                <select class="edit__note__digit" name="edit_pred_08"
                                                    value="<?= $value['pred_08'] ?>" id="">
                                                    <option value="<?= $value['pred_08'] ?>" selected hidden>
                                                        <?= $value['pred_08'] ?></option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                    <option value="4">4</option>
                                                    <option value="5">5</option>
                                                    <option value=""></option>
                                                </select>
                                            </div>
                                            <div class="form-group edit__notes" id="edit__note_09">
                                                <p>Родной язык</p>
                                                <select class="edit__note__digit" name="edit_pred_09"
                                                    value="<?= $value['pred_09'] ?>" id="">
                                                    <option value="<?= $value['pred_09'] ?>" selected hidden>
                                                        <?= $value['pred_09'] ?></option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                    <option value="4">4</option>
                                                    <option value="5">5</option>
                                                    <option value=""></option>
                                                </select>
                                            </div>
                                            <div class="form-group edit__notes" id="edit__note_10">
                                                <p>Биология</p>
                                                <select class="edit__note__digit" name="edit_pred_10"
                                                    value="<?= $value['pred_010'] ?>" id="">
                                                    <option value="<?= $value['pred_10'] ?>" selected hidden>
                                                        <?= $value['pred_10'] ?></option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                    <option value="4">4</option>
                                                    <option value="5">5</option>
                                                    <option value=""></option>
                                                </select>
                                            </div>
                                            <div class="form-group edit__notes" id="edit__note_11">
                                                <p>География</p>
                                                <select class="edit__note__digit" name="edit_pred_11"
                                                    value="<?= $value['pred_011'] ?>" id="">
                                                    <option value="<?= $value['pred_11'] ?>" selected hidden>
                                                        <?= $value['pred_11'] ?></option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                    <option value="4">4</option>
                                                    <option value="5">5</option>
                                                    <option value=""></option>
                                                </select>
                                            </div>
                                            <div class="form-group edit__notes" id="edit__note_12">
                                                <p>Основы проектной деятельности</p>
                                                <select class="edit__note__digit" name="edit_pred_12"
                                                    value="<?= $value['pred_012'] ?>" id="">
                                                    <option value="<?= $value['pred_12'] ?>" selected hidden>
                                                        <?= $value['pred_12'] ?></option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                    <option value="4">4</option>
                                                    <option value="5">5</option>
                                                    <option value=""></option>
                                                </select>
                                            </div>

                                            <div class="modal-footer">
                                                <button type="button" class="btn btn-secondary"
                                                    data-dismiss="modal">Отмена</button>
                                                <button type="submit" name="edit-submit"
                                                    class="btn btn-primary">Обновить</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- DELETE MODAL -->
                        <div class="modal fade" id="deleteModal<?= $value['id'] ?>" tabindex="-1" role="dialog"
                            aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog modal-dialog-centered" role="document">
                                <div class="modal-content shadow">
                                    <div class="modal-header">
                                        <h5 class="modal-title" id="exampleModalLabel">Удалить студента
                                            <span><?= $value['students'] ?></span>
                                        </h5>
                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div class="modal-body">
                                        <p>После удаления данные студента будут не доступны!</p>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary"
                                            data-dismiss="modal">Отмена</button>
                                        <form action="?id=<?= $value['id'] ?>" method="post">
                                            <button type="submit" name="delete_submit"
                                                class="btn btn-danger">Удалить</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- Modal -->
                        <?php } ?>
                    </tbody>
                    <!-- <tfoot>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                    </tfoot> -->
                </table>

                <div class="article" hidden>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12">
                <div class="row">
                    <div class="col-md-6">
                        <h4>Успеваемость на группу</h4>
                        <div>
                            <p id="but">Абсолютная успеваемость: <span class="absolut__text" id="absolut">0</span></p>
                            <p>Качественная успеваемость: <span class="kach__text" id="kach">0</span></p>
                            <p id="number__group" hidden>101</p>
                            <p id="leght_st" hidden></p>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="copy__link__block">
                            <p class="copy__link__title">Ссылка на таблицу:</p>
                            <input type="text" id="myInput" value="https://shcnaider.ru/tablegroup/table101.php">
                            <div class="copy__link">
                                <a class="sup" id="copy__link" tabindex="1" href="#">Скопировать ссылку
                                    <span class='tip' id="copy__tip">
                                        Скопировать ссылку
                                    </span>
                                </a>
                            </div>
                        </div>
                        <div class="print__block">
                            <button class="btn btn-primary print__page" onClick="window.print()">
                                <i class="bi bi-printer-fill"></i> Распечатать страницу
                            </button>
                        </div>
                    </div>
                </div>
                <hr>
            </div>
            <div class="col-md-4">
                <h4 class="title__neud">Неуспевающие</h4>
                <div id="students_neud">
                    <div id="student_neud_00" class="students_2">

                    </div>
                    <div id="student_neud_01" class="students_2">

                    </div>
                    <div id="student_neud_02" class="students_2">

                    </div>
                    <div id="student_neud_03" class="students_2">

                    </div>
                    <div id="student_neud_04" class="students_2">

                    </div>
                    <div id="student_neud_05" class="students_2">

                    </div>
                    <div id="student_neud_06" class="students_2">

                    </div>
                    <div id="student_neud_07" class="students_2">

                    </div>
                    <div id="student_neud_08" class="students_2">

                    </div>
                    <div id="student_neud_09" class="students_2">

                    </div>
                    <div id="student_neud_10" class="students_2">

                    </div>
                    <div id="student_neud_11" class="students_2">

                    </div>
                    <div id="student_neud_12" class="students_2">

                    </div>
                    <div id="student_neud_13" class="students_2">

                    </div>
                    <div id="student_neud_14" class="students_2">

                    </div>
                    <div id="student_neud_15" class="students_2">

                    </div>
                    <div id="student_neud_16" class="students_2">

                    </div>
                    <div id="student_neud_17" class="students_2">

                    </div>
                    <div id="student_neud_18" class="students_2">

                    </div>
                    <div id="student_neud_19" class="students_2">

                    </div>
                    <div id="student_neud_20" class="students_2">

                    </div>
                    <div id="student_neud_21" class="students_2">

                    </div>
                    <div id="student_neud_22" class="students_2">

                    </div>
                    <div id="student_neud_23" class="students_2">

                    </div>
                    <div id="student_neud_24" class="students_2">

                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <h4 class="title__45">Успевают на 4 и 5</h4>
                <div class="hor" id="hor">
                </div>
            </div>
            <div class="col-md-4">
                <h4 class="title__5">Успевают на 5</h4>
                <div class="otl" id="otl">
                </div>
            </div>
        </div>
        <!-- Modal Добавление студента -->
        <div class="modal fade" tabindex="-1" role="dialog" id="Modal">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content shadow">
                    <div class="modal-header">
                        <h5 class="modal-title">Добавить студента</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <form action="" method="post">
                            <div class="form-group">
                                <select class="select__students" name="students" id="select__students">
                                    <?php foreach ($result_base_101 as $value) { ?>
                                    <option value="<?= $value['students_name'] ?>"><?= $value['students_name'] ?>
                                    </option>
                                    <?php } ?>
                                </select>
                            </div>
                            <hr>
                            <?php foreach ($result_base_predmet_101 as $value) { ?>
                            <div class="form-group add__predmet">
                                <p><?= $value['predmets_name'] ?></p>
                                <select name="<?= $value['predmet_code'] ?>" id="">
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="" selected></option>
                                </select>
                            </div>
                            <hr>
                            <?php } ?>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Отмена</button>
                        <button type="submit" name="submit" class="btn btn-primary">Добавить</button>
                    </div>
                    </form>
                </div>
            </div>
        </div>
        <!-- Modal Добавление студента -->
        <?php
                    include '../includes/footer.php';
        ?>

        <?php else : ?>
        <?php
                    include '../includes/not_autorise.php';
        ?>
        <?php endif; ?>

        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"
            integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous">
        </script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
            integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous">
        </script>
        <script src="../js/app.min.js"></script>
</body>

</html>