const formRef = document.querySelector('.js-contact-form');
const LOCALE_STORAGE_KEY = 'contact-form-key';
const formData = {};

initPage();

const onFormInput = event => {
  const { name, value } = event.target;
  try {
    let saveData = localStorage.getItem(LOCALE_STORAGE_KEY);

    if (saveData) {
      saveData = JSON.parse(saveData);
    } else {
      saveData = {};
    }

    saveData[name] = value;
    const stringifyData = JSON.stringify(saveData);
    localStorage.setItem(LOCALE_STORAGE_KEY, stringifyData);
  } catch (error) {
    console.log(error);
  }
};

formRef.addEventListener('input', onFormInput);

/*
Пишемо функцію яка буде інтепритувати наш обʼєкт 
в JSON формат. Визивати будемо її на почтаку скрипта
*/

function initPage() {
  const saveData = localStorage.getItem(LOCALE_STORAGE_KEY);
  if (!saveData) {
    return;
  }
  try {
    const parseData = JSON.parse(saveData);
    Object.entries(parseData).forEach(([name, value]) => {
      formRef.elements[name].value = value;
    });
  } catch (error) {
    console.log(error);
  }
}
