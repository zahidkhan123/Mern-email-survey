
const validate =(emails) => {
 const emailArray = emails.split(',');
 for (let i = 0; i < emailArray.length; i++) {
    const email = emailArray[i].trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return false;
    }
  }
  return true;
}

export default validate
