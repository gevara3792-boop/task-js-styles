/*
Создайте функции:
   hasClass(elem, elemСlass),
   addClass(elem, elemСlass),
   removeClass(elem, elemСlass),
   toggleClass(elem, elemСlass),
которые позволяют проверить, есть ли у элемента заданный CSS-класс, добавить к нему CSS-класс, удалить CSS-класс и переключить CSS-класс.

В функции передаются 2 параметра:
   elem - DOM-элемент, который проверяется,
   elemСlass - название класса, которое проверяется.
*/

/**
 * Проверяет, есть ли у элемента заданный CSS-класс.
 * @returns {boolean} true, если класс есть, иначе false
 */
export function hasClass(elem, elemClass) {
    return elem.classList.contains(elemClass);
}

/**
 * Добавляет указанный CSS-класс к элементу.
 */
export function addClass(elem, elemClass) {
    elem.classList.add(elemClass);
}

/**
 * Удаляет указанный CSS-класс у элемента.
 */
export function removeClass(elem, elemClass) {
    elem.classList.remove(elemClass);
}

/**
 * Переключает CSS-класс у элемента (добавляет, если нет; удаляет, если есть).
 */
export function toggleClass(elem, elemClass) {
    elem.classList.toggle(elemClass);
}
