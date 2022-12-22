# babel-plugin-last-index

Плагин позволяет избавиться он надоедливой конструкции получения последнего элемента массива

>1. Вместо arr[arr.length - 1] используем arr[-1]
>2. Так же можно получать любой элемент с конца массива используя данный синтаксис arr[-n], где n-любое число

## Установка
Установка через yarn:
```bash
yarn add babel-plugin-last-index --save-dev
```

Установка через npm:
```bash
npm install babel-plugin-last-index --save-dev
```

## Использование

Добавить плагин в .babelrc
```bash
  {
  "plugins": [
    "babel-plugin-last-index"
  ]
}
```
