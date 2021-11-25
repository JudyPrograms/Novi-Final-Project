import React from 'react';
import styles from "./Form.module.css";

function Form({
                  className,
                  handleFormSubmit,
                  handleSubmit,
                  errors,
                  register,
                  buttonText,
                  fields,
                  children,
              }) {

    return (
        <form onSubmit={handleSubmit(handleFormSubmit)}>

            {fields.map((item) => {
                return(
                    <>
                        <label className={className} htmlFor={item.name}>{item.name.toUpperCase()}:
                            <input
                                type={item.type}
                                id={item.name}
                                {...register(item.name,
                                    {required: item.name + " required"})}
                                placeholder={item.name}
                            />
                            {errors[item.name] && <span className="error-text">{errors[item.name].message}</span>}
                        </label>
                    </>
                )
            })}

            {children}

            <button
                type="submit"
                className={styles["form-button"]}>
                {buttonText}
            </button>

        </form>
    );
}

export default Form;