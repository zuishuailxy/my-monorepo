// src/main.js
// import foo from './foo';
export default function () {
    import('./foo.ts').then(({ default: foo }) => {
        console.log(foo);
    });
}