/*import { useEffect } from "react";



const handleChangeInput = (name, value) => {
    setValues({ ...values, [name]: value });
  };


  const handleBlur = (name) => {
    setTouched((touched) => ({
      ...touched,
      [name]: true,
    }));
  };


function useForm(initialValue){
    const [touched, setTouched] = useState({});
      const [values, setValues] = useState(initialValue);
      const [errors, setErrors] = useState({
        email: "",
        password: "",
      });

      const getTextInputProps = (name)=>{
        const value =values[name];
        const onChange= (event)=> handleChangeInput(name,event.target.value);
        const onBlur = () => handleBlur(name);

        return{value,onChange,onBlur};
      }

      useEffect(()=>{
        const newErrors = validate(values);
        console.log(newErrors);
        setErrors(newErrors);
        
      },[validate,values])

      return {values,errors,touched,getTextInputProps}
}
export default useForm
*/