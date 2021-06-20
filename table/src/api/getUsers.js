export const getUsers = () => {
  return new Promise(resolve => {
    fetch('https://www.filltext.com/?rows=100&id={number|100}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}', {
       }).then(res => res.json())
      .then(data => resolve(data));
  });
}