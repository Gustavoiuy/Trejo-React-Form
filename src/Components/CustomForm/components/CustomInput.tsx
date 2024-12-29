import { Control, Controller, FieldError } from "react-hook-form";

interface Props{
    name: string;
    control: Control<any>;
    label : string;
    type? : string;
    error? : FieldError;

}

const InputForm = ({name, control, label, type = 'text', error}: Props) => {
    return (
        <div>
            <label htmlFor={name}>{label}</label>
            <Controller 
            name={name}
            control={control}
            render={({field}) => 

                    <input id ={name} type={type} {...field }className={`from-control ${error ? "is-invalid": ""}`}/>

            }
            />

    {error && <p className="error">{error.message}</p>}
        </div> 
    )
}

export default InputForm