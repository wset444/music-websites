// export const BASE_URL = 'http://codercba.com:9002';
export const TIME_OUT = 10000;
let BASE_URL = ' ';
//2.当前依赖环境:dev/pro
console.log(process.env);

if (process.env.NODE_ENV === 'development') {
  BASE_URL = 'http://codercba.com:9002';
} else {
  BASE_URL = 'http://codercba.prod:9002';
}
export { BASE_URL };
