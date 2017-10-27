export default function ucFirst(str) {
  str = str.replace('-', ' ');
  return str.charAt(0).toUpperCase() + str.slice(1);
}