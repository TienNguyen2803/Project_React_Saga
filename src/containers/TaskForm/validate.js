const validate = (values)=> {
  const {title} = values;
  const errors = {};
  if(!title || title.trim().length < 5 ){
    errors.title = 'Tiêu đề không đúng định dạng'
  }
  return errors;
}


export default validate;
