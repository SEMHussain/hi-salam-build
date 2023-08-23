import jsCookie from "js-cookie";

export function getCookie(key) {
  let result = [];
  if (key) {
    const localData = jsCookie.get(key);
    if (localData && localData.length > 0) {
      result = JSON.parse(localData);
    }
  }
  return result;
}

export function setCookie(key, value, days, sameSite) {
  sameSite = 'Lax'
  const expires = new Date(new Date().getTime() + 180 * 60 * 1000);
  jsCookie.set(key, JSON.stringify(value), { expires: expires, sameSite: sameSite });
}