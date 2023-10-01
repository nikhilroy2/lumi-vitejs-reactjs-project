import React from 'react';

export function FormInputField(props) {
    const { isLabelActive, HelperIcon, handleFocus, handleBlur, groupClass, labelName, inputType, inputClass } = props;
    return (
        <div className={`form_group form_field_group ${groupClass}`}>
            <label htmlFor="" className={`form_label form_field_label ${isLabelActive ? 'label_active' : ''}`}>
                {labelName}
            </label>
            <input autoComplete='off' onFocus={handleFocus} onBlur={handleBlur} type={inputType} className={`bg-lu-white-3 form_field_input w-full pb-3 px-4  h-16 pr-12 pt-10 text-lu-dark-5 outline-none ${inputClass}`} />
            <div className="form_field_helper absolute right-0">
                <img src={HelperIcon} alt="" />
            </div>
        </div>
    );
}

