# Simple counter.js
Small javascript library that allows you to quickly add counter-ups to your site.

### Instalation
simply download counter.js file, insert it in `<script>` tag before `</body>` ends.
```html
<body>
    some stuff...
	<script src="js/libs/counter.js"></script>
</body>
```

### Usage
To apply counter simply add data attributes to any html tag like `<div>`, `<p>`, `<span>`, it is up to you.

##### Available options
Option               | Default value | Required | Description
---------------------|---------------|:--------:|
data-counter-start   | 0             |          | Counter start value
data-counter-target  | empty         | ❌       | Counter target value
data-counter-time    | empty         | ❌       | Counting time in milliseconds
data-counter-prepend | empty         |          | Text to prepend to number
data-counter-append  | empty         |          | Text to append to number


##### Example
```html
<div
	data-counter-start="1000"
	data-counter-target="5000"
	data-counter-time="3000",
	data-counter-prepend="Money: "
	data-counter-append="$"
>
</div>
```