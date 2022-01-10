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