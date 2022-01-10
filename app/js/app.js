document.addEventListener("DOMContentLoaded", function () {

    var srt = 'Зачтено'

    // Создание массива таблицы
    let array = []
    let mas = []
    let table = document.querySelector("table.table__report > tbody")
    if (!table) {} else {
        let rows = table.children
        for (let i = 0; i < rows.length; i++) {
            let fields = rows[i].children
            mas.push(fields)
            let rowArray = []
            for (let j = 0; j < fields.length; j++) {
                rowArray.push(fields[j].innerHTML)
            }
            array.push(rowArray)
        }
    }
    // Создание массива таблицы



    // Создание массива студентов, заголовки таблицы
    let arrayst = []
    let tablest = document.querySelector("table.table__report > thead")
    let pred = []
    if (!tablest) {} else {
        let rowsPred = tablest.children
        for (let i = 0; i < rowsPred.length; i++) {
            let fieldst = rowsPred[i].children
            let rowArrayst = []
            pred = fieldst
            for (let j = 0; j < fieldst.length; j++) {
                rowArrayst.push(fieldst[j].innerHTML)
            }
            arrayst.push(rowArrayst)
        }
    }


    if (!array) {} else {
        for (let i = 0; i < array.length; i++) {
            array[i].length = arrayst[0].length - 1
        }
    }

    if (!arrayst[0]) {} else {
        for (let i = 0; i < arrayst[0].length - 1; i++) {
            let m0 = mas[0]
            if (!m0) {} else {
                mas[0][i].removeAttribute('hidden')
            }
            let m1 = mas[1]
            if (!m1) {} else {
                mas[1][i].removeAttribute('hidden')
            }
            let m2 = mas[2]
            if (!m2) {} else {
                mas[2][i].removeAttribute('hidden')
            }
            let m3 = mas[3]
            if (!m3) {} else {
                mas[3][i].removeAttribute('hidden')
            }
            let m4 = mas[4]
            if (!m4) {} else {
                mas[4][i].removeAttribute('hidden')
            }
            let m5 = mas[5]
            if (!m5) {} else {
                mas[5][i].removeAttribute('hidden')
            }
            let m6 = mas[6]
            if (!m6) {} else {
                mas[6][i].removeAttribute('hidden')
            }
            let m7 = mas[7]
            if (!m7) {} else {
                mas[7][i].removeAttribute('hidden')
            }
            let m8 = mas[8]
            if (!m8) {} else {
                mas[8][i].removeAttribute('hidden')
            }
            let m9 = mas[9]
            if (!m9) {} else {
                mas[9][i].removeAttribute('hidden')
            }
            let m10 = mas[10]
            if (!m10) {} else {
                mas[10][i].removeAttribute('hidden')
            }
            let m11 = mas[11]
            if (!m11) {} else {
                mas[11][i].removeAttribute('hidden')
            }
            let m12 = mas[12]
            if (!m12) {} else {
                mas[12][i].removeAttribute('hidden')
            }
            let m13 = mas[13]
            if (!m13) {} else {
                mas[13][i].removeAttribute('hidden')
            }
            let m14 = mas[14]
            if (!m14) {} else {
                mas[14][i].removeAttribute('hidden')
            }
            let m15 = mas[15]
            if (!m15) {} else {
                mas[15][i].removeAttribute('hidden')
            }
            let m16 = mas[16]
            if (!m16) {} else {
                mas[16][i].removeAttribute('hidden')
            }
            let m17 = mas[17]
            if (!m17) {} else {
                mas[17][i].removeAttribute('hidden')
            }
            let m18 = mas[18]
            if (!m18) {} else {
                mas[18][i].removeAttribute('hidden')
            }
            let m19 = mas[19]
            if (!m19) {} else {
                mas[19][i].removeAttribute('hidden')
            }
            let m20 = mas[20]
            if (!m20) {} else {
                mas[20][i].removeAttribute('hidden')
            }
            let m21 = mas[21]
            if (!m21) {} else {
                mas[21][i].removeAttribute('hidden')
            }
            let m22 = mas[22]
            if (!m22) {} else {
                mas[22][i].removeAttribute('hidden')
            }
            let m23 = mas[23]
            if (!m23) {} else {
                mas[23][i].removeAttribute('hidden')
            }
            let m24 = mas[24]
            if (!m24) {} else {
                mas[24][i].removeAttribute('hidden')
            }
            let m25 = mas[25]
            if (!m25) {} else {
                mas[25][i].removeAttribute('hidden')
            }
            let m26 = mas[26]
            if (!m26) {} else {
                mas[26][i].removeAttribute('hidden')
            }
            let m27 = mas[27]
            if (!m27) {} else {
                mas[27][i].removeAttribute('hidden')
            }
            let m28 = mas[28]
            if (!m28) {} else {
                mas[28][i].removeAttribute('hidden')
            }
            let m29 = mas[29]
            if (!m29) {} else {
                mas[29][i].removeAttribute('hidden')
            }
            let m30 = mas[30]
            if (!m30) {} else {
                mas[30][i].removeAttribute('hidden')
            }
            let m31 = mas[31]
            if (!m31) {} else {
                mas[31][i].removeAttribute('hidden')
            }
            let m32 = mas[32]
            if (!m32) {} else {
                mas[32][i].removeAttribute('hidden')
            }
            let m33 = mas[33]
            if (!m33) {} else {
                mas[33][i].removeAttribute('hidden')
            }
            let m34 = mas[34]
            if (!m34) {} else {
                mas[34][i].removeAttribute('hidden')
            }
            let m35 = mas[35]
            if (!m35) {} else {
                mas[35][i].removeAttribute('hidden')
            }
        }
    }


    $('.table tbody tr').each(function (i) {
        var number = i + 1;
        $(this).find('td:first').text(number + ".");
    });
    $('.table__base__predmers tbody tr').each(function (i) {
        var number = i + 1;
        $(this).find('td:first').text(number + ".");
    });


    // Создание массива студентов, заголовки таблицы
    let ar0 = array[0]
    let ar1 = array[1]
    let ar2 = array[2]
    let ar3 = array[3]
    let ar4 = array[4]
    let ar5 = array[5]
    let ar6 = array[6]
    let ar7 = array[7]
    let ar8 = array[8]
    let ar9 = array[9]
    let ar10 = array[10]
    let ar11 = array[11]
    let ar12 = array[12]
    let ar13 = array[13]
    let ar14 = array[14]
    let ar15 = array[15]
    let ar16 = array[16]
    let ar17 = array[17]
    let ar18 = array[18]
    let ar19 = array[19]
    let ar20 = array[20]
    let ar21 = array[21]
    let ar22 = array[22]
    let ar23 = array[23]
    let ar24 = array[24]
    let ar25 = array[25]
    let ar26 = array[26]
    let ar27 = array[27]
    let ar28 = array[28]
    let ar29 = array[29]
    let ar30 = array[30]
    let ar31 = array[31]
    let ar32 = array[32]
    let ar33 = array[33]
    let ar34 = array[34]
    let ar35 = array[35]
    let studentsNeud = document.getElementById('students_neud')




    // Вывод студентов с двойками по первой строке
    if (!ar0) {} else {
        let elemBlockStudNeud = document.createElement('div')
        elemBlockStudNeud.classList.add('wrap_block_neud_1')
        studentsNeud.appendChild(elemBlockStudNeud)
        let studentNeud = document.createElement('div')
        studentNeud.classList.add('student_neud_1')
        elemBlockStudNeud.appendChild(studentNeud)

        let blockPredmets = document.createElement('div')
        blockPredmets.classList.add('block_pred_neud')
        elemBlockStudNeud.appendChild(blockPredmets)
        for (let i = 0; i < ar0.length; i++) {
            if (ar0[i] == '2' || ar0[i] == 'Не зачтено') {
                let studentNeudName = document.createElement('p')
                studentNeudName.classList.add('student__bold')
                studentNeudName.textContent = ar0[1]
                studentNeud.appendChild(studentNeudName)
                studentNeudName.setAttribute('hidden', 'ok')
                elemBlockStudNeud.classList.add('student_neud')

                let predNeudName = document.createElement('p')
                blockPredmets.appendChild(predNeudName)
                predNeudName.classList.add('predmet__title')
                predNeudName.textContent = pred[i].title
                let controle = document.createElement('span')
                predNeudName.appendChild(controle)
                controle.textContent = pred[i].getAttribute('value')
                controle.classList.add('controle_variant')
                controle.setAttribute('hidden', 'ok')

                document.querySelector('.student_neud_1 > .student__bold').removeAttribute('hidden', 'ok')
            }
        }
    }
    // Вывод предметов с двойками по первой строке
    // Вывод предметов с двойками по второй строке
    if (!ar1) {} else {
        let elemBlockStudNeud = document.createElement('div')
        elemBlockStudNeud.classList.add('wrap_block_neud_2')
        studentsNeud.appendChild(elemBlockStudNeud)
        let studentNeud = document.createElement('div')
        studentNeud.classList.add('student_neud_2')
        elemBlockStudNeud.appendChild(studentNeud)

        let blockPredmets = document.createElement('div')
        blockPredmets.classList.add('block_pred_neud')
        elemBlockStudNeud.appendChild(blockPredmets)
        for (let i = 0; i < ar1.length; i++) {
            if (ar1[i] == '2' || ar1[i] == 'Не зачтено') {
                let studentNeudName = document.createElement('p')
                studentNeudName.classList.add('student__bold')
                studentNeudName.textContent = ar1[1]
                studentNeud.appendChild(studentNeudName)
                studentNeudName.setAttribute('hidden', 'ok')
                elemBlockStudNeud.classList.add('student_neud')

                let predNeudName = document.createElement('p')
                blockPredmets.appendChild(predNeudName)
                predNeudName.classList.add('predmet__title')
                predNeudName.textContent = pred[i].title
                let controle = document.createElement('span')
                predNeudName.appendChild(controle)
                controle.textContent = pred[i].getAttribute('value')
                controle.classList.add('controle_variant')
                controle.setAttribute('hidden', 'ok')

                document.querySelector('.student_neud_2 > .student__bold').removeAttribute('hidden', 'ok')
            }
        }

    }
    // Вывод предметов с двойками по второй строке
    if (!ar2) {} else {
        let elemBlockStudNeud = document.createElement('div')
        elemBlockStudNeud.classList.add('wrap_block_neud_3')
        studentsNeud.appendChild(elemBlockStudNeud)
        let studentNeud = document.createElement('div')
        studentNeud.classList.add('student_neud_3')
        elemBlockStudNeud.appendChild(studentNeud)

        let blockPredmets = document.createElement('div')
        blockPredmets.classList.add('block_pred_neud')
        elemBlockStudNeud.appendChild(blockPredmets)
        for (let i = 0; i < ar2.length; i++) {
            if (ar2[i] == '2' || ar2[i] == 'Не зачтено') {
                let studentNeudName = document.createElement('p')
                studentNeudName.classList.add('student__bold')
                studentNeudName.textContent = ar2[1]
                studentNeud.appendChild(studentNeudName)
                studentNeudName.setAttribute('hidden', 'ok')
                elemBlockStudNeud.classList.add('student_neud')

                let predNeudName = document.createElement('p')
                blockPredmets.appendChild(predNeudName)
                predNeudName.classList.add('predmet__title')
                predNeudName.textContent = pred[i].title
                let controle = document.createElement('span')
                predNeudName.appendChild(controle)
                controle.textContent = pred[i].getAttribute('value')
                controle.classList.add('controle_variant')
                controle.setAttribute('hidden', 'ok')

                document.querySelector('.student_neud_3 > .student__bold').removeAttribute('hidden', 'ok')
            }
        }
    }
    if (!ar3) {} else {
        let elemBlockStudNeud = document.createElement('div')
        elemBlockStudNeud.classList.add('wrap_block_neud_4')
        studentsNeud.appendChild(elemBlockStudNeud)
        let studentNeud = document.createElement('div')
        studentNeud.classList.add('student_neud_4')
        elemBlockStudNeud.appendChild(studentNeud)

        let blockPredmets = document.createElement('div')
        blockPredmets.classList.add('block_pred_neud')
        elemBlockStudNeud.appendChild(blockPredmets)
        for (let i = 0; i < ar3.length; i++) {
            if (ar3[i] == '2' || ar3[i] == 'Не зачтено') {
                let studentNeudName = document.createElement('p')
                studentNeudName.classList.add('student__bold')
                studentNeudName.textContent = ar3[1]
                studentNeud.appendChild(studentNeudName)
                studentNeudName.setAttribute('hidden', 'ok')
                elemBlockStudNeud.classList.add('student_neud')

                let predNeudName = document.createElement('p')
                blockPredmets.appendChild(predNeudName)
                predNeudName.classList.add('predmet__title')
                predNeudName.textContent = pred[i].title
                let controle = document.createElement('span')
                predNeudName.appendChild(controle)
                controle.textContent = pred[i].getAttribute('value')
                controle.classList.add('controle_variant')
                controle.setAttribute('hidden', 'ok')

                document.querySelector('.student_neud_4 > .student__bold').removeAttribute('hidden', 'ok')
            }
        }
    }
    if (!ar4) {} else {
        let elemBlockStudNeud = document.createElement('div')
        elemBlockStudNeud.classList.add('wrap_block_neud5')
        studentsNeud.appendChild(elemBlockStudNeud)
        let studentNeud = document.createElement('div')
        studentNeud.classList.add('student_neud_5')
        elemBlockStudNeud.appendChild(studentNeud)

        let blockPredmets = document.createElement('div')
        blockPredmets.classList.add('block_pred_neud')
        elemBlockStudNeud.appendChild(blockPredmets)
        for (let i = 0; i < ar4.length; i++) {
            if (ar4[i] == '2' || ar4[i] == 'Не зачтено') {
                let studentNeudName = document.createElement('p')
                studentNeudName.classList.add('student__bold')
                studentNeudName.textContent = ar4[1]
                studentNeud.appendChild(studentNeudName)
                studentNeudName.setAttribute('hidden', 'ok')
                elemBlockStudNeud.classList.add('student_neud')

                let predNeudName = document.createElement('p')
                blockPredmets.appendChild(predNeudName)
                predNeudName.classList.add('predmet__title')
                predNeudName.textContent = pred[i].title
                let controle = document.createElement('span')
                predNeudName.appendChild(controle)
                controle.textContent = pred[i].getAttribute('value')
                controle.classList.add('controle_variant')
                controle.setAttribute('hidden', 'ok')

                document.querySelector('.student_neud_5 > .student__bold').removeAttribute('hidden', 'ok')
            }
        }
    }
    if (!ar5) {} else {
        let elemBlockStudNeud = document.createElement('div')
        elemBlockStudNeud.classList.add('wrap_block_neud_6')
        studentsNeud.appendChild(elemBlockStudNeud)
        let studentNeud = document.createElement('div')
        studentNeud.classList.add('student_neud_6')
        elemBlockStudNeud.appendChild(studentNeud)

        let blockPredmets = document.createElement('div')
        blockPredmets.classList.add('block_pred_neud')
        elemBlockStudNeud.appendChild(blockPredmets)
        for (let i = 0; i < ar5.length; i++) {
            if (ar5[i] == '2' || ar5[i] == 'Не зачтено') {
                let studentNeudName = document.createElement('p')
                studentNeudName.classList.add('student__bold')
                studentNeudName.textContent = ar5[1]
                studentNeud.appendChild(studentNeudName)
                studentNeudName.setAttribute('hidden', 'ok')
                elemBlockStudNeud.classList.add('student_neud')

                let predNeudName = document.createElement('p')
                blockPredmets.appendChild(predNeudName)
                predNeudName.classList.add('predmet__title')
                predNeudName.textContent = pred[i].title
                let controle = document.createElement('span')
                predNeudName.appendChild(controle)
                controle.textContent = pred[i].getAttribute('value')
                controle.classList.add('controle_variant')
                controle.setAttribute('hidden', 'ok')

                document.querySelector('.student_neud_6 > .student__bold').removeAttribute('hidden', 'ok')
            }
        }
    }
    if (!ar6) {} else {
        let elemBlockStudNeud = document.createElement('div')
        elemBlockStudNeud.classList.add('wrap_block_neud_7')
        studentsNeud.appendChild(elemBlockStudNeud)
        let studentNeud = document.createElement('div')
        studentNeud.classList.add('student_neud_7')
        elemBlockStudNeud.appendChild(studentNeud)

        let blockPredmets = document.createElement('div')
        blockPredmets.classList.add('block_pred_neud')
        elemBlockStudNeud.appendChild(blockPredmets)
        for (let i = 0; i < ar6.length; i++) {
            if (ar6[i] == '2' || ar6[i] == 'Не зачтено') {
                let studentNeudName = document.createElement('p')
                studentNeudName.classList.add('student__bold')
                studentNeudName.textContent = ar6[1]
                studentNeud.appendChild(studentNeudName)
                studentNeudName.setAttribute('hidden', 'ok')
                elemBlockStudNeud.classList.add('student_neud')

                let predNeudName = document.createElement('p')
                blockPredmets.appendChild(predNeudName)
                predNeudName.classList.add('predmet__title')
                predNeudName.textContent = pred[i].title
                let controle = document.createElement('span')
                predNeudName.appendChild(controle)
                controle.textContent = pred[i].getAttribute('value')
                controle.classList.add('controle_variant')
                controle.setAttribute('hidden', 'ok')

                document.querySelector('.student_neud_7 > .student__bold').removeAttribute('hidden', 'ok')
            }
        }
    }
    if (!ar7) {} else {
        let elemBlockStudNeud = document.createElement('div')
        elemBlockStudNeud.classList.add('wrap_block_neud_8')
        studentsNeud.appendChild(elemBlockStudNeud)
        let studentNeud = document.createElement('div')
        studentNeud.classList.add('student_neud_8')
        elemBlockStudNeud.appendChild(studentNeud)

        let blockPredmets = document.createElement('div')
        blockPredmets.classList.add('block_pred_neud')
        elemBlockStudNeud.appendChild(blockPredmets)
        for (let i = 0; i < ar7.length; i++) {
            if (ar7[i] == '2' || ar7[i] == 'Не зачтено') {
                let studentNeudName = document.createElement('p')
                studentNeudName.classList.add('student__bold')
                studentNeudName.textContent = ar7[1]
                studentNeud.appendChild(studentNeudName)
                studentNeudName.setAttribute('hidden', 'ok')
                elemBlockStudNeud.classList.add('student_neud')

                let predNeudName = document.createElement('p')
                blockPredmets.appendChild(predNeudName)
                predNeudName.classList.add('predmet__title')
                predNeudName.textContent = pred[i].title
                let controle = document.createElement('span')
                predNeudName.appendChild(controle)
                controle.textContent = pred[i].getAttribute('value')
                controle.classList.add('controle_variant')
                controle.setAttribute('hidden', 'ok')

                document.querySelector('.student_neud_8 > .student__bold').removeAttribute('hidden', 'ok')
            }
        }
    }
    if (!ar8) {} else {
        let elemBlockStudNeud = document.createElement('div')
        elemBlockStudNeud.classList.add('wrap_block_neud_9')
        studentsNeud.appendChild(elemBlockStudNeud)
        let studentNeud = document.createElement('div')
        studentNeud.classList.add('student_neud_9')
        elemBlockStudNeud.appendChild(studentNeud)

        let blockPredmets = document.createElement('div')
        blockPredmets.classList.add('block_pred_neud')
        elemBlockStudNeud.appendChild(blockPredmets)
        for (let i = 0; i < ar8.length; i++) {
            if (ar8[i] == '2' || ar8[i] == 'Не зачтено') {
                let studentNeudName = document.createElement('p')
                studentNeudName.classList.add('student__bold')
                studentNeudName.textContent = ar8[1]
                studentNeud.appendChild(studentNeudName)
                studentNeudName.setAttribute('hidden', 'ok')
                elemBlockStudNeud.classList.add('student_neud')

                let predNeudName = document.createElement('p')
                blockPredmets.appendChild(predNeudName)
                predNeudName.classList.add('predmet__title')
                predNeudName.textContent = pred[i].title
                let controle = document.createElement('span')
                predNeudName.appendChild(controle)
                controle.textContent = pred[i].getAttribute('value')
                controle.classList.add('controle_variant')
                controle.setAttribute('hidden', 'ok')

                document.querySelector('.student_neud_9 > .student__bold').removeAttribute('hidden', 'ok')
            }
        }
    }
    if (!ar9) {} else {
        let elemBlockStudNeud = document.createElement('div')
        elemBlockStudNeud.classList.add('wrap_block_neud_10')
        studentsNeud.appendChild(elemBlockStudNeud)
        let studentNeud = document.createElement('div')
        studentNeud.classList.add('student_neud_10')
        elemBlockStudNeud.appendChild(studentNeud)

        let blockPredmets = document.createElement('div')
        blockPredmets.classList.add('block_pred_neud')
        elemBlockStudNeud.appendChild(blockPredmets)
        for (let i = 0; i < ar9.length; i++) {
            if (ar9[i] == '2' || ar9[i] == 'Не зачтено') {
                let studentNeudName = document.createElement('p')
                studentNeudName.classList.add('student__bold')
                studentNeudName.textContent = ar9[1]
                studentNeud.appendChild(studentNeudName)
                studentNeudName.setAttribute('hidden', 'ok')
                elemBlockStudNeud.classList.add('student_neud')

                let predNeudName = document.createElement('p')
                blockPredmets.appendChild(predNeudName)
                predNeudName.classList.add('predmet__title')
                predNeudName.textContent = pred[i].title
                let controle = document.createElement('span')
                predNeudName.appendChild(controle)
                controle.textContent = pred[i].getAttribute('value')
                controle.classList.add('controle_variant')
                controle.setAttribute('hidden', 'ok')

                document.querySelector('.student_neud_10 > .student__bold').removeAttribute('hidden', 'ok')
            }
        }
    }
    if (!ar10) {} else {
        let elemBlockStudNeud = document.createElement('div')
        elemBlockStudNeud.classList.add('wrap_block_neud_11')
        studentsNeud.appendChild(elemBlockStudNeud)
        let studentNeud = document.createElement('div')
        studentNeud.classList.add('student_neud_11')
        elemBlockStudNeud.appendChild(studentNeud)

        let blockPredmets = document.createElement('div')
        blockPredmets.classList.add('block_pred_neud')
        elemBlockStudNeud.appendChild(blockPredmets)
        for (let i = 0; i < ar10.length; i++) {
            if (ar10[i] == '2' || ar10[i] == 'Не зачтено') {
                let studentNeudName = document.createElement('p')
                studentNeudName.classList.add('student__bold')
                studentNeudName.textContent = ar10[1]
                studentNeud.appendChild(studentNeudName)
                studentNeudName.setAttribute('hidden', 'ok')
                elemBlockStudNeud.classList.add('student_neud')

                let predNeudName = document.createElement('p')
                blockPredmets.appendChild(predNeudName)
                predNeudName.classList.add('predmet__title')
                predNeudName.textContent = pred[i].title
                let controle = document.createElement('span')
                predNeudName.appendChild(controle)
                controle.textContent = pred[i].getAttribute('value')
                controle.classList.add('controle_variant')
                controle.setAttribute('hidden', 'ok')

                document.querySelector('.student_neud_11 > .student__bold').removeAttribute('hidden', 'ok')
            }
        }
    }
    if (!ar11) {} else {
        let elemBlockStudNeud = document.createElement('div')
        elemBlockStudNeud.classList.add('wrap_block_neud_12')
        studentsNeud.appendChild(elemBlockStudNeud)
        let studentNeud = document.createElement('div')
        studentNeud.classList.add('student_neud_12')
        elemBlockStudNeud.appendChild(studentNeud)

        let blockPredmets = document.createElement('div')
        blockPredmets.classList.add('block_pred_neud')
        elemBlockStudNeud.appendChild(blockPredmets)
        for (let i = 0; i < ar11.length; i++) {
            if (ar11[i] == '2' || ar11[i] == 'Не зачтено') {
                let studentNeudName = document.createElement('p')
                studentNeudName.classList.add('student__bold')
                studentNeudName.textContent = ar11[1]
                studentNeud.appendChild(studentNeudName)
                studentNeudName.setAttribute('hidden', 'ok')
                elemBlockStudNeud.classList.add('student_neud')

                let predNeudName = document.createElement('p')
                blockPredmets.appendChild(predNeudName)
                predNeudName.classList.add('predmet__title')
                predNeudName.textContent = pred[i].title
                let controle = document.createElement('span')
                predNeudName.appendChild(controle)
                controle.textContent = pred[i].getAttribute('value')
                controle.classList.add('controle_variant')
                controle.setAttribute('hidden', 'ok')

                document.querySelector('.student_neud_12 > .student__bold').removeAttribute('hidden', 'ok')
            }
        }
    }
    if (!ar12) {} else {
        let elemBlockStudNeud = document.createElement('div')
        elemBlockStudNeud.classList.add('wrap_block_neud_13')
        studentsNeud.appendChild(elemBlockStudNeud)
        let studentNeud = document.createElement('div')
        studentNeud.classList.add('student_neud_13')
        elemBlockStudNeud.appendChild(studentNeud)

        let blockPredmets = document.createElement('div')
        blockPredmets.classList.add('block_pred_neud')
        elemBlockStudNeud.appendChild(blockPredmets)
        for (let i = 0; i < ar12.length; i++) {
            if (ar12[i] == '2' || ar12[i] == 'Не зачтено') {
                let studentNeudName = document.createElement('p')
                studentNeudName.classList.add('student__bold')
                studentNeudName.textContent = ar12[1]
                studentNeud.appendChild(studentNeudName)
                studentNeudName.setAttribute('hidden', 'ok')
                elemBlockStudNeud.classList.add('student_neud')

                let predNeudName = document.createElement('p')
                blockPredmets.appendChild(predNeudName)
                predNeudName.classList.add('predmet__title')
                predNeudName.textContent = pred[i].title
                let controle = document.createElement('span')
                predNeudName.appendChild(controle)
                controle.textContent = pred[i].getAttribute('value')
                controle.classList.add('controle_variant')
                controle.setAttribute('hidden', 'ok')

                document.querySelector('.student_neud_13 > .student__bold').removeAttribute('hidden', 'ok')
            }
        }
    }
    if (!ar13) {} else {
        let elemBlockStudNeud = document.createElement('div')
        elemBlockStudNeud.classList.add('wrap_block_neud_14')
        studentsNeud.appendChild(elemBlockStudNeud)
        let studentNeud = document.createElement('div')
        studentNeud.classList.add('student_neud_14')
        elemBlockStudNeud.appendChild(studentNeud)

        let blockPredmets = document.createElement('div')
        blockPredmets.classList.add('block_pred_neud')
        elemBlockStudNeud.appendChild(blockPredmets)
        for (let i = 0; i < ar13.length; i++) {
            if (ar13[i] == '2' || ar13[i] == 'Не зачтено') {
                let studentNeudName = document.createElement('p')
                studentNeudName.classList.add('student__bold')
                studentNeudName.textContent = ar13[1]
                studentNeud.appendChild(studentNeudName)
                studentNeudName.setAttribute('hidden', 'ok')
                elemBlockStudNeud.classList.add('student_neud')

                let predNeudName = document.createElement('p')
                blockPredmets.appendChild(predNeudName)
                predNeudName.classList.add('predmet__title')
                predNeudName.textContent = pred[i].title
                let controle = document.createElement('span')
                predNeudName.appendChild(controle)
                controle.textContent = pred[i].getAttribute('value')
                controle.classList.add('controle_variant')
                controle.setAttribute('hidden', 'ok')
                document.querySelector('.student_neud_14 > .student__bold').removeAttribute('hidden', 'ok')
            }
        }
    }
    if (!ar14) {} else {
        let elemBlockStudNeud = document.createElement('div')
        elemBlockStudNeud.classList.add('wrap_block_neud_15')
        studentsNeud.appendChild(elemBlockStudNeud)
        let studentNeud = document.createElement('div')
        studentNeud.classList.add('student_neud_15')
        elemBlockStudNeud.appendChild(studentNeud)

        let blockPredmets = document.createElement('div')
        blockPredmets.classList.add('block_pred_neud')
        elemBlockStudNeud.appendChild(blockPredmets)
        for (let i = 0; i < ar14.length; i++) {
            if (ar14[i] == '2' || ar14[i] == 'Не зачтено') {
                let studentNeudName = document.createElement('p')
                studentNeudName.classList.add('student__bold')
                studentNeudName.textContent = ar14[1]
                studentNeud.appendChild(studentNeudName)
                studentNeudName.setAttribute('hidden', 'ok')
                elemBlockStudNeud.classList.add('student_neud')

                let predNeudName = document.createElement('p')
                blockPredmets.appendChild(predNeudName)
                predNeudName.classList.add('predmet__title')
                predNeudName.textContent = pred[i].title
                let controle = document.createElement('span')
                predNeudName.appendChild(controle)
                controle.textContent = pred[i].getAttribute('value')
                controle.classList.add('controle_variant')
                controle.setAttribute('hidden', 'ok')

                document.querySelector('.student_neud_15 > .student__bold').removeAttribute('hidden', 'ok')
            }
        }
    }
    if (!ar15) {} else {
        let elemBlockStudNeud = document.createElement('div')
        elemBlockStudNeud.classList.add('wrap_block_neud_16')
        studentsNeud.appendChild(elemBlockStudNeud)
        let studentNeud = document.createElement('div')
        studentNeud.classList.add('student_neud_16')
        elemBlockStudNeud.appendChild(studentNeud)

        let blockPredmets = document.createElement('div')
        blockPredmets.classList.add('block_pred_neud')
        elemBlockStudNeud.appendChild(blockPredmets)
        for (let i = 0; i < ar15.length; i++) {
            if (ar15[i] == '2' || ar15[i] == 'Не зачтено') {
                let studentNeudName = document.createElement('p')
                studentNeudName.classList.add('student__bold')
                studentNeudName.textContent = ar15[1]
                studentNeud.appendChild(studentNeudName)
                studentNeudName.setAttribute('hidden', 'ok')
                elemBlockStudNeud.classList.add('student_neud')

                let predNeudName = document.createElement('p')
                blockPredmets.appendChild(predNeudName)
                predNeudName.classList.add('predmet__title')
                predNeudName.textContent = pred[i].title
                let controle = document.createElement('span')
                predNeudName.appendChild(controle)
                controle.textContent = pred[i].getAttribute('value')
                controle.classList.add('controle_variant')
                controle.setAttribute('hidden', 'ok')

                document.querySelector('.student_neud_16 > .student__bold').removeAttribute('hidden', 'ok')
            }
        }
    }
    if (!ar16) {} else {
        let elemBlockStudNeud = document.createElement('div')
        elemBlockStudNeud.classList.add('wrap_block_neud_17')
        studentsNeud.appendChild(elemBlockStudNeud)
        let studentNeud = document.createElement('div')
        studentNeud.classList.add('student_neud_17')
        elemBlockStudNeud.appendChild(studentNeud)

        let blockPredmets = document.createElement('div')
        blockPredmets.classList.add('block_pred_neud')
        elemBlockStudNeud.appendChild(blockPredmets)
        for (let i = 0; i < ar16.length; i++) {
            if (ar16[i] == '2' || ar16[i] == 'Не зачтено') {
                let studentNeudName = document.createElement('p')
                studentNeudName.classList.add('student__bold')
                studentNeudName.textContent = ar16[1]
                studentNeud.appendChild(studentNeudName)
                studentNeudName.setAttribute('hidden', 'ok')
                elemBlockStudNeud.classList.add('student_neud')

                let predNeudName = document.createElement('p')
                blockPredmets.appendChild(predNeudName)
                predNeudName.classList.add('predmet__title')
                predNeudName.textContent = pred[i].title
                let controle = document.createElement('span')
                predNeudName.appendChild(controle)
                controle.textContent = pred[i].getAttribute('value')
                controle.classList.add('controle_variant')
                controle.setAttribute('hidden', 'ok')

                document.querySelector('.student_neud_17 > .student__bold').removeAttribute('hidden', 'ok')
            }
        }
    }
    if (!ar17) {} else {
        let elemBlockStudNeud = document.createElement('div')
        elemBlockStudNeud.classList.add('wrap_block_neud_18')
        studentsNeud.appendChild(elemBlockStudNeud)
        let studentNeud = document.createElement('div')
        studentNeud.classList.add('student_neud_18')
        elemBlockStudNeud.appendChild(studentNeud)

        let blockPredmets = document.createElement('div')
        blockPredmets.classList.add('block_pred_neud')
        elemBlockStudNeud.appendChild(blockPredmets)
        for (let i = 0; i < ar17.length; i++) {
            if (ar17[i] == '2' || ar17[i] == 'Не зачтено') {
                let studentNeudName = document.createElement('p')
                studentNeudName.classList.add('student__bold')
                studentNeudName.textContent = ar17[1]
                studentNeud.appendChild(studentNeudName)
                studentNeudName.setAttribute('hidden', 'ok')
                elemBlockStudNeud.classList.add('student_neud')

                let predNeudName = document.createElement('p')
                blockPredmets.appendChild(predNeudName)
                predNeudName.classList.add('predmet__title')
                predNeudName.textContent = pred[i].title
                let controle = document.createElement('span')
                predNeudName.appendChild(controle)
                controle.textContent = pred[i].getAttribute('value')
                controle.classList.add('controle_variant')
                controle.setAttribute('hidden', 'ok')

                document.querySelector('.student_neud_18 > .student__bold').removeAttribute('hidden', 'ok')
            }
        }
    }
    if (!ar18) {} else {
        let elemBlockStudNeud = document.createElement('div')
        elemBlockStudNeud.classList.add('wrap_block_neud_19')
        studentsNeud.appendChild(elemBlockStudNeud)
        let studentNeud = document.createElement('div')
        studentNeud.classList.add('student_neud_19')
        elemBlockStudNeud.appendChild(studentNeud)

        let blockPredmets = document.createElement('div')
        blockPredmets.classList.add('block_pred_neud')
        elemBlockStudNeud.appendChild(blockPredmets)
        for (let i = 0; i < ar18.length; i++) {
            if (ar18[i] == '2' || ar18[i] == 'Не зачтено') {
                let studentNeudName = document.createElement('p')
                studentNeudName.classList.add('student__bold')
                studentNeudName.textContent = ar18[1]
                studentNeud.appendChild(studentNeudName)
                studentNeudName.setAttribute('hidden', 'ok')
                elemBlockStudNeud.classList.add('student_neud')

                let predNeudName = document.createElement('p')
                blockPredmets.appendChild(predNeudName)
                predNeudName.classList.add('predmet__title')
                predNeudName.textContent = pred[i].title
                let controle = document.createElement('span')
                predNeudName.appendChild(controle)
                controle.textContent = pred[i].getAttribute('value')
                controle.classList.add('controle_variant')
                controle.setAttribute('hidden', 'ok')

                document.querySelector('.student_neud_19 > .student__bold').removeAttribute('hidden', 'ok')
            }
        }
    }
    if (!ar19) {} else {
        let elemBlockStudNeud = document.createElement('div')
        elemBlockStudNeud.classList.add('wrap_block_neud_20')
        studentsNeud.appendChild(elemBlockStudNeud)
        let studentNeud = document.createElement('div')
        studentNeud.classList.add('student_neud_20')
        elemBlockStudNeud.appendChild(studentNeud)

        let blockPredmets = document.createElement('div')
        blockPredmets.classList.add('block_pred_neud')
        elemBlockStudNeud.appendChild(blockPredmets)
        for (let i = 0; i < ar19.length; i++) {
            if (ar19[i] == '2' || ar19[i] == 'Не зачтено') {
                let studentNeudName = document.createElement('p')
                studentNeudName.classList.add('student__bold')
                studentNeudName.textContent = ar19[1]
                studentNeud.appendChild(studentNeudName)
                studentNeudName.setAttribute('hidden', 'ok')
                elemBlockStudNeud.classList.add('student_neud')

                let predNeudName = document.createElement('p')
                blockPredmets.appendChild(predNeudName)
                predNeudName.classList.add('predmet__title')
                predNeudName.textContent = pred[i].title
                let controle = document.createElement('span')
                predNeudName.appendChild(controle)
                controle.textContent = pred[i].getAttribute('value')
                controle.classList.add('controle_variant')
                controle.setAttribute('hidden', 'ok')

                document.querySelector('.student_neud_20 > .student__bold').removeAttribute('hidden', 'ok')
            }
        }
    }
    if (!ar20) {} else {
        let elemBlockStudNeud = document.createElement('div')
        elemBlockStudNeud.classList.add('wrap_block_neud_21')
        studentsNeud.appendChild(elemBlockStudNeud)
        let studentNeud = document.createElement('div')
        studentNeud.classList.add('student_neud_21')
        elemBlockStudNeud.appendChild(studentNeud)

        let blockPredmets = document.createElement('div')
        blockPredmets.classList.add('block_pred_neud')
        elemBlockStudNeud.appendChild(blockPredmets)
        for (let i = 0; i < ar20.length; i++) {
            if (ar20[i] == '2' || ar20[i] == 'Не зачтено') {
                let studentNeudName = document.createElement('p')
                studentNeudName.classList.add('student__bold')
                studentNeudName.textContent = ar20[1]
                studentNeud.appendChild(studentNeudName)
                studentNeudName.setAttribute('hidden', 'ok')
                elemBlockStudNeud.classList.add('student_neud')

                let predNeudName = document.createElement('p')
                blockPredmets.appendChild(predNeudName)
                predNeudName.classList.add('predmet__title')
                predNeudName.textContent = pred[i].title
                let controle = document.createElement('span')
                predNeudName.appendChild(controle)
                controle.textContent = pred[i].getAttribute('value')
                controle.classList.add('controle_variant')
                controle.setAttribute('hidden', 'ok')

                document.querySelector('.student_neud_21 > .student__bold').removeAttribute('hidden', 'ok')
            }
        }
    }
    if (!ar21) {} else {
        let elemBlockStudNeud = document.createElement('div')
        elemBlockStudNeud.classList.add('wrap_block_neud_22')
        studentsNeud.appendChild(elemBlockStudNeud)
        let studentNeud = document.createElement('div')
        studentNeud.classList.add('student_neud_22')
        elemBlockStudNeud.appendChild(studentNeud)

        let blockPredmets = document.createElement('div')
        blockPredmets.classList.add('block_pred_neud')
        elemBlockStudNeud.appendChild(blockPredmets)
        for (let i = 0; i < ar21.length; i++) {
            if (ar21[i] == '2' || ar21[i] == 'Не зачтено') {
                let studentNeudName = document.createElement('p')
                studentNeudName.classList.add('student__bold')
                studentNeudName.textContent = ar21[1]
                studentNeud.appendChild(studentNeudName)
                studentNeudName.setAttribute('hidden', 'ok')
                elemBlockStudNeud.classList.add('student_neud')

                let predNeudName = document.createElement('p')
                blockPredmets.appendChild(predNeudName)
                predNeudName.classList.add('predmet__title')
                predNeudName.textContent = pred[i].title
                let controle = document.createElement('span')
                predNeudName.appendChild(controle)
                controle.textContent = pred[i].getAttribute('value')
                controle.classList.add('controle_variant')
                controle.setAttribute('hidden', 'ok')

                document.querySelector('.student_neud_22 > .student__bold').removeAttribute('hidden', 'ok')
            }
        }
    }
    if (!ar22) {} else {
        let elemBlockStudNeud = document.createElement('div')
        elemBlockStudNeud.classList.add('wrap_block_neud_23')
        studentsNeud.appendChild(elemBlockStudNeud)
        let studentNeud = document.createElement('div')
        studentNeud.classList.add('student_neud_23')
        elemBlockStudNeud.appendChild(studentNeud)

        let blockPredmets = document.createElement('div')
        blockPredmets.classList.add('block_pred_neud')
        elemBlockStudNeud.appendChild(blockPredmets)
        for (let i = 0; i < ar22.length; i++) {
            if (ar22[i] == '2' || ar22[i] == 'Не зачтено') {
                let studentNeudName = document.createElement('p')
                studentNeudName.classList.add('student__bold')
                studentNeudName.textContent = ar22[1]
                studentNeud.appendChild(studentNeudName)
                studentNeudName.setAttribute('hidden', 'ok')
                elemBlockStudNeud.classList.add('student_neud')

                let predNeudName = document.createElement('p')
                blockPredmets.appendChild(predNeudName)
                predNeudName.classList.add('predmet__title')
                predNeudName.textContent = pred[i].title
                let controle = document.createElement('span')
                predNeudName.appendChild(controle)
                controle.textContent = pred[i].getAttribute('value')
                controle.classList.add('controle_variant')
                controle.setAttribute('hidden', 'ok')

                document.querySelector('.student_neud_23 > .student__bold').removeAttribute('hidden', 'ok')
            }
        }
    }
    if (!ar23) {} else {
        let elemBlockStudNeud = document.createElement('div')
        elemBlockStudNeud.classList.add('wrap_block_neud_24')
        studentsNeud.appendChild(elemBlockStudNeud)
        let studentNeud = document.createElement('div')
        studentNeud.classList.add('student_neud_24')
        elemBlockStudNeud.appendChild(studentNeud)

        let blockPredmets = document.createElement('div')
        blockPredmets.classList.add('block_pred_neud')
        elemBlockStudNeud.appendChild(blockPredmets)
        for (let i = 0; i < ar23.length; i++) {
            if (ar23[i] == '2' || ar23[i] == 'Не зачтено') {
                let studentNeudName = document.createElement('p')
                studentNeudName.classList.add('student__bold')
                studentNeudName.textContent = ar23[1]
                studentNeud.appendChild(studentNeudName)
                studentNeudName.setAttribute('hidden', 'ok')
                elemBlockStudNeud.classList.add('student_neud')

                let predNeudName = document.createElement('p')
                blockPredmets.appendChild(predNeudName)
                predNeudName.classList.add('predmet__title')
                predNeudName.textContent = pred[i].title
                let controle = document.createElement('span')
                predNeudName.appendChild(controle)
                controle.textContent = pred[i].getAttribute('value')
                controle.classList.add('controle_variant')
                controle.setAttribute('hidden', 'ok')

                document.querySelector('.student_neud_24 > .student__bold').removeAttribute('hidden', 'ok')
            }
        }
    }
    if (!ar24) {} else {
        let elemBlockStudNeud = document.createElement('div')
        elemBlockStudNeud.classList.add('wrap_block_neud_25')
        studentsNeud.appendChild(elemBlockStudNeud)
        let studentNeud = document.createElement('div')
        studentNeud.classList.add('student_neud_25')
        elemBlockStudNeud.appendChild(studentNeud)

        let blockPredmets = document.createElement('div')
        blockPredmets.classList.add('block_pred_neud')
        elemBlockStudNeud.appendChild(blockPredmets)
        for (let i = 0; i < ar24.length; i++) {
            if (ar24[i] == '2' || ar24[i] == 'Не зачтено') {
                let studentNeudName = document.createElement('p')
                studentNeudName.classList.add('student__bold')
                studentNeudName.textContent = ar24[1]
                studentNeud.appendChild(studentNeudName)
                studentNeudName.setAttribute('hidden', 'ok')
                elemBlockStudNeud.classList.add('student_neud')

                let predNeudName = document.createElement('p')
                blockPredmets.appendChild(predNeudName)
                predNeudName.classList.add('predmet__title')
                predNeudName.textContent = pred[i].title
                let controle = document.createElement('span')
                predNeudName.appendChild(controle)
                controle.textContent = pred[i].getAttribute('value')
                controle.classList.add('controle_variant')
                controle.setAttribute('hidden', 'ok')

                document.querySelector('.student_neud_25 > .student__bold').removeAttribute('hidden', 'ok')
            }
        }
    }
    if (!ar25) {} else {
        let elemBlockStudNeud = document.createElement('div')
        elemBlockStudNeud.classList.add('wrap_block_neud_26')
        studentsNeud.appendChild(elemBlockStudNeud)
        let studentNeud = document.createElement('div')
        studentNeud.classList.add('student_neud_26')
        elemBlockStudNeud.appendChild(studentNeud)

        let blockPredmets = document.createElement('div')
        blockPredmets.classList.add('block_pred_neud')
        elemBlockStudNeud.appendChild(blockPredmets)
        for (let i = 0; i < ar25.length; i++) {
            if (ar25[i] == '2' || ar25[i] == 'Не зачтено') {
                let studentNeudName = document.createElement('p')
                studentNeudName.classList.add('student__bold')
                studentNeudName.textContent = ar25[1]
                studentNeud.appendChild(studentNeudName)
                studentNeudName.setAttribute('hidden', 'ok')
                elemBlockStudNeud.classList.add('student_neud')

                let predNeudName = document.createElement('p')
                blockPredmets.appendChild(predNeudName)
                predNeudName.classList.add('predmet__title')
                predNeudName.textContent = pred[i].title
                let controle = document.createElement('span')
                predNeudName.appendChild(controle)
                controle.textContent = pred[i].getAttribute('value')
                controle.classList.add('controle_variant')
                controle.setAttribute('hidden', 'ok')

                document.querySelector('.student_neud_26 > .student__bold').removeAttribute('hidden', 'ok')
            }
        }
    }
    if (!ar26) {} else {
        let elemBlockStudNeud = document.createElement('div')
        elemBlockStudNeud.classList.add('wrap_block_neud_27')
        studentsNeud.appendChild(elemBlockStudNeud)
        let studentNeud = document.createElement('div')
        studentNeud.classList.add('student_neud_27')
        elemBlockStudNeud.appendChild(studentNeud)

        let blockPredmets = document.createElement('div')
        blockPredmets.classList.add('block_pred_neud')
        elemBlockStudNeud.appendChild(blockPredmets)
        for (let i = 0; i < ar26.length; i++) {
            if (ar26[i] == '2' || ar26[i] == 'Не зачтено') {
                let studentNeudName = document.createElement('p')
                studentNeudName.classList.add('student__bold')
                studentNeudName.textContent = ar26[1]
                studentNeud.appendChild(studentNeudName)
                studentNeudName.setAttribute('hidden', 'ok')
                elemBlockStudNeud.classList.add('student_neud')

                let predNeudName = document.createElement('p')
                blockPredmets.appendChild(predNeudName)
                predNeudName.classList.add('predmet__title')
                predNeudName.textContent = pred[i].title
                let controle = document.createElement('span')
                predNeudName.appendChild(controle)
                controle.textContent = pred[i].getAttribute('value')
                controle.classList.add('controle_variant')
                controle.setAttribute('hidden', 'ok')

                document.querySelector('.student_neud_27 > .student__bold').removeAttribute('hidden', 'ok')
            }
        }
    }
    if (!ar27) {} else {
        let elemBlockStudNeud = document.createElement('div')
        elemBlockStudNeud.classList.add('wrap_block_neud_28')
        studentsNeud.appendChild(elemBlockStudNeud)
        let studentNeud = document.createElement('div')
        studentNeud.classList.add('student_neud_28')
        elemBlockStudNeud.appendChild(studentNeud)

        let blockPredmets = document.createElement('div')
        blockPredmets.classList.add('block_pred_neud')
        elemBlockStudNeud.appendChild(blockPredmets)
        for (let i = 0; i < ar27.length; i++) {
            if (ar27[i] == '2' || ar27[i] == 'Не зачтено') {
                let studentNeudName = document.createElement('p')
                studentNeudName.classList.add('student__bold')
                studentNeudName.textContent = ar27[1]
                studentNeud.appendChild(studentNeudName)
                studentNeudName.setAttribute('hidden', 'ok')
                elemBlockStudNeud.classList.add('student_neud')

                let predNeudName = document.createElement('p')
                blockPredmets.appendChild(predNeudName)
                predNeudName.classList.add('predmet__title')
                predNeudName.textContent = pred[i].title
                let controle = document.createElement('span')
                predNeudName.appendChild(controle)
                controle.textContent = pred[i].getAttribute('value')
                controle.classList.add('controle_variant')
                controle.setAttribute('hidden', 'ok')

                document.querySelector('.student_neud_28 > .student__bold').removeAttribute('hidden', 'ok')
            }
        }
    }
    if (!ar28) {} else {
        let elemBlockStudNeud = document.createElement('div')
        elemBlockStudNeud.classList.add('wrap_block_neud_29')
        studentsNeud.appendChild(elemBlockStudNeud)
        let studentNeud = document.createElement('div')
        studentNeud.classList.add('student_neud_29')
        elemBlockStudNeud.appendChild(studentNeud)

        let blockPredmets = document.createElement('div')
        blockPredmets.classList.add('block_pred_neud')
        elemBlockStudNeud.appendChild(blockPredmets)
        for (let i = 0; i < ar28.length; i++) {
            if (ar28[i] == '2' || ar28[i] == 'Не зачтено') {
                let studentNeudName = document.createElement('p')
                studentNeudName.classList.add('student__bold')
                studentNeudName.textContent = ar28[1]
                studentNeud.appendChild(studentNeudName)
                studentNeudName.setAttribute('hidden', 'ok')
                elemBlockStudNeud.classList.add('student_neud')

                let predNeudName = document.createElement('p')
                blockPredmets.appendChild(predNeudName)
                predNeudName.classList.add('predmet__title')
                predNeudName.textContent = pred[i].title
                let controle = document.createElement('span')
                predNeudName.appendChild(controle)
                controle.textContent = pred[i].getAttribute('value')
                controle.classList.add('controle_variant')
                controle.setAttribute('hidden', 'ok')

                document.querySelector('.student_neud_29 > .student__bold').removeAttribute('hidden', 'ok')
            }
        }
    }
    if (!ar29) {} else {
        let elemBlockStudNeud = document.createElement('div')
        elemBlockStudNeud.classList.add('wrap_block_neud_30')
        studentsNeud.appendChild(elemBlockStudNeud)
        let studentNeud = document.createElement('div')
        studentNeud.classList.add('student_neud_30')
        elemBlockStudNeud.appendChild(studentNeud)

        let blockPredmets = document.createElement('div')
        blockPredmets.classList.add('block_pred_neud')
        elemBlockStudNeud.appendChild(blockPredmets)
        for (let i = 0; i < ar29.length; i++) {
            if (ar29[i] == '2' || ar29[i] == 'Не зачтено') {
                let studentNeudName = document.createElement('p')
                studentNeudName.classList.add('student__bold')
                studentNeudName.textContent = ar29[1]
                studentNeud.appendChild(studentNeudName)
                studentNeudName.setAttribute('hidden', 'ok')
                elemBlockStudNeud.classList.add('student_neud')

                let predNeudName = document.createElement('p')
                blockPredmets.appendChild(predNeudName)
                predNeudName.classList.add('predmet__title')
                predNeudName.textContent = pred[i].title
                let controle = document.createElement('span')
                predNeudName.appendChild(controle)
                controle.textContent = pred[i].getAttribute('value')
                controle.classList.add('controle_variant')
                controle.setAttribute('hidden', 'ok')

                document.querySelector('.student_neud_30 > .student__bold').removeAttribute('hidden', 'ok')
            }
        }
    }
    if (!ar30) {} else {
        let elemBlockStudNeud = document.createElement('div')
        elemBlockStudNeud.classList.add('wrap_block_neud_31')
        studentsNeud.appendChild(elemBlockStudNeud)
        let studentNeud = document.createElement('div')
        studentNeud.classList.add('student_neud_31')
        elemBlockStudNeud.appendChild(studentNeud)

        let blockPredmets = document.createElement('div')
        blockPredmets.classList.add('block_pred_neud')
        elemBlockStudNeud.appendChild(blockPredmets)
        for (let i = 0; i < ar30.length; i++) {
            if (ar30[i] == '2' || ar30[i] == 'Не зачтено') {
                let studentNeudName = document.createElement('p')
                studentNeudName.classList.add('student__bold')
                studentNeudName.textContent = ar30[1]
                studentNeud.appendChild(studentNeudName)
                studentNeudName.setAttribute('hidden', 'ok')
                elemBlockStudNeud.classList.add('student_neud')

                let predNeudName = document.createElement('p')
                blockPredmets.appendChild(predNeudName)
                predNeudName.classList.add('predmet__title')
                predNeudName.textContent = pred[i].title
                let controle = document.createElement('span')
                predNeudName.appendChild(controle)
                controle.textContent = pred[i].getAttribute('value')
                controle.classList.add('controle_variant')
                controle.setAttribute('hidden', 'ok')
                document.querySelector('.student_neud_31 > .student__bold').removeAttribute('hidden', 'ok')
            }
        }

    }
    if (!ar31) {} else {
        let elemBlockStudNeud = document.createElement('div')
        elemBlockStudNeud.classList.add('wrap_block_neud_32')
        studentsNeud.appendChild(elemBlockStudNeud)
        let studentNeud = document.createElement('div')
        studentNeud.classList.add('student_neud_32')
        elemBlockStudNeud.appendChild(studentNeud)

        let blockPredmets = document.createElement('div')
        blockPredmets.classList.add('block_pred_neud')
        elemBlockStudNeud.appendChild(blockPredmets)
        for (let i = 0; i < ar31.length; i++) {
            if (ar31[i] == '2' || ar31[i] == 'Не зачтено') {
                let studentNeudName = document.createElement('p')
                studentNeudName.classList.add('student__bold')
                studentNeudName.textContent = ar31[1]
                studentNeud.appendChild(studentNeudName)
                studentNeudName.setAttribute('hidden', 'ok')
                elemBlockStudNeud.classList.add('student_neud')

                let predNeudName = document.createElement('p')
                blockPredmets.appendChild(predNeudName)
                predNeudName.classList.add('predmet__title')
                predNeudName.textContent = pred[i].title
                let controle = document.createElement('span')
                predNeudName.appendChild(controle)
                controle.textContent = pred[i].getAttribute('value')
                controle.classList.add('controle_variant')
                controle.setAttribute('hidden', 'ok')

                document.querySelector('.student_neud_32 > .student__bold').removeAttribute('hidden', 'ok')
            }
        }
    }
    if (!ar32) {} else {
        let elemBlockStudNeud = document.createElement('div')
        elemBlockStudNeud.classList.add('wrap_block_neud_33')
        studentsNeud.appendChild(elemBlockStudNeud)
        let studentNeud = document.createElement('div')
        studentNeud.classList.add('student_neud_33')
        elemBlockStudNeud.appendChild(studentNeud)

        let blockPredmets = document.createElement('div')
        blockPredmets.classList.add('block_pred_neud')
        elemBlockStudNeud.appendChild(blockPredmets)
        for (let i = 0; i < ar32.length; i++) {
            if (ar32[i] == '2' || ar32[i] == 'Не зачтено') {
                let studentNeudName = document.createElement('p')
                studentNeudName.classList.add('student__bold')
                studentNeudName.textContent = ar32[1]
                studentNeud.appendChild(studentNeudName)
                studentNeudName.setAttribute('hidden', 'ok')
                elemBlockStudNeud.classList.add('student_neud')

                let predNeudName = document.createElement('p')
                blockPredmets.appendChild(predNeudName)
                predNeudName.classList.add('predmet__title')
                predNeudName.textContent = pred[i].title
                let controle = document.createElement('span')
                predNeudName.appendChild(controle)
                controle.textContent = pred[i].getAttribute('value')
                controle.classList.add('controle_variant')
                controle.setAttribute('hidden', 'ok')

                document.querySelector('.student_neud_33 > .student__bold').removeAttribute('hidden', 'ok')
            }
        }
    }







    // Вывод отличников и хорошистов
    if (array.length <= 0) {} else {
        for (let i = 0; i < ar0.length; i++) {
            if (ar0[i] == 'Зачтено') {
                ar0[i] = 5
            }
        }
        var middle = ar0.slice(2);
        if (middle.every(elem => elem >= 5)) {
            let elem = document.createElement("p")
            elem.classList.add('student__otl')
            var elemText = document.createTextNode(array[0][1])
            elem.appendChild(elemText)
            document.getElementById('otl').appendChild(elem)
        }
        if (middle.every(elem => elem >= 4)) {
            let elem = document.createElement("p")
            elem.classList.add('student__hor')
            elem.id = 'student__hor__0'
            var elemText = document.createTextNode(array[0][1])
            elem.appendChild(elemText)
            document.getElementById('hor').appendChild(elem)
            if (middle.every(elem => elem >= 5)) {
                document.getElementById('student__hor__0').setAttribute('hidden', 'ok')
            }
        }
    }
    if (array.length <= 1) {} else {
        for (let i = 0; i < ar1.length; i++) {
            if (ar1[i] == 'Зачтено') {
                ar1[i] = 5
            }
        }
        var middle = ar1.slice(2);
        if (middle.every(elem => elem >= 5)) {
            let elem = document.createElement("p")
            elem.classList.add('student__otl')
            var elemText = document.createTextNode(array[1][1])
            elem.appendChild(elemText)
            document.getElementById('otl').appendChild(elem)
        }
        if (middle.every(elem => elem >= 4)) {
            let elem = document.createElement("p")
            elem.classList.add('student__hor')
            elem.id = 'student__hor__1'
            var elemText = document.createTextNode(array[1][1])
            elem.appendChild(elemText)
            document.getElementById('hor').appendChild(elem)
            if (middle.every(elem => elem >= 5)) {
                document.getElementById('student__hor__1').setAttribute('hidden', 'ok')
            }
        }
    }
    if (array.length <= 2) {} else {
        for (let i = 0; i < ar2.length; i++) {
            if (ar2[i] == 'Зачтено') {
                ar2[i] = 5
            }
        }
        var middle = ar2.slice(2);
        if (middle.every(elem => elem >= 5)) {
            let elem = document.createElement("p")
            elem.classList.add('student__otl')
            var elemText = document.createTextNode(array[2][1])
            elem.appendChild(elemText)
            document.getElementById('otl').appendChild(elem)
        }
        if (middle.every(elem => elem >= 4)) {
            let elem = document.createElement("p")
            elem.classList.add('student__hor')
            elem.id = 'student__hor__2'
            var elemText = document.createTextNode(array[2][1])
            elem.appendChild(elemText)
            document.getElementById('hor').appendChild(elem)
            if (middle.every(elem => elem >= 5)) {
                document.getElementById('student__hor__2').setAttribute('hidden', 'ok')
            }
        }
    }
    if (array.length <= 3) {} else {
        for (let i = 0; i < ar3.length; i++) {
            if (ar3[i] == 'Зачтено') {
                ar3[i] = 5
            }
        }
        var middle = ar3.slice(2);
        if (middle.every(elem => elem >= 5)) {
            let elem = document.createElement("p")
            elem.classList.add('student__otl')
            var elemText = document.createTextNode(array[3][1])
            elem.appendChild(elemText)
            document.getElementById('otl').appendChild(elem)
        }
        if (middle.every(elem => elem >= 4)) {
            let elem = document.createElement("p")
            elem.classList.add('student__hor')
            elem.id = 'student__hor__3'
            var elemText = document.createTextNode(array[3][1])
            elem.appendChild(elemText)
            document.getElementById('hor').appendChild(elem)
            if (middle.every(elem => elem >= 5)) {
                document.getElementById('student__hor__3').setAttribute('hidden', 'ok')
            }
        }
    }
    if (array.length <= 4) {} else {
        for (let i = 0; i < ar4.length; i++) {
            if (ar4[i] == 'Зачтено') {
                ar4[i] = 5
            }
        }
        var middle = ar4.slice(2);
        if (middle.every(elem => elem >= 5)) {
            let elem = document.createElement("p")
            elem.classList.add('student__otl')
            var elemText = document.createTextNode(array[4][1])
            elem.appendChild(elemText)
            document.getElementById('otl').appendChild(elem)
        }
        if (middle.every(elem => elem >= 4)) {
            let elem = document.createElement("p")
            elem.classList.add('student__hor')
            elem.id = 'student__hor__4'
            var elemText = document.createTextNode(array[4][1])
            elem.appendChild(elemText)
            document.getElementById('hor').appendChild(elem)
            if (middle.every(elem => elem >= 5)) {
                document.getElementById('student__hor__4').setAttribute('hidden', 'ok')
            }
        }
    }
    if (array.length <= 5) {} else {
        for (let i = 0; i < ar5.length; i++) {
            if (ar5[i] == 'Зачтено') {
                ar5[i] = 5
            }
        }
        var middle = ar5.slice(2);
        if (middle.every(elem => elem >= 5)) {
            let elem = document.createElement("p")
            elem.classList.add('student__otl')
            var elemText = document.createTextNode(array[5][1])
            elem.appendChild(elemText)
            document.getElementById('otl').appendChild(elem)
        }
        if (middle.every(elem => elem >= 4)) {
            let elem = document.createElement("p")
            elem.classList.add('student__hor')
            elem.id = 'student__hor__5'
            var elemText = document.createTextNode(array[5][1])
            elem.appendChild(elemText)
            document.getElementById('hor').appendChild(elem)
            if (middle.every(elem => elem >= 5)) {
                document.getElementById('student__hor__5').setAttribute('hidden', 'ok')
            }
        }
    }
    if (array.length <= 6) {} else {
        for (let i = 0; i < ar6.length; i++) {
            if (ar6[i] == 'Зачтено') {
                ar6[i] = 5
            }
        }
        var middle = ar6.slice(2);
        if (middle.every(elem => elem >= 5)) {
            let elem = document.createElement("p")
            elem.classList.add('student__otl')
            var elemText = document.createTextNode(array[6][1])
            elem.appendChild(elemText)
            document.getElementById('otl').appendChild(elem)
        }
        if (middle.every(elem => elem >= 4)) {
            let elem = document.createElement("p")
            elem.classList.add('student__hor')
            elem.id = 'student__hor__6'
            var elemText = document.createTextNode(array[6][1])
            elem.appendChild(elemText)
            document.getElementById('hor').appendChild(elem)
            if (middle.every(elem => elem >= 5)) {
                document.getElementById('student__hor__6').setAttribute('hidden', 'ok')
            }
        }
    }
    if (array.length <= 7) {} else {
        for (let i = 0; i < ar7.length; i++) {
            if (ar7[i] == 'Зачтено') {
                ar7[i] = 5
            }
        }
        var middle = ar7.slice(2);
        if (middle.every(elem => elem >= 5)) {
            let elem = document.createElement("p")
            elem.classList.add('student__otl')
            var elemText = document.createTextNode(array[7][1])
            elem.appendChild(elemText)
            document.getElementById('otl').appendChild(elem)
        }
        if (middle.every(elem => elem >= 4)) {
            let elem = document.createElement("p")
            elem.classList.add('student__hor')
            elem.id = 'student__hor__7'
            var elemText = document.createTextNode(array[7][1])
            elem.appendChild(elemText)
            document.getElementById('hor').appendChild(elem)
            if (middle.every(elem => elem >= 5)) {
                document.getElementById('student__hor__7').setAttribute('hidden', 'ok')
            }
        }
    }
    if (array.length <= 8) {} else {
        for (let i = 0; i < ar8.length; i++) {
            if (ar8[i] == 'Зачтено') {
                ar8[i] = 5
            }
        }
        var middle = ar8.slice(2);
        if (middle.every(elem => elem >= 5)) {
            let elem = document.createElement("p")
            elem.classList.add('student__otl')
            var elemText = document.createTextNode(array[8][1])
            elem.appendChild(elemText)
            document.getElementById('otl').appendChild(elem)
        }
        if (middle.every(elem => elem >= 4)) {
            let elem = document.createElement("p")
            elem.classList.add('student__hor')
            elem.id = 'student__hor__8'
            var elemText = document.createTextNode(array[8][1])
            elem.appendChild(elemText)
            document.getElementById('hor').appendChild(elem)
            if (middle.every(elem => elem >= 5)) {
                document.getElementById('student__hor__8').setAttribute('hidden', 'ok')
            }
        }
    }
    if (array.length <= 9) {} else {
        for (let i = 0; i < ar9.length; i++) {
            if (ar9[i] == 'Зачтено') {
                ar9[i] = 5
            }
        }
        var middle = ar9.slice(2);
        if (middle.every(elem => elem >= 5)) {
            let elem = document.createElement("p")
            elem.classList.add('student__otl')
            var elemText = document.createTextNode(array[9][1])
            elem.appendChild(elemText)
            document.getElementById('otl').appendChild(elem)
        }
        if (middle.every(elem => elem >= 4)) {
            let elem = document.createElement("p")
            elem.classList.add('student__hor')
            elem.id = 'student__hor__9'
            var elemText = document.createTextNode(array[9][1])
            elem.appendChild(elemText)
            document.getElementById('hor').appendChild(elem)
            if (middle.every(elem => elem >= 5)) {
                document.getElementById('student__hor__9').setAttribute('hidden', 'ok')
            }
        }
    }
    if (array.length <= 10) {} else {
        for (let i = 0; i < ar10.length; i++) {
            if (ar10[i] == 'Зачтено') {
                ar10[i] = 5
            }
        }
        var middle = ar10.slice(2);
        if (middle.every(elem => elem >= 5)) {
            let elem = document.createElement("p")
            elem.classList.add('student__otl')
            var elemText = document.createTextNode(array[10][1])
            elem.appendChild(elemText)
            document.getElementById('otl').appendChild(elem)
        }
        if (middle.every(elem => elem >= 4)) {
            let elem = document.createElement("p")
            elem.classList.add('student__hor')
            elem.id = 'student__hor__10'
            var elemText = document.createTextNode(array[10][1])
            elem.appendChild(elemText)
            document.getElementById('hor').appendChild(elem)
            if (middle.every(elem => elem >= 5)) {
                document.getElementById('student__hor__10').setAttribute('hidden', 'ok')
            }
        }
    }
    if (array.length <= 11) {} else {
        for (let i = 0; i < ar11.length; i++) {
            if (ar11[i] == 'Зачтено') {
                ar11[i] = 5
            }
        }
        var middle = ar11.slice(2);
        if (middle.every(elem => elem >= 5)) {
            let elem = document.createElement("p")
            elem.classList.add('student__otl')
            var elemText = document.createTextNode(array[11][1])
            elem.appendChild(elemText)
            document.getElementById('otl').appendChild(elem)
        }
        if (middle.every(elem => elem >= 4)) {
            let elem = document.createElement("p")
            elem.classList.add('student__hor')
            elem.id = 'student__hor__11'
            var elemText = document.createTextNode(array[11][1])
            elem.appendChild(elemText)
            document.getElementById('hor').appendChild(elem)
            if (middle.every(elem => elem >= 5)) {
                document.getElementById('student__hor__11').setAttribute('hidden', 'ok')
            }
        }
    }
    if (array.length <= 12) {} else {
        for (let i = 0; i < ar12.length; i++) {
            if (ar12[i] == 'Зачтено') {
                ar12[i] = 5
            }
        }
        var middle = ar12.slice(2);
        if (middle.every(elem => elem >= 5)) {
            let elem = document.createElement("p")
            elem.classList.add('student__otl')
            var elemText = document.createTextNode(array[12][1])
            elem.appendChild(elemText)
            document.getElementById('otl').appendChild(elem)
        }
        if (middle.every(elem => elem >= 4)) {
            let elem = document.createElement("p")
            elem.classList.add('student__hor')
            elem.id = 'student__hor__12'
            var elemText = document.createTextNode(array[12][1])
            elem.appendChild(elemText)
            document.getElementById('hor').appendChild(elem)
            if (middle.every(elem => elem >= 5)) {
                document.getElementById('student__hor__12').setAttribute('hidden', 'ok')
            }
        }
    }
    if (array.length <= 13) {} else {
        for (let i = 0; i < ar13.length; i++) {
            if (ar13[i] == 'Зачтено') {
                ar13[i] = 5
            }
        }
        var middle = ar13.slice(2);
        if (middle.every(elem => elem >= 5)) {
            let elem = document.createElement("p")
            elem.classList.add('student__otl')
            var elemText = document.createTextNode(array[13][1])
            elem.appendChild(elemText)
            document.getElementById('otl').appendChild(elem)
        }
        if (middle.every(elem => elem >= 4)) {
            let elem = document.createElement("p")
            elem.classList.add('student__hor')
            elem.id = 'student__hor__13'
            var elemText = document.createTextNode(array[13][1])
            elem.appendChild(elemText)
            document.getElementById('hor').appendChild(elem)
            if (middle.every(elem => elem >= 5)) {
                document.getElementById('student__hor__13').setAttribute('hidden', 'ok')
            }
        }
    }
    if (array.length <= 14) {} else {
        for (let i = 0; i < ar14.length; i++) {
            if (ar14[i] == 'Зачтено') {
                ar14[i] = 5
            }
        }
        var middle = ar14.slice(2);
        if (middle.every(elem => elem >= 5)) {
            let elem = document.createElement("p")
            elem.classList.add('student__otl')
            var elemText = document.createTextNode(array[14][1])
            elem.appendChild(elemText)
            document.getElementById('otl').appendChild(elem)
        }
        if (middle.every(elem => elem >= 4)) {
            let elem = document.createElement("p")
            elem.classList.add('student__hor')
            elem.id = 'student__hor__14'
            var elemText = document.createTextNode(array[14][1])
            elem.appendChild(elemText)
            document.getElementById('hor').appendChild(elem)
            if (middle.every(elem => elem >= 5)) {
                document.getElementById('student__hor__14').setAttribute('hidden', 'ok')
            }
        }
    }
    if (array.length <= 15) {} else {
        for (let i = 0; i < ar15.length; i++) {
            if (ar15[i] == 'Зачтено') {
                ar15[i] = 5
            }
        }
        var middle = ar15.slice(2);
        if (middle.every(elem => elem >= 5)) {
            let elem = document.createElement("p")
            elem.classList.add('student__otl')
            var elemText = document.createTextNode(array[15][1])
            elem.appendChild(elemText)
            document.getElementById('otl').appendChild(elem)
        }
        if (middle.every(elem => elem >= 4)) {
            let elem = document.createElement("p")
            elem.classList.add('student__hor')
            elem.id = 'student__hor__15'
            var elemText = document.createTextNode(array[15][1])
            elem.appendChild(elemText)
            document.getElementById('hor').appendChild(elem)
            if (middle.every(elem => elem >= 5)) {
                document.getElementById('student__hor__15').setAttribute('hidden', 'ok')
            }
        }
    }
    if (array.length <= 16) {} else {
        for (let i = 0; i < ar16.length; i++) {
            if (ar16[i] == 'Зачтено') {
                ar16[i] = 5
            }
        }
        var middle = ar16.slice(2);
        if (middle.every(elem => elem >= 5)) {
            let elem = document.createElement("p")
            elem.classList.add('student__otl')
            var elemText = document.createTextNode(array[16][1])
            elem.appendChild(elemText)
            document.getElementById('otl').appendChild(elem)
        }
        if (middle.every(elem => elem >= 4)) {
            let elem = document.createElement("p")
            elem.classList.add('student__hor')
            elem.id = 'student__hor__16'
            var elemText = document.createTextNode(array[16][1])
            elem.appendChild(elemText)
            document.getElementById('hor').appendChild(elem)
            if (middle.every(elem => elem >= 5)) {
                document.getElementById('student__hor__16').setAttribute('hidden', 'ok')
            }
        }
    }
    if (array.length <= 17) {} else {
        for (let i = 0; i < ar17.length; i++) {
            if (ar17[i] == 'Зачтено') {
                ar17[i] = 5
            }
        }
        var middle = ar17.slice(2);
        if (middle.every(elem => elem >= 5)) {
            let elem = document.createElement("p")
            elem.classList.add('student__otl')
            var elemText = document.createTextNode(array[17][1])
            elem.appendChild(elemText)
            document.getElementById('otl').appendChild(elem)
        }
        if (middle.every(elem => elem >= 4)) {
            let elem = document.createElement("p")
            elem.classList.add('student__hor')
            elem.id = 'student__hor__17'
            var elemText = document.createTextNode(array[17][1])
            elem.appendChild(elemText)
            document.getElementById('hor').appendChild(elem)
            if (middle.every(elem => elem >= 5)) {
                document.getElementById('student__hor__17').setAttribute('hidden', 'ok')
            }
        }
    }
    if (array.length <= 18) {} else {
        for (let i = 0; i < ar18.length; i++) {
            if (ar18[i] == 'Зачтено') {
                ar18[i] = 5
            }
        }
        var middle = ar18.slice(2);
        if (middle.every(elem => elem >= 5)) {
            let elem = document.createElement("p")
            elem.classList.add('student__otl')
            var elemText = document.createTextNode(array[18][1])
            elem.appendChild(elemText)
            document.getElementById('otl').appendChild(elem)
        }
        if (middle.every(elem => elem >= 4)) {
            let elem = document.createElement("p")
            elem.classList.add('student__hor')
            elem.id = 'student__hor__18'
            var elemText = document.createTextNode(array[18][1])
            elem.appendChild(elemText)
            document.getElementById('hor').appendChild(elem)
            if (middle.every(elem => elem >= 5)) {
                document.getElementById('student__hor__18').setAttribute('hidden', 'ok')
            }
        }
    }
    if (array.length <= 19) {} else {
        for (let i = 0; i < ar19.length; i++) {
            if (ar19[i] == 'Зачтено') {
                ar19[i] = 5
            }
        }
        var middle = ar19.slice(2);
        if (middle.every(elem => elem >= 5)) {
            let elem = document.createElement("p")
            elem.classList.add('student__otl')
            var elemText = document.createTextNode(array[19][1])
            elem.appendChild(elemText)
            document.getElementById('otl').appendChild(elem)
        }
        if (middle.every(elem => elem >= 4)) {
            let elem = document.createElement("p")
            elem.classList.add('student__hor')
            elem.id = 'student__hor__19'
            var elemText = document.createTextNode(array[19][1])
            elem.appendChild(elemText)
            document.getElementById('hor').appendChild(elem)
            if (middle.every(elem => elem >= 5)) {
                document.getElementById('student__hor__19').setAttribute('hidden', 'ok')
            }
        }
    }
    if (array.length <= 20) {} else {
        for (let i = 0; i < ar20.length; i++) {
            if (ar20[i] == 'Зачтено') {
                ar20[i] = 5
            }
        }
        var middle = ar20.slice(2);
        if (middle.every(elem => elem >= 5)) {
            let elem = document.createElement("p")
            elem.classList.add('student__otl')
            var elemText = document.createTextNode(array[20][1])
            elem.appendChild(elemText)
            document.getElementById('otl').appendChild(elem)
        }
        if (middle.every(elem => elem >= 4)) {
            let elem = document.createElement("p")
            elem.classList.add('student__hor')
            elem.id = 'student__hor__20'
            var elemText = document.createTextNode(array[20][1])
            elem.appendChild(elemText)
            document.getElementById('hor').appendChild(elem)
            if (middle.every(elem => elem >= 5)) {
                document.getElementById('student__hor__20').setAttribute('hidden', 'ok')
            }
        }
    }
    if (array.length <= 21) {} else {
        for (let i = 0; i < ar21.length; i++) {
            if (ar21[i] == 'Зачтено') {
                ar21[i] = 5
            }
        }
        var middle = ar21.slice(2);
        if (middle.every(elem => elem >= 5)) {
            let elem = document.createElement("p")
            elem.classList.add('student__otl')
            var elemText = document.createTextNode(array[21][1])
            elem.appendChild(elemText)
            document.getElementById('otl').appendChild(elem)
        }
        if (middle.every(elem => elem >= 4)) {
            let elem = document.createElement("p")
            elem.classList.add('student__hor')
            elem.id = 'student__hor__21'
            var elemText = document.createTextNode(array[21][1])
            elem.appendChild(elemText)
            document.getElementById('hor').appendChild(elem)
            if (middle.every(elem => elem >= 5)) {
                document.getElementById('student__hor__21').setAttribute('hidden', 'ok')
            }
        }
    }
    if (array.length <= 22) {} else {
        for (let i = 0; i < ar22.length; i++) {
            if (ar22[i] == 'Зачтено') {
                ar22[i] = 5
            }
        }
        var middle = ar22.slice(2);
        if (middle.every(elem => elem >= 5)) {
            let elem = document.createElement("p")
            elem.classList.add('student__otl')
            var elemText = document.createTextNode(array[22][1])
            elem.appendChild(elemText)
            document.getElementById('otl').appendChild(elem)
        }
        if (middle.every(elem => elem >= 4)) {
            let elem = document.createElement("p")
            elem.classList.add('student__hor')
            elem.id = 'student__hor__22'
            var elemText = document.createTextNode(array[22][1])
            elem.appendChild(elemText)
            document.getElementById('hor').appendChild(elem)
            if (middle.every(elem => elem >= 5)) {
                document.getElementById('student__hor__22').setAttribute('hidden', 'ok')
            }
        }
    }
    if (array.length <= 23) {} else {
        for (let i = 0; i < ar23.length; i++) {
            if (ar23[i] == 'Зачтено') {
                ar23[i] = 5
            }
        }
        var middle = ar23.slice(2);
        if (middle.every(elem => elem >= 5)) {
            let elem = document.createElement("p")
            elem.classList.add('student__otl')
            var elemText = document.createTextNode(array[23][1])
            elem.appendChild(elemText)
            document.getElementById('otl').appendChild(elem)
        }
        if (middle.every(elem => elem >= 4)) {
            let elem = document.createElement("p")
            elem.classList.add('student__hor')
            elem.id = 'student__hor__23'
            var elemText = document.createTextNode(array[23][1])
            elem.appendChild(elemText)
            document.getElementById('hor').appendChild(elem)
            if (middle.every(elem => elem >= 5)) {
                document.getElementById('student__hor__23').setAttribute('hidden', 'ok')
            }
        }
    }
    if (array.length <= 24) {} else {
        for (let i = 0; i < ar24.length; i++) {
            if (ar24[i] == 'Зачтено') {
                ar24[i] = 5
            }
        }
        var middle = ar24.slice(2);
        if (middle.every(elem => elem >= 5)) {
            let elem = document.createElement("p")
            elem.classList.add('student__otl')
            var elemText = document.createTextNode(array[24][1])
            elem.appendChild(elemText)
            document.getElementById('otl').appendChild(elem)
        }
        if (middle.every(elem => elem >= 4)) {
            let elem = document.createElement("p")
            elem.classList.add('student__hor')
            elem.id = 'student__hor__24'
            var elemText = document.createTextNode(array[24][1])
            elem.appendChild(elemText)
            document.getElementById('hor').appendChild(elem)
            if (middle.every(elem => elem >= 5)) {
                document.getElementById('student__hor__24').setAttribute('hidden', 'ok')
            }
        }
    }
    if (array.length <= 25) {} else {
        for (let i = 0; i < ar25.length; i++) {
            if (ar25[i] == 'Зачтено') {
                ar25[i] = 5
            }
        }
        var middle = ar25.slice(2);
        if (middle.every(elem => elem >= 5)) {
            let elem = document.createElement("p")
            elem.classList.add('student__otl')
            var elemText = document.createTextNode(array[25][1])
            elem.appendChild(elemText)
            document.getElementById('otl').appendChild(elem)
        }
        if (middle.every(elem => elem >= 4)) {
            let elem = document.createElement("p")
            elem.classList.add('student__hor')
            elem.id = 'student__hor__25'
            var elemText = document.createTextNode(array[25][1])
            elem.appendChild(elemText)
            document.getElementById('hor').appendChild(elem)
            if (middle.every(elem => elem >= 5)) {
                document.getElementById('student__hor__25').setAttribute('hidden', 'ok')
            }
        }
    }
    if (array.length <= 26) {} else {
        for (let i = 0; i < ar26.length; i++) {
            if (ar26[i] == 'Зачтено') {
                ar26[i] = 5
            }
        }
        var middle = ar26.slice(2);
        if (middle.every(elem => elem >= 5)) {
            let elem = document.createElement("p")
            elem.classList.add('student__otl')
            var elemText = document.createTextNode(array[26][1])
            elem.appendChild(elemText)
            document.getElementById('otl').appendChild(elem)
        }
        if (middle.every(elem => elem >= 4)) {
            let elem = document.createElement("p")
            elem.classList.add('student__hor')
            elem.id = 'student__hor__26'
            var elemText = document.createTextNode(array[26][1])
            elem.appendChild(elemText)
            document.getElementById('hor').appendChild(elem)
            if (middle.every(elem => elem >= 5)) {
                document.getElementById('student__hor__26').setAttribute('hidden', 'ok')
            }
        }
    }
    if (array.length <= 27) {} else {
        for (let i = 0; i < ar27.length; i++) {
            if (ar27[i] == 'Зачтено') {
                ar27[i] = 5
            }
        }
        var middle = ar27.slice(2);
        if (middle.every(elem => elem >= 5)) {
            let elem = document.createElement("p")
            elem.classList.add('student__otl')
            var elemText = document.createTextNode(array[27][1])
            elem.appendChild(elemText)
            document.getElementById('otl').appendChild(elem)
        }
        if (middle.every(elem => elem >= 4)) {
            let elem = document.createElement("p")
            elem.classList.add('student__hor')
            elem.id = 'student__hor__27'
            var elemText = document.createTextNode(array[27][1])
            elem.appendChild(elemText)
            document.getElementById('hor').appendChild(elem)
            if (middle.every(elem => elem >= 5)) {
                document.getElementById('student__hor__27').setAttribute('hidden', 'ok')
            }
        }
    }
    if (array.length <= 28) {} else {
        for (let i = 0; i < ar28.length; i++) {
            if (ar28[i] == 'Зачтено') {
                ar28[i] = 5
            }
        }
        var middle = ar28.slice(2);
        if (middle.every(elem => elem >= 5)) {
            let elem = document.createElement("p")
            elem.classList.add('student__otl')
            var elemText = document.createTextNode(array[28][1])
            elem.appendChild(elemText)
            document.getElementById('otl').appendChild(elem)
        }
        if (middle.every(elem => elem >= 4)) {
            let elem = document.createElement("p")
            elem.classList.add('student__hor')
            elem.id = 'student__hor__28'
            var elemText = document.createTextNode(array[28][1])
            elem.appendChild(elemText)
            document.getElementById('hor').appendChild(elem)
            if (middle.every(elem => elem >= 5)) {
                document.getElementById('student__hor__28').setAttribute('hidden', 'ok')
            }
        }
    }
    if (array.length <= 29) {} else {
        for (let i = 0; i < ar29.length; i++) {
            if (ar29[i] == 'Зачтено') {
                ar29[i] = 5
            }
        }
        var middle = ar29.slice(2);
        if (middle.every(elem => elem >= 5)) {
            let elem = document.createElement("p")
            elem.classList.add('student__otl')
            var elemText = document.createTextNode(array[29][1])
            elem.appendChild(elemText)
            document.getElementById('otl').appendChild(elem)
        }
        if (middle.every(elem => elem >= 4)) {
            let elem = document.createElement("p")
            elem.classList.add('student__hor')
            elem.id = 'student__hor__29'
            var elemText = document.createTextNode(array[29][1])
            elem.appendChild(elemText)
            document.getElementById('hor').appendChild(elem)
            if (middle.every(elem => elem >= 5)) {
                document.getElementById('student__hor__29').setAttribute('hidden', 'ok')
            }
        }
    }
    if (array.length <= 30) {} else {
        for (let i = 0; i < ar30.length; i++) {
            if (ar30[i] == 'Зачтено') {
                ar30[i] = 5
            }
        }
        var middle = ar30.slice(2);
        if (middle.every(elem => elem >= 5)) {
            let elem = document.createElement("p")
            elem.classList.add('student__otl')
            var elemText = document.createTextNode(array[30][1])
            elem.appendChild(elemText)
            document.getElementById('otl').appendChild(elem)
        }
        if (middle.every(elem => elem >= 4)) {
            let elem = document.createElement("p")
            elem.classList.add('student__hor')
            elem.id = 'student__hor__30'
            var elemText = document.createTextNode(array[30][1])
            elem.appendChild(elemText)
            document.getElementById('hor').appendChild(elem)
            if (middle.every(elem => elem >= 5)) {
                document.getElementById('student__hor__30').setAttribute('hidden', 'ok')
            }
        }
    }
    if (array.length <= 31) {} else {
        for (let i = 0; i < ar31.length; i++) {
            if (ar31[i] == 'Зачтено') {
                ar31[i] = 5
            }
        }
        var middle = ar31.slice(2);
        if (middle.every(elem => elem >= 5)) {
            let elem = document.createElement("p")
            elem.classList.add('student__otl')
            var elemText = document.createTextNode(array[31][1])
            elem.appendChild(elemText)
            document.getElementById('otl').appendChild(elem)
            elem.classList.add('rtt5')
        }
        if (middle.every(elem => elem >= 4)) {
            let elem = document.createElement("p")
            elem.classList.add('student__hor')
            elem.id = 'student__hor__31'
            var elemText = document.createTextNode(array[31][1])
            elem.appendChild(elemText)
            document.getElementById('hor').appendChild(elem)
            if (middle.every(elem => elem >= 5)) {
                document.getElementById('student__hor__31').setAttribute('hidden', 'ok')
            }
        }
    }
    if (array.length <= 32) {} else {
        for (let i = 0; i < ar32.length; i++) {
            if (ar32[i] == 'Зачтено') {
                ar32[i] = 5
            }
        }
        var middle = ar32.slice(2);
        if (middle.every(elem => elem >= 5)) {
            let elem = document.createElement("p")
            elem.classList.add('student__otl')
            var elemText = document.createTextNode(array[32][1])
            elem.appendChild(elemText)
            document.getElementById('otl').appendChild(elem)
        }
        if (middle.every(elem => elem >= 4)) {
            let elem = document.createElement("p")
            elem.classList.add('student__hor')
            elem.id = 'student__hor__32'
            var elemText = document.createTextNode(array[32][1])
            elem.appendChild(elemText)
            document.getElementById('hor').appendChild(elem)
            if (middle.every(elem => elem >= 5)) {
                document.getElementById('student__hor__32').setAttribute('hidden', 'ok')
            }
        }
    }
    if (array.length <= 33) {} else {
        for (let i = 0; i < ar33.length; i++) {
            if (ar33[i] == 'Зачтено') {
                ar33[i] = 5
            }
        }
        var middle = ar33.slice(2);
        if (middle.every(elem => elem >= 5)) {
            let elem = document.createElement("p")
            elem.classList.add('student__otl')
            var elemText = document.createTextNode(array[33][1])
            elem.appendChild(elemText)
            document.getElementById('otl').appendChild(elem)
        }
        if (middle.every(elem => elem >= 4)) {
            let elem = document.createElement("p")
            elem.classList.add('student__hor')
            elem.id = 'student__hor__33'
            var elemText = document.createTextNode(array[33][1])
            elem.appendChild(elemText)
            document.getElementById('hor').appendChild(elem)
            if (middle.every(elem => elem >= 5)) {
                document.getElementById('student__hor__33').setAttribute('hidden', 'ok')
            }
        }
    }
    // Вывод отличников и хорошистов




    $('.pred_neud').each(function () {
        var $this = $(this);
        var t = $this.text();
        $this.html(t.replace('&lt', '<').replace('&gt', '>'));
    });

    // Подсчет Качественной и Абсолютной успеваемости
    if (!document.querySelectorAll('div.hor > p.student__hor')) {} else {
        let studentNeud = document.querySelectorAll('.student_neud').length
        let fullStudents = array.length
        let infoAbsolut = document.getElementById('absolut')
        let infoKach = document.getElementById('kach')
        let horStudents = document.querySelectorAll('div.hor > p.student__hor').length
        let infoAbsolut1 = ((fullStudents - studentNeud) * 100) / fullStudents
        if (!infoAbsolut || !infoAbsolut1) {} else {
            infoAbsolut.textContent = infoAbsolut1.toFixed(1) + '%'
        }
        let infoKach1 = ((horStudents * 100) / fullStudents) + 0
        if (!infoKach || !infoKach1) {} else {
            infoKach.textContent = infoKach1.toFixed(1) + '%'
        }
    }
    // Подсчет Качественной и Абсолютной успеваемости







    let name1 = document.getElementById('absolut')
    let name
    if (!name1) {} else {
        name = name1.textContent
    }
    let number__group1 = document.getElementById('number__group')
    let number__group
    if (!number__group1) {} else {
        number__group = number__group1.textContent
    }
    let number__group__base
    let numberGroupBase = document.getElementById('number__group__base')

    if (!numberGroupBase) {} else {
        number__group__base = numberGroupBase.textContent
    }
    if (!numberGroupBase) {} else {
        number__group__base = numberGroupBase.textContent
    }
    let leght_st1 = document.querySelectorAll('#tb_base > tr')
    let leght_st
    if (!leght_st1) {} else {
        leght_st = leght_st1.textContent
    }
    let kachUsp1 = document.getElementById('kach')
    let kachUsp2


    if (!kachUsp1) {} else {
        kachUsp2 = kachUsp1.textContent
    }
    if (!name || !number__group) {} else {
        $(function () {
            $.ajax({
                url: '/abs.php',
                type: 'POST',
                data: {
                    number__group,
                    name,
                    kachUsp2
                },
                success: function (data) {
                    console.log(data);
                },
                error: function () {
                    console.log('ERROR');
                }
            })
        });
    }
    if (!kachUsp1) {} else {
        let absolUsp = document.getElementById('absolut').textContent
        let kachUsp = document.getElementById('kach').textContent
        let numberGroupReport = document.getElementById('number__group').textContent

        console.log(absolUsp, kachUsp, numberGroupReport)
        $(function () {
            $.ajax({
                url: '/percent.php',
                type: 'POST',
                data: {
                    absolUsp,
                    kachUsp,
                    numberGroupReport
                },
                success: function (data) {
                    console.log(data);
                },
                error: function () {
                    console.log('ERROR');
                }
            })
        });
    }

    if (!leght_st) {} else {
        $(function () {
            $.ajax({
                url: '/abs.php',
                type: 'POST',
                data: {
                    leght_st,
                    number__group__base,
                },
                success: function (data) {
                    console.log(data);
                },
                error: function () {
                    console.log('ERROR');
                }
            })
        });
    }




    let controle_var = document.querySelectorAll('span.controle_variant')
    for (let i = 0; i < controle_var.length; i++) {
        if (controle_var[i].textContent == 'Дифференцированный зачет') {
            controle_var[i].parentNode.classList.add('red')
        }
        if (controle_var[i].textContent == 'Зачет') {
            controle_var[i].parentNode.classList.add('red')
        }
        if (controle_var[i].textContent == 'Экзамен') {
            controle_var[i].parentNode.classList.add('red')
        }
    }




    let vrem_id = document.querySelectorAll('#vrem_id')
    if (!vrem_id) {} else {
        if (!document.getElementById('vrem_id')) {} else {
            document.getElementById('add_id_predm').value = document.getElementById('vrem_id').value
            document.getElementById('add_name_predm').value = document.querySelector('option[selected="selected"]').textContent
        }
    }
    // Ограничение ввода посещенных занятий
    let visited_1 = document.getElementById('visited_1')
    if (!visited_1) {} else {
        visited_1.oninput = function () {
            let wq = document.getElementById('hour_1')
            let qw = visited_1.value
            let wqe = wq.value
            if (Number(qw) > Number(wqe)) {
                visited_1.value = wq.value
            }
        }
    }
    let visited_2 = document.getElementById('visited_2')
    if (!visited_2) {} else {
        visited_2.oninput = function () {
            let wq = document.getElementById('hour_2')
            let qw = visited_2.value
            let wqe = wq.value
            if (Number(qw) > Number(wqe)) {
                visited_2.value = wq.value
            }
        }
    }
    // Ограничение ввода посещенных занятий
    // Ограничение ввода занятий без опозданий
    let not_delay_1 = document.getElementById('not_delay_1')
    if (!not_delay_1) {} else {
        not_delay_1.oninput = function () {
            let wq = visited_1 = document.getElementById('visited_1')
            let qw = not_delay_1.value
            let wqe = wq.value
            if (Number(qw) > Number(wqe)) {
                not_delay_1.value = wq.value
            }
        }
    }
    let not_delay_2 = document.getElementById('not_delay_2')
    if (!not_delay_2) {} else {
        not_delay_2.oninput = function () {
            let wq = visited_2 = document.getElementById('visited_2')
            let qw = not_delay_2.value
            let wqe = wq.value
            if (Number(qw) > Number(wqe)) {
                not_delay_2.value = wq.value
            }
        }
    }
    // Ограничение ввода занятий без опозданий
    // Ограничение ввода активных занятий
    let active_1 = document.getElementById('active_1')
    if (!active_1) {} else {
        active_1.oninput = function () {
            let wq = visited_1 = document.getElementById('visited_1')
            let qw = active_1.value
            let wqe = wq.value
            if (Number(qw) > Number(wqe)) {
                active_1.value = wq.value
            }
        }
    }
    let active_2 = document.getElementById('active_2')
    if (!active_2) {} else {
        active_2.oninput = function () {
            let wq = visited_2 = document.getElementById('visited_2')
            let qw = active_2.value
            let wqe = wq.value
            if (Number(qw) > Number(wqe)) {
                active_2.value = wq.value
            }
        }
    }
    // Ограничение ввода активных занятий
    // Для редактирования
    let modal = document.getElementsByClassName('modal')[0]
    if (!modal) {} else {
        if (modal.classList.contains('show')) {}
    }



    // Для редактирования
    // Калькуляция БРС при добавлении студента
    $("#submit_studetn_brs331").on("click", function () {
        var add_name_predm = document.getElementById('add_name_predm').value
        var add_student_brs331 = document.getElementById('add_student_brs331').value
        var add_id_predm = document.getElementById('add_id_predm').value
        var average__current_1 = document.getElementById('average__current_1').value
        var average__current_2 = document.getElementById('average__current_2').value
        var average__control_1 = document.getElementById('average__control_1').value
        var average__control_2 = document.getElementById('average__control_2').value
        var visited_1 = document.getElementById('visited_1').value
        var visited_2 = document.getElementById('visited_2').value
        var not_delay_1 = document.getElementById('not_delay_1').value
        var not_delay_2 = document.getElementById('not_delay_2').value
        var active_1 = document.getElementById('active_1').value
        var active_2 = document.getElementById('active_2').value
        var controle = document.getElementById('controle').value
        var summ__all1 = document.getElementById('summ__all1').value
        var summ__all2 = document.getElementById('summ__all2').value
        var summ__note1 = document.getElementById('summ__note1').value
        var summ__note2 = document.getElementById('summ__note2').value
        var summ__full__balls = document.getElementById('summ__full__balls').value
        var final__note = document.getElementById('final__note').value
        let summ__average__current_1 = document.getElementById('summ__average__current_1')
        let summ__average__current_2 = document.getElementById('summ__average__current_2')
        let summ__average__control_1 = document.getElementById('summ__average__control_1')
        let summ__average__control_2 = document.getElementById('summ__average__control_2')
        let summ__visited_1 = document.getElementById('summ__visited_1')
        let summ__visited_2 = document.getElementById('summ__visited_2')
        let summ__not_delay_1 = document.getElementById('summ__not_delay_1')
        let summ__not_delay_2 = document.getElementById('summ__not_delay_2')
        let summ__not_active_1 = document.getElementById('summ__not_active_1')
        let summ__not_active_2 = document.getElementById('summ__not_active_2')
        let hour_1 = document.getElementById('hour_1').value
        let hour_2 = document.getElementById('hour_2').value
        let v_summ__average__current_1 = (average__current_1 / 5) * 21
        summ__average__current_1 = v_summ__average__current_1.toFixed(2)
        let v_summ__average__current_2 = (average__current_2 / 5) * 21
        summ__average__current_2 = v_summ__average__current_2.toFixed(2)
        let v_summ__average__control_1 = (average__control_1 / 5) * 40
        summ__average__control_1 = v_summ__average__control_1.toFixed(2)
        let v_summ__average__control_2 = (average__control_2 / 5) * 40
        summ__average__control_2 = v_summ__average__control_2.toFixed(2)
        let v_summ__visited_1 = (8 / hour_1) * visited_1
        summ__visited_1 = v_summ__visited_1.toFixed(2)
        let v_summ__visited_2 = (8 / hour_2.value) * visited_2
        summ__visited_2 = v_summ__visited_2.toFixed(2)
        let v_summ__not_delay_1 = (5 / hour_1) * not_delay_1
        summ__not_delay_1 = v_summ__not_delay_1.toFixed(2)
        let v_summ__not_delay_2 = (5 / hour_2) * not_delay_2
        summ__not_delay_2 = v_summ__not_delay_2.toFixed(2)
        let v_summ__not_active_1 = active_1 * 8 / ((hour_1 * 30) / 100)
        summ__not_active_1 = v_summ__not_active_1.toFixed(2)
        let v_summ__not_active_2 = active_2 * 8 / ((hour_2 * 30) / 100)
        summ__not_active_2 = v_summ__not_active_2.toFixed(2)
        let v_summ__all1 = Number(summ__average__current_1) + Number(summ__average__control_1) + Number(summ__visited_1) + Number(summ__not_delay_1) + Number(summ__not_active_1)
        summ__all1 = v_summ__all1.toFixed(2)
        let v_summ__all2 = Number(summ__average__current_2) + Number(summ__average__control_2) + Number(summ__visited_2) + Number(summ__not_delay_2) + Number(summ__not_active_2)
        summ__all2 = v_summ__all2.toFixed(2)

        // Перевод баллов в отметку первая КН
        if (summ__all1 >= 0 && summ__all1 <= 69) {
            summ__note1 = 2
        }
        if (summ__all1 >= 70 && summ__all1 <= 79) {
            summ__note1 = 3
        }
        if (summ__all1 >= 80 && summ__all1 <= 89) {
            summ__note1 = 4
        }
        if (summ__all1 >= 90 && summ__all1 <= 120) {
            summ__note1 = 5
        }
        // Перевод баллов в отметку первая КН
        // Перевод баллов в отметку итог семестра
        if (summ__all2 >= 0 && summ__all2 <= 69) {
            summ__note2 = 2
        }
        if (summ__all2 >= 70 && summ__all2 <= 79) {
            summ__note2 = 3
        }
        if (summ__all2 >= 80 && summ__all2 <= 89) {
            summ__note2 = 4
        }
        if (summ__all2 >= 90 && summ__all2 <= 120) {
            summ__note2 = 5
        }

        // Перевод баллов в отметку итог семестра
        // Подсчет иговых балов при зачете
        if (controle != 0) {
            let v_summ__full__balls = (Number(summ__all1) + Number(summ__all2) + Number(controle)) / 3
            summ__full__balls = v_summ__full__balls.toFixed(2)
        }
        // Подсчет иговых балов при зачете
        // Подсчет иговых балов без зачета
        if (controle < 1) {
            let v_summ__full__balls = (Number(summ__all1) + Number(summ__all2)) / 2
            summ__full__balls = v_summ__full__balls.toFixed(2)
        }

        // Подсчет иговых балов без зачета
        // Перевод итоговых баллов в отметку итог семестра
        if (summ__full__balls >= 0 && summ__full__balls <= 69) {
            final__note = 2
        }
        if (summ__full__balls >= 70 && summ__full__balls <= 79) {
            final__note = 3
        }
        if (summ__full__balls >= 80 && summ__full__balls <= 89) {
            final__note = 4
        }
        if (summ__full__balls >= 90 && summ__full__balls <= 120) {
            final__note = 5
        }

        // Перевод итоговых баллов в отметку итог семестра
        // Калькуляция БРС при добавлении студента
        // Отправка данных БРС в БД при добавлении студента
        $.ajax({
            url: '/brs.php',
            type: 'POST',
            data: {
                add_name_predm,
                add_student_brs331,
                add_id_predm,
                average__current_1,
                average__current_2,
                average__control_1,
                average__control_2,
                visited_1,
                visited_2,
                not_delay_1,
                not_delay_2,
                active_1,
                active_2,
                controle,
                summ__all1,
                summ__all2,
                summ__note1,
                summ__note2,
                summ__full__balls,
                final__note,
                hour_1,
                hour_2
            },
            success: function (data) {
                // location.reload();
            },
            error: function () {
                console.log('ERROR');
            }
        })
        // Отправка данных БРС в БД при добавлении студента
    });
    document.body.onclick = function (event) {
        t = event.target || event.srcElement;
        // alert(t.id);
        if (t.id == 'edit_submit_brs331') {
            var edit_predmet = document.querySelector('div.modal.show > div.modal-dialog > div.modal-content > div.modal-body > div.form-group > input#edit_predmet').value
            var edit_students = document.querySelector('div.modal.show > div.modal-dialog > div.modal-content > div.modal-body > div.form-group > input#edit_students').value
            var edit_id_predm = document.querySelector('div.modal.show > div.modal-dialog > div.modal-content > div.modal-body > div.form-group > input#edit_id_predm').value
            var edit_average__current_1 = document.querySelector('div.modal.show > div.modal-dialog > div.modal-content > div.modal-body > div.form-group > input#edit_average__current_1').value
            var edit_average__current_2 = document.querySelector('div.modal.show > div.modal-dialog > div.modal-content > div.modal-body > div.form-group > input#edit_average__current_2').value
            var edit_average__control_1 = document.querySelector('div.modal.show > div.modal-dialog > div.modal-content > div.modal-body > div.form-group > input#edit_average__control_1').value
            var edit_average__control_2 = document.querySelector('div.modal.show > div.modal-dialog > div.modal-content > div.modal-body > div.form-group > input#edit_average__control_2').value
            var edit_visited_1 = document.querySelector('div.modal.show > div.modal-dialog > div.modal-content > div.modal-body > div.form-group > input#edit_visited_1').value
            var edit_visited_2 = document.querySelector('div.modal.show > div.modal-dialog > div.modal-content > div.modal-body > div.form-group > input#edit_visited_2').value
            var edit_not_delay_1 = document.querySelector('div.modal.show > div.modal-dialog > div.modal-content > div.modal-body > div.form-group > input#edit_not_delay_1').value
            var edit_not_delay_2 = document.querySelector('div.modal.show > div.modal-dialog > div.modal-content > div.modal-body > div.form-group > input#edit_not_delay_2').value
            var edit_active_1 = document.querySelector('div.modal.show > div.modal-dialog > div.modal-content > div.modal-body > div.form-group > input#edit_active_1').value
            var edit_active_2 = document.querySelector('div.modal.show > div.modal-dialog > div.modal-content > div.modal-body > div.form-group > input#edit_active_2').value
            var edit_controle = document.querySelector('div.modal.show > div.modal-dialog > div.modal-content > div.modal-body > div.form-group > input#edit_controle').value
            var id = document.querySelector('div.modal.show > div.modal-dialog > div.modal-content > div.modal-body > div.modal-footer > p#qwe').textContent
            var edit_summ__all1 = document.querySelector('div.modal.show > div.modal-dialog > div.modal-content > div.modal-body > input#edit_summ__all1').value
            var edit_summ__all2 = document.querySelector('div.modal.show > div.modal-dialog > div.modal-content > div.modal-body > input#edit_summ__all2').value
            var edit_summ__note1 = document.querySelector('div.modal.show > div.modal-dialog > div.modal-content > div.modal-body > input#edit_summ__note1').value
            var edit_summ__note2 = document.querySelector('div.modal.show > div.modal-dialog > div.modal-content > div.modal-body > input#edit_summ__note2').value
            var edit_summ__full__balls = document.querySelector('div.modal.show > div.modal-dialog > div.modal-content > div.modal-body > input#edit_summ__full__balls').value
            var edit_final__note = document.querySelector('div.modal.show > div.modal-dialog > div.modal-content > div.modal-body > input#edit_final__note').value
            let edit_summ__average__current_1 = document.querySelector('div.modal.show > div.modal-dialog > div.modal-content > div.modal-body > div.form-group > input#edit_summ__average__current_1')
            let edit_summ__average__current_2 = document.querySelector('div.modal.show > div.modal-dialog > div.modal-content > div.modal-body > div.form-group > input#edit_summ__average__current_2')
            let edit_summ__average__control_1 = document.querySelector('div.modal.show > div.modal-dialog > div.modal-content > div.modal-body > div.form-group > input#edit_summ__average__control_1')
            let edit_summ__average__control_2 = document.querySelector('div.modal.show > div.modal-dialog > div.modal-content > div.modal-body > div.form-group > input#edit_summ__average__control_2')
            let edit_summ__visited_1 = document.querySelector('div.modal.show > div.modal-dialog > div.modal-content > div.modal-body > div.form-group > input#edit_summ__visited_1')
            let edit_summ__visited_2 = document.querySelector('div.modal.show > div.modal-dialog > div.modal-content > div.modal-body > div.form-group > input#edit_summ__visited_2')
            let edit_summ__not_delay_1 = document.querySelector('div.modal.show > div.modal-dialog > div.modal-content > div.modal-body > div.form-group > input#edit_summ__not_delay_1')
            let edit_summ__not_delay_2 = document.querySelector('div.modal.show > div.modal-dialog > div.modal-content > div.modal-body > div.form-group > input#edit_summ__not_delay_2')
            let edit_summ__not_active_1 = document.querySelector('div.modal.show > div.modal-dialog > div.modal-content > div.modal-body > div.form-group > input#edit_summ__not_active_1')
            let edit_summ__not_active_2 = document.querySelector('div.modal.show > div.modal-dialog > div.modal-content > div.modal-body > div.form-group > input#edit_summ__not_active_2')

            let edit_hour_1 = document.querySelector('div.modal.show > div.modal-dialog > div.modal-content > div.modal-body > div.form-group > input#edit_hour_1').value
            let edit_hour_2 = document.querySelector('div.modal.show > div.modal-dialog > div.modal-content > div.modal-body > div.form-group > input#edit_hour_2').value


            let v_summ__average__current_1 = (edit_average__current_1 / 5) * 21
            edit_summ__average__current_1 = v_summ__average__current_1.toFixed(2)
            let v_summ__average__current_2 = (edit_average__current_2 / 5) * 21
            edit_summ__average__current_2 = v_summ__average__current_2.toFixed(2)
            let v_summ__average__control_1 = (edit_average__control_1 / 5) * 40
            edit_summ__average__control_1 = v_summ__average__control_1.toFixed(2)
            let v_summ__average__control_2 = (edit_average__control_2 / 5) * 40
            edit_summ__average__control_2 = v_summ__average__control_2.toFixed(2)
            let v_summ__visited_1 = (8 / edit_hour_1) * edit_visited_1
            edit_summ__visited_1 = v_summ__visited_1.toFixed(2)
            let v_summ__visited_2 = (8 / edit_hour_2) * edit_visited_2
            edit_summ__visited_2 = v_summ__visited_2.toFixed(2)
            let v_summ__not_delay_1 = (5 / edit_hour_1) * edit_not_delay_1
            edit_summ__not_delay_1 = v_summ__not_delay_1.toFixed(2)
            let v_summ__not_delay_2 = (5 / edit_hour_2) * edit_not_delay_2
            edit_summ__not_delay_2 = v_summ__not_delay_2.toFixed(2)
            let v_summ__not_active_1 = edit_active_1 * 8 / ((edit_hour_1 * 30) / 100)
            edit_summ__not_active_1 = v_summ__not_active_1.toFixed(2)
            let v_summ__not_active_2 = edit_active_2 * 8 / ((edit_hour_2 * 30) / 100)
            edit_summ__not_active_2 = v_summ__not_active_2.toFixed(2)
            let v_summ__all1 = Number(edit_summ__average__current_1) + Number(edit_summ__average__control_1) + Number(edit_summ__visited_1) + Number(edit_summ__not_delay_1) + Number(edit_summ__not_active_1)
            edit_summ__all1 = v_summ__all1.toFixed(2)
            let v_summ__all2 = Number(edit_summ__average__current_2) + Number(edit_summ__average__control_2) + Number(edit_summ__visited_2) + Number(edit_summ__not_delay_2) + Number(edit_summ__not_active_2)
            edit_summ__all2 = v_summ__all2.toFixed(2)
            // Перевод баллов в отметку первая КН
            if (edit_summ__all1 >= 0 && edit_summ__all1 <= 69) {
                edit_summ__note1 = 2
            }
            if (edit_summ__all1 >= 70 && edit_summ__all1 <= 79) {
                edit_summ__note1 = 3
            }
            if (edit_summ__all1 >= 80 && edit_summ__all1 <= 89) {
                edit_summ__note1 = 4
            }
            if (edit_summ__all1 >= 90 && edit_summ__all1 <= 120) {
                edit_summ__note1 = 5
            }
            // Перевод баллов в отметку первая КН
            // Перевод баллов в отметку итог семестра
            if (edit_summ__all2 >= 0 && edit_summ__all2 <= 69) {
                edit_summ__note2 = 2
            }
            if (edit_summ__all2 >= 70 && edit_summ__all2 <= 79) {
                edit_summ__note2 = 3
            }
            if (edit_summ__all2 >= 80 && edit_summ__all2 <= 89) {
                edit_summ__note2 = 4
            }
            if (edit_summ__all2 >= 90 && edit_summ__all2 <= 120) {
                edit_summ__note2 = 5
            }
            // Перевод баллов в отметку итог семестра
            // Подсчет иговых балов при зачете
            if (edit_controle != 0) {
                let v_summ__full__balls = (Number(edit_summ__all1) + Number(edit_summ__all2) + Number(edit_controle)) / 3
                edit_summ__full__balls = v_summ__full__balls.toFixed(2)
            }
            // Подсчет иговых балов при зачете
            // Подсчет иговых балов без зачета
            if (edit_controle < 1) {
                let v_summ__full__balls = (Number(edit_summ__all1) + Number(edit_summ__all2)) / 2
                edit_summ__full__balls = v_summ__full__balls.toFixed(2)
            }
            // Подсчет иговых балов без зачета
            // Перевод итоговых баллов в отметку итог семестра
            if (edit_summ__full__balls >= 0 && edit_summ__full__balls <= 69) {
                edit_final__note = 2
            }
            if (edit_summ__full__balls >= 70 && edit_summ__full__balls <= 79) {
                edit_final__note = 3
            }
            if (edit_summ__full__balls >= 80 && edit_summ__full__balls <= 89) {
                edit_final__note = 4
            }
            if (edit_summ__full__balls >= 90 && edit_summ__full__balls <= 120) {
                edit_final__note = 5
            }
            // Перевод итоговых баллов в отметку итог семестра
            $.ajax({
                url: '/brs.php',
                type: 'POST',
                data: {
                    id,
                    edit_predmet,
                    edit_students,
                    edit_id_predm,
                    edit_average__current_1,
                    edit_average__current_2,
                    edit_average__control_1,
                    edit_average__control_2,
                    edit_hour_1,
                    edit_hour_2,
                    edit_visited_1,
                    edit_visited_2,
                    edit_not_delay_1,
                    edit_not_delay_2,
                    edit_active_1,
                    edit_active_2,
                    edit_controle,
                    edit_summ__all1,
                    edit_summ__all2,
                    edit_summ__note1,
                    edit_summ__note2,
                    edit_summ__full__balls,
                    edit_final__note
                },
                success: function (data) {
                    // location.reload();
                },
                error: function () {
                    console.log('ERROR');
                }
            })
        }
    }

    // Подсчет балов и перевод в отметку

    let note1 = document.getElementsByClassName('summ__note1');
    for (let i = 0; i < note1.length; i++) {
        if (note1[i].textContent == 5) {
            note1[i].classList.add('note_5')
        }
        if (note1[i].textContent == 4) {
            note1[i].classList.add('note_4')
        }
        if (note1[i].textContent == 3) {
            note1[i].classList.add('note_3')
        }
        if (note1[i].textContent == 2) {
            note1[i].classList.add('note_2')
        }
    }
    let note2 = document.getElementsByClassName('summ__note2');
    for (let i = 0; i < note2.length; i++) {
        if (note2[i].textContent == 5) {
            note2[i].classList.add('note_5')
        }
        if (note2[i].textContent == 4) {
            note2[i].classList.add('note_4')
        }
        if (note2[i].textContent == 3) {
            note2[i].classList.add('note_3')
        }
        if (note2[i].textContent == 2) {
            note2[i].classList.add('note_2')
        }
    }
    let final_grade = document.getElementsByClassName('final_grade');
    for (let i = 0; i < final_grade.length; i++) {
        if (final_grade[i].textContent == 5) {
            final_grade[i].classList.add('note_5')
        }
        if (final_grade[i].textContent == 4) {
            final_grade[i].classList.add('note_4')
        }
        if (final_grade[i].textContent == 3) {
            final_grade[i].classList.add('note_3')
        }
        if (final_grade[i].textContent == 2) {
            final_grade[i].classList.add('note_2')
        }
    }
    // Подсчет балов и перевод в отметку

    let addStIn = document.getElementById('add__student__input')
    if (!addStIn) {} else {
        addStIn.oninput = function () {
            document.getElementById('add__student__submit').removeAttribute('disabled', 'ok')
            if (addStIn.value == '') {
                document.getElementById('add__student__submit').setAttribute('disabled', 'ok')
            }
        }
    }

    let addPrCode = document.getElementById('add__predmet__code')
    let addContVar = document.getElementById('add__predmet__controle')
    let addPrName = document.getElementById('add__predmet__input')
    if (!addPrCode) {} else {
        addPrCode.onclick = function () {
            if (addPrCode.value == 0) {
                document.getElementById('add__predmet__submit').setAttribute('disabled', 'ok')
            }
            if (addContVar.value == 0) {
                document.getElementById('add__predmet__submit').setAttribute('disabled', 'ok')
            }
            if (addPrName.value == '') {
                document.getElementById('add__predmet__submit').setAttribute('disabled', 'ok')
            }
            if (addPrCode.value != 0 && addPrName.value != '' && addContVar.value != 0) {
                document.getElementById('add__predmet__submit').removeAttribute('disabled', 'ok')
            }

        }
    }
    if (!addContVar) {} else {
        addContVar.onclick = function () {
            if (addPrCode.value == 0) {
                document.getElementById('add__predmet__submit').setAttribute('disabled', 'ok')
            }
            if (addContVar.value == 0) {
                document.getElementById('add__predmet__submit').setAttribute('disabled', 'ok')
            }
            if (addPrName.value == '') {
                document.getElementById('add__predmet__submit').setAttribute('disabled', 'ok')
            }
            if (addPrCode.value != 0 && addPrName.value != '' && addContVar.value != 0) {
                document.getElementById('add__predmet__submit').removeAttribute('disabled', 'ok')
            }

        }
    }
    if (!addPrName) {} else {
        addPrName.oninput = function () {
            if (addPrCode.value == 0) {
                document.getElementById('add__predmet__submit').setAttribute('disabled', 'ok')
            }
            if (addContVar.value == 0) {
                document.getElementById('add__predmet__submit').setAttribute('disabled', 'ok')
            }
            if (addPrName.value == '') {
                document.getElementById('add__predmet__submit').setAttribute('disabled', 'ok')
            }
            if (addPrCode.value != 0 && addPrName.value != '' && addContVar.value != 0) {
                document.getElementById('add__predmet__submit').removeAttribute('disabled', 'ok')
            }

        }
    }

    // Отображение ссылок для преподавателей
    let action = document.querySelectorAll('.action')
    let predList = document.getElementById('predmets_list')
    let fullreportMenu = document.getElementById('nav_fullreport')
    let notesList = document.getElementById('notes-list')
    let fullNotesList = document.getElementById('full-notes-lists')
    let navGroups = document.getElementById('nav__groups')
    let sbg = document.getElementById('skips__buttons__groups')
    let archive = document.getElementById('archive')
    let navSkips = document.getElementById('nav__skips')
    let navSkipsTable = document.getElementById('nav__skips__table')
    let navBase = document.getElementById('nav_base')
    let navKrReport = document.getElementById('nav__kr__report')

    let roleUser = document.getElementById('role__user')

    if (roleUser.textContent == 1) {
        if (!predList) {} else {
            predList.removeAttribute('hidden')
        }
        if (!sbg) {} else {
            sbg.removeAttribute('hidden')
        }
        if (!action) {} else {
            for (let i = 0; i < action.length; i++) {
                action[i].removeAttribute('hidden')
            }
        }
        fullreportMenu.removeAttribute('hidden')
        notesList.removeAttribute('hidden')
        fullNotesList.removeAttribute('hidden')
        archive.removeAttribute('hidden')
        navSkips.removeAttribute('hidden')
        navSkipsTable.removeAttribute('hidden')
        navBase.removeAttribute('hidden')
        navGroups.removeAttribute('hidden')
        navKrReport.removeAttribute('hidden')
    }

    if (roleUser.textContent == 2) {
        if (!predList) {} else {
            predList.removeAttribute('hidden')
        }
        if (!sbg) {} else {
            sbg.removeAttribute('hidden')
        }
        if (!action) {} else {
            for (let i = 0; i < action.length; i++) {
                action[i].removeAttribute('hidden')
            }
        }
        fullreportMenu.removeAttribute('hidden')
        notesList.removeAttribute('hidden')
        fullNotesList.removeAttribute('hidden')
        archive.removeAttribute('hidden')
        navSkips.removeAttribute('hidden')
        navSkipsTable.removeAttribute('hidden')
        navGroups.removeAttribute('hidden')
        navKrReport.removeAttribute('hidden')
    }
    if (roleUser.textContent == 4) {
        if (!sbg) {} else {
            sbg.removeAttribute('hidden')
        }
        fullreportMenu.removeAttribute('hidden')
        archive.removeAttribute('hidden')
        navSkipsTable.removeAttribute('hidden')
    }
    if (roleUser.textContent == 5) {
        navGroups.removeAttribute('hidden')
    }
    if (roleUser.textContent == 3) {
        notesList.removeAttribute('hidden')
        navGroups.removeAttribute('hidden')
        navSkips.removeAttribute('hidden')
        navKrReport.removeAttribute('hidden')
    }
    // Отображение ссылок для преподавателей



    // Копирование ссылки на таблицу с отметками
    if (!document.getElementById('copy__link')) {} else {
        document.getElementById('copy__link').onclick = function (event) {
            event.preventDefault()
            var copyText = document.getElementById('myInput')
            copyText.select()
            document.execCommand('copy')
            document.getElementById('copy__tip').textContent = 'Ссылка скопирована!'
        }
        document.getElementById('copy__link').onmouseout = function (event) {
            document.getElementById('copy__tip').textContent = 'Скопировать ссылку'
        }
    }
    // Копирование ссылки на таблицу с отметками
    let editMonate = document.getElementById('edit_monate')
    let enterMonate = document.getElementById('enter_monate')

    let toDo = document.getElementById('edit_kr_to_do')
    let activities = document.getElementById('edit_kr_group_activities')
    let section = document.getElementById('edit_kr_section')
    let academic_debt = document.getElementById('edit_kr_academic_debt')
    let skipping = document.getElementById('edit_kr_skipping')
    let breaking_rules = document.getElementById('edit_kr_breaking_rules')
    let smoking = document.getElementById('edit_kr_smoking')
    let dress_code = document.getElementById('edit_kr_dress_code')
    let volunteers = document.getElementById('edit_kr_volunteers')
    let food = document.getElementById('edit_kr_food')
    let stableFood = document.getElementById('edit_kr_stable_food')
    let characteristics = document.getElementById('edit_kr_characteristics')
    let stLeght = document.getElementById('st_leght')
    let points = document.getElementById('points')

    let editBtn = document.getElementById('edit_kr_report')


    if (!editMonate) {} else {
        if (editMonate.value == 1) {
            enterMonate.value = 'Сентябрь'
        }
        if (editMonate.value == 2) {
            enterMonate.value = 'Октябрь'
        }
        if (editMonate.value == 3) {
            enterMonate.value = 'Ноябрь'
        }
        if (editMonate.value == 4) {
            enterMonate.value = 'Декабрь'
        }
        if (editMonate.value == 5) {
            enterMonate.value = 'Январь'
        }
        if (editMonate.value == 6) {
            enterMonate.value = 'Февраль'
        }
        if (editMonate.value == 7) {
            enterMonate.value = 'Март'
        }
        if (editMonate.value == 8) {
            enterMonate.value = 'Апрель'
        }
        if (editMonate.value == 9) {
            enterMonate.value = 'Май'
        }
        if (editMonate.value == 10) {
            enterMonate.value = 'Июнь'
        }
        editMonate.onchange = function () {
            if (editMonate.value == 1) {
                enterMonate.value = 'Сентябрь'
            }
            if (editMonate.value == 2) {
                enterMonate.value = 'Октябрь'
            }
            if (editMonate.value == 3) {
                enterMonate.value = 'Ноябрь'
            }
            if (editMonate.value == 4) {
                enterMonate.value = 'Декабрь'
            }
            if (editMonate.value == 5) {
                enterMonate.value = 'Январь'
            }
            if (editMonate.value == 6) {
                enterMonate.value = 'Февраль'
            }
            if (editMonate.value == 7) {
                enterMonate.value = 'Март'
            }
            if (editMonate.value == 8) {
                enterMonate.value = 'Апрель'
            }
            if (editMonate.value == 9) {
                enterMonate.value = 'Май'
            }
            if (editMonate.value == 10) {
                enterMonate.value = 'Июнь'
            }
        }
    }

    if (!toDo) {} else {
        toDo.oninput = function () {
            if (+toDo.value > +stLeght.textContent) {
                toDo.value = stLeght.textContent
            }
        }
    }
    if (!activities) {} else {
        let activitiesName_1 = document.getElementById('edit_kr_activities_name_1')
        let activitiesName_2 = document.getElementById('edit_kr_activities_name_2')
        let activitiesName_3 = document.getElementById('edit_kr_activities_name_3')
        let activitiesName_4 = document.getElementById('edit_kr_activities_name_4')

        if (activities.value >= 1) {
            activitiesName_1.removeAttribute('hidden')
        }
        if (activities.value >= 2) {
            activitiesName_2.removeAttribute('hidden')
        }
        if (activities.value >= 3) {
            activitiesName_3.removeAttribute('hidden')
        }
        if (activities.value >= 4) {
            activitiesName_4.removeAttribute('hidden')
        }
        if (activities.value < 4) {
            activitiesName_4.setAttribute('hidden', 'ok')
        }
        if (activities.value < 3) {
            activitiesName_3.setAttribute('hidden', 'ok')
        }
        if (activities.value < 2) {
            activitiesName_2.setAttribute('hidden', 'ok')
        }
        if (activities.value < 1) {
            activitiesName_1.setAttribute('hidden', 'ok')
        }

        activities.oninput = function () {
            if (activities.value >= 1) {
                activitiesName_1.removeAttribute('hidden')
            }
            if (activities.value >= 2) {
                activitiesName_2.removeAttribute('hidden')
            }
            if (activities.value >= 3) {
                activitiesName_3.removeAttribute('hidden')
            }
            if (activities.value >= 4) {
                activitiesName_4.removeAttribute('hidden')
            }
            if (activities.value < 4) {
                activitiesName_4.setAttribute('hidden', 'ok')
                activitiesName_4.value = ""
            }
            if (activities.value < 3) {
                activitiesName_3.setAttribute('hidden', 'ok')
                activitiesName_3.value = ""
            }
            if (activities.value < 2) {
                activitiesName_2.setAttribute('hidden', 'ok')
                activitiesName_2.value = ""
            }
            if (activities.value < 1) {
                activitiesName_1.setAttribute('hidden', 'ok')
                activitiesName_1.value = ""
            }
        }
    }
    if (!section) {} else {
        section.oninput = function () {
            if (+section.value > +stLeght.textContent) {
                section.value = stLeght.textContent
            }
        }
    }
    if (!academic_debt) {} else {
        academic_debt.oninput = function () {
            if (+academic_debt.value > +stLeght.textContent) {
                academic_debt.value = stLeght.textContent
            }
        }
    }
    if (!skipping) {} else {
        let skipping_1 = document.getElementById('skipping_name_1')
        let skipping_2 = document.getElementById('skipping_name_2')
        let skipping_3 = document.getElementById('skipping_name_3')
        let skipping_4 = document.getElementById('skipping_name_4')
        let skipping_5 = document.getElementById('skipping_name_5')
        let skipping_6 = document.getElementById('skipping_name_6')
        let skipping_7 = document.getElementById('skipping_name_7')
        let skipping_8 = document.getElementById('skipping_name_8')
        let skipping_9 = document.getElementById('skipping_name_9')
        let skipping_10 = document.getElementById('skipping_name_10')
        let skipping_11 = document.getElementById('skipping_name_11')
        let skipping_12 = document.getElementById('skipping_name_12')
        let skipping_13 = document.getElementById('skipping_name_13')
        let skipping_14 = document.getElementById('skipping_name_14')
        let skipping_15 = document.getElementById('skipping_name_15')

        if (skipping.value >= 1) {
            skipping_1.removeAttribute('hidden')
        }
        if (skipping.value >= 2) {
            skipping_2.removeAttribute('hidden')
        }
        if (skipping.value >= 3) {
            skipping_3.removeAttribute('hidden')
        }
        if (skipping.value >= 4) {
            skipping_4.removeAttribute('hidden')
        }
        if (skipping.value >= 5) {
            skipping_5.removeAttribute('hidden')
        }
        if (skipping.value >= 6) {
            skipping_6.removeAttribute('hidden')
        }
        if (skipping.value >= 7) {
            skipping_7.removeAttribute('hidden')
        }
        if (skipping.value >= 8) {
            skipping_8.removeAttribute('hidden')
        }
        if (skipping.value >= 9) {
            skipping_9.removeAttribute('hidden')
        }
        if (skipping.value >= 10) {
            skipping_10.removeAttribute('hidden')
        }
        if (skipping.value >= 11) {
            skipping_11.removeAttribute('hidden')
        }
        if (skipping.value >= 12) {
            skipping_12.removeAttribute('hidden')
        }
        if (skipping.value >= 13) {
            skipping_13.removeAttribute('hidden')
        }
        if (skipping.value >= 14) {
            skipping_14.removeAttribute('hidden')
        }
        if (skipping.value >= 15) {
            skipping_15.removeAttribute('hidden')
        }

        skipping.oninput = function () {
            if (+skipping.value > +stLeght.textContent) {
                skipping.value = stLeght.textContent
            }
            if (skipping.value >= 1) {
                skipping_1.removeAttribute('hidden')
            }
            if (skipping.value >= 2) {
                skipping_2.removeAttribute('hidden')
            }
            if (skipping.value >= 3) {
                skipping_3.removeAttribute('hidden')
            }
            if (skipping.value >= 4) {
                skipping_4.removeAttribute('hidden')
            }
            if (skipping.value >= 5) {
                skipping_5.removeAttribute('hidden')
            }
            if (skipping.value >= 6) {
                skipping_6.removeAttribute('hidden')
            }
            if (skipping.value >= 7) {
                skipping_7.removeAttribute('hidden')
            }
            if (skipping.value >= 8) {
                skipping_8.removeAttribute('hidden')
            }
            if (skipping.value >= 9) {
                skipping_9.removeAttribute('hidden')
            }
            if (skipping.value >= 10) {
                skipping_10.removeAttribute('hidden')
            }
            if (skipping.value >= 11) {
                skipping_11.removeAttribute('hidden')
            }
            if (skipping.value >= 12) {
                skipping_12.removeAttribute('hidden')
            }
            if (skipping.value >= 13) {
                skipping_13.removeAttribute('hidden')
            }
            if (skipping.value >= 14) {
                skipping_14.removeAttribute('hidden')
            }
            if (skipping.value >= 15) {
                skipping_15.removeAttribute('hidden')
            }


            if (skipping.value < 15) {
                skipping_15.setAttribute('hidden', 'ok')
                skipping_15.value = ""
            }
            if (skipping.value < 14) {
                skipping_14.setAttribute('hidden', 'ok')
                skipping_14.value = ""
            }
            if (skipping.value < 13) {
                skipping_13.setAttribute('hidden', 'ok')
                skipping_13.value = ""
            }
            if (skipping.value < 12) {
                skipping_12.setAttribute('hidden', 'ok')
                skipping_12.value = ""
            }
            if (skipping.value < 11) {
                skipping_11.setAttribute('hidden', 'ok')
                skipping_11.value = ""
            }
            if (skipping.value < 10) {
                skipping_10.setAttribute('hidden', 'ok')
                skipping_10.value = ""
            }
            if (skipping.value < 9) {
                skipping_9.setAttribute('hidden', 'ok')
                skipping_9.value = ""
            }
            if (skipping.value < 8) {
                skipping_8.setAttribute('hidden', 'ok')
                skipping_8.value = ""
            }
            if (skipping.value < 7) {
                skipping_7.setAttribute('hidden', 'ok')
                skipping_7.value = ""
            }
            if (skipping.value < 6) {
                skipping_6.setAttribute('hidden', 'ok')
                skipping_6.value = ""
            }
            if (skipping.value < 5) {
                skipping_5.setAttribute('hidden', 'ok')
                skipping_5.value = ""
            }
            if (skipping.value < 4) {
                skipping_4.setAttribute('hidden', 'ok')
                skipping_4.value = ""
            }
            if (skipping.value < 3) {
                skipping_3.setAttribute('hidden', 'ok')
                skipping_3.value = ""
            }
            if (skipping.value < 2) {
                skipping_2.setAttribute('hidden', 'ok')
                skipping_2.value = ""
            }
            if (skipping.value < 1) {
                skipping_1.setAttribute('hidden', 'ok')
                skipping_1.value = ""
            }
        }
    }
    if (!breaking_rules) {} else {
        let breakingRules_1 = document.getElementById('rules_name_1')
        let breakingRules_2 = document.getElementById('rules_name_2')
        let breakingRules_3 = document.getElementById('rules_name_3')
        let breakingRules_4 = document.getElementById('rules_name_4')
        let breakingRules_5 = document.getElementById('rules_name_5')
        let breakingRules_6 = document.getElementById('rules_name_6')
        let breakingRules_7 = document.getElementById('rules_name_7')
        let breakingRules_8 = document.getElementById('rules_name_8')
        let breakingRules_9 = document.getElementById('rules_name_9')
        let breakingRules_10 = document.getElementById('rules_name_10')
        let breakingRules_11 = document.getElementById('rules_name_11')
        let breakingRules_12 = document.getElementById('rules_name_12')
        let breakingRules_13 = document.getElementById('rules_name_13')
        let breakingRules_14 = document.getElementById('rules_name_14')
        let breakingRules_15 = document.getElementById('rules_name_15')
        let breakingRules_16 = document.getElementById('rules_name_16')
        let breakingRules_17 = document.getElementById('rules_name_17')
        let breakingRules_18 = document.getElementById('rules_name_18')
        let breakingRules_19 = document.getElementById('rules_name_19')
        let breakingRules_20 = document.getElementById('rules_name_20')
        let breakingRules_21 = document.getElementById('rules_name_21')

        if (breaking_rules.value >= 1) {
            breakingRules_1.removeAttribute('hidden')
        }
        if (breaking_rules.value >= 2) {
            breakingRules_2.removeAttribute('hidden')
        }
        if (breaking_rules.value >= 3) {
            breakingRules_3.removeAttribute('hidden')
        }
        if (breaking_rules.value >= 4) {
            breakingRules_4.removeAttribute('hidden')
        }
        if (breaking_rules.value >= 5) {
            breakingRules_5.removeAttribute('hidden')
        }
        if (breaking_rules.value >= 6) {
            breakingRules_6.removeAttribute('hidden')
        }
        if (breaking_rules.value >= 7) {
            breakingRules_7.removeAttribute('hidden')
        }
        if (breaking_rules.value >= 8) {
            breakingRules_8.removeAttribute('hidden')
        }
        if (breaking_rules.value >= 9) {
            breakingRules_9.removeAttribute('hidden')
        }
        if (breaking_rules.value >= 10) {
            breakingRules_10.removeAttribute('hidden')
        }
        if (breaking_rules.value >= 11) {
            breakingRules_11.removeAttribute('hidden')
        }
        if (breaking_rules.value >= 12) {
            breakingRules_12.removeAttribute('hidden')
        }
        if (breaking_rules.value >= 13) {
            breakingRules_13.removeAttribute('hidden')
        }
        if (breaking_rules.value >= 14) {
            breakingRules_14.removeAttribute('hidden')
        }
        if (breaking_rules.value >= 15) {
            breakingRules_15.removeAttribute('hidden')
        }
        if (breaking_rules.value >= 16) {
            breakingRules_16.removeAttribute('hidden')
        }
        if (breaking_rules.value >= 17) {
            breakingRules_17.removeAttribute('hidden')
        }
        if (breaking_rules.value >= 18) {
            breakingRules_18.removeAttribute('hidden')
        }
        if (breaking_rules.value >= 19) {
            breakingRules_19.removeAttribute('hidden')
        }
        if (breaking_rules.value >= 20) {
            breakingRules_20.removeAttribute('hidden')
        }
        if (breaking_rules.value >= 21) {
            breakingRules_21.removeAttribute('hidden')
        }

        breaking_rules.oninput = function () {
            if (+breaking_rules.value > +stLeght.textContent) {
                breaking_rules.value = stLeght.textContent
            }
            if (breaking_rules.value >= 1) {
                breakingRules_1.removeAttribute('hidden')
            }
            if (breaking_rules.value >= 2) {
                breakingRules_2.removeAttribute('hidden')
            }
            if (breaking_rules.value >= 3) {
                breakingRules_3.removeAttribute('hidden')
            }
            if (breaking_rules.value >= 4) {
                breakingRules_4.removeAttribute('hidden')
            }
            if (breaking_rules.value >= 5) {
                breakingRules_5.removeAttribute('hidden')
            }
            if (breaking_rules.value >= 6) {
                breakingRules_6.removeAttribute('hidden')
            }
            if (breaking_rules.value >= 7) {
                breakingRules_7.removeAttribute('hidden')
            }
            if (breaking_rules.value >= 8) {
                breakingRules_8.removeAttribute('hidden')
            }
            if (breaking_rules.value >= 9) {
                breakingRules_9.removeAttribute('hidden')
            }
            if (breaking_rules.value >= 10) {
                breakingRules_10.removeAttribute('hidden')
            }
            if (breaking_rules.value >= 11) {
                breakingRules_11.removeAttribute('hidden')
            }
            if (breaking_rules.value >= 12) {
                breakingRules_12.removeAttribute('hidden')
            }
            if (breaking_rules.value >= 13) {
                breakingRules_13.removeAttribute('hidden')
            }
            if (breaking_rules.value >= 14) {
                breakingRules_14.removeAttribute('hidden')
            }
            if (breaking_rules.value >= 15) {
                breakingRules_15.removeAttribute('hidden')
            }
            if (breaking_rules.value >= 16) {
                breakingRules_16.removeAttribute('hidden')
            }
            if (breaking_rules.value >= 17) {
                breakingRules_17.removeAttribute('hidden')
            }
            if (breaking_rules.value >= 18) {
                breakingRules_18.removeAttribute('hidden')
            }
            if (breaking_rules.value >= 19) {
                breakingRules_19.removeAttribute('hidden')
            }
            if (breaking_rules.value >= 20) {
                breakingRules_20.removeAttribute('hidden')
            }
            if (breaking_rules.value >= 21) {
                breakingRules_21.removeAttribute('hidden')
            }


            if (breaking_rules.value < 21) {
                breakingRules_21.setAttribute('hidden', 'ok')
                breakingRules_21.value = ""
            }
            if (breaking_rules.value < 20) {
                breakingRules_20.setAttribute('hidden', 'ok')
                breakingRules_20.value = ""
            }
            if (breaking_rules.value < 19) {
                breakingRules_19.setAttribute('hidden', 'ok')
                breakingRules_19.value = ""
            }
            if (breaking_rules.value < 18) {
                breakingRules_18.setAttribute('hidden', 'ok')
                breakingRules_18.value = ""
            }
            if (breaking_rules.value < 17) {
                breakingRules_17.setAttribute('hidden', 'ok')
                breakingRules_17.value = ""
            }
            if (breaking_rules.value < 16) {
                breakingRules_16.setAttribute('hidden', 'ok')
                breakingRules_16.value = ""
            }
            if (breaking_rules.value < 15) {
                breakingRules_15.setAttribute('hidden', 'ok')
                breakingRules_15.value = ""
            }
            if (breaking_rules.value < 14) {
                breakingRules_14.setAttribute('hidden', 'ok')
                breakingRules_14.value = ""
            }
            if (breaking_rules.value < 13) {
                breakingRules_13.setAttribute('hidden', 'ok')
                breakingRules_13.value = ""
            }
            if (breaking_rules.value < 12) {
                breakingRules_12.setAttribute('hidden', 'ok')
                breakingRules_12.value = ""
            }
            if (breaking_rules.value < 11) {
                breakingRules_11.setAttribute('hidden', 'ok')
                breakingRules_11.value = ""
            }
            if (breaking_rules.value < 10) {
                breakingRules_10.setAttribute('hidden', 'ok')
                breakingRules_10.value = ""
            }
            if (breaking_rules.value < 9) {
                breakingRules_9.setAttribute('hidden', 'ok')
                breakingRules_9.value = ""
            }
            if (breaking_rules.value < 8) {
                breakingRules_8.setAttribute('hidden', 'ok')
                breakingRules_8.value = ""
            }
            if (breaking_rules.value < 7) {
                breakingRules_7.setAttribute('hidden', 'ok')
                breakingRules_7.value = ""
            }
            if (breaking_rules.value < 6) {
                breakingRules_6.setAttribute('hidden', 'ok')
                breakingRules_6.value = ""
            }
            if (breaking_rules.value < 5) {
                breakingRules_5.setAttribute('hidden', 'ok')
                breakingRules_5.value = ""
            }
            if (breaking_rules.value < 4) {
                breakingRules_4.setAttribute('hidden', 'ok')
                breakingRules_4.value = ""
            }
            if (breaking_rules.value < 3) {
                breakingRules_3.setAttribute('hidden', 'ok')
                breakingRules_3.value = ""
            }
            if (breaking_rules.value < 2) {
                breakingRules_2.setAttribute('hidden', 'ok')
                breakingRules_2.value = ""
            }
            if (breaking_rules.value < 1) {
                breakingRules_1.setAttribute('hidden', 'ok')
                breakingRules_1.value = ""
            }
        }
    }
    if (!smoking) {} else {
        let smokingName_1 = document.getElementById('smoking_name_1')
        let smokingName_2 = document.getElementById('smoking_name_2')
        let smokingName_3 = document.getElementById('smoking_name_3')
        let smokingName_4 = document.getElementById('smoking_name_4')
        let smokingName_5 = document.getElementById('smoking_name_5')
        let smokingName_6 = document.getElementById('smoking_name_6')
        let smokingName_7 = document.getElementById('smoking_name_7')
        let smokingName_8 = document.getElementById('smoking_name_8')
        let smokingName_9 = document.getElementById('smoking_name_9')
        let smokingName_10 = document.getElementById('smoking_name_10')
        let smokingName_11 = document.getElementById('smoking_name_11')
        let smokingName_12 = document.getElementById('smoking_name_12')
        let smokingName_13 = document.getElementById('smoking_name_13')
        let smokingName_14 = document.getElementById('smoking_name_14')
        let smokingName_15 = document.getElementById('smoking_name_15')

        if (smoking.value >= 1) {
            smokingName_1.removeAttribute('hidden')
        }
        if (smoking.value >= 2) {
            smokingName_2.removeAttribute('hidden')
        }
        if (smoking.value >= 3) {
            smokingName_3.removeAttribute('hidden')
        }
        if (smoking.value >= 4) {
            smokingName_4.removeAttribute('hidden')
        }
        if (smoking.value >= 5) {
            smokingName_5.removeAttribute('hidden')
        }
        if (smoking.value >= 6) {
            smokingName_6.removeAttribute('hidden')
        }
        if (smoking.value >= 7) {
            smokingName_7.removeAttribute('hidden')
        }
        if (smoking.value >= 8) {
            smokingName_8.removeAttribute('hidden')
        }
        if (smoking.value >= 9) {
            smokingName_9.removeAttribute('hidden')
        }
        if (smoking.value >= 10) {
            smokingName_10.removeAttribute('hidden')
        }
        if (smoking.value >= 11) {
            smokingName_11.removeAttribute('hidden')
        }
        if (smoking.value >= 12) {
            smokingName_12.removeAttribute('hidden')
        }
        if (smoking.value >= 13) {
            smokingName_13.removeAttribute('hidden')
        }
        if (smoking.value >= 14) {
            smokingName_14.removeAttribute('hidden')
        }
        if (smoking.value >= 15) {
            smokingName_15.removeAttribute('hidden')
        }

        smoking.oninput = function () {
            if (+smoking.value > +stLeght.textContent) {
                smoking.value = stLeght.textContent
            }

            if (smoking.value >= 1) {
                smokingName_1.removeAttribute('hidden')
            }
            if (smoking.value >= 2) {
                smokingName_2.removeAttribute('hidden')
            }
            if (smoking.value >= 3) {
                smokingName_3.removeAttribute('hidden')
            }
            if (smoking.value >= 4) {
                smokingName_4.removeAttribute('hidden')
            }
            if (smoking.value >= 5) {
                smokingName_5.removeAttribute('hidden')
            }
            if (smoking.value >= 6) {
                smokingName_6.removeAttribute('hidden')
            }
            if (smoking.value >= 7) {
                smokingName_7.removeAttribute('hidden')
            }
            if (smoking.value >= 8) {
                smokingName_8.removeAttribute('hidden')
            }
            if (smoking.value >= 9) {
                smokingName_9.removeAttribute('hidden')
            }
            if (smoking.value >= 10) {
                smokingName_10.removeAttribute('hidden')
            }
            if (smoking.value >= 11) {
                smokingName_11.removeAttribute('hidden')
            }
            if (smoking.value >= 12) {
                smokingName_12.removeAttribute('hidden')
            }
            if (smoking.value >= 13) {
                smokingName_13.removeAttribute('hidden')
            }
            if (smoking.value >= 14) {
                smokingName_14.removeAttribute('hidden')
            }
            if (smoking.value >= 15) {
                smokingName_15.removeAttribute('hidden')
            }


            if (smoking.value < 15) {
                smokingName_15.setAttribute('hidden', 'ok')
                smokingName_15.value = ""
            }
            if (smoking.value < 14) {
                smokingName_14.setAttribute('hidden', 'ok')
                smokingName_14.value = ""
            }
            if (smoking.value < 13) {
                smokingName_13.setAttribute('hidden', 'ok')
                smokingName_13.value = ""
            }
            if (smoking.value < 12) {
                smokingName_12.setAttribute('hidden', 'ok')
                smokingName_12.value = ""
            }
            if (smoking.value < 11) {
                smokingName_11.setAttribute('hidden', 'ok')
                smokingName_11.value = ""
            }
            if (smoking.value < 10) {
                smokingName_10.setAttribute('hidden', 'ok')
                smokingName_10.value = ""
            }
            if (smoking.value < 9) {
                smokingName_9.setAttribute('hidden', 'ok')
                smokingName_9.value = ""
            }
            if (smoking.value < 8) {
                smokingName_8.setAttribute('hidden', 'ok')
                smokingName_8.value = ""
            }
            if (smoking.value < 7) {
                smokingName_7.setAttribute('hidden', 'ok')
                smokingName_7.value = ""
            }
            if (smoking.value < 6) {
                smokingName_6.setAttribute('hidden', 'ok')
                smokingName_6.value = ""
            }
            if (smoking.value < 5) {
                smokingName_5.setAttribute('hidden', 'ok')
                smokingName_5.value = ""
            }
            if (smoking.value < 4) {
                smokingName_4.setAttribute('hidden', 'ok')
                smokingName_4.value = ""
            }
            if (smoking.value < 3) {
                smokingName_3.setAttribute('hidden', 'ok')
                smokingName_3.value = ""
            }
            if (smoking.value < 2) {
                smokingName_2.setAttribute('hidden', 'ok')
                smokingName_2.value = ""
            }
            if (smoking.value < 1) {
                smokingName_1.setAttribute('hidden', 'ok')
                smokingName_1.value = ""
            }
        }
    }
    if (!dress_code) {} else {
        let dressCodeName_1 = document.getElementById('dress_code_name_1')
        let dressCodeName_2 = document.getElementById('dress_code_name_2')
        let dressCodeName_3 = document.getElementById('dress_code_name_3')
        let dressCodeName_4 = document.getElementById('dress_code_name_4')
        let dressCodeName_5 = document.getElementById('dress_code_name_5')
        let dressCodeName_6 = document.getElementById('dress_code_name_6')
        let dressCodeName_7 = document.getElementById('dress_code_name_7')
        let dressCodeName_8 = document.getElementById('dress_code_name_8')
        let dressCodeName_9 = document.getElementById('dress_code_name_9')
        let dressCodeName_10 = document.getElementById('dress_code_name_10')

        if (dress_code.value >= 1) {
            dressCodeName_1.removeAttribute('hidden')
        }
        if (dress_code.value >= 2) {
            dressCodeName_2.removeAttribute('hidden')
        }
        if (dress_code.value >= 3) {
            dressCodeName_3.removeAttribute('hidden')
        }
        if (dress_code.value >= 4) {
            dressCodeName_4.removeAttribute('hidden')
        }
        if (dress_code.value >= 5) {
            dressCodeName_5.removeAttribute('hidden')
        }
        if (dress_code.value >= 6) {
            dressCodeName_6.removeAttribute('hidden')
        }
        if (dress_code.value >= 7) {
            dressCodeName_7.removeAttribute('hidden')
        }
        if (dress_code.value >= 8) {
            dressCodeName_8.removeAttribute('hidden')
        }
        if (dress_code.value >= 9) {
            dressCodeName_9.removeAttribute('hidden')
        }
        if (dress_code.value >= 10) {
            dressCodeName_10.removeAttribute('hidden')
        }

        dress_code.oninput = function () {
            if (+dress_code.value > +stLeght.textContent) {
                dress_code.value = stLeght.textContent
            }

            if (dress_code.value >= 1) {
                dressCodeName_1.removeAttribute('hidden')
            }
            if (dress_code.value >= 2) {
                dressCodeName_2.removeAttribute('hidden')
            }
            if (dress_code.value >= 3) {
                dressCodeName_3.removeAttribute('hidden')
            }
            if (dress_code.value >= 4) {
                dressCodeName_4.removeAttribute('hidden')
            }
            if (dress_code.value >= 5) {
                dressCodeName_5.removeAttribute('hidden')
            }
            if (dress_code.value >= 6) {
                dressCodeName_6.removeAttribute('hidden')
            }
            if (dress_code.value >= 7) {
                dressCodeName_7.removeAttribute('hidden')
            }
            if (dress_code.value >= 8) {
                dressCodeName_8.removeAttribute('hidden')
            }
            if (dress_code.value >= 9) {
                dressCodeName_9.removeAttribute('hidden')
            }
            if (dress_code.value >= 10) {
                dressCodeName_10.removeAttribute('hidden')
            }

            if (dress_code.value < 10) {
                dressCodeName_10.setAttribute('hidden', 'ok')
                dressCodeName_10.value = ""
            }
            if (dress_code.value < 9) {
                dressCodeName_9.setAttribute('hidden', 'ok')
                dressCodeName_9.value = ""
            }
            if (dress_code.value < 8) {
                dressCodeName_8.setAttribute('hidden', 'ok')
                dressCodeName_8.value = ""
            }
            if (dress_code.value < 7) {
                dressCodeName_7.setAttribute('hidden', 'ok')
                dressCodeName_7.value = ""
            }
            if (dress_code.value < 6) {
                dressCodeName_6.setAttribute('hidden', 'ok')
                dressCodeName_6.value = ""
            }
            if (dress_code.value < 5) {
                dressCodeName_5.setAttribute('hidden', 'ok')
                dressCodeName_5.value = ""
            }
            if (dress_code.value < 4) {
                dressCodeName_4.setAttribute('hidden', 'ok')
                dressCodeName_4.value = ""
            }
            if (dress_code.value < 3) {
                dressCodeName_3.setAttribute('hidden', 'ok')
                dressCodeName_3.value = ""
            }
            if (dress_code.value < 2) {
                dressCodeName_2.setAttribute('hidden', 'ok')
                dressCodeName_2.value = ""
            }
            if (dress_code.value < 1) {
                dressCodeName_1.setAttribute('hidden', 'ok')
                dressCodeName_1.value = ""
            }
        }
    }
    if (!volunteers) {} else {
        volunteers.oninput = function () {
            if (+volunteers.value > +stLeght.textContent) {
                volunteers.value = stLeght.textContent
            }
        }
    }
    if (!food) {} else {
        let foodName_1 = document.getElementById('food_name_1')
        let foodName_2 = document.getElementById('food_name_2')
        let foodName_3 = document.getElementById('food_name_3')
        let foodName_4 = document.getElementById('food_name_4')
        let foodName_5 = document.getElementById('food_name_5')
        let foodName_6 = document.getElementById('food_name_6')
        let foodName_7 = document.getElementById('food_name_7')
        let foodName_8 = document.getElementById('food_name_8')
        let foodName_9 = document.getElementById('food_name_9')
        let foodName_10 = document.getElementById('food_name_10')

        if (food.value >= 1) {
            foodName_1.removeAttribute('hidden')
        }
        if (food.value >= 2) {
            foodName_2.removeAttribute('hidden')
        }
        if (food.value >= 3) {
            foodName_3.removeAttribute('hidden')
        }
        if (food.value >= 4) {
            foodName_4.removeAttribute('hidden')
        }
        if (food.value >= 5) {
            foodName_5.removeAttribute('hidden')
        }
        if (food.value >= 6) {
            foodName_6.removeAttribute('hidden')
        }
        if (food.value >= 7) {
            foodName_7.removeAttribute('hidden')
        }
        if (food.value >= 8) {
            foodName_8.removeAttribute('hidden')
        }
        if (food.value >= 9) {
            foodName_9.removeAttribute('hidden')
        }
        if (food.value >= 10) {
            foodName_10.removeAttribute('hidden')
        }

        food.oninput = function () {
            if (+food.value > +stLeght.textContent) {
                food.value = stLeght.textContent
            }

            if (food.value >= 1) {
                foodName_1.removeAttribute('hidden')
            }
            if (food.value >= 2) {
                foodName_2.removeAttribute('hidden')
            }
            if (food.value >= 3) {
                foodName_3.removeAttribute('hidden')
            }
            if (food.value >= 4) {
                foodName_4.removeAttribute('hidden')
            }
            if (food.value >= 5) {
                foodName_5.removeAttribute('hidden')
            }
            if (food.value >= 6) {
                foodName_6.removeAttribute('hidden')
            }
            if (food.value >= 7) {
                foodName_7.removeAttribute('hidden')
            }
            if (food.value >= 8) {
                foodName_8.removeAttribute('hidden')
            }
            if (food.value >= 9) {
                foodName_9.removeAttribute('hidden')
            }
            if (food.value >= 10) {
                foodName_10.removeAttribute('hidden')
            }

            if (food.value < 1) {
                foodName_1.setAttribute('hidden', 'ok')
                foodName_1.value = ""
            }
            if (food.value < 2) {
                foodName_2.setAttribute('hidden', 'ok')
                foodName_2.value = ""
            }
            if (food.value < 3) {
                foodName_3.setAttribute('hidden', 'ok')
                foodName_3.value = ""
            }
            if (food.value < 4) {
                foodName_4.setAttribute('hidden', 'ok')
                foodName_4.value = ""
            }
            if (food.value < 5) {
                foodName_5.setAttribute('hidden', 'ok')
                foodName_5.value = ""
            }
            if (food.value < 6) {
                foodName_6.setAttribute('hidden', 'ok')
                foodName_6.value = ""
            }
            if (food.value < 7) {
                foodName_7.setAttribute('hidden', 'ok')
                foodName_7.value = ""
            }
            if (food.value < 8) {
                foodName_8.setAttribute('hidden', 'ok')
                foodName_8.value = ""
            }
            if (food.value < 9) {
                foodName_9.setAttribute('hidden', 'ok')
                foodName_9.value = ""
            }
            if (food.value < 10) {
                foodName_10.setAttribute('hidden', 'ok')
                foodName_10.value = ""
            }
            if (food.value < 1) {
                foodName_1.setAttribute('hidden', 'ok')
                foodName_1.value = ""
            }
        }
    }

    if (!stableFood) {} else {
        let stable_foodName_1 = document.getElementById('stable_food_name_1')
        let stable_foodName_2 = document.getElementById('stable_food_name_2')
        let stable_foodName_3 = document.getElementById('stable_food_name_3')
        let stable_foodName_4 = document.getElementById('stable_food_name_4')
        let stable_foodName_5 = document.getElementById('stable_food_name_5')
        let stable_foodName_6 = document.getElementById('stable_food_name_6')
        let stable_foodName_7 = document.getElementById('stable_food_name_7')
        let stable_foodName_8 = document.getElementById('stable_food_name_8')
        let stable_foodName_9 = document.getElementById('stable_food_name_9')
        let stable_foodName_10 = document.getElementById('stable_food_name_10')
        let stable_foodName_11 = document.getElementById('stable_food_name_11')
        let stable_foodName_12 = document.getElementById('stable_food_name_12')
        let stable_foodName_13 = document.getElementById('stable_food_name_13')
        let stable_foodName_14 = document.getElementById('stable_food_name_14')
        let stable_foodName_15 = document.getElementById('stable_food_name_15')
        let stable_foodName_16 = document.getElementById('stable_food_name_16')
        let stable_foodName_17 = document.getElementById('stable_food_name_17')
        let stable_foodName_18 = document.getElementById('stable_food_name_18')
        let stable_foodName_19 = document.getElementById('stable_food_name_19')
        let stable_foodName_20 = document.getElementById('stable_food_name_20')

        if (stableFood.value >= 1) {
            stable_foodName_1.removeAttribute('hidden')
        }
        if (stableFood.value >= 2) {
            stable_foodName_2.removeAttribute('hidden')
        }
        if (stableFood.value >= 3) {
            stable_foodName_3.removeAttribute('hidden')
        }
        if (stableFood.value >= 4) {
            stable_foodName_4.removeAttribute('hidden')
        }
        if (stableFood.value >= 5) {
            stable_foodName_5.removeAttribute('hidden')
        }
        if (stableFood.value >= 6) {
            stable_foodName_6.removeAttribute('hidden')
        }
        if (stableFood.value >= 7) {
            stable_foodName_7.removeAttribute('hidden')
        }
        if (stableFood.value >= 8) {
            stable_foodName_8.removeAttribute('hidden')
        }
        if (stableFood.value >= 9) {
            stable_foodName_9.removeAttribute('hidden')
        }
        if (stableFood.value >= 10) {
            stable_foodName_10.removeAttribute('hidden')
        }
        if (stableFood.value >= 11) {
            stable_foodName_11.removeAttribute('hidden')
        }
        if (stableFood.value >= 12) {
            stable_foodName_12.removeAttribute('hidden')
        }
        if (stableFood.value >= 13) {
            stable_foodName_13.removeAttribute('hidden')
        }
        if (stableFood.value >= 14) {
            stable_foodName_14.removeAttribute('hidden')
        }
        if (stableFood.value >= 15) {
            stable_foodName_15.removeAttribute('hidden')
        }
        if (stableFood.value >= 16) {
            stable_foodName_16.removeAttribute('hidden')
        }
        if (stableFood.value >= 17) {
            stable_foodName_17.removeAttribute('hidden')
        }
        if (stableFood.value >= 18) {
            stable_foodName_18.removeAttribute('hidden')
        }
        if (stableFood.value >= 19) {
            stable_foodName_19.removeAttribute('hidden')
        }
        if (stableFood.value >= 20) {
            stable_foodName_20.removeAttribute('hidden')
        }

        stableFood.oninput = function () {
            if (+stableFood.value > +stLeght.textContent) {
                stableFood.value = stLeght.textContent
            }

            if (stableFood.value >= 1) {
                stable_foodName_1.removeAttribute('hidden')
            }
            if (stableFood.value >= 2) {
                stable_foodName_2.removeAttribute('hidden')
            }
            if (stableFood.value >= 3) {
                stable_foodName_3.removeAttribute('hidden')
            }
            if (stableFood.value >= 4) {
                stable_foodName_4.removeAttribute('hidden')
            }
            if (stableFood.value >= 5) {
                stable_foodName_5.removeAttribute('hidden')
            }
            if (stableFood.value >= 6) {
                stable_foodName_6.removeAttribute('hidden')
            }
            if (stableFood.value >= 7) {
                stable_foodName_7.removeAttribute('hidden')
            }
            if (stableFood.value >= 8) {
                stable_foodName_8.removeAttribute('hidden')
            }
            if (stableFood.value >= 9) {
                stable_foodName_9.removeAttribute('hidden')
            }
            if (stableFood.value >= 10) {
                stable_foodName_10.removeAttribute('hidden')
            }
            if (stableFood.value >= 11) {
                stable_foodName_11.removeAttribute('hidden')
            }
            if (stableFood.value >= 12) {
                stable_foodName_12.removeAttribute('hidden')
            }
            if (stableFood.value >= 13) {
                stable_foodName_13.removeAttribute('hidden')
            }
            if (stableFood.value >= 14) {
                stable_foodName_14.removeAttribute('hidden')
            }
            if (stableFood.value >= 15) {
                stable_foodName_15.removeAttribute('hidden')
            }
            if (stableFood.value >= 16) {
                stable_foodName_16.removeAttribute('hidden')
            }
            if (stableFood.value >= 17) {
                stable_foodName_17.removeAttribute('hidden')
            }
            if (stableFood.value >= 18) {
                stable_foodName_18.removeAttribute('hidden')
            }
            if (stableFood.value >= 19) {
                stable_foodName_19.removeAttribute('hidden')
            }
            if (stableFood.value >= 20) {
                stable_foodName_20.removeAttribute('hidden')
            }

            if (stableFood.value < 1) {
                stable_foodName_1.setAttribute('hidden', 'ok')
                stable_foodName_1.value = ""
            }
            if (stableFood.value < 2) {
                stable_foodName_2.setAttribute('hidden', 'ok')
                stable_foodName_2.value = ""
            }
            if (stableFood.value < 3) {
                stable_foodName_3.setAttribute('hidden', 'ok')
                stable_foodName_3.value = ""
            }
            if (stableFood.value < 4) {
                stable_foodName_4.setAttribute('hidden', 'ok')
                stable_foodName_4.value = ""
            }
            if (stableFood.value < 5) {
                stable_foodName_5.setAttribute('hidden', 'ok')
                stable_foodName_5.value = ""
            }
            if (stableFood.value < 6) {
                stable_foodName_6.setAttribute('hidden', 'ok')
                stable_foodName_6.value = ""
            }
            if (stableFood.value < 7) {
                stable_foodName_7.setAttribute('hidden', 'ok')
                stable_foodName_7.value = ""
            }
            if (stableFood.value < 8) {
                stable_foodName_8.setAttribute('hidden', 'ok')
                stable_foodName_8.value = ""
            }
            if (stableFood.value < 9) {
                stable_foodName_9.setAttribute('hidden', 'ok')
                stable_foodName_9.value = ""
            }
            if (stableFood.value < 10) {
                stable_foodName_10.setAttribute('hidden', 'ok')
                stable_foodName_10.value = ""
            }
            if (stableFood.value < 11) {
                stable_foodName_11.setAttribute('hidden', 'ok')
                stable_foodName_11.value = ""
            }
            if (stableFood.value < 12) {
                stable_foodName_12.setAttribute('hidden', 'ok')
                stable_foodName_12.value = ""
            }
            if (stableFood.value < 13) {
                stable_foodName_13.setAttribute('hidden', 'ok')
                stable_foodName_13.value = ""
            }
            if (stableFood.value < 14) {
                stable_foodName_14.setAttribute('hidden', 'ok')
                stable_foodName_14.value = ""
            }
            if (stableFood.value < 15) {
                stable_foodName_15.setAttribute('hidden', 'ok')
                stable_foodName_15.value = ""
            }
            if (stableFood.value < 16) {
                stable_foodName_16.setAttribute('hidden', 'ok')
                stable_foodName_16.value = ""
            }
            if (stableFood.value < 17) {
                stable_foodName_17.setAttribute('hidden', 'ok')
                stable_foodName_17.value = ""
            }
            if (stableFood.value < 18) {
                stable_foodName_18.setAttribute('hidden', 'ok')
                stable_foodName_18.value = ""
            }
            if (stableFood.value < 19) {
                stable_foodName_19.setAttribute('hidden', 'ok')
                stable_foodName_19.value = ""
            }
            if (stableFood.value < 20) {
                stable_foodName_20.setAttribute('hidden', 'ok')
                stable_foodName_20.value = ""
            }
        }
    }

    if (!editBtn) {} else {
        editBtn.onclick = function () {
            let toDoPercent = ((+toDo.value * 100) / +stLeght.textContent).toFixed(0)
            let toDoPoint
            if (toDoPercent >= 0 && toDoPercent <= 29.9) {
                toDoPoint = 0
            }
            if (toDoPercent >= 30 && toDoPercent <= 69.9) {
                toDoPoint = 1
            }
            if (toDoPercent >= 70 && toDoPercent <= 100.1) {
                toDoPoint = 2
            }

            let activitiesoPoint
            if (activities.value == 0) {
                activitiesoPoint = 0
            }
            if (activities.value == 1) {
                activitiesoPoint = 1
            }
            if (activities.value >= 2) {
                activitiesoPoint = 2
            }

            let sectionPercent = ((+section.value * 100) / +stLeght.textContent).toFixed(0)
            let sectionPoint
            if (sectionPercent >= 0 && sectionPercent <= 29.9) {
                sectionPoint = 0
            }
            if (sectionPercent >= 30 && sectionPercent <= 69.9) {
                sectionPoint = 1
            }
            if (sectionPercent >= 70 && sectionPercent <= 100.1) {
                sectionPoint = 2
            }

            let academic_debtPercent = ((+academic_debt.value * 100) / +stLeght.textContent).toFixed(0)
            let academic_debtPoint
            if (academic_debtPercent >= 0 && academic_debtPercent <= 29.9) {
                academic_debtPoint = 2
            }
            if (academic_debtPercent >= 30 && academic_debtPercent <= 69.9) {
                academic_debtPoint = 1
            }
            if (academic_debtPercent >= 70 && academic_debtPercent <= 100.1) {
                academic_debtPoint = 0
            }

            let skippingPercent = ((+skipping.value * 100) / +stLeght.textContent).toFixed(0)
            let skippingPoint
            if (skippingPercent >= 0 && skippingPercent <= 29.9) {
                skippingPoint = 2
            }
            if (skippingPercent >= 30 && skippingPercent <= 69.9) {
                skippingPoint = 1
            }
            if (skippingPercent >= 70 && skippingPercent <= 100.1) {
                skippingPoint = 0
            }

            let breaking_rulesPercent = ((+breaking_rules.value * 100) / +stLeght.textContent).toFixed(0)
            let breaking_rulesPoint
            if (breaking_rulesPercent >= 0 && breaking_rulesPercent <= 29.9) {
                breaking_rulesPoint = 2
            }
            if (breaking_rulesPercent >= 30 && breaking_rulesPercent <= 69.9) {
                breaking_rulesPoint = 1
            }
            if (breaking_rulesPercent >= 70 && breaking_rulesPercent <= 100.1) {
                breaking_rulesPoint = 0
            }

            let smokingPercent = ((+smoking.value * 100) / +stLeght.textContent).toFixed(0)
            let smokingPoint
            if (smokingPercent >= 0 && smokingPercent <= 29.9) {
                smokingPoint = 2
            }
            if (smokingPercent >= 30 && smokingPercent <= 69.9) {
                smokingPoint = 1
            }
            if (smokingPercent >= 70 && smokingPercent <= 100.1) {
                smokingPoint = 0
            }

            let dress_codePercent = ((+dress_code.value * 100) / +stLeght.textContent).toFixed(0)
            let dress_codePoint
            if (dress_codePercent >= 0 && dress_codePercent <= 29.9) {
                dress_codePoint = 2
            }
            if (dress_codePercent >= 30 && dress_codePercent <= 69.9) {
                dress_codePoint = 1
            }
            if (dress_codePercent >= 70 && dress_codePercent <= 100.1) {
                dress_codePoint = 0
            }

            let volunteersPercent = ((+volunteers.value * 100) / +stLeght.textContent).toFixed(0)
            let volunteersPoint
            if (volunteersPercent >= 0 && volunteersPercent <= 29.9) {
                volunteersPoint = 0
            }
            if (volunteersPercent >= 30 && volunteersPercent <= 69.9) {
                volunteersPoint = 1
            }
            if (volunteersPercent >= 70 && volunteersPercent <= 100.1) {
                volunteersPoint = 2
            }

            let foodPercent = ((+food.value * 100) / +stLeght.textContent).toFixed(0)
            let foodPoint
            if (foodPercent >= 0 && foodPercent <= 29.9) {
                foodPoint = 2
            }
            if (foodPercent >= 30 && foodPercent <= 69.9) {
                foodPoint = 1
            }
            if (foodPercent >= 70 && foodPercent <= 100.1) {
                foodPoint = 0
            }

            let stableFoodPercent = ((+stableFood.value * 100) / +stLeght.textContent).toFixed(0)
            let stableFoodPoint
            if (stableFoodPercent >= 0 && stableFoodPercent <= 29.9) {
                stableFoodPoint = 0
            }
            if (stableFoodPercent >= 30 && stableFoodPercent <= 69.9) {
                stableFoodPoint = 1
            }
            if (stableFoodPercent >= 70 && stableFoodPercent <= 100.1) {
                stableFoodPoint = 2
            }

            let characteristicsPoint
            if (characteristics.value == 'Есть характеристики') {
                characteristicsPoint = 1
            }
            if (characteristics.value != 'Есть характеристики') {
                characteristicsPoint = 0
            }

            // console.log(toDoPoint)
            // console.log(activitiesoPoint)
            // console.log(sectionPoint)
            // console.log(academic_debtPoint)
            // console.log(breaking_rulesPoint)
            // console.log(smokingPoint)
            // console.log(dress_codePoint)
            // console.log(volunteersPoint)
            // console.log(foodPoint)
            // console.log(foodPercent)
            // console.log(stableFoodPoint)

            points.value = (+toDoPoint + +activitiesoPoint + +sectionPoint + +academic_debtPoint + +skippingPoint + +breaking_rulesPoint + +smokingPoint + +dress_codePoint + +volunteersPoint + +foodPoint + +stableFoodPoint + +characteristicsPoint).toFixed(0)
        }
    }

    let predNAme = document.querySelectorAll('.pred-table')
    let predNameModal01 = document.querySelectorAll('#edit__note_01 > p.edit__pred__name')
    let predNameModal02 = document.querySelectorAll('#edit__note_02 > p.edit__pred__name')
    let predNameModal03 = document.querySelectorAll('#edit__note_03 > p.edit__pred__name')
    let predNameModal04 = document.querySelectorAll('#edit__note_04 > p.edit__pred__name')
    let predNameModal05 = document.querySelectorAll('#edit__note_05 > p.edit__pred__name')
    let predNameModal06 = document.querySelectorAll('#edit__note_06 > p.edit__pred__name')
    let predNameModal07 = document.querySelectorAll('#edit__note_07 > p.edit__pred__name')
    let predNameModal08 = document.querySelectorAll('#edit__note_08 > p.edit__pred__name')
    let predNameModal09 = document.querySelectorAll('#edit__note_09 > p.edit__pred__name')
    let predNameModal10 = document.querySelectorAll('#edit__note_10 > p.edit__pred__name')
    let predNameModal11 = document.querySelectorAll('#edit__note_11 > p.edit__pred__name')
    let predNameModal12 = document.querySelectorAll('#edit__note_12 > p.edit__pred__name')
    let predNameModal13 = document.querySelectorAll('#edit__note_13 > p.edit__pred__name')
    let predNameModal14 = document.querySelectorAll('#edit__note_14 > p.edit__pred__name')
    let predNameModal15 = document.querySelectorAll('#edit__note_15 > p.edit__pred__name')
    let predNameModal16 = document.querySelectorAll('#edit__note_16 > p.edit__pred__name')
    let predNameModal17 = document.querySelectorAll('#edit__note_17 > p.edit__pred__name')
    let predNameModal18 = document.querySelectorAll('#edit__note_18 > p.edit__pred__name')
    let predNameModal19 = document.querySelectorAll('#edit__note_19 > p.edit__pred__name')
    let predNameModal20 = document.querySelectorAll('#edit__note_20 > p.edit__pred__name')
    let predEditModal = document.querySelectorAll('.edit__pred__modal')

    for (let i = 0; i < predEditModal.length; i++) {
        if (!predNAme[0]) {
            predNameModal01[i].parentNode.setAttribute('hidden', 'ok')
        } else {
            predNameModal01[i].textContent = predNAme[0].title
        }
        if (!predNAme[1]) {
            predNameModal02[i].parentNode.setAttribute('hidden', 'ok')
        } else {
            predNameModal02[i].textContent = predNAme[1].title
        }
        if (!predNAme[2]) {
            predNameModal03[i].parentNode.setAttribute('hidden', 'ok')
        } else {
            predNameModal03[i].textContent = predNAme[2].title
        }
        if (!predNAme[3]) {
            predNameModal04[i].parentNode.setAttribute('hidden', 'ok')
        } else {
            predNameModal04[i].textContent = predNAme[3].title
        }
        if (!predNAme[4]) {
            predNameModal05[i].parentNode.setAttribute('hidden', 'ok')
        } else {
            predNameModal05[i].textContent = predNAme[4].title
        }
        if (!predNAme[5]) {
            predNameModal06[i].parentNode.setAttribute('hidden', 'ok')
        } else {
            predNameModal06[i].textContent = predNAme[5].title
        }
        if (!predNAme[6]) {
            predNameModal07[i].parentNode.setAttribute('hidden', 'ok')
        } else {
            predNameModal07[i].textContent = predNAme[6].title
        }
        if (!predNAme[7]) {
            predNameModal08[i].parentNode.setAttribute('hidden', 'ok')
        } else {
            predNameModal08[i].textContent = predNAme[7].title
        }
        if (!predNAme[8]) {
            predNameModal09[i].parentNode.setAttribute('hidden', 'ok')
        } else {
            predNameModal09[i].textContent = predNAme[8].title
        }
        if (!predNAme[9]) {
            predNameModal10[i].parentNode.setAttribute('hidden', 'ok')
        } else {
            predNameModal10[i].textContent = predNAme[9].title
        }
        if (!predNAme[10]) {
            predNameModal11[i].parentNode.setAttribute('hidden', 'ok')
        } else {
            predNameModal11[i].textContent = predNAme[10].title
        }
        if (!predNAme[11]) {
            predNameModal12[i].parentNode.setAttribute('hidden', 'ok')
        } else {
            predNameModal12[i].textContent = predNAme[11].title
        }
        if (!predNAme[12]) {
            predNameModal13[i].parentNode.setAttribute('hidden', 'ok')
        } else {
            predNameModal13[i].textContent = predNAme[12].title
        }
        if (!predNAme[13]) {
            predNameModal14[i].parentNode.setAttribute('hidden', 'ok')
        } else {
            predNameModal14[i].textContent = predNAme[13].title
        }
        if (!predNAme[14]) {
            predNameModal15[i].parentNode.setAttribute('hidden', 'ok')
        } else {
            predNameModal15[i].textContent = predNAme[14].title
        }
        if (!predNAme[15]) {
            predNameModal16[i].parentNode.setAttribute('hidden', 'ok')
        } else {
            predNameModal16[i].textContent = predNAme[15].title
        }
        if (!predNAme[16]) {
            predNameModal17[i].parentNode.setAttribute('hidden', 'ok')
        } else {
            predNameModal17[i].textContent = predNAme[16].title
        }
        if (!predNAme[17]) {
            predNameModal18[i].parentNode.setAttribute('hidden', 'ok')
        } else {
            predNameModal18[i].textContent = predNAme[17].title
        }
        if (!predNAme[18]) {
            predNameModal19[i].parentNode.setAttribute('hidden', 'ok')
        } else {
            predNameModal19[i].textContent = predNAme[18].title
        }
        if (!predNAme[19]) {
            predNameModal20[i].parentNode.setAttribute('hidden', 'ok')
        } else {
            predNameModal20[i].textContent = predNAme[19].title
        }
    }




    // Отправка данных БРС в БД при добавлении студента
    let idUser1 = document.getElementById('id__user').textContent
    $.ajax({
        url: '/funclk.php',
        type: 'POST',
        data: {
            idUser1
        },
        success: function (data) {
            // location.reload();
            // console.log(data);
        },
        error: function () {
            console.log('ERROR');
        }
    })
    // Отправка данных БРС в БД при добавлении студента




    // Отправка данных для подгрузки отчета по группам
    let group101 = document.getElementById('group101')
    let group111 = document.getElementById('group111')
    let group121 = document.getElementById('group121')
    let group201 = document.getElementById('group201')
    let group202 = document.getElementById('group202')
    let group211 = document.getElementById('group211')
    let group221 = document.getElementById('group221')
    let group231 = document.getElementById('group231')
    let group241 = document.getElementById('group241')
    let group301 = document.getElementById('group301')
    let group302 = document.getElementById('group302')
    let group311 = document.getElementById('group311')
    let group321 = document.getElementById('group321')
    let group331 = document.getElementById('group331')
    let group341 = document.getElementById('group341')
    let group401 = document.getElementById('group401')
    let group402 = document.getElementById('group402')
    let group411 = document.getElementById('group411')
    let group421 = document.getElementById('group421')
    let group431 = document.getElementById('group431')

    if (!group101) {} else {
        group101.onclick = function () {
            let tG1 = document.getElementById('tg')
            let mt = document.getElementById('mt').textContent
            tG1.textContent = 'krreport101'
            let tG
            tG = tG1.textContent
            let startInfo = document.getElementById('start_info')
            startInfo.setAttribute('hidden', 'ok')
            $.ajax({
                url: '../reportkr/reportkr_base.php',
                cache: false,
                type: 'POST',
                data: {
                    tG,
                    mt
                },
                success: function (html) {
                    $(".content").html(html);
                },
                error: function () {
                    console.log('ERROR');
                }
            })
        }
    }
    if (!group111) {} else {
        group111.onclick = function () {
            let tG1 = document.getElementById('tg')
            let mt = document.getElementById('mt').textContent
            tG1.textContent = 'krreport111'
            let tG
            tG = tG1.textContent
            let startInfo = document.getElementById('start_info')
            startInfo.setAttribute('hidden', 'ok')
            $.ajax({
                url: '../reportkr/reportkr_base.php',
                cache: false,
                type: 'POST',
                data: {
                    tG,
                    mt
                },
                success: function (html) {
                    $(".content").html(html);
                    // console.log(tG)
                    // console.log(mt)
                },
                error: function () {
                    console.log('ERROR');
                }
            })
        }
    }
    if (!group121) {} else {
        group121.onclick = function () {
            let tG1 = document.getElementById('tg')
            let mt = document.getElementById('mt').textContent
            tG1.textContent = 'krreport121'
            let tG
            tG = tG1.textContent
            let startInfo = document.getElementById('start_info')
            startInfo.setAttribute('hidden', 'ok')
            $.ajax({
                url: '../reportkr/reportkr_base.php',
                cache: false,
                type: 'POST',
                data: {
                    tG,
                    mt
                },
                success: function (html) {
                    $(".content").html(html);
                },
                error: function () {
                    console.log('ERROR');
                }
            })
        }
    }
    if (!group201) {} else {
        group201.onclick = function () {
            let tG1 = document.getElementById('tg')
            let mt = document.getElementById('mt').textContent
            tG1.textContent = 'krreport201'
            let tG
            tG = tG1.textContent
            let startInfo = document.getElementById('start_info')
            startInfo.setAttribute('hidden', 'ok')
            $.ajax({
                url: '../reportkr/reportkr_base.php',
                cache: false,
                type: 'POST',
                data: {
                    tG,
                    mt
                },
                success: function (html) {
                    $(".content").html(html);
                },
                error: function () {
                    console.log('ERROR');
                }
            })
        }
    }
    if (!group202) {} else {
        group202.onclick = function () {
            let tG1 = document.getElementById('tg')
            let mt = document.getElementById('mt').textContent
            tG1.textContent = 'krreport202'
            let tG
            tG = tG1.textContent
            let startInfo = document.getElementById('start_info')
            startInfo.setAttribute('hidden', 'ok')
            $.ajax({
                url: '../reportkr/reportkr_base.php',
                cache: false,
                type: 'POST',
                data: {
                    tG,
                    mt
                },
                success: function (html) {
                    $(".content").html(html);
                },
                error: function () {
                    console.log('ERROR');
                }
            })
        }
    }
    if (!group211) {} else {
        group211.onclick = function () {
            let tG1 = document.getElementById('tg')
            let mt = document.getElementById('mt').textContent
            tG1.textContent = 'krreport211'
            let tG
            tG = tG1.textContent
            let startInfo = document.getElementById('start_info')
            startInfo.setAttribute('hidden', 'ok')
            $.ajax({
                url: '../reportkr/reportkr_base.php',
                cache: false,
                type: 'POST',
                data: {
                    tG,
                    mt
                },
                success: function (html) {
                    $(".content").html(html);
                },
                error: function () {
                    console.log('ERROR');
                }
            })
        }
    }
    if (!group221) {} else {
        group221.onclick = function () {
            let tG1 = document.getElementById('tg')
            let mt = document.getElementById('mt').textContent
            tG1.textContent = 'krreport221'
            let tG
            tG = tG1.textContent
            let startInfo = document.getElementById('start_info')
            startInfo.setAttribute('hidden', 'ok')
            $.ajax({
                url: '../reportkr/reportkr_base.php',
                cache: false,
                type: 'POST',
                data: {
                    tG,
                    mt
                },
                success: function (html) {
                    $(".content").html(html);
                },
                error: function () {
                    console.log('ERROR');
                }
            })
        }
    }
    if (!group231) {} else {
        group231.onclick = function () {
            let tG1 = document.getElementById('tg')
            let mt = document.getElementById('mt').textContent
            tG1.textContent = 'krreport231'
            let tG
            tG = tG1.textContent
            let startInfo = document.getElementById('start_info')
            startInfo.setAttribute('hidden', 'ok')
            $.ajax({
                url: '../reportkr/reportkr_base.php',
                cache: false,
                type: 'POST',
                data: {
                    tG,
                    mt
                },
                success: function (html) {
                    $(".content").html(html);
                },
                error: function () {
                    console.log('ERROR');
                }
            })
        }
    }
    if (!group241) {} else {
        group241.onclick = function () {
            let tG1 = document.getElementById('tg')
            let mt = document.getElementById('mt').textContent
            tG1.textContent = 'krreport241'
            let tG
            tG = tG1.textContent
            let startInfo = document.getElementById('start_info')
            startInfo.setAttribute('hidden', 'ok')
            $.ajax({
                url: '../reportkr/reportkr_base.php',
                cache: false,
                type: 'POST',
                data: {
                    tG,
                    mt
                },
                success: function (html) {
                    $(".content").html(html);
                },
                error: function () {
                    console.log('ERROR');
                }
            })
        }
    }
    if (!group301) {} else {
        group301.onclick = function () {
            let tG1 = document.getElementById('tg')
            let mt = document.getElementById('mt').textContent
            tG1.textContent = 'krreport301'
            let tG
            tG = tG1.textContent
            let startInfo = document.getElementById('start_info')
            startInfo.setAttribute('hidden', 'ok')
            $.ajax({
                url: '../reportkr/reportkr_base.php',
                cache: false,
                type: 'POST',
                data: {
                    tG,
                    mt
                },
                success: function (html) {
                    $(".content").html(html);
                },
                error: function () {
                    console.log('ERROR');
                }
            })
        }
    }
    if (!group302) {} else {
        group302.onclick = function () {
            let tG1 = document.getElementById('tg')
            let mt = document.getElementById('mt').textContent
            tG1.textContent = 'krreport302'
            let tG
            tG = tG1.textContent
            let startInfo = document.getElementById('start_info')
            startInfo.setAttribute('hidden', 'ok')
            $.ajax({
                url: '../reportkr/reportkr_base.php',
                cache: false,
                type: 'POST',
                data: {
                    tG,
                    mt
                },
                success: function (html) {
                    $(".content").html(html);
                },
                error: function () {
                    console.log('ERROR');
                }
            })
        }
    }
    if (!group311) {} else {
        group311.onclick = function () {
            let tG1 = document.getElementById('tg')
            let mt = document.getElementById('mt').textContent
            tG1.textContent = 'krreport311'
            let tG
            tG = tG1.textContent
            let startInfo = document.getElementById('start_info')
            startInfo.setAttribute('hidden', 'ok')
            $.ajax({
                url: '../reportkr/reportkr_base.php',
                cache: false,
                type: 'POST',
                data: {
                    tG,
                    mt
                },
                success: function (html) {
                    $(".content").html(html);
                },
                error: function () {
                    console.log('ERROR');
                }
            })
        }
    }
    if (!group321) {} else {
        group321.onclick = function () {
            let tG1 = document.getElementById('tg')
            let mt = document.getElementById('mt').textContent
            tG1.textContent = 'krreport321'
            let tG
            tG = tG1.textContent
            let startInfo = document.getElementById('start_info')
            startInfo.setAttribute('hidden', 'ok')
            $.ajax({
                url: '../reportkr/reportkr_base.php',
                cache: false,
                type: 'POST',
                data: {
                    tG,
                    mt
                },
                success: function (html) {
                    $(".content").html(html);
                },
                error: function () {
                    console.log('ERROR');
                }
            })
        }
    }
    if (!group331) {} else {
        group331.onclick = function () {
            let tG1 = document.getElementById('tg')
            let mt = document.getElementById('mt').textContent
            tG1.textContent = 'krreport331'
            let tG
            tG = tG1.textContent
            let startInfo = document.getElementById('start_info')
            startInfo.setAttribute('hidden', 'ok')
            $.ajax({
                url: '../reportkr/reportkr_base.php',
                cache: false,
                type: 'POST',
                data: {
                    tG,
                    mt
                },
                success: function (html) {
                    $(".content").html(html);
                },
                error: function () {
                    console.log('ERROR');
                }
            })
        }
    }
    if (!group341) {} else {
        group341.onclick = function () {
            let tG1 = document.getElementById('tg')
            let mt = document.getElementById('mt').textContent
            tG1.textContent = 'krreport341'
            let tG
            tG = tG1.textContent
            let startInfo = document.getElementById('start_info')
            startInfo.setAttribute('hidden', 'ok')
            $.ajax({
                url: '../reportkr/reportkr_base.php',
                cache: false,
                type: 'POST',
                data: {
                    tG,
                    mt
                },
                success: function (html) {
                    $(".content").html(html);
                },
                error: function () {
                    console.log('ERROR');
                }
            })
        }
    }
    if (!group401) {} else {
        group401.onclick = function () {
            let tG1 = document.getElementById('tg')
            let mt = document.getElementById('mt').textContent
            tG1.textContent = 'krreport401'
            let tG
            tG = tG1.textContent
            let startInfo = document.getElementById('start_info')
            startInfo.setAttribute('hidden', 'ok')
            $.ajax({
                url: '../reportkr/reportkr_base.php',
                cache: false,
                type: 'POST',
                data: {
                    tG,
                    mt
                },
                success: function (html) {
                    $(".content").html(html);
                },
                error: function () {
                    console.log('ERROR');
                }
            })
        }
    }
    if (!group402) {} else {
        group402.onclick = function () {
            let tG1 = document.getElementById('tg')
            let mt = document.getElementById('mt').textContent
            tG1.textContent = 'krreport402'
            let tG
            tG = tG1.textContent
            let startInfo = document.getElementById('start_info')
            startInfo.setAttribute('hidden', 'ok')
            $.ajax({
                url: '../reportkr/reportkr_base.php',
                cache: false,
                type: 'POST',
                data: {
                    tG,
                    mt
                },
                success: function (html) {
                    $(".content").html(html);
                },
                error: function () {
                    console.log('ERROR');
                }
            })
        }
    }
    if (!group411) {} else {
        group411.onclick = function () {
            let tG1 = document.getElementById('tg')
            let mt = document.getElementById('mt').textContent
            tG1.textContent = 'krreport411'
            let tG
            tG = tG1.textContent
            let startInfo = document.getElementById('start_info')
            startInfo.setAttribute('hidden', 'ok')
            $.ajax({
                url: '../reportkr/reportkr_base.php',
                cache: false,
                type: 'POST',
                data: {
                    tG,
                    mt
                },
                success: function (html) {
                    $(".content").html(html);
                },
                error: function () {
                    console.log('ERROR');
                }
            })
        }
    }
    if (!group421) {} else {
        group421.onclick = function () {
            let tG1 = document.getElementById('tg')
            let mt = document.getElementById('mt').textContent
            tG1.textContent = 'krreport421'
            let tG
            tG = tG1.textContent
            let startInfo = document.getElementById('start_info')
            startInfo.setAttribute('hidden', 'ok')
            $.ajax({
                url: '../reportkr/reportkr_base.php',
                cache: false,
                type: 'POST',
                data: {
                    tG,
                    mt
                },
                success: function (html) {
                    $(".content").html(html);
                },
                error: function () {
                    console.log('ERROR');
                }
            })
        }
    }
    if (!group431) {} else {
        group431.onclick = function () {
            let tG1 = document.getElementById('tg')
            let mt = document.getElementById('mt').textContent
            tG1.textContent = 'krreport431'
            let tG
            tG = tG1.textContent
            let startInfo = document.getElementById('start_info')
            startInfo.setAttribute('hidden', 'ok')
            $.ajax({
                url: '../reportkr/reportkr_base.php',
                cache: false,
                type: 'POST',
                data: {
                    tG,
                    mt
                },
                success: function (html) {
                    $(".content").html(html);
                },
                error: function () {
                    console.log('ERROR');
                }
            })
        }
    }
    // Отправка данных для подгрузки отчета по группам


    // Отправка данных для подгрузки отчета по месяцам
    let monate_1 = document.getElementById('monate_1')
    let monate_2 = document.getElementById('monate_2')
    let monate_3 = document.getElementById('monate_3')
    let monate_4 = document.getElementById('monate_4')
    let monate_5 = document.getElementById('monate_5')
    let monate_6 = document.getElementById('monate_6')
    let monate_7 = document.getElementById('monate_7')
    let monate_8 = document.getElementById('monate_8')
    let monate_9 = document.getElementById('monate_9')
    let monate_10 = document.getElementById('monate_10')

    if (!monate_1) {} else {
        monate_1.onclick = function () {
            let mt1 = document.getElementById('mt')
            let tG = document.getElementById('tg').textContent
            mt1.textContent = 1
            let mt
            mt = mt1.textContent
            let startInfo = document.getElementById('start_info')
            startInfo.setAttribute('hidden', 'ok')
            $.ajax({
                url: '../reportkr/reportkr_base.php',
                cache: false,
                type: 'POST',
                data: {
                    mt,
                    tG
                },
                success: function (html) {
                    $(".content").html(html);
                    // console.log(mt)
                },
                error: function () {
                    console.log('ERROR');
                }
            })
        }
    }
    if (!monate_2) {} else {
        monate_2.onclick = function () {
            let mt1 = document.getElementById('mt')
            let tG = document.getElementById('tg').textContent
            mt1.textContent = 2
            let mt
            mt = mt1.textContent
            let startInfo = document.getElementById('start_info')
            startInfo.setAttribute('hidden', 'ok')

            $.ajax({
                url: '../reportkr/reportkr_base.php',
                cache: false,
                type: 'POST',
                data: {
                    mt,
                    tG
                },
                success: function (html) {
                    $(".content").html(html);
                    // console.log(mt)
                },
                error: function () {
                    console.log('ERROR');
                }
            })
        }
    }
    if (!monate_3) {} else {
        monate_3.onclick = function () {
            let mt1 = document.getElementById('mt')
            let tG = document.getElementById('tg').textContent
            mt1.textContent = 3
            let mt
            mt = mt1.textContent
            let startInfo = document.getElementById('start_info')
            startInfo.setAttribute('hidden', 'ok')
            $.ajax({
                url: '../reportkr/reportkr_base.php',
                cache: false,
                type: 'POST',
                data: {
                    mt,
                    tG
                },
                success: function (html) {
                    $(".content").html(html);
                },
                error: function () {
                    console.log('ERROR');
                }
            })
        }
    }
    if (!monate_4) {} else {
        monate_4.onclick = function () {
            let mt1 = document.getElementById('mt')
            let tG = document.getElementById('tg').textContent
            mt1.textContent = 4
            let mt
            mt = mt1.textContent
            let startInfo = document.getElementById('start_info')
            startInfo.setAttribute('hidden', 'ok')
            $.ajax({
                url: '../reportkr/reportkr_base.php',
                cache: false,
                type: 'POST',
                data: {
                    mt,
                    tG
                },
                success: function (html) {
                    $(".content").html(html);
                },
                error: function () {
                    console.log('ERROR');
                }
            })
        }
    }
    if (!monate_5) {} else {
        monate_5.onclick = function () {
            let mt1 = document.getElementById('mt')
            let tG = document.getElementById('tg').textContent
            mt1.textContent = 5
            let mt
            mt = mt1.textContent
            let startInfo = document.getElementById('start_info')
            startInfo.setAttribute('hidden', 'ok')
            $.ajax({
                url: '../reportkr/reportkr_base.php',
                cache: false,
                type: 'POST',
                data: {
                    mt,
                    tG
                },
                success: function (html) {
                    $(".content").html(html);
                },
                error: function () {
                    console.log('ERROR');
                }
            })
        }
    }
    if (!monate_6) {} else {
        monate_6.onclick = function () {
            let mt1 = document.getElementById('mt')
            let tG = document.getElementById('tg').textContent
            mt1.textContent = 6
            let mt
            mt = mt1.textContent
            let startInfo = document.getElementById('start_info')
            startInfo.setAttribute('hidden', 'ok')
            $.ajax({
                url: '../reportkr/reportkr_base.php',
                cache: false,
                type: 'POST',
                data: {
                    mt,
                    tG
                },
                success: function (html) {
                    $(".content").html(html);
                },
                error: function () {
                    console.log('ERROR');
                }
            })
        }
    }
    if (!monate_7) {} else {
        monate_7.onclick = function () {
            let mt1 = document.getElementById('mt')
            let tG = document.getElementById('tg').textContent
            mt1.textContent = 7
            let mt
            mt = mt1.textContent
            let startInfo = document.getElementById('start_info')
            startInfo.setAttribute('hidden', 'ok')
            $.ajax({
                url: '../reportkr/reportkr_base.php',
                cache: false,
                type: 'POST',
                data: {
                    mt,
                    tG
                },
                success: function (html) {
                    $(".content").html(html);
                },
                error: function () {
                    console.log('ERROR');
                }
            })
        }
    }
    if (!monate_8) {} else {
        monate_8.onclick = function () {
            let mt1 = document.getElementById('mt')
            let tG = document.getElementById('tg').textContent
            mt1.textContent = 8
            let mt
            mt = mt1.textContent
            let startInfo = document.getElementById('start_info')
            startInfo.setAttribute('hidden', 'ok')
            $.ajax({
                url: '../reportkr/reportkr_base.php',
                cache: false,
                type: 'POST',
                data: {
                    mt,
                    tG
                },
                success: function (html) {
                    $(".content").html(html);
                },
                error: function () {
                    console.log('ERROR');
                }
            })
        }
    }
    if (!monate_9) {} else {
        monate_9.onclick = function () {
            this.classList.add('green__button')

            let mt1 = document.getElementById('mt')
            let tG = document.getElementById('tg').textContent
            mt1.textContent = 9
            let mt
            mt = mt1.textContent

            let startInfo = document.getElementById('start_info')
            startInfo.setAttribute('hidden', 'ok')
            $.ajax({
                url: '../reportkr/reportkr_base.php',
                cache: false,
                type: 'POST',
                data: {
                    mt,
                    tG
                },
                success: function (html) {
                    $(".content").html(html);
                },
                error: function () {
                    console.log('ERROR');
                }
            })
        }
    }
    if (!monate_10) {} else {
        monate_10.onclick = function () {
            this.classList.add('green__button')
            let mt1 = document.getElementById('mt')
            let tG = document.getElementById('tg').textContent
            mt1.textContent = 10
            let mt
            mt = mt1.textContent
            let startInfo = document.getElementById('start_info')
            startInfo.setAttribute('hidden', 'ok')
            $.ajax({
                url: '../reportkr/reportkr_base.php',
                cache: false,
                type: 'POST',
                data: {
                    mt,
                    tG
                },
                success: function (html) {
                    $(".content").html(html);
                },
                error: function () {
                    console.log('ERROR');
                }
            })
        }
    }
    // Отправка данных для подгрузки отчета по группам

    const list = document.querySelectorAll('.button__monate')
    list.forEach(item => {
        item.addEventListener('click', (e) => {
            list.forEach(el => {
                el.classList.remove('green__button');
            });
            item.classList.add('green__button')
        })
    })
    const listGroup = document.querySelectorAll('.button__group')
    listGroup.forEach(item => {
        item.addEventListener('click', (e) => {
            listGroup.forEach(el => {
                el.classList.remove('green__button');
            });
            item.classList.add('green__button')
        })
    })



    let skipU = document.querySelectorAll('.skip_u')
    for (let i = 0; i < skipU.length; i++) {
        skipU[i].setAttribute('name', 'st_u_' + (+[i] + +1))
    }

    let skipN = document.querySelectorAll('.skip_n')
    for (let i = 0; i < skipN.length; i++) {
        skipN[i].setAttribute('name', 'st_n_' + (+[i] + +1))
    }





    let studentsNamesEdit_1 = document.querySelectorAll('.student__skips__name_1')
    let studentsNamesEdit_2 = document.querySelectorAll('.student__skips__name_2')
    let studentsNamesEdit_3 = document.querySelectorAll('.student__skips__name_3')
    let studentsNamesEdit_4 = document.querySelectorAll('.student__skips__name_4')
    let studentsNamesEdit_5 = document.querySelectorAll('.student__skips__name_5')
    let studentsNamesEdit_6 = document.querySelectorAll('.student__skips__name_6')
    let studentsNamesEdit_7 = document.querySelectorAll('.student__skips__name_7')
    let studentsNamesEdit_8 = document.querySelectorAll('.student__skips__name_8')
    let studentsNamesEdit_9 = document.querySelectorAll('.student__skips__name_9')
    let studentsNamesEdit_10 = document.querySelectorAll('.student__skips__name_10')
    let studentsNamesEdit_11 = document.querySelectorAll('.student__skips__name_11')
    let studentsNamesEdit_12 = document.querySelectorAll('.student__skips__name_12')
    let studentsNamesEdit_13 = document.querySelectorAll('.student__skips__name_13')
    let studentsNamesEdit_14 = document.querySelectorAll('.student__skips__name_14')
    let studentsNamesEdit_15 = document.querySelectorAll('.student__skips__name_15')
    let studentsNamesEdit_16 = document.querySelectorAll('.student__skips__name_16')
    let studentsNamesEdit_17 = document.querySelectorAll('.student__skips__name_17')
    let studentsNamesEdit_18 = document.querySelectorAll('.student__skips__name_18')
    let studentsNamesEdit_19 = document.querySelectorAll('.student__skips__name_19')
    let studentsNamesEdit_20 = document.querySelectorAll('.student__skips__name_20')
    let studentsNamesEdit_21 = document.querySelectorAll('.student__skips__name_21')
    let studentsNamesEdit_22 = document.querySelectorAll('.student__skips__name_22')
    let studentsNamesEdit_23 = document.querySelectorAll('.student__skips__name_23')
    let studentsNamesEdit_24 = document.querySelectorAll('.student__skips__name_24')
    let studentsNamesEdit_25 = document.querySelectorAll('.student__skips__name_25')
    let studentsNamesEdit_26 = document.querySelectorAll('.student__skips__name_26')
    let studentsNamesEdit_27 = document.querySelectorAll('.student__skips__name_27')
    let studentsNamesEdit_28 = document.querySelectorAll('.student__skips__name_28')
    let studentsNamesEdit_29 = document.querySelectorAll('.student__skips__name_29')
    let studentsNamesEdit_30 = document.querySelectorAll('.student__skips__name_30')
    let studentsNamesEdit_31 = document.querySelectorAll('.student__skips__name_31')
    let studentsNamesEdit_32 = document.querySelectorAll('.student__skips__name_32')

    // Переменные общего количествопропусков на каждого студента
    let allSkipsUdStud_1 = document.querySelector('.all_skips_student_u_1')
    let allSkipsNeudStud_1 = document.querySelector('.all_skips_student_n_1')
    let allSkipsUdStud_2 = document.querySelector('.all_skips_student_u_2')
    let allSkipsNeudStud_2 = document.querySelector('.all_skips_student_n_2')
    let allSkipsUdStud_3 = document.querySelector('.all_skips_student_u_3')
    let allSkipsNeudStud_3 = document.querySelector('.all_skips_student_n_3')
    let allSkipsUdStud_4 = document.querySelector('.all_skips_student_u_4')
    let allSkipsNeudStud_4 = document.querySelector('.all_skips_student_n_4')
    let allSkipsUdStud_5 = document.querySelector('.all_skips_student_u_5')
    let allSkipsNeudStud_5 = document.querySelector('.all_skips_student_n_5')
    let allSkipsUdStud_6 = document.querySelector('.all_skips_student_u_6')
    let allSkipsNeudStud_6 = document.querySelector('.all_skips_student_n_6')
    let allSkipsUdStud_7 = document.querySelector('.all_skips_student_u_7')
    let allSkipsNeudStud_7 = document.querySelector('.all_skips_student_n_7')
    let allSkipsUdStud_8 = document.querySelector('.all_skips_student_u_8')
    let allSkipsNeudStud_8 = document.querySelector('.all_skips_student_n_8')
    let allSkipsUdStud_9 = document.querySelector('.all_skips_student_u_9')
    let allSkipsNeudStud_9 = document.querySelector('.all_skips_student_n_9')
    let allSkipsUdStud_10 = document.querySelector('.all_skips_student_u_10')
    let allSkipsNeudStud_10 = document.querySelector('.all_skips_student_n_10')
    let allSkipsUdStud_11 = document.querySelector('.all_skips_student_u_11')
    let allSkipsNeudStud_11 = document.querySelector('.all_skips_student_n_11')
    let allSkipsUdStud_12 = document.querySelector('.all_skips_student_u_12')
    let allSkipsNeudStud_12 = document.querySelector('.all_skips_student_n_12')
    let allSkipsUdStud_13 = document.querySelector('.all_skips_student_u_13')
    let allSkipsNeudStud_13 = document.querySelector('.all_skips_student_n_13')
    let allSkipsUdStud_14 = document.querySelector('.all_skips_student_u_14')
    let allSkipsNeudStud_14 = document.querySelector('.all_skips_student_n_14')
    let allSkipsUdStud_15 = document.querySelector('.all_skips_student_u_15')
    let allSkipsNeudStud_15 = document.querySelector('.all_skips_student_n_15')
    let allSkipsUdStud_16 = document.querySelector('.all_skips_student_u_16')
    let allSkipsNeudStud_16 = document.querySelector('.all_skips_student_n_16')
    let allSkipsUdStud_17 = document.querySelector('.all_skips_student_u_17')
    let allSkipsNeudStud_17 = document.querySelector('.all_skips_student_n_17')
    let allSkipsUdStud_18 = document.querySelector('.all_skips_student_u_18')
    let allSkipsNeudStud_18 = document.querySelector('.all_skips_student_n_18')
    let allSkipsUdStud_19 = document.querySelector('.all_skips_student_u_19')
    let allSkipsNeudStud_19 = document.querySelector('.all_skips_student_n_19')
    let allSkipsUdStud_20 = document.querySelector('.all_skips_student_u_20')
    let allSkipsNeudStud_20 = document.querySelector('.all_skips_student_n_20')
    let allSkipsUdStud_21 = document.querySelector('.all_skips_student_u_21')
    let allSkipsNeudStud_21 = document.querySelector('.all_skips_student_n_21')
    let allSkipsUdStud_22 = document.querySelector('.all_skips_student_u_22')
    let allSkipsNeudStud_22 = document.querySelector('.all_skips_student_n_22')
    let allSkipsUdStud_23 = document.querySelector('.all_skips_student_u_23')
    let allSkipsNeudStud_23 = document.querySelector('.all_skips_student_n_23')
    let allSkipsUdStud_24 = document.querySelector('.all_skips_student_u_24')
    let allSkipsNeudStud_24 = document.querySelector('.all_skips_student_n_24')
    let allSkipsUdStud_25 = document.querySelector('.all_skips_student_u_25')
    let allSkipsNeudStud_25 = document.querySelector('.all_skips_student_n_25')
    let allSkipsUdStud_26 = document.querySelector('.all_skips_student_u_26')
    let allSkipsNeudStud_26 = document.querySelector('.all_skips_student_n_26')
    let allSkipsUdStud_27 = document.querySelector('.all_skips_student_u_27')
    let allSkipsNeudStud_27 = document.querySelector('.all_skips_student_n_27')
    let allSkipsUdStud_28 = document.querySelector('.all_skips_student_u_28')
    let allSkipsNeudStud_28 = document.querySelector('.all_skips_student_n_28')
    let allSkipsUdStud_29 = document.querySelector('.all_skips_student_u_29')
    let allSkipsNeudStud_29 = document.querySelector('.all_skips_student_n_29')
    let allSkipsUdStud_30 = document.querySelector('.all_skips_student_u_30')
    let allSkipsNeudStud_30 = document.querySelector('.all_skips_student_n_30')
    let allSkipsUdStud_31 = document.querySelector('.all_skips_student_u_31')
    let allSkipsNeudStud_31 = document.querySelector('.all_skips_student_n_31')
    let allSkipsUdStud_32 = document.querySelector('.all_skips_student_u_32')
    let allSkipsNeudStud_32 = document.querySelector('.all_skips_student_n_32')
    // Переменные общего количествопропусков на каждого студента

    // _____________________________________________________
    let fullSkipsUdStud_1 = document.querySelectorAll('.number__skip_u_1')
    let fullSkipsNeudStud_1 = document.querySelectorAll('.number__skip_n_1')
    let fullSkipsUdStud_2 = document.querySelectorAll('.number__skip_u_2')
    let fullSkipsNeudStud_2 = document.querySelectorAll('.number__skip_n_2')
    let fullSkipsUdStud_3 = document.querySelectorAll('.number__skip_u_3')
    let fullSkipsNeudStud_3 = document.querySelectorAll('.number__skip_n_3')
    let fullSkipsUdStud_4 = document.querySelectorAll('.number__skip_u_4')
    let fullSkipsNeudStud_4 = document.querySelectorAll('.number__skip_n_4')
    let fullSkipsUdStud_5 = document.querySelectorAll('.number__skip_u_5')
    let fullSkipsNeudStud_5 = document.querySelectorAll('.number__skip_n_5')
    let fullSkipsUdStud_6 = document.querySelectorAll('.number__skip_u_6')
    let fullSkipsNeudStud_6 = document.querySelectorAll('.number__skip_n_6')
    let fullSkipsUdStud_7 = document.querySelectorAll('.number__skip_u_7')
    let fullSkipsNeudStud_7 = document.querySelectorAll('.number__skip_n_7')
    let fullSkipsUdStud_8 = document.querySelectorAll('.number__skip_u_8')
    let fullSkipsNeudStud_8 = document.querySelectorAll('.number__skip_n_8')
    let fullSkipsUdStud_9 = document.querySelectorAll('.number__skip_u_9')
    let fullSkipsNeudStud_9 = document.querySelectorAll('.number__skip_n_9')
    let fullSkipsUdStud_10 = document.querySelectorAll('.number__skip_u_10')
    let fullSkipsNeudStud_10 = document.querySelectorAll('.number__skip_n_10')
    let fullSkipsUdStud_11 = document.querySelectorAll('.number__skip_u_11')
    let fullSkipsNeudStud_11 = document.querySelectorAll('.number__skip_n_11')
    let fullSkipsUdStud_12 = document.querySelectorAll('.number__skip_u_12')
    let fullSkipsNeudStud_12 = document.querySelectorAll('.number__skip_n_12')
    let fullSkipsUdStud_13 = document.querySelectorAll('.number__skip_u_13')
    let fullSkipsNeudStud_13 = document.querySelectorAll('.number__skip_n_13')
    let fullSkipsUdStud_14 = document.querySelectorAll('.number__skip_u_14')
    let fullSkipsNeudStud_14 = document.querySelectorAll('.number__skip_n_14')
    let fullSkipsUdStud_15 = document.querySelectorAll('.number__skip_u_15')
    let fullSkipsNeudStud_15 = document.querySelectorAll('.number__skip_n_15')
    let fullSkipsUdStud_16 = document.querySelectorAll('.number__skip_u_16')
    let fullSkipsNeudStud_16 = document.querySelectorAll('.number__skip_n_16')
    let fullSkipsUdStud_17 = document.querySelectorAll('.number__skip_u_17')
    let fullSkipsNeudStud_17 = document.querySelectorAll('.number__skip_n_17')
    let fullSkipsUdStud_18 = document.querySelectorAll('.number__skip_u_18')
    let fullSkipsNeudStud_18 = document.querySelectorAll('.number__skip_n_18')
    let fullSkipsUdStud_19 = document.querySelectorAll('.number__skip_u_19')
    let fullSkipsNeudStud_19 = document.querySelectorAll('.number__skip_n_19')
    let fullSkipsUdStud_20 = document.querySelectorAll('.number__skip_u_20')
    let fullSkipsNeudStud_20 = document.querySelectorAll('.number__skip_n_20')
    let fullSkipsUdStud_21 = document.querySelectorAll('.number__skip_u_21')
    let fullSkipsNeudStud_21 = document.querySelectorAll('.number__skip_n_21')
    let fullSkipsUdStud_22 = document.querySelectorAll('.number__skip_u_22')
    let fullSkipsNeudStud_22 = document.querySelectorAll('.number__skip_n_22')
    let fullSkipsUdStud_23 = document.querySelectorAll('.number__skip_u_23')
    let fullSkipsNeudStud_23 = document.querySelectorAll('.number__skip_n_23')
    let fullSkipsUdStud_24 = document.querySelectorAll('.number__skip_u_24')
    let fullSkipsNeudStud_24 = document.querySelectorAll('.number__skip_n_24')
    let fullSkipsUdStud_25 = document.querySelectorAll('.number__skip_u_25')
    let fullSkipsNeudStud_25 = document.querySelectorAll('.number__skip_n_25')
    let fullSkipsUdStud_26 = document.querySelectorAll('.number__skip_u_26')
    let fullSkipsNeudStud_26 = document.querySelectorAll('.number__skip_n_26')
    let fullSkipsUdStud_27 = document.querySelectorAll('.number__skip_u_27')
    let fullSkipsNeudStud_27 = document.querySelectorAll('.number__skip_n_27')
    let fullSkipsUdStud_28 = document.querySelectorAll('.number__skip_u_28')
    let fullSkipsNeudStud_28 = document.querySelectorAll('.number__skip_n_28')
    let fullSkipsUdStud_29 = document.querySelectorAll('.number__skip_u_29')
    let fullSkipsNeudStud_29 = document.querySelectorAll('.number__skip_n_29')
    let fullSkipsUdStud_30 = document.querySelectorAll('.number__skip_u_30')
    let fullSkipsNeudStud_30 = document.querySelectorAll('.number__skip_n_30')
    let fullSkipsUdStud_31 = document.querySelectorAll('.number__skip_u_31')
    let fullSkipsNeudStud_31 = document.querySelectorAll('.number__skip_n_31')
    let fullSkipsUdStud_32 = document.querySelectorAll('.number__skip_u_32')
    let fullSkipsNeudStud_32 = document.querySelectorAll('.number__skip_n_32')
    // _________________________________________________________

    console.log(fullSkipsUdStud_1)

    let studentsNames = document.querySelectorAll('.students__names__skips')
    let studentsNamesEdit = document.querySelectorAll('.student__skip')
    let studentSkipsName = document.querySelectorAll('.student__skips__name')
    let modalEdit = document.querySelectorAll('.modal__edit')

    for (let i = 0; i < modalEdit.length; i++) {
        var c = [].filter.call(modalEdit[i].children, function (el) {
            return el.classList.contains('student__skip');

        });


        if (!studentsNames[0]) {} else {
            studentsNamesEdit_1[i].textContent = studentsNames[0].textContent
            studentsNamesEdit_1[i].parentNode.removeAttribute('hidden')
            allSkipsUdStud_1.removeAttribute('hidden')
            allSkipsNeudStud_1.removeAttribute('hidden')

            let asus1 = 0
            for (var q = 0; q < fullSkipsUdStud_1.length; q++) {
                asus1 = +asus1 + +parseInt(fullSkipsUdStud_1[q].textContent);
            }
            let asns1 = 0
            for (var q = 0; q < fullSkipsNeudStud_1.length; q++) {
                asns1 = +asns1 + +parseInt(fullSkipsNeudStud_1[q].textContent);
            }

            allSkipsUdStud_1.textContent = asus1
            allSkipsNeudStud_1.textContent = asns1
        }

        if (!studentsNames[1]) {} else {
            studentsNamesEdit_2[i].textContent = studentsNames[1].textContent
            studentsNamesEdit_2[i].parentNode.removeAttribute('hidden')
            allSkipsUdStud_2.removeAttribute('hidden')
            allSkipsNeudStud_2.removeAttribute('hidden')

            let asus2 = 0
            for (var q = 0; q < fullSkipsUdStud_2.length; q++) {
                asus2 = +asus2 + +parseInt(fullSkipsUdStud_2[q].textContent);
            }
            let asns2 = 0
            for (var q = 0; q < fullSkipsNeudStud_2.length; q++) {
                asns2 = +asns2 + +parseInt(fullSkipsNeudStud_2[q].textContent);
            }

            allSkipsUdStud_2.textContent = asus2
            allSkipsNeudStud_2.textContent = asns2

        }
        if (!studentsNames[2]) {} else {
            studentsNamesEdit_3[i].textContent = studentsNames[2].textContent
            studentsNamesEdit_3[i].parentNode.removeAttribute('hidden')
            allSkipsUdStud_3.removeAttribute('hidden')
            allSkipsNeudStud_3.removeAttribute('hidden')

            let asus3 = 0
            for (var q = 0; q < fullSkipsUdStud_3.length; q++) {
                asus3 = +asus3 + +parseInt(fullSkipsUdStud_3[q].textContent);
            }
            let asns3 = 0
            for (var q = 0; q < fullSkipsNeudStud_3.length; q++) {
                asns3 = +asns3 + +parseInt(fullSkipsNeudStud_3[q].textContent);
            }

            allSkipsUdStud_3.textContent = asus3
            allSkipsNeudStud_3.textContent = asns3

        }
        if (!studentsNames[3]) {} else {
            studentsNamesEdit_4[i].textContent = studentsNames[3].textContent
            studentsNamesEdit_4[i].parentNode.removeAttribute('hidden')
            allSkipsUdStud_4.removeAttribute('hidden')
            allSkipsNeudStud_4.removeAttribute('hidden')

            let asus4 = 0
            for (var q = 0; q < fullSkipsUdStud_4.length; q++) {
                asus4 = +asus4 + +parseInt(fullSkipsUdStud_4[q].textContent);
            }
            let asns4 = 0
            for (var q = 0; q < fullSkipsNeudStud_4.length; q++) {
                asns4 = +asns4 + +parseInt(fullSkipsNeudStud_4[q].textContent);
            }

            allSkipsUdStud_4.textContent = asus4
            allSkipsNeudStud_4.textContent = asns4

        }
        if (!studentsNames[4]) {} else {
            studentsNamesEdit_5[i].textContent = studentsNames[4].textContent
            studentsNamesEdit_5[i].parentNode.removeAttribute('hidden')
            allSkipsUdStud_5.removeAttribute('hidden')
            allSkipsNeudStud_5.removeAttribute('hidden')

            let asus5 = 0
            for (var q = 0; q < fullSkipsUdStud_5.length; q++) {
                asus5 = +asus5 + +parseInt(fullSkipsUdStud_5[q].textContent);
            }
            let asns5 = 0
            for (var q = 0; q < fullSkipsNeudStud_5.length; q++) {
                asns5 = +asns5 + +parseInt(fullSkipsNeudStud_5[q].textContent);
            }

            allSkipsUdStud_5.textContent = asus5
            allSkipsNeudStud_5.textContent = asns5

        }
        if (!studentsNames[5]) {} else {
            studentsNamesEdit_6[i].textContent = studentsNames[5].textContent
            studentsNamesEdit_6[i].parentNode.removeAttribute('hidden')
            allSkipsUdStud_6.removeAttribute('hidden')
            allSkipsNeudStud_6.removeAttribute('hidden')

            let asus6 = 0
            for (var q = 0; q < fullSkipsUdStud_6.length; q++) {
                asus6 = +asus6 + +parseInt(fullSkipsUdStud_6[q].textContent);
            }
            let asns6 = 0
            for (var q = 0; q < fullSkipsNeudStud_6.length; q++) {
                asns6 = +asns6 + +parseInt(fullSkipsNeudStud_6[q].textContent);
            }

            allSkipsUdStud_6.textContent = asus6
            allSkipsNeudStud_6.textContent = asns6

        }
        if (!studentsNames[6]) {} else {
            studentsNamesEdit_7[i].textContent = studentsNames[6].textContent
            studentsNamesEdit_7[i].parentNode.removeAttribute('hidden')
            allSkipsUdStud_7.removeAttribute('hidden')
            allSkipsNeudStud_7.removeAttribute('hidden')

            let asus7 = 0
            for (var q = 0; q < fullSkipsUdStud_7.length; q++) {
                asus7 = +asus7 + +parseInt(fullSkipsUdStud_7[q].textContent);
            }
            let asns7 = 0
            for (var q = 0; q < fullSkipsNeudStud_7.length; q++) {
                asns7 = +asns7 + +parseInt(fullSkipsNeudStud_7[q].textContent);
            }

            allSkipsUdStud_7.textContent = asus7
            allSkipsNeudStud_7.textContent = asns7

        }
        if (!studentsNames[7]) {} else {
            studentsNamesEdit_8[i].textContent = studentsNames[7].textContent
            studentsNamesEdit_8[i].parentNode.removeAttribute('hidden')
            allSkipsUdStud_8.removeAttribute('hidden')
            allSkipsNeudStud_8.removeAttribute('hidden')

            let asus8 = 0
            for (var q = 0; q < fullSkipsUdStud_8.length; q++) {
                asus8 = +asus8 + +parseInt(fullSkipsUdStud_8[q].textContent);
            }
            let asns8 = 0
            for (var q = 0; q < fullSkipsNeudStud_8.length; q++) {
                asns8 = +asns8 + +parseInt(fullSkipsNeudStud_8[q].textContent);
            }

            allSkipsUdStud_8.textContent = asus8
            allSkipsNeudStud_8.textContent = asns8

        }
        if (!studentsNames[8]) {} else {
            studentsNamesEdit_9[i].textContent = studentsNames[8].textContent
            studentsNamesEdit_9[i].parentNode.removeAttribute('hidden')
            allSkipsUdStud_9.removeAttribute('hidden')
            allSkipsNeudStud_9.removeAttribute('hidden')

            let asus9 = 0
            for (var q = 0; q < fullSkipsUdStud_9.length; q++) {
                asus9 = +asus9 + +parseInt(fullSkipsUdStud_9[q].textContent);
            }
            let asns9 = 0
            for (var q = 0; q < fullSkipsNeudStud_9.length; q++) {
                asns9 = +asns9 + +parseInt(fullSkipsNeudStud_9[q].textContent);
            }

            allSkipsUdStud_9.textContent = asus9
            allSkipsNeudStud_9.textContent = asns9

        }
        if (!studentsNames[9]) {} else {
            studentsNamesEdit_10[i].textContent = studentsNames[9].textContent
            studentsNamesEdit_10[i].parentNode.removeAttribute('hidden')
            allSkipsUdStud_10.removeAttribute('hidden')
            allSkipsNeudStud_10.removeAttribute('hidden')

            let asus10 = 0
            for (var q = 0; q < fullSkipsUdStud_10.length; q++) {
                asus10 = +asus10 + +parseInt(fullSkipsUdStud_10[q].textContent);
            }
            let asns10 = 0
            for (var q = 0; q < fullSkipsNeudStud_10.length; q++) {
                asns10 = +asns10 + +parseInt(fullSkipsNeudStud_10[q].textContent);
            }

            allSkipsUdStud_10.textContent = asus10
            allSkipsNeudStud_10.textContent = asns10

        }
        if (!studentsNames[10]) {} else {
            studentsNamesEdit_11[i].textContent = studentsNames[10].textContent
            studentsNamesEdit_11[i].parentNode.removeAttribute('hidden')
            allSkipsUdStud_11.removeAttribute('hidden')
            allSkipsNeudStud_11.removeAttribute('hidden')

            let asus11 = 0
            for (var q = 0; q < fullSkipsUdStud_11.length; q++) {
                asus11 = +asus11 + +parseInt(fullSkipsUdStud_11[q].textContent);
            }
            let asns11 = 0
            for (var q = 0; q < fullSkipsNeudStud_11.length; q++) {
                asns11 = +asns11 + +parseInt(fullSkipsNeudStud_11[q].textContent);
            }

            allSkipsUdStud_11.textContent = asus11
            allSkipsNeudStud_11.textContent = asns11
        }
        if (!studentsNames[11]) {} else {
            studentsNamesEdit_12[i].textContent = studentsNames[11].textContent
            studentsNamesEdit_12[i].parentNode.removeAttribute('hidden')
            allSkipsUdStud_12.removeAttribute('hidden')
            allSkipsNeudStud_12.removeAttribute('hidden')

            let asus12 = 0
            for (var q = 0; q < fullSkipsUdStud_12.length; q++) {
                asus12 = +asus12 + +parseInt(fullSkipsUdStud_12[q].textContent);
            }
            let asns12 = 0
            for (var q = 0; q < fullSkipsNeudStud_12.length; q++) {
                asns12 = +asns12 + +parseInt(fullSkipsNeudStud_12[q].textContent);
            }

            allSkipsUdStud_12.textContent = asus12
            allSkipsNeudStud_12.textContent = asns12
        }
        if (!studentsNames[12]) {} else {
            studentsNamesEdit_13[i].textContent = studentsNames[12].textContent
            studentsNamesEdit_13[i].parentNode.removeAttribute('hidden')
            allSkipsUdStud_13.removeAttribute('hidden')
            allSkipsNeudStud_13.removeAttribute('hidden')

            let asus13 = 0
            for (var q = 0; q < fullSkipsUdStud_13.length; q++) {
                asus13 = +asus13 + +parseInt(fullSkipsUdStud_13[q].textContent);
            }
            let asns13 = 0
            for (var q = 0; q < fullSkipsNeudStud_13.length; q++) {
                asns13 = +asns13 + +parseInt(fullSkipsNeudStud_13[q].textContent);
            }

            allSkipsUdStud_13.textContent = asus13
            allSkipsNeudStud_13.textContent = asns13
        }
        if (!studentsNames[13]) {} else {
            studentsNamesEdit_14[i].textContent = studentsNames[13].textContent
            studentsNamesEdit_14[i].parentNode.removeAttribute('hidden')
            allSkipsUdStud_14.removeAttribute('hidden')
            allSkipsNeudStud_14.removeAttribute('hidden')

            let asus14 = 0
            for (var q = 0; q < fullSkipsUdStud_14.length; q++) {
                asus14 = +asus14 + +parseInt(fullSkipsUdStud_14[q].textContent);
            }
            let asns14 = 0
            for (var q = 0; q < fullSkipsNeudStud_14.length; q++) {
                asns14 = +asns14 + +parseInt(fullSkipsNeudStud_14[q].textContent);
            }

            allSkipsUdStud_14.textContent = asus14
            allSkipsNeudStud_14.textContent = asns14
        }
        if (!studentsNames[14]) {} else {
            studentsNamesEdit_15[i].textContent = studentsNames[14].textContent
            studentsNamesEdit_15[i].parentNode.removeAttribute('hidden')
            allSkipsUdStud_15.removeAttribute('hidden')
            allSkipsNeudStud_15.removeAttribute('hidden')

            let asus15 = 0
            for (var q = 0; q < fullSkipsUdStud_15.length; q++) {
                asus15 = +asus15 + +parseInt(fullSkipsUdStud_15[q].textContent);
            }
            let asns15 = 0
            for (var q = 0; q < fullSkipsNeudStud_15.length; q++) {
                asns15 = +asns15 + +parseInt(fullSkipsNeudStud_15[q].textContent);
            }

            allSkipsUdStud_15.textContent = asus15
            allSkipsNeudStud_15.textContent = asns15
        }
        if (!studentsNames[15]) {} else {
            studentsNamesEdit_16[i].textContent = studentsNames[15].textContent
            studentsNamesEdit_16[i].parentNode.removeAttribute('hidden')
            allSkipsUdStud_16.removeAttribute('hidden')
            allSkipsNeudStud_16.removeAttribute('hidden')

            let asus16 = 0
            for (var q = 0; q < fullSkipsUdStud_16.length; q++) {
                asus16 = +asus16 + +parseInt(fullSkipsUdStud_16[q].textContent);
            }
            let asns16 = 0
            for (var q = 0; q < fullSkipsNeudStud_16.length; q++) {
                asns16 = +asns16 + +parseInt(fullSkipsNeudStud_16[q].textContent);
            }

            allSkipsUdStud_16.textContent = asus16
            allSkipsNeudStud_16.textContent = asns16
        }
        if (!studentsNames[16]) {} else {
            studentsNamesEdit_17[i].textContent = studentsNames[16].textContent
            studentsNamesEdit_17[i].parentNode.removeAttribute('hidden')
            allSkipsUdStud_17.removeAttribute('hidden')
            allSkipsNeudStud_17.removeAttribute('hidden')

            let asus17 = 0
            for (var q = 0; q < fullSkipsUdStud_17.length; q++) {
                asus17 = +asus17 + +parseInt(fullSkipsUdStud_17[q].textContent);
            }
            let asns17 = 0
            for (var q = 0; q < fullSkipsNeudStud_17.length; q++) {
                asns17 = +asns17 + +parseInt(fullSkipsNeudStud_17[q].textContent);
            }

            allSkipsUdStud_17.textContent = asus17
            allSkipsNeudStud_17.textContent = asns17
        }
        if (!studentsNames[17]) {} else {
            studentsNamesEdit_18[i].textContent = studentsNames[17].textContent
            studentsNamesEdit_18[i].parentNode.removeAttribute('hidden')
            allSkipsUdStud_18.removeAttribute('hidden')
            allSkipsNeudStud_18.removeAttribute('hidden')

            let asus18 = 0
            for (var q = 0; q < fullSkipsUdStud_18.length; q++) {
                asus18 = +asus18 + +parseInt(fullSkipsUdStud_18[q].textContent);
            }
            let asns18 = 0
            for (var q = 0; q < fullSkipsNeudStud_18.length; q++) {
                asns18 = +asns18 + +parseInt(fullSkipsNeudStud_18[q].textContent);
            }

            allSkipsUdStud_18.textContent = asus18
            allSkipsNeudStud_18.textContent = asns18
        }
        if (!studentsNames[18]) {} else {
            studentsNamesEdit_19[i].textContent = studentsNames[18].textContent
            studentsNamesEdit_19[i].parentNode.removeAttribute('hidden')
            allSkipsUdStud_19.removeAttribute('hidden')
            allSkipsNeudStud_19.removeAttribute('hidden')

            let asus19 = 0
            for (var q = 0; q < fullSkipsUdStud_19.length; q++) {
                asus19 = +asus19 + +parseInt(fullSkipsUdStud_19[q].textContent);
            }
            let asns19 = 0
            for (var q = 0; q < fullSkipsNeudStud_19.length; q++) {
                asns19 = +asns19 + +parseInt(fullSkipsNeudStud_19[q].textContent);
            }

            allSkipsUdStud_19.textContent = asus19
            allSkipsNeudStud_19.textContent = asns19
        }
        if (!studentsNames[19]) {} else {
            studentsNamesEdit_20[i].textContent = studentsNames[19].textContent
            studentsNamesEdit_20[i].parentNode.removeAttribute('hidden')
            allSkipsUdStud_20.removeAttribute('hidden')
            allSkipsNeudStud_20.removeAttribute('hidden')

            let asus20 = 0
            for (var q = 0; q < fullSkipsUdStud_20.length; q++) {
                asus20 = +asus20 + +parseInt(fullSkipsUdStud_20[q].textContent);
            }
            let asns20 = 0
            for (var q = 0; q < fullSkipsNeudStud_20.length; q++) {
                asns20 = +asns20 + +parseInt(fullSkipsNeudStud_20[q].textContent);
            }

            allSkipsUdStud_20.textContent = asus20
            allSkipsNeudStud_20.textContent = asns20
        }
        if (!studentsNames[20]) {} else {
            studentsNamesEdit_21[i].textContent = studentsNames[20].textContent
            studentsNamesEdit_21[i].parentNode.removeAttribute('hidden')
            allSkipsUdStud_21.removeAttribute('hidden')
            allSkipsNeudStud_21.removeAttribute('hidden')

            let asus21 = 0
            for (var q = 0; q < fullSkipsUdStud_21.length; q++) {
                asus21 = +asus21 + +parseInt(fullSkipsUdStud_21[q].textContent);
            }
            let asns21 = 0
            for (var q = 0; q < fullSkipsNeudStud_21.length; q++) {
                asns21 = +asns21 + +parseInt(fullSkipsNeudStud_21[q].textContent);
            }

            allSkipsUdStud_21.textContent = asus21
            allSkipsNeudStud_21.textContent = asns21
        }
        if (!studentsNames[21]) {} else {
            studentsNamesEdit_22[i].textContent = studentsNames[21].textContent
            studentsNamesEdit_22[i].parentNode.removeAttribute('hidden')
            allSkipsUdStud_22.removeAttribute('hidden')
            allSkipsNeudStud_22.removeAttribute('hidden')

            let asus22 = 0
            for (var q = 0; q < fullSkipsUdStud_22.length; q++) {
                asus22 = +asus22 + +parseInt(fullSkipsUdStud_22[q].textContent);
            }
            let asns22 = 0
            for (var q = 0; q < fullSkipsNeudStud_22.length; q++) {
                asns22 = +asns22 + +parseInt(fullSkipsNeudStud_22[q].textContent);
            }

            allSkipsUdStud_22.textContent = asus22
            allSkipsNeudStud_22.textContent = asns22
        }
        if (!studentsNames[22]) {} else {
            studentsNamesEdit_23[i].textContent = studentsNames[22].textContent
            studentsNamesEdit_23[i].parentNode.removeAttribute('hidden')
            allSkipsUdStud_23.removeAttribute('hidden')
            allSkipsNeudStud_23.removeAttribute('hidden')

            let asus23 = 0
            for (var q = 0; q < fullSkipsUdStud_23.length; q++) {
                asus23 = +asus23 + +parseInt(fullSkipsUdStud_23[q].textContent);
            }
            let asns23 = 0
            for (var q = 0; q < fullSkipsNeudStud_23.length; q++) {
                asns23 = +asns23 + +parseInt(fullSkipsNeudStud_23[q].textContent);
            }

            allSkipsUdStud_23.textContent = asus23
            allSkipsNeudStud_23.textContent = asns23
        }
        if (!studentsNames[23]) {} else {
            studentsNamesEdit_24[i].textContent = studentsNames[23].textContent
            studentsNamesEdit_24[i].parentNode.removeAttribute('hidden')
            allSkipsUdStud_24.removeAttribute('hidden')
            allSkipsNeudStud_24.removeAttribute('hidden')

            let asus24 = 0
            for (var q = 0; q < fullSkipsUdStud_24.length; q++) {
                asus24 = +asus24 + +parseInt(fullSkipsUdStud_24[q].textContent);
            }
            let asns24 = 0
            for (var q = 0; q < fullSkipsNeudStud_24.length; q++) {
                asns24 = +asns24 + +parseInt(fullSkipsNeudStud_24[q].textContent);
            }

            allSkipsUdStud_24.textContent = asus24
            allSkipsNeudStud_24.textContent = asns24
        }
        if (!studentsNames[24]) {} else {
            studentsNamesEdit_25[i].textContent = studentsNames[24].textContent
            studentsNamesEdit_25[i].parentNode.removeAttribute('hidden')
            allSkipsUdStud_25.removeAttribute('hidden')
            allSkipsNeudStud_25.removeAttribute('hidden')

            let asus25 = 0
            for (var q = 0; q < fullSkipsUdStud_25.length; q++) {
                asus25 = +asus25 + +parseInt(fullSkipsUdStud_25[q].textContent);
            }
            let asns25 = 0
            for (var q = 0; q < fullSkipsNeudStud_25.length; q++) {
                asns25 = +asns25 + +parseInt(fullSkipsNeudStud_25[q].textContent);
            }

            allSkipsUdStud_25.textContent = asus25
            allSkipsNeudStud_25.textContent = asns25
        }
        if (!studentsNames[25]) {} else {
            studentsNamesEdit_26[i].textContent = studentsNames[25].textContent
            studentsNamesEdit_26[i].parentNode.removeAttribute('hidden')
            allSkipsUdStud_26.removeAttribute('hidden')
            allSkipsNeudStud_26.removeAttribute('hidden')

            let asus26 = 0
            for (var q = 0; q < fullSkipsUdStud_26.length; q++) {
                asus26 = +asus26 + +parseInt(fullSkipsUdStud_26[q].textContent);
            }
            let asns26 = 0
            for (var q = 0; q < fullSkipsNeudStud_26.length; q++) {
                asns26 = +asns26 + +parseInt(fullSkipsNeudStud_26[q].textContent);
            }

            allSkipsUdStud_26.textContent = asus26
            allSkipsNeudStud_26.textContent = asns26
        }
        if (!studentsNames[26]) {} else {
            studentsNamesEdit_27[i].textContent = studentsNames[26].textContent
            studentsNamesEdit_27[i].parentNode.removeAttribute('hidden')
            allSkipsUdStud_27.removeAttribute('hidden')
            allSkipsNeudStud_27.removeAttribute('hidden')

            let asus27 = 0
            for (var q = 0; q < fullSkipsUdStud_27.length; q++) {
                asus27 = +asus27 + +parseInt(fullSkipsUdStud_27[q].textContent);
            }
            let asns27 = 0
            for (var q = 0; q < fullSkipsNeudStud_27.length; q++) {
                asns27 = +asns27 + +parseInt(fullSkipsNeudStud_27[q].textContent);
            }

            allSkipsUdStud_27.textContent = asus27
            allSkipsNeudStud_27.textContent = asns27
        }
        if (!studentsNames[27]) {} else {
            studentsNamesEdit_28[i].textContent = studentsNames[27].textContent
            studentsNamesEdit_28[i].parentNode.removeAttribute('hidden')
            allSkipsUdStud_28.removeAttribute('hidden')
            allSkipsNeudStud_28.removeAttribute('hidden')

            let asus28 = 0
            for (var q = 0; q < fullSkipsUdStud_28.length; q++) {
                asus28 = +asus28 + +parseInt(fullSkipsUdStud_28[q].textContent);
            }
            let asns28 = 0
            for (var q = 0; q < fullSkipsNeudStud_28.length; q++) {
                asns28 = +asns28 + +parseInt(fullSkipsNeudStud_28[q].textContent);
            }

            allSkipsUdStud_28.textContent = asus28
            allSkipsNeudStud_28.textContent = asns28
        }
        if (!studentsNames[28]) {} else {
            studentsNamesEdit_29[i].textContent = studentsNames[28].textContent
            studentsNamesEdit_29[i].parentNode.removeAttribute('hidden')
            allSkipsUdStud_1.removeAttribute('hidden')
            allSkipsNeudStud_1.removeAttribute('hidden')

            let asus29 = 0
            for (var q = 0; q < fullSkipsUdStud_29.length; q++) {
                asus29 = +asus29 + +parseInt(fullSkipsUdStud_29[q].textContent);
            }
            let asns29 = 0
            for (var q = 0; q < fullSkipsNeudStud_29.length; q++) {
                asns29 = +asns29 + +parseInt(fullSkipsNeudStud_29[q].textContent);
            }

            allSkipsUdStud_29.textContent = asus29
            allSkipsNeudStud_29.textContent = asns29
        }
        if (!studentsNames[29]) {} else {
            studentsNamesEdit_30[i].textContent = studentsNames[29].textContent
            studentsNamesEdit_30[i].parentNode.removeAttribute('hidden')
            allSkipsUdStud_29.removeAttribute('hidden')
            allSkipsNeudStud_29.removeAttribute('hidden')

            let asus30 = 0
            for (var q = 0; q < fullSkipsUdStud_30.length; q++) {
                asus30 = +asus30 + +parseInt(fullSkipsUdStud_30[q].textContent);
            }
            let asns30 = 0
            for (var q = 0; q < fullSkipsNeudStud_30.length; q++) {
                asns30 = +asns30 + +parseInt(fullSkipsNeudStud_30[q].textContent);
            }

            allSkipsUdStud_30.textContent = asus30
            allSkipsNeudStud_30.textContent = asns30
        }
        if (!studentsNames[30]) {} else {
            studentsNamesEdit_31[i].textContent = studentsNames[30].textContent
            studentsNamesEdit_31[i].parentNode.removeAttribute('hidden')
            allSkipsUdStud_30.removeAttribute('hidden')
            allSkipsNeudStud_30.removeAttribute('hidden')

            let asus31 = 0
            for (var q = 0; q < fullSkipsUdStud_31.length; q++) {
                asus31 = +asus31 + +parseInt(fullSkipsUdStud_31[q].textContent);
            }
            let asns31 = 0
            for (var q = 0; q < fullSkipsNeudStud_31.length; q++) {
                asns31 = +asns31 + +parseInt(fullSkipsNeudStud_31[q].textContent);
            }

            allSkipsUdStud_31.textContent = asus31
            allSkipsNeudStud_31.textContent = asns31
        }
        if (!studentsNames[31]) {} else {
            studentsNamesEdit_32[i].textContent = studentsNames[31].textContent
            studentsNamesEdit_32[i].parentNode.removeAttribute('hidden')
            allSkipsUdStud_31.removeAttribute('hidden')
            allSkipsNeudStud_31.removeAttribute('hidden')

            let asus32 = 0
            for (var q = 0; q < fullSkipsUdStud_32.length; q++) {
                asus32 = +asus32 + +parseInt(fullSkipsUdStud_32[q].textContent);
            }
            let asns32 = 0
            for (var q = 0; q < fullSkipsNeudStud_32.length; q++) {
                asns32 = +asns32 + +parseInt(fullSkipsNeudStud_32[q].textContent);
            }

            allSkipsUdStud_32.textContent = asus32
            allSkipsNeudStud_32.textContent = asns32
        }
    }









    // let editSkipN = document.querySelectorAll('.edit_skip_n')
    // for (let i = 0; i < editSkipN.length; i++) {
    //     editSkipN[i].setAttribute('name', 'edit_st_n_' + (+[i] + +1))
    // }
    // let editSkipU = document.querySelectorAll('.edit_skip_u')
    // for (let i = 0; i < editSkipU.length; i++) {
    //     editSkipU[i].setAttribute('name', 'edit_st_u_' + (+[i] + +1))
    // }


    let masSkip = []
    let skip = document.querySelectorAll('.skip')
    let tableSkips = document.querySelector("table.table__skips > tbody")
    if (!tableSkips) {} else {
        for (let i = 0; i < tableSkips.children.length; i++) {
            let tableChild = tableSkips.children[i].children
            masSkip.push(tableChild)
        }
    }

    for (let q = 0; q < masSkip.length; q++) {
        for (let i = 0; i < skip.length + 2; i++) {
            masSkip[q][i].removeAttribute('hidden')
        }
    }


    let massNeud = []
    for (let i = 0; i < masSkip.length; i++) {
        const abElements = [...masSkip[i]].filter(element => element.classList.contains('number__skip_n'));
        massNeud.push(abElements)
    }

    // Вывод студентов имеющих пропуски по не уважительным
    for (let q = 0; q < massNeud.length; q++) {
        if (massNeud[q][0].textContent > 0) {
            let elem = document.createElement("p")
            elem.classList.add('student__skips__1', 'student__skip__item')
            elem.setAttribute('hidden', 'ok')
            var elemText = document.createTextNode(studentsNames[0].textContent + ' ' + '-' + ' ')
            elem.appendChild(elemText)
            document.getElementById('wrap__student__skips__1').appendChild(elem)

            let skips = document.createElement("span")
            skips.classList.add('skips__student__1')
            skips.setAttribute('hidden', 'ok')
            var skipsText = document.createTextNode(massNeud[q][0].textContent)
            skips.appendChild(skipsText)
            elem.appendChild(skips)
            skips.appendChild(skipsText)
            elem.appendChild(skips)


        }
        if (massNeud[q][1].textContent > 0) {
            let elem = document.createElement("p")
            elem.classList.add('student__skips__2', 'student__skip__item')
            elem.setAttribute('hidden', 'ok')
            var elemText = document.createTextNode(studentsNames[1].textContent + ' ' + '-' + ' ')
            elem.appendChild(elemText)
            document.getElementById('wrap__student__skips__2').appendChild(elem)

            let skips = document.createElement("span")
            skips.classList.add('skips__student__2')
            skips.setAttribute('hidden', 'ok')
            var skipsText = document.createTextNode(massNeud[q][1].textContent)
            skips.appendChild(skipsText)
            elem.appendChild(skips)
            skips.appendChild(skipsText)
            elem.appendChild(skips)
        }
        if (massNeud[q][2].textContent > 0) {
            let elem = document.createElement("p")
            elem.classList.add('student__skips__3', 'student__skip__item')
            elem.setAttribute('hidden', 'ok')
            var elemText = document.createTextNode(studentsNames[2].textContent + ' ' + '-' + ' ')
            elem.appendChild(elemText)
            document.getElementById('wrap__student__skips__3').appendChild(elem)

            let skips = document.createElement("span")
            skips.classList.add('skips__student__3')
            skips.setAttribute('hidden', 'ok')
            var skipsText = document.createTextNode(massNeud[q][2].textContent)
            skips.appendChild(skipsText)
            elem.appendChild(skips)
            skips.appendChild(skipsText)
            elem.appendChild(skips)
        }
        if (massNeud[q][3].textContent > 0) {
            let elem = document.createElement("p")
            elem.classList.add('student__skips__4', 'student__skip__item')
            elem.setAttribute('hidden', 'ok')
            var elemText = document.createTextNode(studentsNames[3].textContent + ' ' + '-' + ' ')
            elem.appendChild(elemText)
            document.getElementById('wrap__student__skips__4').appendChild(elem)

            let skips = document.createElement("span")
            skips.classList.add('skips__student__4')
            skips.setAttribute('hidden', 'ok')
            var skipsText = document.createTextNode(massNeud[q][3].textContent)
            skips.appendChild(skipsText)
            elem.appendChild(skips)
            skips.appendChild(skipsText)
            elem.appendChild(skips)
        }
        if (massNeud[q][4].textContent > 0) {
            let elem = document.createElement("p")
            elem.classList.add('student__skips__5', 'student__skip__item')
            elem.setAttribute('hidden', 'ok')
            var elemText = document.createTextNode(studentsNames[4].textContent + ' ' + '-' + ' ')
            elem.appendChild(elemText)
            document.getElementById('wrap__student__skips__5').appendChild(elem)

            let skips = document.createElement("span")
            skips.classList.add('skips__student__5')
            skips.setAttribute('hidden', 'ok')
            var skipsText = document.createTextNode(massNeud[q][4].textContent)
            skips.appendChild(skipsText)
            elem.appendChild(skips)
            skips.appendChild(skipsText)
            elem.appendChild(skips)
        }
        if (massNeud[q][5].textContent > 0) {
            let elem = document.createElement("p")
            elem.classList.add('student__skips__6', 'student__skip__item')
            elem.setAttribute('hidden', 'ok')
            var elemText = document.createTextNode(studentsNames[5].textContent + ' ' + '-' + ' ')
            elem.appendChild(elemText)
            document.getElementById('wrap__student__skips__6').appendChild(elem)

            let skips = document.createElement("span")
            skips.classList.add('skips__student__6')
            skips.setAttribute('hidden', 'ok')
            var skipsText = document.createTextNode(massNeud[q][5].textContent)
            skips.appendChild(skipsText)
            elem.appendChild(skips)
            skips.appendChild(skipsText)
            elem.appendChild(skips)
        }
        if (massNeud[q][6].textContent > 0) {
            let elem = document.createElement("p")
            elem.classList.add('student__skips__7', 'student__skip__item')
            elem.setAttribute('hidden', 'ok')
            var elemText = document.createTextNode(studentsNames[6].textContent + ' ' + '-' + ' ')
            elem.appendChild(elemText)
            document.getElementById('wrap__student__skips__7').appendChild(elem)

            let skips = document.createElement("span")
            skips.classList.add('skips__student__7')
            skips.setAttribute('hidden', 'ok')
            var skipsText = document.createTextNode(massNeud[q][6].textContent)
            skips.appendChild(skipsText)
            elem.appendChild(skips)
            skips.appendChild(skipsText)
            elem.appendChild(skips)
        }
        if (massNeud[q][7].textContent > 0) {
            let elem = document.createElement("p")
            elem.classList.add('student__skips__8', 'student__skip__item')
            elem.setAttribute('hidden', 'ok')
            var elemText = document.createTextNode(studentsNames[7].textContent + ' ' + '-' + ' ')
            elem.appendChild(elemText)
            document.getElementById('wrap__student__skips__8').appendChild(elem)

            let skips = document.createElement("span")
            skips.classList.add('skips__student__8')
            skips.setAttribute('hidden', 'ok')
            var skipsText = document.createTextNode(massNeud[q][7].textContent)
            skips.appendChild(skipsText)
            elem.appendChild(skips)
            skips.appendChild(skipsText)
            elem.appendChild(skips)
        }
        if (massNeud[q][8].textContent > 0) {
            let elem = document.createElement("p")
            elem.classList.add('student__skips__9', 'student__skip__item')
            elem.setAttribute('hidden', 'ok')
            var elemText = document.createTextNode(studentsNames[8].textContent + ' ' + '-' + ' ')
            elem.appendChild(elemText)
            document.getElementById('wrap__student__skips__9').appendChild(elem)

            let skips = document.createElement("span")
            skips.classList.add('skips__student__9')
            skips.setAttribute('hidden', 'ok')
            var skipsText = document.createTextNode(massNeud[q][8].textContent)
            skips.appendChild(skipsText)
            elem.appendChild(skips)
            skips.appendChild(skipsText)
            elem.appendChild(skips)
        }
        if (massNeud[q][9].textContent > 0) {
            let elem = document.createElement("p")
            elem.classList.add('student__skips__10', 'student__skip__item')
            elem.setAttribute('hidden', 'ok')
            var elemText = document.createTextNode(studentsNames[9].textContent + ' ' + '-' + ' ')
            elem.appendChild(elemText)
            document.getElementById('wrap__student__skips__10').appendChild(elem)

            let skips = document.createElement("span")
            skips.classList.add('skips__student__10')
            skips.setAttribute('hidden', 'ok')
            var skipsText = document.createTextNode(massNeud[q][9].textContent)
            skips.appendChild(skipsText)
            elem.appendChild(skips)
            skips.appendChild(skipsText)
            elem.appendChild(skips)
        }
        if (massNeud[q][10].textContent > 0) {
            let elem = document.createElement("p")
            elem.classList.add('student__skips__11', 'student__skip__item')
            elem.setAttribute('hidden', 'ok')
            var elemText = document.createTextNode(studentsNames[10].textContent + ' ' + '-' + ' ')
            elem.appendChild(elemText)
            document.getElementById('wrap__student__skips__11').appendChild(elem)

            let skips = document.createElement("span")
            skips.classList.add('skips__student__11')
            skips.setAttribute('hidden', 'ok')
            var skipsText = document.createTextNode(massNeud[q][10].textContent)
            skips.appendChild(skipsText)
            elem.appendChild(skips)
            skips.appendChild(skipsText)
            elem.appendChild(skips)
        }
        if (massNeud[q][11].textContent > 0) {
            let elem = document.createElement("p")
            elem.classList.add('student__skips__12', 'student__skip__item')
            elem.setAttribute('hidden', 'ok')
            var elemText = document.createTextNode(studentsNames[11].textContent + ' ' + '-' + ' ')
            elem.appendChild(elemText)
            document.getElementById('wrap__student__skips__12').appendChild(elem)

            let skips = document.createElement("span")
            skips.classList.add('skips__student__12')
            skips.setAttribute('hidden', 'ok')
            var skipsText = document.createTextNode(massNeud[q][11].textContent)
            skips.appendChild(skipsText)
            elem.appendChild(skips)
            skips.appendChild(skipsText)
            elem.appendChild(skips)
        }
        if (massNeud[q][12].textContent > 0) {
            let elem = document.createElement("p")
            elem.classList.add('student__skips__13', 'student__skip__item')
            elem.setAttribute('hidden', 'ok')
            var elemText = document.createTextNode(studentsNames[12].textContent + ' ' + '-' + ' ')
            elem.appendChild(elemText)
            document.getElementById('wrap__student__skips__13').appendChild(elem)

            let skips = document.createElement("span")
            skips.classList.add('skips__student__13')
            skips.setAttribute('hidden', 'ok')
            var skipsText = document.createTextNode(massNeud[q][12].textContent)
            skips.appendChild(skipsText)
            elem.appendChild(skips)
            skips.appendChild(skipsText)
            elem.appendChild(skips)
        }
        if (massNeud[q][13].textContent > 0) {
            let elem = document.createElement("p")
            elem.classList.add('student__skips__14', 'student__skip__item')
            elem.setAttribute('hidden', 'ok')
            var elemText = document.createTextNode(studentsNames[13].textContent + ' ' + '-' + ' ')
            elem.appendChild(elemText)
            document.getElementById('wrap__student__skips__14').appendChild(elem)

            let skips = document.createElement("span")
            skips.classList.add('skips__student__14')
            skips.setAttribute('hidden', 'ok')
            var skipsText = document.createTextNode(massNeud[q][13].textContent)
            skips.appendChild(skipsText)
            elem.appendChild(skips)
            skips.appendChild(skipsText)
            elem.appendChild(skips)
        }
        if (massNeud[q][14].textContent > 0) {
            let elem = document.createElement("p")
            elem.classList.add('student__skips__15', 'student__skip__item')
            elem.setAttribute('hidden', 'ok')
            var elemText = document.createTextNode(studentsNames[14].textContent + ' ' + '-' + ' ')
            elem.appendChild(elemText)
            document.getElementById('wrap__student__skips__15').appendChild(elem)

            let skips = document.createElement("span")
            skips.classList.add('skips__student__15')
            skips.setAttribute('hidden', 'ok')
            var skipsText = document.createTextNode(massNeud[q][14].textContent)
            skips.appendChild(skipsText)
            elem.appendChild(skips)
            skips.appendChild(skipsText)
            elem.appendChild(skips)
        }
        if (massNeud[q][15].textContent > 0) {
            let elem = document.createElement("p")
            elem.classList.add('student__skips__16', 'student__skip__item')
            elem.setAttribute('hidden', 'ok')
            var elemText = document.createTextNode(studentsNames[15].textContent + ' ' + '-' + ' ')
            elem.appendChild(elemText)
            document.getElementById('wrap__student__skips__16').appendChild(elem)

            let skips = document.createElement("span")
            skips.classList.add('skips__student__16')
            skips.setAttribute('hidden', 'ok')
            var skipsText = document.createTextNode(massNeud[q][15].textContent)
            skips.appendChild(skipsText)
            elem.appendChild(skips)
            skips.appendChild(skipsText)
            elem.appendChild(skips)
        }
        if (massNeud[q][16].textContent > 0) {
            let elem = document.createElement("p")
            elem.classList.add('student__skips__17', 'student__skip__item')
            elem.setAttribute('hidden', 'ok')
            var elemText = document.createTextNode(studentsNames[16].textContent + ' ' + '-' + ' ')
            elem.appendChild(elemText)
            document.getElementById('wrap__student__skips__17').appendChild(elem)

            let skips = document.createElement("span")
            skips.classList.add('skips__student__17')
            skips.setAttribute('hidden', 'ok')
            var skipsText = document.createTextNode(massNeud[q][16].textContent)
            skips.appendChild(skipsText)
            elem.appendChild(skips)
            skips.appendChild(skipsText)
            elem.appendChild(skips)
        }
        if (massNeud[q][17].textContent > 0) {
            let elem = document.createElement("p")
            elem.classList.add('student__skips__18', 'student__skip__item')
            elem.setAttribute('hidden', 'ok')
            var elemText = document.createTextNode(studentsNames[17].textContent + ' ' + '-' + ' ')
            elem.appendChild(elemText)
            document.getElementById('wrap__student__skips__18').appendChild(elem)

            let skips = document.createElement("span")
            skips.classList.add('skips__student__18')
            skips.setAttribute('hidden', 'ok')
            var skipsText = document.createTextNode(massNeud[q][17].textContent)
            skips.appendChild(skipsText)
            elem.appendChild(skips)
            skips.appendChild(skipsText)
            elem.appendChild(skips)
        }
        if (massNeud[q][18].textContent > 0) {
            let elem = document.createElement("p")
            elem.classList.add('student__skips__19', 'student__skip__item')
            elem.setAttribute('hidden', 'ok')
            var elemText = document.createTextNode(studentsNames[18].textContent + ' ' + '-' + ' ')
            elem.appendChild(elemText)
            document.getElementById('wrap__student__skips__19').appendChild(elem)

            let skips = document.createElement("span")
            skips.classList.add('skips__student__19')
            skips.setAttribute('hidden', 'ok')
            var skipsText = document.createTextNode(massNeud[q][18].textContent)
            skips.appendChild(skipsText)
            elem.appendChild(skips)
            skips.appendChild(skipsText)
            elem.appendChild(skips)
        }
        if (massNeud[q][19].textContent > 0) {
            let elem = document.createElement("p")
            elem.classList.add('student__skips__20', 'student__skip__item')
            elem.setAttribute('hidden', 'ok')
            var elemText = document.createTextNode(studentsNames[19].textContent + ' ' + '-' + ' ')
            elem.appendChild(elemText)
            document.getElementById('wrap__student__skips__20').appendChild(elem)

            let skips = document.createElement("span")
            skips.classList.add('skips__student__20')
            skips.setAttribute('hidden', 'ok')
            var skipsText = document.createTextNode(massNeud[q][19].textContent)
            skips.appendChild(skipsText)
            elem.appendChild(skips)
            skips.appendChild(skipsText)
            elem.appendChild(skips)
        }
        if (massNeud[q][20].textContent > 0) {
            let elem = document.createElement("p")
            elem.classList.add('student__skips__21', 'student__skip__item')
            elem.setAttribute('hidden', 'ok')
            var elemText = document.createTextNode(studentsNames[20].textContent + ' ' + '-' + ' ')
            elem.appendChild(elemText)
            document.getElementById('wrap__student__skips__21').appendChild(elem)

            let skips = document.createElement("span")
            skips.classList.add('skips__student__21')
            skips.setAttribute('hidden', 'ok')
            var skipsText = document.createTextNode(massNeud[q][20].textContent)
            skips.appendChild(skipsText)
            elem.appendChild(skips)
            skips.appendChild(skipsText)
            elem.appendChild(skips)
        }
        if (massNeud[q][21].textContent > 0) {
            let elem = document.createElement("p")
            elem.classList.add('student__skips__22', 'student__skip__item')
            elem.setAttribute('hidden', 'ok')
            var elemText = document.createTextNode(studentsNames[21].textContent + ' ' + '-' + ' ')
            elem.appendChild(elemText)
            document.getElementById('wrap__student__skips__22').appendChild(elem)

            let skips = document.createElement("span")
            skips.classList.add('skips__student__22')
            skips.setAttribute('hidden', 'ok')
            var skipsText = document.createTextNode(massNeud[q][21].textContent)
            skips.appendChild(skipsText)
            elem.appendChild(skips)
            skips.appendChild(skipsText)
            elem.appendChild(skips)
        }
        if (massNeud[q][22].textContent > 0) {
            let elem = document.createElement("p")
            elem.classList.add('student__skips__23', 'student__skip__item')
            elem.setAttribute('hidden', 'ok')
            var elemText = document.createTextNode(studentsNames[22].textContent + ' ' + '-' + ' ')
            elem.appendChild(elemText)
            document.getElementById('wrap__student__skips__23').appendChild(elem)

            let skips = document.createElement("span")
            skips.classList.add('skips__student__23')
            skips.setAttribute('hidden', 'ok')
            var skipsText = document.createTextNode(massNeud[q][22].textContent)
            skips.appendChild(skipsText)
            elem.appendChild(skips)
            skips.appendChild(skipsText)
            elem.appendChild(skips)
        }
        if (massNeud[q][23].textContent > 0) {
            let elem = document.createElement("p")
            elem.classList.add('student__skips__24', 'student__skip__item')
            elem.setAttribute('hidden', 'ok')
            var elemText = document.createTextNode(studentsNames[23].textContent + ' ' + '-' + ' ')
            elem.appendChild(elemText)
            document.getElementById('wrap__student__skips__24').appendChild(elem)

            let skips = document.createElement("span")
            skips.classList.add('skips__student__24')
            skips.setAttribute('hidden', 'ok')
            var skipsText = document.createTextNode(massNeud[q][23].textContent)
            skips.appendChild(skipsText)
            elem.appendChild(skips)
            skips.appendChild(skipsText)
            elem.appendChild(skips)
        }
        if (massNeud[q][24].textContent > 0) {
            let elem = document.createElement("p")
            elem.classList.add('student__skips__25', 'student__skip__item')
            elem.setAttribute('hidden', 'ok')
            var elemText = document.createTextNode(studentsNames[24].textContent + ' ' + '-' + ' ')
            elem.appendChild(elemText)
            document.getElementById('wrap__student__skips__25').appendChild(elem)

            let skips = document.createElement("span")
            skips.classList.add('skips__student__25')
            skips.setAttribute('hidden', 'ok')
            var skipsText = document.createTextNode(massNeud[q][24].textContent)
            skips.appendChild(skipsText)
            elem.appendChild(skips)
            skips.appendChild(skipsText)
            elem.appendChild(skips)
        }
        if (massNeud[q][25].textContent > 0) {
            let elem = document.createElement("p")
            elem.classList.add('student__skips__26', 'student__skip__item')
            elem.setAttribute('hidden', 'ok')
            var elemText = document.createTextNode(studentsNames[25].textContent + ' ' + '-' + ' ')
            elem.appendChild(elemText)
            document.getElementById('wrap__student__skips__26').appendChild(elem)

            let skips = document.createElement("span")
            skips.classList.add('skips__student__26')
            skips.setAttribute('hidden', 'ok')
            var skipsText = document.createTextNode(massNeud[q][25].textContent)
            skips.appendChild(skipsText)
            elem.appendChild(skips)
            skips.appendChild(skipsText)
            elem.appendChild(skips)
        }
        if (massNeud[q][26].textContent > 0) {
            let elem = document.createElement("p")
            elem.classList.add('student__skips__27', 'student__skip__item')
            elem.setAttribute('hidden', 'ok')
            var elemText = document.createTextNode(studentsNames[26].textContent + ' ' + '-' + ' ')
            elem.appendChild(elemText)
            document.getElementById('wrap__student__skips__27').appendChild(elem)

            let skips = document.createElement("span")
            skips.classList.add('skips__student__27')
            skips.setAttribute('hidden', 'ok')
            var skipsText = document.createTextNode(massNeud[q][26].textContent)
            skips.appendChild(skipsText)
            elem.appendChild(skips)
            skips.appendChild(skipsText)
            elem.appendChild(skips)
        }
        if (massNeud[q][27].textContent > 0) {
            let elem = document.createElement("p")
            elem.classList.add('student__skips__28', 'student__skip__item')
            elem.setAttribute('hidden', 'ok')
            var elemText = document.createTextNode(studentsNames[27].textContent + ' ' + '-' + ' ')
            elem.appendChild(elemText)
            document.getElementById('wrap__student__skips__28').appendChild(elem)

            let skips = document.createElement("span")
            skips.classList.add('skips__student__28')
            skips.setAttribute('hidden', 'ok')
            var skipsText = document.createTextNode(massNeud[q][27].textContent)
            skips.appendChild(skipsText)
            elem.appendChild(skips)
            skips.appendChild(skipsText)
            elem.appendChild(skips)
        }
        if (massNeud[q][28].textContent > 0) {
            let elem = document.createElement("p")
            elem.classList.add('student__skips__29', 'student__skip__item')
            elem.setAttribute('hidden', 'ok')
            var elemText = document.createTextNode(studentsNames[28].textContent + ' ' + '-' + ' ')
            elem.appendChild(elemText)
            document.getElementById('wrap__student__skips__29').appendChild(elem)

            let skips = document.createElement("span")
            skips.classList.add('skips__student__29')
            skips.setAttribute('hidden', 'ok')
            var skipsText = document.createTextNode(massNeud[q][28].textContent)
            skips.appendChild(skipsText)
            elem.appendChild(skips)
            skips.appendChild(skipsText)
            elem.appendChild(skips)
        }
        if (massNeud[q][29].textContent > 0) {
            let elem = document.createElement("p")
            elem.classList.add('student__skips__30', 'student__skip__item')
            elem.setAttribute('hidden', 'ok')
            var elemText = document.createTextNode(studentsNames[29].textContent + ' ' + '-' + ' ')
            elem.appendChild(elemText)
            document.getElementById('wrap__student__skips__30').appendChild(elem)

            let skips = document.createElement("span")
            skips.classList.add('skips__student__30')
            skips.setAttribute('hidden', 'ok')
            var skipsText = document.createTextNode(massNeud[q][29].textContent)
            skips.appendChild(skipsText)
            elem.appendChild(skips)
            skips.appendChild(skipsText)
            elem.appendChild(skips)
        }
        if (massNeud[q][30].textContent > 0) {
            let elem = document.createElement("p")
            elem.classList.add('student__skips__31', 'student__skip__item')
            elem.setAttribute('hidden', 'ok')
            var elemText = document.createTextNode(studentsNames[30].textContent + ' ' + '-' + ' ')
            elem.appendChild(elemText)
            document.getElementById('wrap__student__skips__31').appendChild(elem)

            let skips = document.createElement("span")
            skips.classList.add('skips__student__31')
            skips.setAttribute('hidden', 'ok')
            var skipsText = document.createTextNode(massNeud[q][30].textContent)
            skips.appendChild(skipsText)
            elem.appendChild(skips)
            skips.appendChild(skipsText)
            elem.appendChild(skips)
        }
        if (massNeud[q][31].textContent > 0) {
            let elem = document.createElement("p")
            elem.classList.add('student__skips__31', 'student__skip__item')
            elem.setAttribute('hidden', 'ok')
            var elemText = document.createTextNode(studentsNames[31].textContent + ' ' + '-' + ' ')
            elem.appendChild(elemText)
            document.getElementById('wrap__student__skips__31').appendChild(elem)

            let skips = document.createElement("span")
            skips.classList.add('skips__student__32')
            skips.setAttribute('hidden', 'ok')
            var skipsText = document.createTextNode(massNeud[q][31].textContent)
            skips.appendChild(skipsText)
            elem.appendChild(skips)
            skips.appendChild(skipsText)
            elem.appendChild(skips)
        }
    }
    // Вывод студентов имеющих пропуски по не уважительным

    let summSkips_1 = document.querySelectorAll('.skips__student__1')
    let skipNameSt_1 = document.querySelector('.student__skips__1')
    var arrSt_1 = []
    if (!summSkips_1[0]) {} else {
        skipNameSt_1.removeAttribute('hidden')
        summSkips_1[0].classList.add('neud__skips')
        summSkips_1[0].removeAttribute('hidden')
        for (var i = 0; i < summSkips_1.length; i++) {
            arrSt_1.push(summSkips_1[i].textContent)
        }
        var sumSt_1 = 0;
        for (var i = 0; i < arrSt_1.length; i++) {
            sumSt_1 = +sumSt_1 + +parseInt(arrSt_1[i]);
        }
        summSkips_1[0].textContent = sumSt_1
        document.getElementById('student__skips__1').value = sumSt_1
    }

    let summSkips_2 = document.querySelectorAll('.skips__student__2')
    let skipNameSt_2 = document.querySelector('.student__skips__2')
    var arrSt_2 = []
    if (!summSkips_2[0]) {} else {
        skipNameSt_2.removeAttribute('hidden')
        summSkips_2[0].classList.add('neud__skips')
        summSkips_2[0].removeAttribute('hidden')
        for (var i = 0; i < summSkips_2.length; i++) {
            arrSt_2.push(summSkips_2[i].textContent)
        }
        var sumSt_2 = 0;
        for (var i = 0; i < arrSt_2.length; i++) {
            sumSt_2 = +sumSt_2 + +parseInt(arrSt_2[i]);
        }
        summSkips_2[0].textContent = sumSt_2
        document.getElementById('student__skips__2').value = sumSt_2
    }

    let summSkips_3 = document.querySelectorAll('.skips__student__3')
    let skipNameSt_3 = document.querySelector('.student__skips__3')
    var arrSt_3 = []
    if (!summSkips_3[0]) {} else {
        skipNameSt_3.removeAttribute('hidden')
        summSkips_3[0].classList.add('neud__skips')
        summSkips_3[0].removeAttribute('hidden')
        for (var i = 0; i < summSkips_3.length; i++) {
            arrSt_3.push(summSkips_3[i].textContent)
        }
        var sumSt_3 = 0;
        for (var i = 0; i < arrSt_3.length; i++) {
            sumSt_3 = +sumSt_3 + +parseInt(arrSt_3[i]);
        }
        summSkips_3[0].textContent = sumSt_3
        document.getElementById('student__skips__3').value = sumSt_3
    }

    let summSkips_4 = document.querySelectorAll('.skips__student__4')
    let skipNameSt_4 = document.querySelector('.student__skips__4')
    var arrSt_4 = []
    if (!summSkips_4[0]) {} else {
        skipNameSt_4.removeAttribute('hidden')
        summSkips_4[0].classList.add('neud__skips')
        summSkips_4[0].removeAttribute('hidden')
        for (var i = 0; i < summSkips_4.length; i++) {
            arrSt_4.push(summSkips_4[i].textContent)
        }
        var sumSt_4 = 0;
        for (var i = 0; i < arrSt_4.length; i++) {
            sumSt_4 = +sumSt_4 + +parseInt(arrSt_4[i]);
        }
        summSkips_4[0].textContent = sumSt_4
        document.getElementById('student__skips__4').value = sumSt_4
    }

    let summSkips_5 = document.querySelectorAll('.skips__student__5')
    let skipNameSt_5 = document.querySelector('.student__skips__5')
    var arrSt_5 = []
    if (!summSkips_5[0]) {} else {
        skipNameSt_5.removeAttribute('hidden')
        summSkips_5[0].classList.add('neud__skips')
        summSkips_5[0].removeAttribute('hidden')
        for (var i = 0; i < summSkips_5.length; i++) {
            arrSt_5.push(summSkips_5[i].textContent)
        }
        var sumSt_5 = 0;
        for (var i = 0; i < arrSt_5.length; i++) {
            sumSt_5 = +sumSt_5 + +parseInt(arrSt_5[i]);
        }
        summSkips_5[0].textContent = sumSt_5
        document.getElementById('student__skips__5').value = sumSt_5
    }

    let summSkips_6 = document.querySelectorAll('.skips__student__6')
    let skipNameSt_6 = document.querySelector('.student__skips__6')
    var arrSt_6 = []
    if (!summSkips_6[0]) {} else {
        skipNameSt_6.removeAttribute('hidden')
        summSkips_6[0].classList.add('neud__skips')
        summSkips_6[0].removeAttribute('hidden')
        for (var i = 0; i < summSkips_6.length; i++) {
            arrSt_6.push(summSkips_6[i].textContent)
        }
        var sumSt_6 = 0;
        for (var i = 0; i < arrSt_6.length; i++) {
            sumSt_6 = +sumSt_6 + +parseInt(arrSt_6[i]);
        }
        summSkips_6[0].textContent = sumSt_6
        document.getElementById('student__skips__6').value = sumSt_6
    }

    let summSkips_7 = document.querySelectorAll('.skips__student__7')
    let skipNameSt_7 = document.querySelector('.student__skips__7')
    var arrSt_7 = []
    if (!summSkips_7[0]) {} else {
        skipNameSt_7.removeAttribute('hidden')
        summSkips_7[0].classList.add('neud__skips')
        summSkips_7[0].removeAttribute('hidden')
        for (var i = 0; i < summSkips_7.length; i++) {
            arrSt_7.push(summSkips_7[i].textContent)
        }
        var sumSt_7 = 0;
        for (var i = 0; i < arrSt_7.length; i++) {
            sumSt_7 = +sumSt_7 + +parseInt(arrSt_7[i]);
        }
        summSkips_7[0].textContent = sumSt_7
        document.getElementById('student__skips__7').value = sumSt_7
    }

    let summSkips_8 = document.querySelectorAll('.skips__student__8')
    let skipNameSt_8 = document.querySelector('.student__skips__8')
    var arrSt_8 = []
    if (!summSkips_8[0]) {} else {
        skipNameSt_8.removeAttribute('hidden')
        summSkips_8[0].classList.add('neud__skips')
        summSkips_8[0].removeAttribute('hidden')
        for (var i = 0; i < summSkips_8.length; i++) {
            arrSt_8.push(summSkips_8[i].textContent)
        }
        var sumSt_8 = 0;
        for (var i = 0; i < arrSt_8.length; i++) {
            sumSt_8 = +sumSt_8 + +parseInt(arrSt_8[i]);
        }
        summSkips_8[0].textContent = sumSt_8
        document.getElementById('student__skips__8').value = sumSt_8
    }
    let summSkips_9 = document.querySelectorAll('.skips__student__9')
    let skipNameSt_9 = document.querySelector('.student__skips__9')
    var arrSt_9 = []
    if (!summSkips_9[0]) {} else {
        skipNameSt_9.removeAttribute('hidden')
        summSkips_9[0].classList.add('neud__skips')
        summSkips_9[0].removeAttribute('hidden')
        for (var i = 0; i < summSkips_9.length; i++) {
            arrSt_9.push(summSkips_9[i].textContent)
        }
        var sumSt_9 = 0;
        for (var i = 0; i < arrSt_9.length; i++) {
            sumSt_9 = +sumSt_9 + +parseInt(arrSt_9[i]);
        }
        summSkips_9[0].textContent = sumSt_9
        document.getElementById('student__skips__9').value = sumSt_9
    }
    let summSkips_10 = document.querySelectorAll('.skips__student__10')
    let skipNameSt_10 = document.querySelector('.student__skips__10')
    var arrSt_10 = []
    if (!summSkips_10[0]) {} else {
        skipNameSt_10.removeAttribute('hidden')
        summSkips_10[0].classList.add('neud__skips')
        summSkips_10[0].removeAttribute('hidden')
        for (var i = 0; i < summSkips_10.length; i++) {
            arrSt_10.push(summSkips_10[i].textContent)
        }
        var sumSt_10 = 0;
        for (var i = 0; i < arrSt_10.length; i++) {
            sumSt_10 = +sumSt_10 + +parseInt(arrSt_10[i]);
        }
        summSkips_10[0].textContent = sumSt_10
        document.getElementById('student__skips__10').value = sumSt_10
    }
    let summSkips_11 = document.querySelectorAll('.skips__student__11')
    let skipNameSt_11 = document.querySelector('.student__skips__11')
    var arrSt_11 = []
    if (!summSkips_11[0]) {} else {
        skipNameSt_11.removeAttribute('hidden')
        summSkips_11[0].classList.add('neud__skips')
        summSkips_11[0].removeAttribute('hidden')
        for (var i = 0; i < summSkips_11.length; i++) {
            arrSt_11.push(summSkips_11[i].textContent)
        }
        var sumSt_11 = 0;
        for (var i = 0; i < arrSt_11.length; i++) {
            sumSt_11 = +sumSt_11 + +parseInt(arrSt_11[i]);
        }
        summSkips_11[0].textContent = sumSt_11
        document.getElementById('student__skips__11').value = sumSt_11
    }
    let summSkips_12 = document.querySelectorAll('.skips__student__12')
    let skipNameSt_12 = document.querySelector('.student__skips__12')
    var arrSt_12 = []
    if (!summSkips_12[0]) {} else {
        skipNameSt_12.removeAttribute('hidden')
        summSkips_12[0].classList.add('neud__skips')
        summSkips_12[0].removeAttribute('hidden')
        for (var i = 0; i < summSkips_12.length; i++) {
            arrSt_12.push(summSkips_12[i].textContent)
        }
        var sumSt_12 = 0;
        for (var i = 0; i < arrSt_12.length; i++) {
            sumSt_12 = +sumSt_12 + +parseInt(arrSt_12[i]);
        }
        summSkips_12[0].textContent = sumSt_12
        document.getElementById('student__skips__12').value = sumSt_12
    }
    let summSkips_13 = document.querySelectorAll('.skips__student__13')
    let skipNameSt_13 = document.querySelector('.student__skips__13')
    var arrSt_13 = []
    if (!summSkips_13[0]) {} else {
        skipNameSt_13.removeAttribute('hidden')
        summSkips_13[0].classList.add('neud__skips')
        summSkips_13[0].removeAttribute('hidden')
        for (var i = 0; i < summSkips_13.length; i++) {
            arrSt_13.push(summSkips_13[i].textContent)
        }
        var sumSt_13 = 0;
        for (var i = 0; i < arrSt_13.length; i++) {
            sumSt_13 = +sumSt_13 + +parseInt(arrSt_13[i]);
        }
        summSkips_13[0].textContent = sumSt_13
        document.getElementById('student__skips__13').value = sumSt_13
    }
    let summSkips_14 = document.querySelectorAll('.skips__student__14')
    let skipNameSt_14 = document.querySelector('.student__skips__14')
    var arrSt_14 = []
    if (!summSkips_14[0]) {} else {
        skipNameSt_14.removeAttribute('hidden')
        summSkips_14[0].classList.add('neud__skips')
        summSkips_14[0].removeAttribute('hidden')
        for (var i = 0; i < summSkips_14.length; i++) {
            arrSt_14.push(summSkips_14[i].textContent)
        }
        var sumSt_14 = 0;
        for (var i = 0; i < arrSt_14.length; i++) {
            sumSt_14 = +sumSt_14 + +parseInt(arrSt_14[i]);
        }
        summSkips_14[0].textContent = sumSt_14
        document.getElementById('student__skips__14').value = sumSt_14
    }
    let summSkips_15 = document.querySelectorAll('.skips__student__15')
    let skipNameSt_15 = document.querySelector('.student__skips__15')
    var arrSt_15 = []
    if (!summSkips_15[0]) {} else {
        skipNameSt_15.removeAttribute('hidden')
        summSkips_15[0].classList.add('neud__skips')
        summSkips_15[0].removeAttribute('hidden')
        for (var i = 0; i < summSkips_15.length; i++) {
            arrSt_15.push(summSkips_15[i].textContent)
        }
        var sumSt_15 = 0;
        for (var i = 0; i < arrSt_15.length; i++) {
            sumSt_15 = +sumSt_15 + +parseInt(arrSt_15[i]);
        }
        summSkips_15[0].textContent = sumSt_15
        document.getElementById('student__skips__15').value = sumSt_15
    }
    let summSkips_16 = document.querySelectorAll('.skips__student__16')
    let skipNameSt_16 = document.querySelector('.student__skips__16')
    var arrSt_16 = []
    if (!summSkips_16[0]) {} else {
        skipNameSt_16.removeAttribute('hidden')
        summSkips_16[0].classList.add('neud__skips')
        summSkips_16[0].removeAttribute('hidden')
        for (var i = 0; i < summSkips_16.length; i++) {
            arrSt_16.push(summSkips_16[i].textContent)
        }
        var sumSt_16 = 0;
        for (var i = 0; i < arrSt_16.length; i++) {
            sumSt_16 = +sumSt_16 + +parseInt(arrSt_16[i]);
        }
        summSkips_16[0].textContent = sumSt_16
        document.getElementById('student__skips__16').value = sumSt_16
    }
    let summSkips_17 = document.querySelectorAll('.skips__student__17')
    let skipNameSt_17 = document.querySelector('.student__skips__17')
    var arrSt_17 = []
    if (!summSkips_17[0]) {} else {
        skipNameSt_17.removeAttribute('hidden')
        summSkips_17[0].classList.add('neud__skips')
        summSkips_17[0].removeAttribute('hidden')
        for (var i = 0; i < summSkips_17.length; i++) {
            arrSt_17.push(summSkips_17[i].textContent)
        }
        var sumSt_17 = 0;
        for (var i = 0; i < arrSt_17.length; i++) {
            sumSt_17 = +sumSt_17 + +parseInt(arrSt_17[i]);
        }
        summSkips_17[0].textContent = sumSt_17
        document.getElementById('student__skips__17').value = sumSt_17
    }
    let summSkips_18 = document.querySelectorAll('.skips__student__18')
    let skipNameSt_18 = document.querySelector('.student__skips__18')
    var arrSt_18 = []
    if (!summSkips_18[0]) {} else {
        skipNameSt_18.removeAttribute('hidden')
        summSkips_18[0].classList.add('neud__skips')
        summSkips_18[0].removeAttribute('hidden')
        for (var i = 0; i < summSkips_18.length; i++) {
            arrSt_18.push(summSkips_18[i].textContent)
        }
        var sumSt_18 = 0;
        for (var i = 0; i < arrSt_18.length; i++) {
            sumSt_18 = +sumSt_18 + +parseInt(arrSt_18[i]);
        }
        summSkips_18[0].textContent = sumSt_18
        document.getElementById('student__skips__18').value = sumSt_18
    }
    let summSkips_19 = document.querySelectorAll('.skips__student__19')
    let skipNameSt_19 = document.querySelector('.student__skips__19')
    var arrSt_19 = []
    if (!summSkips_19[0]) {} else {
        skipNameSt_19.removeAttribute('hidden')
        summSkips_19[0].classList.add('neud__skips')
        summSkips_19[0].removeAttribute('hidden')
        for (var i = 0; i < summSkips_19.length; i++) {
            arrSt_19.push(summSkips_19[i].textContent)
        }
        var sumSt_19 = 0;
        for (var i = 0; i < arrSt_19.length; i++) {
            sumSt_19 = +sumSt_19 + +parseInt(arrSt_19[i]);
        }
        summSkips_19[0].textContent = sumSt_19
        document.getElementById('student__skips__19').value = sumSt_19
    }
    let summSkips_20 = document.querySelectorAll('.skips__student__20')
    let skipNameSt_20 = document.querySelector('.student__skips__20')
    var arrSt_20 = []
    if (!summSkips_20[0]) {} else {
        skipNameSt_20.removeAttribute('hidden')
        summSkips_20[0].classList.add('neud__skips')
        summSkips_20[0].removeAttribute('hidden')
        for (var i = 0; i < summSkips_20.length; i++) {
            arrSt_20.push(summSkips_20[i].textContent)
        }
        var sumSt_20 = 0;
        for (var i = 0; i < arrSt_20.length; i++) {
            sumSt_20 = +sumSt_20 + +parseInt(arrSt_20[i]);
        }
        summSkips_20[0].textContent = sumSt_20
        document.getElementById('student__skips__20').value = sumSt_20
    }
    let summSkips_21 = document.querySelectorAll('.skips__student__21')
    let skipNameSt_21 = document.querySelector('.student__skips__21')
    var arrSt_21 = []
    if (!summSkips_21[0]) {} else {
        skipNameSt_21.removeAttribute('hidden')
        summSkips_21[0].classList.add('neud__skips')
        summSkips_21[0].removeAttribute('hidden')
        for (var i = 0; i < summSkips_21.length; i++) {
            arrSt_21.push(summSkips_21[i].textContent)
        }
        var sumSt_21 = 0;
        for (var i = 0; i < arrSt_21.length; i++) {
            sumSt_21 = +sumSt_21 + +parseInt(arrSt_21[i]);
        }
        summSkips_21[0].textContent = sumSt_21
        document.getElementById('student__skips__21').value = sumSt_21
    }
    let summSkips_22 = document.querySelectorAll('.skips__student__22')
    let skipNameSt_22 = document.querySelector('.student__skips__22')
    var arrSt_22 = []
    if (!summSkips_22[0]) {} else {
        skipNameSt_22.removeAttribute('hidden')
        summSkips_22[0].classList.add('neud__skips')
        summSkips_22[0].removeAttribute('hidden')
        for (var i = 0; i < summSkips_22.length; i++) {
            arrSt_22.push(summSkips_22[i].textContent)
        }
        var sumSt_22 = 0;
        for (var i = 0; i < arrSt_22.length; i++) {
            sumSt_22 = +sumSt_22 + +parseInt(arrSt_22[i]);
        }
        summSkips_22[0].textContent = sumSt_22
        document.getElementById('student__skips__22').value = sumSt_22
    }
    let summSkips_23 = document.querySelectorAll('.skips__student__23')
    let skipNameSt_23 = document.querySelector('.student__skips__23')
    var arrSt_23 = []
    if (!summSkips_23[0]) {} else {
        skipNameSt_23.removeAttribute('hidden')
        summSkips_23[0].classList.add('neud__skips')
        summSkips_23[0].removeAttribute('hidden')
        for (var i = 0; i < summSkips_23.length; i++) {
            arrSt_23.push(summSkips_23[i].textContent)
        }
        var sumSt_23 = 0;
        for (var i = 0; i < arrSt_23.length; i++) {
            sumSt_23 = +sumSt_23 + +parseInt(arrSt_23[i]);
        }
        summSkips_23[0].textContent = sumSt_23
        document.getElementById('student__skips__23').value = sumSt_23
    }
    let summSkips_24 = document.querySelectorAll('.skips__student__24')
    let skipNameSt_24 = document.querySelector('.student__skips__24')
    var arrSt_24 = []
    if (!summSkips_24[0]) {} else {
        skipNameSt_24.removeAttribute('hidden')
        summSkips_24[0].classList.add('neud__skips')
        summSkips_24[0].removeAttribute('hidden')
        for (var i = 0; i < summSkips_24.length; i++) {
            arrSt_24.push(summSkips_24[i].textContent)
        }
        var sumSt_24 = 0;
        for (var i = 0; i < arrSt_24.length; i++) {
            sumSt_24 = +sumSt_24 + +parseInt(arrSt_24[i]);
        }
        summSkips_24[0].textContent = sumSt_24
        document.getElementById('student__skips__24').value = sumSt_24
    }
    let summSkips_25 = document.querySelectorAll('.skips__student__25')
    let skipNameSt_25 = document.querySelector('.student__skips__25')
    var arrSt_25 = []
    if (!summSkips_25[0]) {} else {
        skipNameSt_25.removeAttribute('hidden')
        summSkips_25[0].classList.add('neud__skips')
        summSkips_25[0].removeAttribute('hidden')
        for (var i = 0; i < summSkips_25.length; i++) {
            arrSt_25.push(summSkips_25[i].textContent)
        }
        var sumSt_25 = 0;
        for (var i = 0; i < arrSt_25.length; i++) {
            sumSt_25 = +sumSt_25 + +parseInt(arrSt_25[i]);
        }
        summSkips_25[0].textContent = sumSt_25
        document.getElementById('student__skips__25').value = sumSt_25
    }
    let summSkips_26 = document.querySelectorAll('.skips__student__26')
    let skipNameSt_26 = document.querySelector('.student__skips__26')
    var arrSt_26 = []
    if (!summSkips_26[0]) {} else {
        skipNameSt_26.removeAttribute('hidden')
        summSkips_26[0].classList.add('neud__skips')
        summSkips_26[0].removeAttribute('hidden')
        for (var i = 0; i < summSkips_26.length; i++) {
            arrSt_26.push(summSkips_26[i].textContent)
        }
        var sumSt_26 = 0;
        for (var i = 0; i < arrSt_26.length; i++) {
            sumSt_26 = +sumSt_26 + +parseInt(arrSt_26[i]);
        }
        summSkips_26[0].textContent = sumSt_26
        document.getElementById('student__skips__26').value = sumSt_26
    }
    let summSkips_27 = document.querySelectorAll('.skips__student__27')
    let skipNameSt_27 = document.querySelector('.student__skips__27')
    var arrSt_27 = []
    if (!summSkips_27[0]) {} else {
        skipNameSt_27.removeAttribute('hidden')
        summSkips_27[0].classList.add('neud__skips')
        summSkips_27[0].removeAttribute('hidden')
        for (var i = 0; i < summSkips_27.length; i++) {
            arrSt_27.push(summSkips_27[i].textContent)
        }
        var sumSt_27 = 0;
        for (var i = 0; i < arrSt_27.length; i++) {
            sumSt_27 = +sumSt_27 + +parseInt(arrSt_27[i]);
        }
        summSkips_27[0].textContent = sumSt_27
        document.getElementById('student__skips__27').value = sumSt_27
    }
    let summSkips_28 = document.querySelectorAll('.skips__student__28')
    let skipNameSt_28 = document.querySelector('.student__skips__28')
    var arrSt_28 = []
    if (!summSkips_28[0]) {} else {
        skipNameSt_28.removeAttribute('hidden')
        summSkips_28[0].classList.add('neud__skips')
        summSkips_28[0].removeAttribute('hidden')
        for (var i = 0; i < summSkips_28.length; i++) {
            arrSt_28.push(summSkips_28[i].textContent)
        }
        var sumSt_28 = 0;
        for (var i = 0; i < arrSt_28.length; i++) {
            sumSt_28 = +sumSt_28 + +parseInt(arrSt_28[i]);
        }
        summSkips_28[0].textContent = sumSt_28
        document.getElementById('student__skips__28').value = sumSt_28
    }
    let summSkips_29 = document.querySelectorAll('.skips__student__29')
    let skipNameSt_29 = document.querySelector('.student__skips__29')
    var arrSt_29 = []
    if (!summSkips_29[0]) {} else {
        skipNameSt_29.removeAttribute('hidden')
        summSkips_29[0].classList.add('neud__skips')
        summSkips_29[0].removeAttribute('hidden')
        for (var i = 0; i < summSkips_29.length; i++) {
            arrSt_29.push(summSkips_29[i].textContent)
        }
        var sumSt_29 = 0;
        for (var i = 0; i < arrSt_29.length; i++) {
            sumSt_29 = +sumSt_29 + +parseInt(arrSt_29[i]);
        }
        summSkips_29[0].textContent = sumSt_29
        document.getElementById('student__skips__29').value = sumSt_29
    }
    let summSkips_30 = document.querySelectorAll('.skips__student__30')
    let skipNameSt_30 = document.querySelector('.student__skips__30')
    var arrSt_30 = []
    if (!summSkips_30[0]) {} else {
        skipNameSt_30.removeAttribute('hidden')
        summSkips_30[0].classList.add('neud__skips')
        summSkips_30[0].removeAttribute('hidden')
        for (var i = 0; i < summSkips_30.length; i++) {
            arrSt_30.push(summSkips_30[i].textContent)
        }
        var sumSt_30 = 0;
        for (var i = 0; i < arrSt_30.length; i++) {
            sumSt_30 = +sumSt_30 + +parseInt(arrSt_30[i]);
        }
        summSkips_30[0].textContent = sumSt_30
        document.getElementById('student__skips__30').value = sumSt_30
    }
    let summSkips_31 = document.querySelectorAll('.skips__student__31')
    let skipNameSt_31 = document.querySelector('.student__skips__31')
    var arrSt_31 = []
    if (!summSkips_31[0]) {} else {
        skipNameSt_31.removeAttribute('hidden')
        summSkips_31[0].classList.add('neud__skips')
        summSkips_31[0].removeAttribute('hidden')
        for (var i = 0; i < summSkips_31.length; i++) {
            arrSt_31.push(summSkips_31[i].textContent)
        }
        var sumSt_31 = 0;
        for (var i = 0; i < arrSt_31.length; i++) {
            sumSt_31 = +sumSt_31 + +parseInt(arrSt_31[i]);
        }
        summSkips_31[0].textContent = sumSt_31
        document.getElementById('student__skips__31').value = sumSt_31
    }
    let summSkips_32 = document.querySelectorAll('.skips__student__32')
    let skipNameSt_32 = document.querySelector('.student__skips__32')
    var arrSt_32 = []
    if (!summSkips_32[0]) {} else {
        skipNameSt_32.removeAttribute('hidden')
        summSkips_32[0].classList.add('neud__skips')
        summSkips_32[0].removeAttribute('hidden')
        for (var i = 0; i < summSkips_32.length; i++) {
            arrSt_32.push(summSkips_32[i].textContent)
        }
        var sumSt_32 = 0;
        for (var i = 0; i < arrSt_32.length; i++) {
            sumSt_32 = +sumSt_32 + +parseInt(arrSt_32[i]);
        }
        summSkips_32[0].textContent = sumSt_32
        document.getElementById('student__skips__32').value = sumSt_32
    }






    let massUd = document.querySelectorAll('.number__skip_u')
    if (!massUd[0]) {} else {
        for (var i = 0; i < massUd.length; i++) {
            if (massUd[i].textContent > 0) {
                let elem = document.createElement("p")
                elem.classList.add('student__skip__ud')
                elem.setAttribute('hidden', 'ok')
                var elemText = document.createTextNode(massUd[i].textContent)
                elem.appendChild(elemText)
                let wrapSkipsU = document.querySelector('.wrap__students__skips__u')
                wrapSkipsU.appendChild(elem)
            }
        }
    }
    let skipsUd = 0
    let skipsUdNumber = document.querySelectorAll('.student__skip__ud')
    let allUdSkips = document.getElementById('all__ud__skips')
    let skipsUdInput = document.getElementById('all__ud__skips__input')
    if (!allUdSkips) {} else {
        for (var i = 0; i < skipsUdNumber.length; i++) {
            skipsUd = +skipsUd + +parseInt(skipsUdNumber[i].textContent);
        }
        allUdSkips.textContent = skipsUd
        skipsUdInput.value = skipsUd
    }





    let allNeud = document.querySelectorAll('.neud__skips')
    let sumNeud = 0;
    let allNeudSkips = document.getElementById('all__neud__skips')
    let skipsNeudInput = document.getElementById('all__neud__skips__input')
    let skipsAllInput = document.getElementById('all__skips__input')
    let allSkips = document.getElementById('all__skips')
    if (!allNeudSkips) {} else {
        for (var i = 0; i < allNeud.length; i++) {
            sumNeud = +sumNeud + +parseInt(allNeud[i].textContent)
        }
        allNeudSkips.textContent = sumNeud
        allSkips.textContent = (+sumNeud + +skipsUd)
        skipsNeudInput.value = sumNeud
        skipsAllInput.value = (+sumNeud + +skipsUd)
    }




    let udSkipsForSt = document.getElementById('skips__u__for__stud')
    let neudSkipsForSt = document.getElementById('skips__n__for__stud')
    let allSkipsForSt = document.getElementById('skips__all__for__stud')

    let udSkipsForStInput = document.getElementById('skips__u__for__stud__input')
    let neudSkipsForStInput = document.getElementById('skips__n__for__stud__input')
    let allSkipsForStInput = document.getElementById('skips__all__for__stud__input')


    if (!udSkipsForSt) {} else {
        udSkipsForSt.textContent = (+skipsUd / +studentsNames.length).toFixed(1)
        udSkipsForStInput.value = (+skipsUd / +studentsNames.length).toFixed(1)
    }
    if (!neudSkipsForSt) {} else {
        neudSkipsForSt.textContent = (+sumNeud / +studentsNames.length).toFixed(1)
        neudSkipsForStInput.value = (+sumNeud / +studentsNames.length).toFixed(1)
    }
    if (!allSkipsForSt) {} else {
        allSkipsForSt.textContent = (+allSkips.textContent / +studentsNames.length).toFixed(1)
        allSkipsForStInput.value = (+allSkips.textContent / +studentsNames.length).toFixed(1)
    }

    // Отправка информации попропускам на группу в БД
    if (!skipsAllInput) {} else {
        let skipsUdInput = document.getElementById('all__ud__skips__input').value
        let skipsNeudInput = document.getElementById('all__neud__skips__input').value
        let skipsAllInput = document.getElementById('all__skips__input').value
        let udSkipsForStInput = document.getElementById('skips__u__for__stud__input').value
        let neudSkipsForStInput = document.getElementById('skips__n__for__stud__input').value
        let allSkipsForStInput = document.getElementById('skips__all__for__stud__input').value
        let skipsGroupNumber = document.getElementById('skips__group__number').value
        let skipsTableNumber = document.getElementById('skips__table__number').value
        $.ajax({
            url: '/func_skips.php',
            type: 'POST',
            data: {
                skipsAllInput,
                skipsUdInput,
                skipsNeudInput,
                udSkipsForStInput,
                neudSkipsForStInput,
                allSkipsForStInput,
                skipsGroupNumber,
                skipsTableNumber
            },
            success: function (data) {
                // location.reload();
                console.log(data);
            },
            error: function () {
                console.log('ERROR');
            }
        })
    }
    // Отправка информации попропускам на группу в БД






    let numberGroup = document.getElementById('number_group')

    if (!numberGroup) {} else {
        let group = numberGroup.textContent
        $.ajax({
            url: '/func_skips.php',
            type: 'POST',
            data: {
                group
            },
            success: function (data) {
                // location.reload();
                console.log(data);
            },
            error: function () {
                console.log('ERROR');
            }
        })
    }

    let skipCause = document.querySelectorAll('.skip__cause')
    let skipUd = document.querySelectorAll('.skip_u')
    let skipNu = document.querySelectorAll('.skip_n')
    for (var i = 0; i < skipCause.length; i++) {
        skipCause[i].setAttribute('id', 'skip__cause' + [i])
        skipUd[i].setAttribute('id', 'skip_u' + [i])
        skipNu[i].setAttribute('id', 'skip_n' + [i])
    }

    let skipCause0 = document.getElementById('skip__cause0')
    let skipU0 = document.getElementById('skip_u0')
    if (!skipU0) {} else {
        skipU0.oninput = function () {
            if (skipU0.value > 0) {
                skipCause0.classList.add('visible')
            }
            if (skipU0.value < 1) {
                skipCause0.classList.remove('visible')
                skipCause0.value = ' '
            }
        }
    }

    // Скрытие последней стороки в таблцах с пропусками
    let tableSkipsFootU = document.querySelectorAll('.all_skips_student_u')
    for (var i = 0; i < tableSkipsFootU.length; i++) {
        tableSkipsFootU[i].setAttribute('hidden', 'ok')
    }
    let tableSkipsFootN = document.querySelectorAll('.all_skips_student_n')
    for (var i = 0; i < tableSkipsFootN.length; i++) {
        tableSkipsFootN[i].setAttribute('hidden', 'ok')
    }

    let submitEnterSkips = document.getElementById('submit_enter_skips')
    let dateSkips = document.getElementById('date_skips')
    let alarmDate = document.querySelector('.alarm__date')
    if (!dateSkips) {} else {
        dateSkips.oninput = function () {
            submitEnterSkips.removeAttribute('disabled')
            alarmDate.setAttribute('hidden', 'ok')
        }
    }
    // Скрытие последней стороки в таблцах с пропусками

    // Заполнение пропусков в модальном окне
    let skipU_0 = document.getElementById('skip_u0')
    let skipN_0 = document.getElementById('skip_n0')
    let skipU_1 = document.getElementById('skip_u1')
    let skipN_1 = document.getElementById('skip_n1')
    let skipN_2 = document.getElementById('skip_n2')
    let skipU_2 = document.getElementById('skip_u2')
    let skipU_3 = document.getElementById('skip_u3')
    let skipN_3 = document.getElementById('skip_n3')
    let skipU_4 = document.getElementById('skip_u4')
    let skipN_4 = document.getElementById('skip_n4')
    let skipU_5 = document.getElementById('skip_u5')
    let skipN_5 = document.getElementById('skip_n5')
    let skipU_6 = document.getElementById('skip_u6')
    let skipN_6 = document.getElementById('skip_n6')
    let skipU_7 = document.getElementById('skip_u7')
    let skipN_7 = document.getElementById('skip_n7')
    let skipU_8 = document.getElementById('skip_u8')
    let skipN_8 = document.getElementById('skip_n8')
    let skipU_9 = document.getElementById('skip_u9')
    let skipN_9 = document.getElementById('skip_n9')
    let skipU_10 = document.getElementById('skip_u10')
    let skipN_10 = document.getElementById('skip_n10')
    let skipU_11 = document.getElementById('skip_u11')
    let skipN_11 = document.getElementById('skip_n11')
    let skipU_12 = document.getElementById('skip_u12')
    let skipN_12 = document.getElementById('skip_n12')
    let skipU_13 = document.getElementById('skip_u13')
    let skipN_13 = document.getElementById('skip_n13')
    let skipU_14 = document.getElementById('skip_u14')
    let skipN_14 = document.getElementById('skip_n14')
    let skipU_15 = document.getElementById('skip_u15')
    let skipN_15 = document.getElementById('skip_n15')
    let skipU_16 = document.getElementById('skip_u16')
    let skipN_16 = document.getElementById('skip_n16')
    let skipU_17 = document.getElementById('skip_u17')
    let skipN_17 = document.getElementById('skip_n17')
    let skipU_18 = document.getElementById('skip_u18')
    let skipN_18 = document.getElementById('skip_n18')
    let skipU_19 = document.getElementById('skip_u19')
    let skipN_19 = document.getElementById('skip_n19')
    let skipU_20 = document.getElementById('skip_u20')
    let skipN_20 = document.getElementById('skip_n20')
    let skipU_21 = document.getElementById('skip_u21')
    let skipN_21 = document.getElementById('skip_n21')
    let skipU_22 = document.getElementById('skip_u22')
    let skipN_22 = document.getElementById('skip_n22')
    let skipU_23 = document.getElementById('skip_u23')
    let skipN_23 = document.getElementById('skip_n23')
    let skipU_24 = document.getElementById('skip_u24')
    let skipN_24 = document.getElementById('skip_n24')
    let skipU_25 = document.getElementById('skip_u25')
    let skipN_25 = document.getElementById('skip_n25')
    let skipU_26 = document.getElementById('skip_u26')
    let skipN_26 = document.getElementById('skip_n26')
    let skipU_27 = document.getElementById('skip_u27')
    let skipN_27 = document.getElementById('skip_n27')
    let skipU_28 = document.getElementById('skip_u28')
    let skipN_28 = document.getElementById('skip_n28')
    let skipU_29 = document.getElementById('skip_u29')
    let skipN_29 = document.getElementById('skip_n29')
    let skipU_30 = document.getElementById('skip_u30')
    let skipN_30 = document.getElementById('skip_n30')
    let skipU_31 = document.getElementById('skip_u31')
    let skipN_31 = document.getElementById('skip_n31')

    if (!skipU_0) {} else {
        skipU_0.oninput = function () {
            if (this.value == '') {
                this.value = 0
            }
        }
        skipN_0.oninput = function () {
            if (this.value == '') {
                this.value = 0
            }
        }
    }

    if (!skipU_1) {} else {
        skipU_1.oninput = function () {
            if (this.value == '') {
                this.value = 0
            }
        }
        skipN_1.oninput = function () {
            if (this.value == '') {
                this.value = 0
            }
        }
    }

    if (!skipU_2) {} else {
        skipU_2.oninput = function () {
            if (this.value == '') {
                this.value = 0
            }
        }
        skipN_2.oninput = function () {
            if (this.value == '') {
                this.value = 0
            }
        }
    }

    if (!skipU_3) {} else {
        skipU_3.oninput = function () {
            if (this.value == '') {
                this.value = 0
            }
        }
        skipN_3.oninput = function () {
            if (this.value == '') {
                this.value = 0
            }
        }
    }

    if (!skipU_4) {} else {
        skipU_4.oninput = function () {
            if (this.value == '') {
                this.value = 0
            }
        }
        skipN_4.oninput = function () {
            if (this.value == '') {
                this.value = 0
            }
        }
    }

    if (!skipU_5) {} else {
        skipU_5.oninput = function () {
            if (this.value == '') {
                this.value = 0
            }
        }
        skipN_5.oninput = function () {
            if (this.value == '') {
                this.value = 0
            }
        }
    }

    if (!skipU_6) {} else {
        skipU_6.oninput = function () {
            if (this.value == '') {
                this.value = 0
            }
        }
        skipN_6.oninput = function () {
            if (this.value == '') {
                this.value = 0
            }
        }
    }

    if (!skipU_7) {} else {
        skipU_7.oninput = function () {
            if (this.value == '') {
                this.value = 0
            }
        }
        skipN_7.oninput = function () {
            if (this.value == '') {
                this.value = 0
            }
        }
    }

    if (!skipU_8) {} else {
        skipU_8.oninput = function () {
            if (this.value == '') {
                this.value = 0
            }
        }
        skipN_8.oninput = function () {
            if (this.value == '') {
                this.value = 0
            }
        }
    }

    if (!skipU_9) {} else {
        skipU_9.oninput = function () {
            if (this.value == '') {
                this.value = 0
            }
        }
        skipN_9.oninput = function () {
            if (this.value == '') {
                this.value = 0
            }
        }
    }

    if (!skipU_10) {} else {
        skipU_10.oninput = function () {
            if (this.value == '') {
                this.value = 0
            }
        }
        skipN_10.oninput = function () {
            if (this.value == '') {
                this.value = 0
            }
        }
    }

    if (!skipU_11) {} else {
        skipU_11.oninput = function () {
            if (skipU_11.value == '') {
                skipU_11.value = 0
            }
        }
        skipN_11.oninput = function () {
            if (skipN_11.value == '') {
                skipN_11.value = 0
            }
        }
    }


    if (!skipU_12) {} else {
        skipU_12.oninput = function () {
            if (skipU_12.value == '') {
                skipU_12.value = 0
            }
        }
        skipN_12.oninput = function () {
            if (skipN_12.value == '') {
                skipN_12.value = 0
            }
        }
    }

    if (!skipU_13) {} else {
        skipU_13.oninput = function () {
            if (skipU_13.value == '') {
                skipU_13.value = 0
            }
        }
        skipN_13.oninput = function () {
            if (skipN_13.value == '') {
                skipN_13.value = 0
            }
        }
    }

    if (!skipU_14) {} else {
        skipU_14.oninput = function () {
            if (skipU_14.value == '') {
                skipU_14.value = 0
            }
        }
        skipN_14.oninput = function () {
            if (skipN_14.value == '') {
                skipN_14.value = 0
            }
        }
    }

    if (!skipU_15) {} else {
        skipU_15.oninput = function () {
            if (skipU_15.value == '') {
                skipU_15.value = 0
            }
        }
        skipN_15.oninput = function () {
            if (skipN_15.value == '') {
                skipN_15.value = 0
            }
        }
    }

    if (!skipU_16) {} else {
        skipU_16.oninput = function () {
            if (skipU_16.value == '') {
                skipU_16.value = 0
            }
        }
        skipN_16.oninput = function () {
            if (skipN_16.value == '') {
                skipN_16.value = 0
            }
        }
    }

    if (!skipU_17) {} else {
        skipU_17.oninput = function () {
            if (skipU_17.value == '') {
                skipU_17.value = 0
            }
        }
        skipN_17.oninput = function () {
            if (skipN_17.value == '') {
                skipN_17.value = 0
            }
        }
    }

    if (!skipU_18) {} else {
        skipU_18.oninput = function () {
            if (skipU_18.value == '') {
                skipU_18.value = 0
            }
        }
        skipN_18.oninput = function () {
            if (skipN_18.value == '') {
                skipN_18.value = 0
            }
        }
    }

    if (!skipU_19) {} else {
        skipU_19.oninput = function () {
            if (skipU_19.value == '') {
                skipU_19.value = 0
            }
        }
        skipN_19.oninput = function () {
            if (skipN_19.value == '') {
                skipN_19.value = 0
            }
        }
    }

    if (!skipU_20) {} else {
        skipU_20.oninput = function () {
            if (skipU_20.value == '') {
                skipU_20.value = 0
            }
        }
        skipN_20.oninput = function () {
            if (skipN_20.value == '') {
                skipN_20.value = 0
            }
        }
    }

    if (!skipU_21) {} else {
        skipU_21.oninput = function () {
            if (skipU_21.value == '') {
                skipU_21.value = 0
            }
        }
        skipN_21.oninput = function () {
            if (skipN_21.value == '') {
                skipN_21.value = 0
            }
        }
    }

    if (!skipU_22) {} else {
        skipU_22.oninput = function () {
            if (skipU_22.value == '') {
                skipU_22.value = 0
            }
        }
        skipN_22.oninput = function () {
            if (skipN_22.value == '') {
                skipN_22.value = 0
            }
        }
    }

    if (!skipU_23) {} else {
        skipU_23.oninput = function () {
            if (skipU_23.value == '') {
                skipU_23.value = 0
            }
        }
        skipN_23.oninput = function () {
            if (skipN_23.value == '') {
                skipN_23.value = 0
            }
        }
    }

    if (!skipU_24) {} else {
        skipU_24.oninput = function () {
            if (skipU_24.value == '') {
                skipU_24.value = 0
            }
        }
        skipN_24.oninput = function () {
            if (skipN_24.value == '') {
                skipN_24.value = 0
            }
        }
    }

    if (!skipU_25) {} else {
        skipU_25.oninput = function () {
            if (skipU_25.value == '') {
                skipU_25.value = 0
            }
        }
        skipN_25.oninput = function () {
            if (skipN_25.value == '') {
                skipN_25.value = 0
            }
        }
    }

    if (!skipU_26) {} else {
        skipU_26.oninput = function () {
            if (skipU_26.value == '') {
                skipU_26.value = 0
            }
        }
        skipN_26.oninput = function () {
            if (skipN_26.value == '') {
                skipN_26.value = 0
            }
        }
    }

    if (!skipU_27) {} else {
        skipU_27.oninput = function () {
            if (skipU_27.value == '') {
                skipU_27.value = 0
            }
        }
        skipN_27.oninput = function () {
            if (skipN_27.value == '') {
                skipN_27.value = 0
            }
        }
    }

    if (!skipU_28) {} else {
        skipU_28.oninput = function () {
            if (skipU_28.value == '') {
                skipU_28.value = 0
            }
        }
        skipN_28.oninput = function () {
            if (skipN_28.value == '') {
                skipN_28.value = 0
            }
        }
    }

    if (!skipU_29) {} else {
        skipU_29.oninput = function () {
            if (skipU_29.value == '') {
                skipU_29.value = 0
            }
        }
        skipN_29.oninput = function () {
            if (skipN_29.value == '') {
                skipN_29.value = 0
            }
        }
    }

    if (!skipU_30) {} else {
        skipU_30.oninput = function () {
            if (skipU_30.value == '') {
                skipU_30.value = 0
            }
        }
        skipN_30.oninput = function () {
            if (skipN_30.value == '') {
                skipN_30.value = 0
            }
        }
    }

    if (!skipU_31) {} else {
        skipU_31.oninput = function () {
            if (skipU_31.value == '') {
                skipU_31.value = 0
            }
        }
        skipN_31.oninput = function () {
            if (skipN_31.value == '') {
                skipN_31.value = 0
            }
        }
    }
    // Заполнение пропусков в модальном окне

    // Расчет итога в таблце с пропусками по колледжу за месяц
    // Всего пропусков
    let allskipsFull = document.getElementById('allskipsfull')
    let udskipsFull = document.getElementById('udskipsfull')
    let neudskipsFull = document.getElementById('neudskipsfull')
    let allSkipsForstFull = document.getElementById('allskipsforstfull')
    let udSkipsForstFull = document.getElementById('udskipsforstfull')
    let neudSkipsForstFull = document.getElementById('neudskipsForstfull')
    // Всего пропусков
    // Пропуски на одного студента
    let skipsReportAllskips = document.querySelectorAll('.skips-report__allskips')
    let skipsReportUdskips = document.querySelectorAll('.skips-report__udskips')
    let skipsReportNeudskips = document.querySelectorAll('.skips-report__neudskips')
    let skipsReportAllSkipsForSt = document.querySelectorAll('.skips-report__allSkipsForSt')
    let skipsReportUdSkipsForSt = document.querySelectorAll('.skips-report__udSkipsForSt')
    let skipsReportNeudSkipsForSt = document.querySelectorAll('.skips-report__neudSkipsForSt')
    // Пропуски на одного студента

    if (!allskipsFull) {} else {
        let massallskipsFull = []
        for (var i = 0; i < skipsReportAllskips.length; i++) {
            elem = skipsReportAllskips[i].textContent
            massallskipsFull.push(elem)
        }
        let reducer = (previousValue, currentValue) => +previousValue + +currentValue
        allskipsFull.textContent = massallskipsFull.reduce(reducer)

    }
    if (!udskipsFull) {} else {
        let massudskipsFull = []
        for (var i = 0; i < skipsReportUdskips.length; i++) {
            elem = skipsReportUdskips[i].textContent
            massudskipsFull.push(elem)
        }
        const reducer = (previousValue, currentValue) => +previousValue + +currentValue
        udskipsFull.textContent = massudskipsFull.reduce(reducer)
    }
    if (!neudskipsFull) {} else {
        let massneudskipsFull = []
        for (var i = 0; i < skipsReportNeudskips.length; i++) {
            elem = skipsReportNeudskips[i].textContent
            massneudskipsFull.push(elem)
        }
        const reducer = (previousValue, currentValue) => +previousValue + +currentValue
        neudskipsFull.textContent = massneudskipsFull.reduce(reducer)
    }
    if (!allSkipsForstFull) {} else {
        let massallSkipsForstFull = []
        for (var i = 0; i < skipsReportAllSkipsForSt.length; i++) {
            elem = skipsReportAllSkipsForSt[i].textContent
            massallSkipsForstFull.push(elem)
        }
        const reducer = (previousValue, currentValue) => +previousValue + +currentValue
        allSkipsForstFull.textContent = massallSkipsForstFull.reduce(reducer).toFixed(1)
    }
    if (!udSkipsForstFull) {} else {
        let massudSkipsForstFull = []
        for (var i = 0; i < skipsReportUdSkipsForSt.length; i++) {
            elem = skipsReportUdSkipsForSt[i].textContent
            massudSkipsForstFull.push(elem)
        }
        const reducer = (previousValue, currentValue) => +previousValue + +currentValue
        udSkipsForstFull.textContent = massudSkipsForstFull.reduce(reducer).toFixed(1)
    }
    if (!neudSkipsForstFull) {} else {
        let massneudSkipsForstFull = []
        for (var i = 0; i < skipsReportNeudSkipsForSt.length; i++) {
            elem = skipsReportNeudSkipsForSt[i].textContent
            massneudSkipsForstFull.push(elem)
        }
        const reducer = (previousValue, currentValue) => +previousValue + +currentValue
        neudSkipsForstFull.textContent = massneudSkipsForstFull.reduce(reducer).toFixed(1)
    }

    let titleGroup = document.querySelector('.title__group')
    let groupButton = document.querySelectorAll('.button__group')
    if (!groupButton) {} else {
        for (var i = 0; i < groupButton.length; i++) {
            if (groupButton[i].title == titleGroup.textContent) {
                groupButton[i].classList.add('green__button')
            }
        }
    }
    // Расчет итога в таблце с пропусками по колледжу за месяц


    // Выделение цветом кнпки месяца и игруппы в пропусках
    let monatSkipsNumbers = document.querySelectorAll('.monat__skips__number')
    let groupSkipsNumbers = document.querySelectorAll('.group__skips__number')

    let monatName = document.getElementById('monat_name')
    let groupName = document.getElementById('number_group')

    if (!monatSkipsNumbers) {} else {
        for (var i = 0; i < monatSkipsNumbers.length; i++) {
            if (monatSkipsNumbers[i].title == monatName.textContent) {
                monatSkipsNumbers[i].classList.add('green__button')
            }
        }
    }

    if (!groupSkipsNumbers) {} else {
        for (var i = 0; i < groupSkipsNumbers.length; i++) {
            if (groupSkipsNumbers[i].title == groupName.textContent) {
                groupSkipsNumbers[i].classList.add('green__button')
            }
        }
    }
    // Выделение цветом кнпки месяца и игруппы в пропусках


    // Выделение цветом кнпки месяца и игруппы в базе групп
    let groupBaseNumbers = document.querySelectorAll('.group__base__number')

    let groupNameBase = document.getElementById('number_group')

    if (!groupBaseNumbers) {} else {
        for (var i = 0; i < groupBaseNumbers.length; i++) {
            if (groupBaseNumbers[i].title == groupNameBase.textContent) {
                groupBaseNumbers[i].classList.add('green__button')
            }
        }
    }
    // Выделение цветом кнпки месяца и игруппы в базе групп



    // Всплывашка при наведении в таблице с пропусками
    $(function () {
        $('[data-toggle="tooltip"]').tooltip();
    });
    // Всплывашка при наведении в таблице с пропусками


    // Построение графиков
    let allSkipsSemestr1
    let udSkipsSemestr1
    let neudSkipsSemestr1
    let allForStudSkipsSemestr1
    let udForStudSkipsSemestr1
    let neudForStudSkipsSemestr1

    let allSkipsSemestr2
    let udSkipsSemestr2
    let neudSkipsSemestr2
    let allForStudSkipsSemestr2
    let udForStudSkipsSemestr2
    let neudForStudSkipsSemestr2

    let allSkipsSemestrFull
    let udSkipsSemestrFull
    let neudSkipsSemestrFull
    let allForStudSkipsSemestrFull
    let udForStudSkipsSemestrFull
    let neudForStudSkipsSemestrFull



    if (!document.getElementById('allskipsfull')) {} else {
        let allDec1 = document.getElementById('allskipsfull').textContent
        let alls = 0
        let asd = +allDec1 + +alls
        Highcharts.chart('container', {
            title: {
                text: ''
            },

            subtitle: {
                text: ''
            },

            yAxis: {
                title: {
                    text: 'Количество пропущенных уроков'
                }
            },

            xAxis: {
                categories: ['Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь']
            },

            legend: {
                layout: 'vertical',
                align: 'right',
                verticalAlign: 'middle'
            },

            series: [{
                    name: 'Всего пропусков',
                    data: [3934, 3803, 2177, asd],
                    marker: {
                        symbol: 'circle'
                    }
                }, {
                    name: 'Всего уважительных',
                    data: [3816, 3064, 3742, 3851],
                    marker: {
                        symbol: 'circle'
                    },
                    color: '#07da35'
                }, {
                    name: 'Всего НЕ уважительных',
                    data: [744, 722, 605, 771],
                    marker: {
                        symbol: 'circle'
                    }
                },
                {
                    name: 'Всего на одного студента',
                    data: [244, 222, 205, 271],
                    marker: {
                        symbol: 'circle'
                    }
                },
                {
                    name: 'Уважительных на одного студента',
                    data: [214, 122, 265, 271],
                    marker: {
                        symbol: 'circle'
                    }
                },
                {
                    name: 'НЕ уважительных на одного студента',
                    data: [44, 22, 55, 71],
                    marker: {
                        symbol: 'circle'
                    }
                }
            ],

            responsive: {
                rules: [{
                    condition: {
                        maxWidth: 500
                    },
                    chartOptions: {
                        legend: {
                            layout: 'horizontal',
                            align: 'center',
                            verticalAlign: 'bottom'
                        }
                    }
                }]
            }

        });

        Highcharts.chart('container1', {

            title: {
                text: ''
            },

            subtitle: {
                text: ''
            },

            yAxis: {
                title: {
                    text: 'Количество пропущенных уроков'
                }
            },

            xAxis: {
                categories: ['Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь']
            },

            legend: {
                layout: 'vertical',
                align: 'right',
                verticalAlign: 'middle'
            },

            series: [{
                name: '2019-2020 учебный год',
                data: [43934, 52503, 57177, 69658],
                marker: {
                    symbol: 'circle'
                }
            }, {
                name: '2020-2021 учебный год',
                data: [24916, 24064, 29742, 29851],
                marker: {
                    symbol: 'circle'
                },
                color: '#07da35'
            }, {
                name: '2021-2022 учебный год',
                data: [11744, 17722, 16005, 19771],
                marker: {
                    symbol: 'circle'
                }
            }],

            responsive: {
                rules: [{
                    condition: {
                        maxWidth: 500
                    },
                    chartOptions: {
                        legend: {
                            layout: 'horizontal',
                            align: 'center',
                            verticalAlign: 'bottom'
                        }
                    }
                }]
            }

        });
    }
    // Построение графиков
});