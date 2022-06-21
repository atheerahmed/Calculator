 const Inputs = ({number1,number2,onChange1, onChange2}) => {
  return (
<div className="mb-3  p-1 Inputs ">

<input onChange={onChange1}
type="text" 
className="form-control m-2" 
placeholder="0"
defaultValue={number1}/>

<input onChange={onChange2}
type="text" 
className="form-control m-2" 
placeholder="0"
defaultValue={number2}/>
      
</div>

  )
};
export default Inputs;
