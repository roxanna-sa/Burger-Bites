const Input = ({ inputType = 'text', inputId, inputText, value, placeHolderText, divClass = 'form-group', setState = null }) => {
  return (
    <>
      <div className={divClass}>
        <label htmlFor={inputId} className='form-label w-100 mb-0'>{inputText}</label>
        <input id={inputId} name={inputId} value={value} placeholder={placeHolderText} type={inputType} className='w-100 form-control' onChange={setState}></input>
      </div>
    </>
  );
}

export default Input;